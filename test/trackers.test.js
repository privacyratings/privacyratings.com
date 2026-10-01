'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { findTrackers } = require('../scripts/trackers');

const names = (html, url = 'https://example.com/') => findTrackers(html, url).map((t) => t.name);

test('finds third-party trackers by script host', () => {
  const html = '<script async src="https://www.googletagmanager.com/gtag/js?id=G-X"></script><img src="https://www.facebook.com/tr?id=1">';
  assert.deepStrictEqual(names(html), ['Google Tag Manager', 'Meta Pixel']);
});

test('finds trackers from inline snippets', () => {
  assert.deepStrictEqual(names('<script>fbq("init", "123");</script>'), ['Meta Pixel']);
  assert.deepStrictEqual(names("<script>gtag('config', 'G-ABC123');</script>"), ['Google Analytics']);
});

test('ignores the site itself and unrelated hosts', () => {
  assert.deepStrictEqual(names('<script src="/app.js"></script><script src="https://cdn.example.com/x.js"></script><a href="https://github.com/x">x</a>'), []);
});

test('marks cookieless analytics and embeds as not scored', () => {
  const found = findTrackers('<script src="https://plausible.io/js/script.js"></script><link href="https://fonts.googleapis.com/css2">', 'https://example.org/');
  const byName = Object.fromEntries(found.map((t) => [t.name, t]));
  assert.strictEqual(byName.Plausible.soft, true);
  assert.strictEqual(byName.Plausible.analytics, true);
  assert.strictEqual(byName['Google Fonts'].soft, true);
  assert.strictEqual(byName['Google Fonts'].analytics, false);
});

test('ignores trackers inside HTML comments', () => {
  assert.deepStrictEqual(names('<!-- <script src="https://connect.facebook.net/en_US/sdk.js"></script> --><p>x</p>'), []);
  assert.deepStrictEqual(names('<!-- fbq("init", "1") -->'), []);
  // Code after a comment still counts.
  assert.deepStrictEqual(names('<!-- old --><script src="https://connect.facebook.net/sdk.js"></script>'), ['Facebook SDK']);
  // Empty comments close at once.
  assert.deepStrictEqual(names('<!--><script src="https://connect.facebook.net/sdk.js"></script>'), ['Facebook SDK']);
  // An unterminated comment runs to the end of the page, as in a browser.
  assert.deepStrictEqual(names('<p>x</p><!-- <script src="https://connect.facebook.net/sdk.js"></script>'), []);
  // "<!--" inside a script is not a comment, and the code still runs.
  assert.deepStrictEqual(names('<script><!--\nfbq("init", "1");\n//--></script>'), ['Meta Pixel']);
});

test('comment stripping stays fast on hostile input', () => {
  const { stripComments } = require('../scripts/trackers');
  const start = Date.now();
  stripComments('<!--'.repeat(50000) + '<script>'.repeat(20000) + '-'.repeat(100000));
  assert.ok(Date.now() - start < 2000);
});

test('matches host paths only on the right path', () => {
  assert.deepStrictEqual(names('<a href="https://www.facebook.com/example">page</a>'), []);
});

// ---------- outbound request guard ----------

const http = require('node:http');
const zlib = require('node:zlib');
const { isPublicIp, assertPublicHost, assertPublicUrl, scanTrackers, guardedFetch, publicLookup, readLimited } = require('../scripts/trackers');

test('only public addresses count as public', () => {
  for (const ip of ['1.1.1.1', '8.8.8.8', '2606:4700:4700::1111', '2001:4860:4860::8888', '::ffff:8.8.8.8', '64:ff9b::808:808']) assert.ok(isPublicIp(ip), ip);
  for (const ip of [
    '127.0.0.1', '0.1.2.3', '10.1.2.3', '100.64.0.1', '169.254.169.254', '172.16.0.1', '192.0.0.8', '192.168.1.1', '198.18.0.1', '224.0.0.1', '240.0.0.1', '255.255.255.255',
    '::', '::1', 'fe80::1', 'fe80::1%eth0', 'fd00::1', 'ff02::1', '2001:db8::1', '3fff::1', '5f00::1',
    // IPv4 inside IPv6: mapped, compatible, translated, NAT64, 6to4 and Teredo.
    '::ffff:127.0.0.1', '::ffff:7f00:1', '0:0:0:0:0:ffff:7f00:1', '::ffff:a9fe:a9fe', '::127.0.0.1', '::7f00:1', '::ffff:0:7f00:1', '64:ff9b::7f00:1', '64:ff9b::a00:1',
    '2002:7f00:1::', '2001:0:4136:e378:8000:63bf:3fff:fdd2',
    'not-an-ip', '', null
  ]) assert.ok(!isPublicIp(ip), String(ip));
});

test('URLs and host names must be public', async () => {
  const lookup = async () => [{ address: '93.184.216.34', family: 4 }];
  await assertPublicUrl('https://example.org/', { lookup });
  await assertPublicUrl('https://1.1.1.1/', { lookup });
  for (const bad of [
    'http://127.0.0.1/', 'http://2130706433/', 'http://0x7f.1/', 'http://017700000001/', 'http://127.1/', 'http://[::ffff:127.0.0.1]/', 'http://[::1]/',
    'http://localhost/', 'http://localhost./', 'http://LOCALHOST/', 'http://foo.localhost/', 'http://metadata.internal/', 'https://evil@example.org/', 'https://example.org:8080/',
    'file:///etc/passwd', 'ftp://example.org/', 'gopher://example.org/'
  ]) await assert.rejects(assertPublicUrl(bad, { lookup }), bad);
  await assert.rejects(assertPublicHost('example.org', { lookup: async () => [{ address: '93.184.216.34', family: 4 }, { address: '10.0.0.1', family: 4 }] }), /non-public/);
  await assert.rejects(assertPublicHost('example.org', { lookup: async () => [{ address: '::ffff:7f00:1', family: 6 }] }), /non-public/);
});

// A local server, and a resolver that sends every name to it.
function serve(handler) {
  return new Promise((resolve) => {
    const s = http.createServer(handler);
    s.listen(0, '127.0.0.1', () => resolve(s));
  });
}

test('connections use the address that was checked (DNS rebinding)', async () => {
  const s = await serve((req, res) => res.end('<html>internal</html>'));
  try {
    // The check sees a public address; the connection would see loopback.
    let calls = 0;
    const lookup = async () => (calls++ ? [{ address: '127.0.0.1', family: 4 }] : [{ address: '93.184.216.34', family: 4 }]);
    await assert.rejects(scanTrackers('http://rebind.example.org/', { lookup }), /non-public/);
    await assert.rejects(guardedFetch(`http://rebind.example.org:${s.address().port}/`, { lookup: async () => [{ address: '127.0.0.1', family: 4 }] }), /non-public/);
    await assert.rejects(guardedFetch(`http://localhost:${s.address().port}/`), /non-public/);
    // The lookup works for net and tls as well: callback style, with and without `all`.
    const one = await new Promise((resolve, reject) => publicLookup(async () => [{ address: '1.1.1.1', family: 4 }])('x.example', {}, (e, a, f) => (e ? reject(e) : resolve([a, f]))));
    assert.deepStrictEqual(one, ['1.1.1.1', 4]);
    const all = await new Promise((resolve, reject) => publicLookup(async () => [{ address: '1.1.1.1', family: 4 }])('x.example', { all: true }, (e, a) => (e ? reject(e) : resolve(a))));
    assert.deepStrictEqual(all, [{ address: '1.1.1.1', family: 4 }]);
  } finally {
    s.close();
  }
});

test('redirects are checked hop by hop', async () => {
  const lookup = async () => [{ address: '93.184.216.34', family: 4 }];
  for (const location of ['http://127.0.0.1/', 'http://[::1]/', 'file:///etc/passwd', 'javascript:alert(1)', 'https://user:pw@example.org/', 'http://example.org:22/']) {
    const fetchImpl = async () => new Response(null, { status: 302, headers: { location } });
    await assert.rejects(scanTrackers('https://example.org/', { fetchImpl, lookup }), location);
  }
  let n = 0;
  const loop = async () => new Response(null, { status: 301, headers: { location: `/r${n++}` } });
  await assert.rejects(scanTrackers('https://example.org/', { fetchImpl: loop, lookup }), /Too many redirects/);
});

test('guardedFetch returns a Response, decodes gzip and never follows redirects', async () => {
  const s = await serve((req, res) => {
    if (req.url === '/gz') {
      res.writeHead(200, { 'content-encoding': 'gzip', 'content-type': 'text/html' });
      return res.end(zlib.gzipSync('<html>zipped</html>'));
    }
    if (req.url === '/moved') {
      res.writeHead(302, { location: 'http://127.0.0.1:1/' });
      return res.end();
    }
    res.writeHead(204);
    res.end();
  });
  try {
    const base = `http://127.0.0.1:${s.address().port}`;
    const gz = await guardedFetch(`${base}/gz`);
    assert.strictEqual(gz.status, 200);
    assert.strictEqual(await readLimited(gz, 1000), '<html>zipped</html>');
    const moved = await guardedFetch(`${base}/moved`);
    assert.strictEqual(moved.status, 302);
    assert.strictEqual(moved.headers.get('location'), 'http://127.0.0.1:1/');
    assert.strictEqual((await guardedFetch(`${base}/empty`)).status, 204);
    await assert.rejects(guardedFetch('file:///etc/passwd'), /Unsupported URL scheme/);
  } finally {
    s.close();
  }
});
