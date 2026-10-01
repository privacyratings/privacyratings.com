'use strict';

// Checks that every external link in the data still loads: evidence, websites, sources and the
// sources of jurisdiction notes, plus links in Markdown text.
//
// Each URL is requested once (HEAD, then GET when HEAD fails, since some sites reject HEAD),
// with redirects followed by hand and every hop checked with assertPublicUrl. Results:
//
//   ok             2xx on the same host
//   redirected     2xx after a redirect to a different host (check the link still fits)
//   dead           404 or 410, or the host name does not exist (NXDOMAIN)
//   inconclusive   401, 403, 429, 5xx, other 4xx, timeouts, DNS SERVFAIL and network errors
//                  (many sites block bots, so these need a person to check)
//   tls            certificate or TLS errors
//   skipped        not a public http(s) URL
//
// Usage:
//   node scripts/check-evidence.js [--only <category>[/<entry>]] [--out report.json] [--strict]
//                                  [--concurrency 8] [--per-host 2] [--timeout 20000]
//
// Exits 1 only with --strict and at least one dead link.

const fs = require('node:fs');
const path = require('node:path');
const { ROOT, readYaml, loadCategories, loadEntries } = require('./lib');
const { assertPublicUrl } = require('./trackers');

const USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const MAX_REDIRECTS = 5;
// Parentheses are allowed when balanced, as in Wikipedia links, so a Markdown link's closing ")" is not included.
const URL_IN_TEXT = /https?:\/\/(?:[^\s<>"'`()[\]]|\([^\s<>"'`()]*\))+/g;

function parseArgs(argv) {
  const opts = { only: null, out: null, strict: false, concurrency: 8, perHost: 2, timeout: 20_000 };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = () => {
      if (i + 1 >= argv.length) throw new Error(`${a} needs a value`);
      return argv[++i];
    };
    if (a === '--only') opts.only = next();
    else if (a === '--out') opts.out = next();
    else if (a === '--strict') opts.strict = true;
    else if (a === '--concurrency') opts.concurrency = Math.max(1, Number(next()) || 8);
    else if (a === '--per-host') opts.perHost = Math.max(1, Number(next()) || 2);
    else if (a === '--timeout') opts.timeout = Math.max(1000, Number(next()) || 20_000);
    else if (a === '-h' || a === '--help') {
      console.log('Usage: node scripts/check-evidence.js [--only <category>[/<entry>]] [--out report.json] [--strict]');
      process.exit(0);
    } else throw new Error(`Unknown option: ${a}`);
  }
  return opts;
}

// ---------- collecting URLs ----------

function trimUrl(u) {
  // Trailing punctuation from prose is not part of the link.
  return u.replace(/[.,;:!?]+$/, '');
}

// Every http(s) URL found in any string value, with the path of the field it came from.
function collectFromValue(value, field, add) {
  if (typeof value === 'string') {
    // A field that is only a URL is taken whole.
    if (/^https?:\/\/\S+$/.test(value.trim())) return add(value.trim(), field);
    for (const m of value.matchAll(URL_IN_TEXT)) add(trimUrl(m[0]), field);
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => collectFromValue(v, `${field}[${i}]`, add));
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) collectFromValue(v, field ? `${field}.${k}` : k, add);
  }
}

function collect({ only }) {
  const found = new Map(); // fetch URL (no fragment) -> { url, uses }
  const add = (file) => (raw, field) => {
    let key;
    try {
      const u = new URL(raw);
      u.hash = '';
      key = u.toString();
    } catch {
      key = raw;
    }
    if (!found.has(key)) found.set(key, { url: key, uses: [] });
    const uses = found.get(key).uses;
    if (!uses.some((x) => x.file === file && x.field === field)) uses.push({ file, field, ...(raw !== key ? { link: raw } : {}) });
  };

  const categories = loadCategories();
  const [onlyCat, onlySlug] = only ? only.split('/') : [];
  if (onlyCat && !categories.some((c) => c.id === onlyCat)) throw new Error(`Unknown category: ${onlyCat}`);
  const entries = loadEntries(onlyCat ? categories.filter((c) => c.id === onlyCat) : categories)
    .filter((e) => !onlySlug || e.slug === onlySlug);
  if (only && !entries.length) throw new Error(`No entries match ${only}`);

  for (const e of entries) {
    const { slug, category, file, body, ...data } = e;
    collectFromValue(data, '', add(file));
    if (body) collectFromValue(body, 'body', add(file));
  }

  if (!only) {
    const files = ['categories.yml', 'topics.yml', 'jurisdictions.yml',
      ...fs.readdirSync(path.join(ROOT, 'criteria')).filter((f) => f.endsWith('.yml')).sort().map((f) => `criteria/${f}`)];
    for (const f of files) {
      const p = path.join(ROOT, f);
      if (fs.existsSync(p)) collectFromValue(readYaml(p), '', add(f));
    }
  }
  return [...found.values()];
}

// ---------- checking ----------

const TLS_CODES = /^(CERT_|UNABLE_TO_|DEPTH_ZERO|SELF_SIGNED|ERR_TLS|ERR_SSL|HOSTNAME_MISMATCH|ERR_CERT)/;
// NXDOMAIN means the name is gone. EAI_AGAIN (SERVFAIL or timeout) can be temporary.
const DNS_GONE = /\b(ENOTFOUND|EAI_NONAME|EAI_NODATA|ENODATA)\b/;

function errorInfo(err) {
  let e = err;
  while (e && e.cause && !e.code) e = e.cause;
  const code = (e && e.code) || (err && err.name) || '';
  return { code: String(code), message: String((e && e.message) || err) };
}

function hostKey(h) {
  return String(h).toLowerCase().replace(/^www\./, '');
}

function makeChecker({ timeout, fetchImpl = fetch, lookup }) {
  // DNS answers are cached so each host is resolved once; assertPublicUrl still checks every URL.
  const dnsLookup = lookup || require('node:dns').promises.lookup;
  const cache = new Map();
  const cachedLookup = (host, o) => {
    if (!cache.has(host)) cache.set(host, dnsLookup(host, o));
    return cache.get(host);
  };
  const checkUrl = (url) => assertPublicUrl(url, { lookup: cachedLookup });

  async function request(url, method) {
    const signal = AbortSignal.timeout(timeout);
    let current = url;
    const chain = [];
    // Cookies set during redirects are sent back, or some sites redirect in a loop.
    const cookies = new Map();
    for (let hop = 0; ; hop++) {
      await checkUrl(current);
      const res = await fetchImpl(current, {
        method,
        redirect: 'manual',
        signal,
        headers: {
          'user-agent': USER_AGENT,
          ...(cookies.size ? { cookie: [...cookies].map(([k, v]) => `${k}=${v}`).join('; ') } : {}),
          accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,application/pdf,*/*;q=0.8',
          'accept-language': 'en-US,en;q=0.9',
        },
      });
      res.body?.cancel().catch(() => {});
      const setCookies = typeof res.headers.getSetCookie === 'function' ? res.headers.getSetCookie() : [res.headers.get('set-cookie')].filter(Boolean);
      for (const c of setCookies) {
        const m = /^\s*([^=;\s]+)=([^;]*)/.exec(c);
        if (m) cookies.set(m[1], m[2]);
      }
      const location = res.status >= 300 && res.status < 400 && res.headers.get('location');
      if (!location) return { status: res.status, finalUrl: current, redirects: chain };
      if (hop >= MAX_REDIRECTS) return { status: res.status, finalUrl: current, redirects: chain, error: 'Too many redirects' };
      current = new URL(location, current).toString();
      chain.push(current);
    }
  }

  function classifyError(err) {
    const { code, message } = errorInfo(err);
    if (/does not resolve/.test(message) || /^E(NOTFOUND|AI_)/.test(code)) {
      return DNS_GONE.test(message) || DNS_GONE.test(code)
        ? { result: 'dead', reason: 'dns', error: message }
        : { result: 'inconclusive', reason: 'dns-temporary', error: message };
    }
    if (/^(Not a public|Unsupported URL scheme|URLs with credentials|Port \d+)/.test(message)) return { result: 'skipped', reason: 'not-public', error: message };
    if (TLS_CODES.test(code) || /certificate|SSL|TLS/i.test(message)) return { result: 'tls', reason: code || 'tls', error: message };
    if (code === 'TimeoutError' || code === 'AbortError' || /timeout|aborted/i.test(message)) return { result: 'inconclusive', reason: 'timeout', error: message };
    return { result: 'inconclusive', reason: code || 'network', error: message };
  }

  function classifyStatus(url, r) {
    const base = { status: r.status, finalUrl: r.finalUrl, ...(r.redirects.length ? { redirects: r.redirects } : {}) };
    if (r.error) return { result: 'inconclusive', reason: 'too-many-redirects', ...base };
    if (r.status >= 200 && r.status < 300) {
      const moved = hostKey(new URL(r.finalUrl).hostname) !== hostKey(new URL(url).hostname);
      return { result: moved ? 'redirected' : 'ok', ...base };
    }
    if (r.status === 404 || r.status === 410) return { result: 'dead', reason: String(r.status), ...base };
    return { result: 'inconclusive', reason: String(r.status), ...base };
  }

  return async function check(url) {
    let head;
    try {
      head = classifyStatus(url, await request(url, 'HEAD'));
      if (head.result === 'ok' || head.result === 'redirected') return { ...head, method: 'HEAD' };
    } catch (err) {
      head = classifyError(err);
      if (head.result === 'skipped' || /^dns/.test(head.reason)) return { ...head, method: 'HEAD' };
    }
    try {
      return { ...classifyStatus(url, await request(url, 'GET')), method: 'GET' };
    } catch (err) {
      return { ...classifyError(err), method: 'GET' };
    }
  };
}

// Runs tasks with a global limit and a per-host limit.
async function runPool(items, { concurrency, perHost }, worker, onDone) {
  const pending = [...items];
  const active = new Map();
  let running = 0;
  return new Promise((resolve) => {
    const pump = () => {
      if (!pending.length && !running) return resolve();
      while (running < concurrency) {
        const i = pending.findIndex((it) => (active.get(it.host) || 0) < perHost);
        if (i === -1) break;
        const [it] = pending.splice(i, 1);
        running++;
        active.set(it.host, (active.get(it.host) || 0) + 1);
        worker(it)
          .catch((err) => ({ result: 'inconclusive', reason: 'internal', error: String(err && err.message) }))
          .then((r) => {
            running--;
            active.set(it.host, active.get(it.host) - 1);
            onDone(it, r);
            pump();
          });
      }
    };
    pump();
  });
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const links = collect(opts);
  const items = links.map((l) => {
    let host = '';
    try {
      host = hostKey(new URL(l.url).hostname);
    } catch {}
    return { ...l, host };
  });

  console.log(`Checking ${items.length} unique URLs (${items.reduce((n, i) => n + i.uses.length, 0)} uses)...`);
  const check = makeChecker(opts);
  const results = [];
  let done = 0;
  const started = Date.now();
  await runPool(items, opts, async (it) => {
    try {
      new URL(it.url);
    } catch {
      return { result: 'skipped', reason: 'invalid-url' };
    }
    return check(it.url);
  }, (it, r) => {
    results.push({ url: it.url, ...r, uses: it.uses });
    done++;
    if (process.stderr.isTTY && done % 25 === 0) process.stderr.write(`\r${done}/${items.length}`);
    else if (!process.stderr.isTTY && done % 500 === 0) console.error(`${done}/${items.length}`);
  });
  if (process.stderr.isTTY) process.stderr.write('\r');

  const order = ['dead', 'tls', 'redirected', 'inconclusive', 'skipped', 'ok'];
  results.sort((a, b) => order.indexOf(a.result) - order.indexOf(b.result) || a.url.localeCompare(b.url));
  const counts = Object.fromEntries(order.map((k) => [k, results.filter((r) => r.result === k).length]));

  const report = {
    generated: new Date().toISOString(),
    only: opts.only || undefined,
    seconds: Math.round((Date.now() - started) / 1000),
    total: results.length,
    counts,
    results,
  };
  if (opts.out) {
    fs.mkdirSync(path.dirname(path.resolve(opts.out)), { recursive: true });
    fs.writeFileSync(opts.out, JSON.stringify(report, null, 2) + '\n');
  }

  console.log(`\n${results.length} URLs: ${order.map((k) => `${counts[k]} ${k}`).join(', ')}`);
  const where = (r) => r.uses.slice(0, 3).map((u) => `${u.file} (${u.field})`).join(', ') + (r.uses.length > 3 ? `, +${r.uses.length - 3} more` : '');
  const list = (title, kind, fmt) => {
    const rs = results.filter((r) => r.result === kind);
    if (!rs.length) return;
    console.log(`\n${title}:`);
    for (const r of rs) console.log(`  ${fmt(r)}\n      ${where(r)}`);
  };
  list('Dead (404, 410 or no DNS)', 'dead', (r) => `[${r.reason}] ${r.url}`);
  list('TLS errors', 'tls', (r) => `[${r.reason}] ${r.url}`);
  const temp = results.filter((r) => r.reason === 'dns-temporary');
  if (temp.length) {
    console.log('\nDNS lookup failed (SERVFAIL or timeout, may be temporary):');
    for (const r of temp) console.log(`  ${r.url}\n      ${where(r)}`);
  }
  const inc = results.filter((r) => r.result === 'inconclusive');
  if (inc.length) {
    const by = {};
    for (const r of inc) by[r.reason] = (by[r.reason] || 0) + 1;
    console.log(`\nInconclusive by reason: ${Object.entries(by).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}`).join(', ')}`);
  }
  if (counts.redirected) console.log(`${counts.redirected} links redirect to a different host${opts.out ? ` (see ${opts.out})` : ''}.`);

  if (opts.strict && counts.dead) process.exitCode = 1;
}

module.exports = { collect, makeChecker, runPool };

if (require.main === module) {
  main().catch((err) => {
    console.error(err.message);
    process.exit(2);
  });
}
