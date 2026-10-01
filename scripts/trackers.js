'use strict';

// Finds third-party trackers on a website's home page.
//
// The page is fetched without running JavaScript. Every script, iframe, image,
// stylesheet and preconnect host is compared with a list of known tracking and
// analytics hosts, and inline code is checked for common tracker snippets.
// It finds trackers loaded by the page itself. It cannot see trackers added
// later by scripts, so a clean result is evidence, not proof.
//
// Usage: node scripts/trackers.js https://example.com

// host suffix -> name
const HOSTS = {
  'google-analytics.com': 'Google Analytics',
  'googletagmanager.com': 'Google Tag Manager',
  'doubleclick.net': 'Google DoubleClick',
  'googleadservices.com': 'Google Ads',
  'googlesyndication.com': 'Google AdSense',
  'adservice.google.com': 'Google Ads',
  'connect.facebook.net': 'Facebook SDK',
  'facebook.com/tr': 'Meta Pixel',
  'hotjar.com': 'Hotjar',
  'hotjar.io': 'Hotjar',
  'segment.com': 'Segment',
  'segment.io': 'Segment',
  'cdn.segment.com': 'Segment',
  'mixpanel.com': 'Mixpanel',
  'mxpnl.com': 'Mixpanel',
  'amplitude.com': 'Amplitude',
  'heap.io': 'Heap',
  'heapanalytics.com': 'Heap',
  'fullstory.com': 'FullStory',
  'clarity.ms': 'Microsoft Clarity',
  'bat.bing.com': 'Microsoft Ads',
  'ads.linkedin.com': 'LinkedIn Insight',
  'snap.licdn.com': 'LinkedIn Insight',
  'px.ads.linkedin.com': 'LinkedIn Insight',
  'analytics.twitter.com': 'X (Twitter) Pixel',
  'static.ads-twitter.com': 'X (Twitter) Pixel',
  'analytics.tiktok.com': 'TikTok Pixel',
  'sc-static.net': 'Snap Pixel',
  'redditstatic.com/ads': 'Reddit Pixel',
  'alb.reddit.com': 'Reddit Pixel',
  'quantserve.com': 'Quantcast',
  'scorecardresearch.com': 'Comscore',
  'hs-scripts.com': 'HubSpot',
  'hs-analytics.net': 'HubSpot',
  'hsforms.net': 'HubSpot',
  'hubspot.com': 'HubSpot',
  'intercom.io': 'Intercom',
  'intercomcdn.com': 'Intercom',
  'widget.intercom.io': 'Intercom',
  'drift.com': 'Drift',
  'driftt.com': 'Drift',
  'zdassets.com': 'Zendesk',
  'crisp.chat': 'Crisp',
  'tawk.to': 'Tawk.to',
  'livechatinc.com': 'LiveChat',
  'optimizely.com': 'Optimizely',
  'vwo.com': 'VWO',
  'visualwebsiteoptimizer.com': 'VWO',
  'mouseflow.com': 'Mouseflow',
  'crazyegg.com': 'Crazy Egg',
  'luckyorange.com': 'Lucky Orange',
  'newrelic.com': 'New Relic',
  'nr-data.net': 'New Relic',
  'sentry-cdn.com': 'Sentry',
  'browser.sentry-cdn.com': 'Sentry',
  'bugsnag.com': 'Bugsnag',
  'datadoghq-browser-agent.com': 'Datadog RUM',
  'cookielaw.org': 'OneTrust',
  'onetrust.com': 'OneTrust',
  'cookiebot.com': 'Cookiebot',
  'trustarc.com': 'TrustArc',
  'criteo.com': 'Criteo',
  'criteo.net': 'Criteo',
  'taboola.com': 'Taboola',
  'outbrain.com': 'Outbrain',
  'adroll.com': 'AdRoll',
  'yandex.ru/metrika': 'Yandex Metrica',
  'mc.yandex.ru': 'Yandex Metrica',
  'yastatic.net': 'Yandex',
  'cdn.matomo.cloud': 'Matomo Cloud',
  'matomo.cloud': 'Matomo Cloud',
  'plausible.io': 'Plausible',
  'usefathom.com': 'Fathom',
  'cdn.usefathom.com': 'Fathom',
  'simpleanalyticscdn.com': 'Simple Analytics',
  'posthog.com': 'PostHog',
  'i.posthog.com': 'PostHog',
  'cloudflareinsights.com': 'Cloudflare Web Analytics',
  'static.cloudflareinsights.com': 'Cloudflare Web Analytics',
  'stats.wp.com': 'WordPress.com Stats',
  'pixel.wp.com': 'WordPress.com Stats',
  'addthis.com': 'AddThis',
  'sharethis.com': 'ShareThis',
  'impact.com': 'Impact',
  'impactradius-event.com': 'Impact',
  'awin1.com': 'Awin',
  'partnerstack.com': 'PartnerStack',
  'rewardful.com': 'Rewardful',
  'getrewardful.com': 'Rewardful',
  'capterra.com/track': 'Capterra',
  'g2crowd.com': 'G2',
  'trustpilot.com': 'Trustpilot',
  'recaptcha.net': 'Google reCAPTCHA',
  'google.com/recaptcha': 'Google reCAPTCHA',
  'gstatic.com/recaptcha': 'Google reCAPTCHA',
  'youtube.com/embed': 'YouTube embed',
  'fonts.googleapis.com': 'Google Fonts',
  'fonts.gstatic.com': 'Google Fonts',
};

// Cookieless, privacy-focused analytics. Reported, and they cap no_trackers at "partial".
const ANALYTICS = new Set(['Plausible', 'Fathom', 'Simple Analytics', 'Matomo Cloud', 'Cloudflare Web Analytics']);

// Fonts, embeds, error reporting, support widgets and consent tools. Reported, not scored.
const SOFT = new Set([
  ...ANALYTICS,
  'Google Fonts',
  'Google reCAPTCHA',
  'YouTube embed',
  'Sentry',
  'Bugsnag',
  'Zendesk',
  'Crisp',
  'Intercom',
  'OneTrust',
  'Cookiebot',
  'TrustArc',
  'Trustpilot',
]);

// Inline snippets that identify a tracker even when it is loaded indirectly.
const SNIPPETS = [
  [/\bgtag\(\s*['"]config['"]\s*,\s*['"](G|UA|AW)-/, 'Google Analytics'],
  [/\bfbq\(\s*['"]init['"]/, 'Meta Pixel'],
  [/\b_hjSettings\b/, 'Hotjar'],
  [/\bGTM-[A-Z0-9]{4,}/, 'Google Tag Manager'],
  [/\bclarity\(\s*['"]set['"]|www\.clarity\.ms\/tag/, 'Microsoft Clarity'],
  [/\bym\(\s*\d+\s*,\s*['"]init['"]/, 'Yandex Metrica'],
  [/\bttq\.load\(/, 'TikTok Pixel'],
  [/\bmixpanel\.init\(/, 'Mixpanel'],
  [/\banalytics\.load\(\s*['"][A-Za-z0-9]{20,}/, 'Segment'],
  [/\bposthog\.init\(/, 'PostHog'],
];

const URL_ATTR = /\b(?:src|href|data-src|action)\s*=\s*["']([^"']+)["']/gi;

function hostOf(url, base) {
  try {
    const u = new URL(url, base);
    return u.protocol.startsWith('http') ? u.host.toLowerCase() + u.pathname : null;
  } catch {
    return null;
  }
}

function sameSite(a, b) {
  const root = (h) => h.split('/')[0].split('.').slice(-2).join('.');
  return root(a) === root(b);
}

// Removes HTML comments, which browsers never load or run. Text inside <script> and <style>
// is left alone, since "<!--" there is not a comment. An unterminated comment runs to the end
// of the document, as in a browser. Uses indexOf and simple literal patterns, so it runs in
// linear time on any input.
const OPEN = /<!--|<(script|style)(?=[\s>/])/gi;
function stripComments(html) {
  let out = '';
  let pos = 0;
  OPEN.lastIndex = 0;
  let m;
  while ((m = OPEN.exec(html))) {
    if (m[1]) {
      // Raw text element: copy it through to its closing tag.
      const close = new RegExp('</' + m[1] + '[\\s>/]', 'gi');
      close.lastIndex = OPEN.lastIndex;
      const c = close.exec(html);
      const end = c ? c.index + c[0].length : html.length;
      out += html.slice(pos, end);
      pos = end;
      OPEN.lastIndex = end;
      continue;
    }
    out += html.slice(pos, m.index);
    const start = m.index + 4;
    let end;
    if (html.startsWith('>', start)) end = start + 1; // <!-->
    else if (html.startsWith('->', start)) end = start + 2; // <!--->
    else {
      const c = html.indexOf('-->', start);
      end = c === -1 ? html.length : c + 3;
    }
    out += ' ';
    pos = end;
    OPEN.lastIndex = end;
  }
  return out + html.slice(pos);
}

// Returns the trackers found in an HTML string.
function findTrackers(html, pageUrl) {
  html = stripComments(String(html));
  const pageHost = new URL(pageUrl).host.toLowerCase();
  const found = new Map();
  const add = (name, where) => {
    if (!found.has(name)) found.set(name, { name, soft: SOFT.has(name), analytics: ANALYTICS.has(name), seen: where });
  };

  for (const m of html.matchAll(URL_ATTR)) {
    const hp = hostOf(m[1], pageUrl);
    if (!hp || sameSite(hp, pageHost)) continue;
    for (const [needle, name] of Object.entries(HOSTS)) {
      const [nh, ...np] = needle.split('/');
      const [h, ...p] = hp.split('/');
      if ((h === nh || h.endsWith('.' + nh)) && (!np.length || p.join('/').startsWith(np.join('/')))) {
        add(name, h);
        break;
      }
    }
  }

  for (const [rx, name] of SNIPPETS) if (rx.test(html)) add(name, 'inline code');
  return [...found.values()].sort((a, b) => a.name.localeCompare(b.name));
}

// ---------- outbound request guard ----------
//
// Rating files are written by contributors, so every host the scanner connects to must be a
// public DNS name that resolves only to public addresses. This keeps the scanner away from
// loopback, private networks and cloud metadata endpoints (like 169.254.169.254) on CI runners.

const dns = require('node:dns').promises;
const net = require('node:net');

const BLOCKED = new net.BlockList();
for (const [addr, prefix] of [
  ['0.0.0.0', 8], ['10.0.0.0', 8], ['100.64.0.0', 10], ['127.0.0.0', 8], ['169.254.0.0', 16],
  ['172.16.0.0', 12], ['192.0.0.0', 24], ['192.0.2.0', 24], ['192.88.99.0', 24], ['192.168.0.0', 16],
  ['198.18.0.0', 15], ['198.51.100.0', 24], ['203.0.113.0', 24], ['224.0.0.0', 4], ['240.0.0.0', 4]
]) BLOCKED.addSubnet(addr, prefix, 'ipv4');
for (const [addr, prefix] of [
  ['::', 128], ['::1', 128], ['64:ff9b:1::', 48], ['100::', 64], ['2001::', 23], ['2001:db8::', 32],
  ['2002::', 16], ['3fff::', 20], ['fc00::', 7], ['fe80::', 10], ['fec0::', 10], ['ff00::', 8]
]) BLOCKED.addSubnet(addr, prefix, 'ipv6');

const HOSTNAME = /^(?=.{1,253}$)([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z][a-z0-9-]*[a-z0-9]$/i;
const LOCAL_SUFFIX = /\.(localhost|local|localdomain|internal|intranet|lan|home|corp|private|home\.arpa|arpa|test|example|invalid|onion)$/i;

// The eight 16-bit groups of an IPv6 address (zone id dropped, a dotted IPv4 tail converted).
function ipv6Groups(ip) {
  let s = ip.replace(/%.*$/, '');
  const tail = s.match(/^(.*:)(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  if (tail) {
    const [a, b, c, d] = tail.slice(2).map(Number);
    s = `${tail[1]}${((a << 8) | b).toString(16)}:${((c << 8) | d).toString(16)}`;
  }
  const [head, rest] = s.split('::');
  const h = head ? head.split(':') : [];
  const t = rest === undefined ? null : rest ? rest.split(':') : [];
  const groups = t === null ? h : [...h, ...Array(8 - h.length - t.length).fill('0'), ...t];
  return groups.map((g) => parseInt(g, 16));
}

const v4 = (hi, lo) => [hi >>> 8, hi & 255, lo >>> 8, lo & 255].join('.');

function isPublicIp(ip) {
  if (typeof ip !== 'string') return false;
  const v = net.isIP(ip);
  if (!v) return false;
  if (v === 4) return !BLOCKED.check(ip, 'ipv4');
  const g = ipv6Groups(ip);
  if (g.length !== 8 || g.some((x) => !(x >= 0 && x <= 0xffff))) return false;
  const zero = (from, to) => g.slice(from, to).every((x) => x === 0);
  // Addresses that carry an IPv4 address are judged by it: IPv4-mapped (::ffff:a.b.c.d),
  // IPv4-translated (::ffff:0:a.b.c.d) and NAT64 (64:ff9b::a.b.c.d).
  if (zero(0, 5) && g[5] === 0xffff) return isPublicIp(v4(g[6], g[7]));
  if (zero(0, 4) && g[4] === 0xffff && g[5] === 0) return isPublicIp(v4(g[6], g[7]));
  if (g[0] === 0x64 && g[1] === 0xff9b && zero(2, 6)) return isPublicIp(v4(g[6], g[7]));
  // Only global unicast (2000::/3) is public; that excludes ::, ::1, IPv4-compatible (::a.b.c.d),
  // unique local, link-local and multicast addresses.
  if ((g[0] & 0xe000) !== 0x2000) return false;
  return !BLOCKED.check(g.map((x) => x.toString(16)).join(':'), 'ipv6');
}

// Throws unless `host` is a public DNS name (not an IP literal) whose addresses are all public.
async function assertPublicHost(host, { lookup = dns.lookup } = {}) {
  const h = String(host || '').toLowerCase().replace(/\.$/, '');
  if (!HOSTNAME.test(h) || net.isIP(h) || LOCAL_SUFFIX.test(h)) throw new Error(`Not a public hostname: ${JSON.stringify(String(host))}`);
  let addrs;
  try {
    addrs = await lookup(h, { all: true, verbatim: true });
  } catch (err) {
    throw new Error(`${h} does not resolve (${err.code || err.message})`);
  }
  if (!addrs.length) throw new Error(`${h} does not resolve`);
  const bad = addrs.find((a) => !isPublicIp(a.address));
  if (bad) throw new Error(`${h} resolves to a non-public address (${bad.address})`);
  return h;
}

// Only http(s) URLs on default ports, without credentials, to public hosts.
async function assertPublicUrl(raw, opts) {
  const u = new URL(raw);
  if (!['https:', 'http:'].includes(u.protocol)) throw new Error(`Unsupported URL scheme: ${u.protocol}`);
  if (u.username || u.password) throw new Error('URLs with credentials are not fetched');
  if (u.port && !['80', '443'].includes(u.port)) throw new Error(`Port ${u.port} is not fetched`);
  // A public IP address is fine as a website (like https://1.1.1.1); anything else must be a public name.
  const ip = u.hostname.replace(/^\[|\]$/g, '');
  if (net.isIP(ip)) {
    if (!isPublicIp(ip)) throw new Error(`Not a public address: ${ip}`);
  } else {
    await assertPublicHost(u.hostname, opts);
  }
  return u;
}

// A `lookup` for net, tls, http and https that only hands out public addresses. Checking a name
// before connecting is not enough on its own: the connection resolves it again, and a DNS server
// that answers differently the second time (DNS rebinding) could send it to a private address.
// With this lookup the address that is checked is the address that is used. `resolve` is
// dns.promises.lookup or a stand-in for tests.
function publicLookup(resolve = dns.lookup) {
  return (hostname, options, callback) => {
    if (typeof options === 'function') [callback, options] = [options, {}];
    const opts = typeof options === 'number' ? { family: options } : options || {};
    Promise.resolve()
      .then(() => resolve(hostname, { all: true, verbatim: true, family: opts.family || 0 }))
      .then((addrs) => {
        const bad = addrs.find((a) => !isPublicIp(a.address));
        if (bad || !addrs.length) {
          const err = new Error(bad ? `${hostname} resolves to a non-public address (${bad.address})` : `${hostname} does not resolve`);
          err.code = bad ? 'ENOTPUBLIC' : 'ENOTFOUND';
          throw err;
        }
        if (opts.all) callback(null, addrs);
        else callback(null, addrs[0].address, addrs[0].family);
      })
      .catch((err) => callback(err));
  };
}

// A web ReadableStream over a Node stream. Node 18's Readable.toWeb() throws an uncaught
// "Controller is already closed" when a body is cancelled and the socket closes afterwards
// (for example the body of a redirect), which would stop the whole scan.
function nodeToWeb(stream) {
  let finished = false;
  const finish = (fn) => {
    if (finished) return;
    finished = true;
    try {
      fn();
    } catch {}
  };
  return new ReadableStream({
    start(controller) {
      stream.on('data', (chunk) => {
        if (finished) return;
        controller.enqueue(new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength));
        if (controller.desiredSize <= 0) stream.pause();
      });
      stream.on('end', () => finish(() => controller.close()));
      stream.on('error', (err) => finish(() => controller.error(err)));
      stream.on('close', () => finish(() => controller.close()));
    },
    pull() {
      stream.resume();
    },
    cancel() {
      finished = true;
      stream.destroy();
    }
  });
}

// fetch() for URLs from contributor files: a GET over node:http(s) that connects only to public
// addresses (see publicLookup), never follows redirects and returns a standard Response.
// IP literals skip DNS, so callers check the URL with assertPublicUrl first.
function guardedFetch(url, { headers = {}, signal, lookup } = {}) {
  const http = require('node:http');
  const https = require('node:https');
  const zlib = require('node:zlib');
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const mod = u.protocol === 'https:' ? https : u.protocol === 'http:' ? http : null;
    if (!mod) return reject(new Error(`Unsupported URL scheme: ${u.protocol}`));
    const req = mod.request(u, { method: 'GET', headers: { 'accept-encoding': 'gzip, deflate, br', ...headers }, signal, lookup: publicLookup(lookup) }, (res) => {
      try {
        const h = new Headers();
        for (const [k, v] of Object.entries(res.headers)) for (const x of [].concat(v)) h.append(k, x);
        const enc = String(res.headers['content-encoding'] || '').trim().toLowerCase();
        const decoder = enc === 'gzip' || enc === 'x-gzip' ? zlib.createGunzip() : enc === 'deflate' ? zlib.createInflate() : enc === 'br' ? zlib.createBrotliDecompress() : null;
        const empty = [204, 205, 304].includes(res.statusCode);
        let body = null;
        if (empty) res.resume();
        else if (decoder) {
          res.on('error', (e) => decoder.destroy(e));
          body = nodeToWeb(res.pipe(decoder));
        } else body = nodeToWeb(res);
        resolve(new Response(body, { status: res.statusCode, statusText: res.statusMessage, headers: h }));
      } catch (err) {
        res.destroy();
        reject(err);
      }
    });
    req.on('error', reject);
    req.end();
  });
}

// Read at most `max` bytes of a response body as text; the rest is dropped.
async function readLimited(res, max) {
  if (!res.body) return '';
  const reader = res.body.getReader();
  const chunks = [];
  let size = 0;
  try {
    while (size < max) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      size += value.byteLength;
    }
  } finally {
    reader.cancel().catch(() => {});
  }
  return Buffer.concat(chunks.map((c) => Buffer.from(c))).subarray(0, max).toString('utf8');
}

const MAX_HTML = 3_000_000;
const MAX_REDIRECTS = 5;

async function scanTrackers(url, { fetchImpl = guardedFetch, lookup } = {}) {
  // Redirects are followed by hand, so every hop is checked before it is requested.
  const signal = AbortSignal.timeout(30_000);
  let current = url;
  let res;
  for (let hop = 0; ; hop++) {
    await assertPublicUrl(current, lookup ? { lookup } : undefined);
    res = await fetchImpl(current, {
      redirect: 'manual',
      headers: {
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36 privacyratings-scanner',
        accept: 'text/html,application/xhtml+xml',
        'accept-language': 'en',
      },
      signal,
      lookup,
    });
    const location = res.status >= 300 && res.status < 400 && res.headers.get('location');
    if (!location) break;
    res.body?.cancel().catch(() => {});
    if (hop >= MAX_REDIRECTS) throw new Error('Too many redirects');
    current = new URL(location, current).toString();
  }
  if (!res.ok) {
    res.body?.cancel().catch(() => {});
    throw new Error(`HTTP ${res.status}`);
  }
  const html = await readLimited(res, MAX_HTML);
  const trackers = findTrackers(html, current);
  return {
    url: current,
    trackers,
    hard: trackers.filter((t) => !t.soft).map((t) => t.name),
  };
}

module.exports = { findTrackers, stripComments, scanTrackers, HOSTS, SOFT, ANALYTICS, isPublicIp, assertPublicHost, assertPublicUrl, readLimited, publicLookup, guardedFetch };

if (require.main === module) {
  const url = process.argv[2];
  if (!url) {
    console.error('Usage: node scripts/trackers.js https://example.com');
    process.exit(1);
  }

  scanTrackers(url)
    .then((r) => console.log(JSON.stringify(r, null, 2)))
    .catch((e) => {
      console.error(e.message);
      process.exit(1);
    });
}
