'use strict';

// Email standards tests for email providers.
//
// Protocols (what the server advertises before login):
//   IMAP  CAPABILITY over implicit TLS on 993 (RFC 9051, RFC 3501, RFC 8314), STARTTLS on 143 as a fallback
//   POP3  CAPA over implicit TLS on 995 (RFC 1939, RFC 2449, RFC 8314), STLS on 110 as a fallback
//   SMTP  EHLO on submission over implicit TLS on 465 (RFC 8314), STARTTLS on 587 as a fallback (RFC 6409)
//
// DNS (through DNS over HTTPS, with DNSSEC validation flags):
//   MX, SPF (RFC 7208), DMARC (RFC 7489), MTA-STS (RFC 8461), TLS-RPT (RFC 8460),
//   DNSSEC (RFC 4033), DANE TLSA on MX hosts (RFC 7672), BIMI, and RFC 6186 / RFC 8314 SRV records.

const net = require('node:net');
const tls = require('node:tls');
const { assertPublicHost, readLimited, publicLookup, guardedFetch } = require('./trackers');

const TIMEOUT = 15_000;
// A whole protocol session (connect, greeting, every command) must finish within this time, even
// when a server keeps sending a byte now and then to stay under the idle timeout.
const DEADLINE = 60_000;
// Greetings and capability lists are short. A server that sends more is cut off.
const MAX_REPLY = 64 * 1024;
// RFC 8461 policies are small text files.
const MAX_POLICY = 64 * 1024;

// ---------- DNS over HTTPS ----------

const RESOLVERS = ['https://cloudflare-dns.com/dns-query', 'https://dns.google/resolve'];

async function doh(name, type) {
  let last;
  for (const base of RESOLVERS) {
    try {
      const res = await fetch(`${base}?name=${encodeURIComponent(name)}&type=${type}&do=1`, {
        headers: { accept: 'application/dns-json' },
        signal: AbortSignal.timeout(TIMEOUT)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const j = await res.json();
      const answers = (j.Answer || []).filter((a) => a.name.replace(/\.$/, '').toLowerCase() === name.toLowerCase() || a.type !== 5);
      return { ad: Boolean(j.AD), status: j.Status, answers };
    } catch (err) {
      last = err;
    }
  }

  throw last;
}

const txt = (a) => a.data.replace(/^"|"$/g, '').replace(/"\s*"/g, '');

async function txtRecords(name) {
  const r = await doh(name, 'TXT');
  return r.answers.filter((a) => a.type === 16).map(txt);
}

async function srv(name) {
  const r = await doh(name, 'SRV');
  const rec = r.answers.find((a) => a.type === 33);
  if (!rec) return null;
  const [, , port, target] = rec.data.split(/\s+/);
  const host = target.replace(/\.$/, '');
  return host && host !== '.' ? { host, port: Number(port) } : null;
}

// The MTA-STS policy, fetched as RFC 8461 section 3.3 requires: HTTPS, no redirects, and a size limit.
async function mtaStsPolicy(domain, { lookup } = {}) {
  const host = await assertPublicHost(`mta-sts.${domain}`, lookup ? { lookup } : undefined);
  // guardedFetch never follows redirects and connects only to the public address it checked.
  const res = await guardedFetch(`https://${host}/.well-known/mta-sts.txt`, { signal: AbortSignal.timeout(TIMEOUT), lookup: lookup || undefined });
  if (res.status !== 200) {
    res.body?.cancel().catch(() => {});
    return null;
  }
  return readLimited(res, MAX_POLICY);
}

async function dnsChecks(domain) {
  const out = { domain };
  const mx = await doh(domain, 'MX');
  out.dnssec = mx.ad;
  out.mx = mx.answers
    .filter((a) => a.type === 15)
    .map((a) => a.data.split(/\s+/)[1].replace(/\.$/, ''))
    .filter(Boolean);

  const root = await txtRecords(domain);
  out.spf = root.some((t) => /^v=spf1\b/i.test(t));

  const dmarc = (await txtRecords(`_dmarc.${domain}`)).find((t) => /^v=DMARC1\b/i.test(t));
  out.dmarc = dmarc ? (dmarc.match(/\bp=(\w+)/i)?.[1] || 'none').toLowerCase() : null;

  out.tls_rpt = (await txtRecords(`_smtp._tls.${domain}`)).some((t) => /^v=TLSRPTv1\b/i.test(t));

  const sts = (await txtRecords(`_mta-sts.${domain}`)).some((t) => /^v=STSv1\b/i.test(t));
  out.mta_sts = null;
  if (sts) {
    try {
      const body = (await mtaStsPolicy(domain)) || '';
      out.mta_sts = (body.match(/^mode:\s*(\w+)/im)?.[1] || 'invalid').toLowerCase();
    } catch {
      out.mta_sts = 'unreachable';
    }
  }

  out.dane = null;
  if (out.mx.length) {
    const results = await Promise.all(
      out.mx.slice(0, 4).map(async (host) => {
        const r = await doh(`_25._tcp.${host}`, 'TLSA');
        return r.ad && r.answers.some((a) => a.type === 52);
      })
    );
    out.dane = results.every(Boolean) ? 'all' : results.some(Boolean) ? 'some' : 'none';
  }

  out.bimi = (await txtRecords(`default._bimi.${domain}`)).some((t) => /^v=BIMI1\b/i.test(t));

  out.srv = {};
  for (const [key, name] of [
    ['submissions', `_submissions._tcp.${domain}`],
    ['submission', `_submission._tcp.${domain}`],
    ['imaps', `_imaps._tcp.${domain}`],
    ['imap', `_imap._tcp.${domain}`],
    ['pop3s', `_pop3s._tcp.${domain}`]
  ]) {
    out.srv[key] = await srv(name).catch(() => null);
  }

  return out;
}

// ---------- line-based protocol client ----------

// Connect, wait for the greeting, then send each step's command and wait for its reply.
// A step with `upgrade: true` switches the connection to TLS after its reply (STARTTLS).
function session({ host, port, secure, greeting = /\r?\n/, steps }) {
  return new Promise((resolve) => {
    let sock;
    let buf = '';
    let idx = -1;
    let finished = false;
    const responses = [];
    const deadline = setTimeout(() => done({ ok: false, error: 'timeout' }), DEADLINE);
    const done = (r) => {
      if (finished) return;
      finished = true;
      clearTimeout(deadline);
      const isTls = sock instanceof tls.TLSSocket;
      try {
        sock.destroy();
      } catch {}

      resolve({ ...r, responses, tls: isTls });
    };

    const onData = (d) => {
      buf += d;
      if (buf.length > MAX_REPLY) return done({ ok: false, error: 'reply too long' });
      check();
    };

    const attach = (s) => {
      s.setEncoding('utf8');
      s.setTimeout(TIMEOUT, () => done({ ok: false, error: 'timeout' }));
      s.on('data', onData);
      s.on('error', (e) => done({ ok: false, error: e.code || e.message }));
    };

    const next = () => {
      idx++;
      buf = '';
      if (idx >= steps.length) return done({ ok: true });
      sock.write(`${steps[idx].cmd}\r\n`);
    };

    const check = () => {
      const re = idx === -1 ? greeting : steps[idx].until;
      if (!re.test(buf)) return;
      if (idx === -1) responses.greeting = buf;
      else responses.push(buf);
      if (idx >= 0 && steps[idx].upgrade) {
        sock.removeListener('data', onData);
        sock.setTimeout(0);
        const upgraded = tls.connect({ socket: sock, servername: host }, () => {
          sock = upgraded;
          attach(upgraded);
          next();
        });
        upgraded.on('error', (e) => done({ ok: false, error: e.code || e.message }));
        return;
      }

      next();
    };

    // Names resolve through publicLookup, so a DNS answer that changed since the host was checked
    // (DNS rebinding) cannot point the connection at a private address. IP literals skip DNS; the
    // callers only pass checked names (tests use 127.0.0.1).
    const lookup = publicLookup();
    sock = secure ? tls.connect({ host, port, servername: host, lookup }) : net.connect({ host, port, lookup });
    attach(sock);
  });
}

const upper = (list) => [...new Set(list.map((c) => c.toUpperCase()))];

// ---------- IMAP ----------

const imapCaps = (text) => {
  const line = (text || '').split(/\r?\n/).find((l) => /^\* CAPABILITY /i.test(l));
  const inline = (text || '').match(/\[CAPABILITY ([^\]]+)\]/i);
  const raw = line ? line.replace(/^\* CAPABILITY /i, '') : inline ? inline[1] : '';
  return upper(raw.trim().split(/\s+/).filter(Boolean));
};

const IMAP_TAG = (t) => new RegExp(`(^|\\n)${t} (OK|NO|BAD)[^\\n]*\\n`, 'i');

async function imap(host, ports = { implicit: 993, starttls: 143 }) {
  const r = await session({
    host,
    port: ports.implicit,
    secure: true,
    steps: [
      { cmd: 'a1 CAPABILITY', until: IMAP_TAG('a1') },
      { cmd: 'a2 LOGOUT', until: /\n/ }
    ]
  });
  if (r.ok || r.responses.length) {
    const caps = imapCaps(r.responses[0]);
    return { host, port: ports.implicit, tls: 'implicit', capabilities: caps.length ? caps : imapCaps(r.responses.greeting) };
  }

  const p = await session({
    host,
    port: ports.starttls,
    secure: false,
    steps: [
      { cmd: 'a1 STARTTLS', until: IMAP_TAG('a1'), upgrade: true },
      { cmd: 'a2 CAPABILITY', until: IMAP_TAG('a2') }
    ]
  });
  if (p.tls && p.responses[1]) return { host, port: ports.starttls, tls: 'starttls', capabilities: imapCaps(p.responses[1]) };
  return { host, error: r.error || p.error };
}

// ---------- POP3 ----------

const pop3Caps = (text) => {
  const m = (text || '').match(/\+OK[^\n]*\n([\s\S]*?)(\r?\n)?\.\r?\n/);
  return m ? upper(m[1].split(/\r?\n/).map((l) => l.trim().split(/\s+/)[0]).filter(Boolean)) : [];
};

const CAPA_DONE = /(\n\.\r?\n|^-ERR[^\n]*\n)/m;

async function pop3(host, ports = { implicit: 995, starttls: 110 }) {
  const r = await session({
    host,
    port: ports.implicit,
    secure: true,
    greeting: /^(\+OK|-ERR)[^\n]*\n/m,
    steps: [
      { cmd: 'CAPA', until: CAPA_DONE },
      { cmd: 'QUIT', until: /\n/ }
    ]
  });
  if (r.ok || r.responses.length) {
    return { host, port: ports.implicit, tls: 'implicit', capa: /^\+OK/.test(r.responses[0] || ''), capabilities: pop3Caps(r.responses[0]) };
  }

  const p = await session({
    host,
    port: ports.starttls,
    secure: false,
    greeting: /^(\+OK|-ERR)[^\n]*\n/m,
    steps: [
      { cmd: 'STLS', until: /^(\+OK|-ERR)[^\n]*\n/m, upgrade: true },
      { cmd: 'CAPA', until: CAPA_DONE }
    ]
  });
  if (p.tls && p.responses[1]) return { host, port: ports.starttls, tls: 'starttls', capa: /^\+OK/.test(p.responses[1]), capabilities: pop3Caps(p.responses[1]) };
  return { host, error: r.error || p.error };
}

// ---------- SMTP submission ----------

const ehloExt = (text) =>
  upper(
    (text || '')
      .split(/\r?\n/)
      .filter((l) => /^250[- ]/.test(l))
      .slice(1)
      .map((l) => l.slice(4).trim().split(/[\s=]/)[0])
  );

const REPLY_DONE = (code) => new RegExp(`(^|\\n)${code} [^\\n]*\\n`);
const ANY_DONE = /(^|\n)\d{3} [^\n]*\n/;

async function smtp(host, ports = { implicit: 465, starttls: 587 }) {
  const r = await session({
    host,
    port: ports.implicit,
    secure: true,
    greeting: REPLY_DONE(220),
    steps: [
      { cmd: 'EHLO privacyratings.com', until: ANY_DONE },
      { cmd: 'QUIT', until: /\n/ }
    ]
  });
  if (r.ok || r.responses.length) return { host, port: ports.implicit, tls: 'implicit', extensions: ehloExt(r.responses[0]) };

  const p = await session({
    host,
    port: ports.starttls,
    secure: false,
    greeting: REPLY_DONE(220),
    steps: [
      { cmd: 'EHLO privacyratings.com', until: ANY_DONE },
      { cmd: 'STARTTLS', until: ANY_DONE, upgrade: true },
      { cmd: 'EHLO privacyratings.com', until: ANY_DONE }
    ]
  });
  if (p.tls && p.responses[2]) return { host, port: ports.starttls, tls: 'starttls', extensions: ehloExt(p.responses[2]) };
  return { host, error: r.error || p.error };
}

// ---------- entry point ----------

// hosts: { imap, pop3, smtp } from the rating file. A value of false means the provider does not offer it.
// `lookup` and `checkDns` replace DNS lookups in tests.
async function mailTests(domain, hosts = {}, { dnsOnly = false, lookup = null, checkDns = null } = {}) {
  const dns = await (checkDns || dnsChecks)(domain);
  // Hosts from SRV records come from whoever controls the domain's DNS, so they must be public
  // names: never localhost, an IP literal or a private address.
  const pick = async (field, ...srvKeys) => {
    if (hosts[field] === false) return false;
    // Hosts from rating files are checked the same way as hosts from SRV records.
    if (hosts[field]) {
      try {
        return await assertPublicHost(hosts[field], lookup ? { lookup } : undefined);
      } catch (e) {
        return { rejected: hosts[field], error: `Host from the rating file not used: ${e.message}` };
      }
    }
    for (const k of srvKeys) {
      const host = dns.srv?.[k]?.host;
      if (!host) continue;
      try {
        return await assertPublicHost(host, lookup ? { lookup } : undefined);
      } catch (e) {
        return { rejected: host, error: `SRV record not used: ${e.message}` };
      }
    }
    return null;
  };

  const targets = { imap: await pick('imap', 'imaps', 'imap'), pop3: await pick('pop3', 'pop3s'), smtp: await pick('smtp', 'submissions', 'submission') };
  const result = { dns, tested_at: new Date().toISOString() };
  if (dnsOnly) return result;
  for (const [proto, fn] of [['imap', imap], ['pop3', pop3], ['smtp', smtp]]) {
    const host = targets[proto];
    if (host === false) result[proto] = { offered: false };
    else if (host && host.rejected) result[proto] = { host: host.rejected, error: host.error };
    else if (host) result[proto] = await fn(host).catch((e) => ({ host, error: e.message }));
    else result[proto] = { host: null, error: 'No server found (set a host in the rating file or publish RFC 6186 SRV records)' };
  }

  return result;
}

module.exports = { mailTests, dnsChecks, mtaStsPolicy, session, imap, pop3, smtp, imapCaps, pop3Caps, ehloExt, MAX_REPLY };
