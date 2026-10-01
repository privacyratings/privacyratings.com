import { test } from 'node:test';
import assert from 'node:assert/strict';
import { clean, safeUrl, isSlug } from '../src/sanitize.js';
import { prepare, search, find } from '../src/search.js';
import { siteFrom } from '../src/data.js';
import { openableUrl, browserCommand } from '../src/open.js';
import { newer, isRelease, checksumFor, kindFromPath, updatesDisabled, gh } from '../src/update.js';

const ESC = '\x1b';
const nasty = `A${ESC}]8;;https://evil.example${ESC}\\x${ESC}]8;;${ESC}\\${ESC}[2J${ESC}]0;title\x07\x9b31m\x9d0;t\x07\r\n\t\u202eB\u2066C\u2028D`;
const hasControl = (s) => /[\u0000-\u0008\u000b-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069\u2028\u2029]/.test(s);

test('clean removes escape sequences, C1 controls, CR and bidi controls', () => {
  const out = clean(nasty);
  assert.ok(!hasControl(out), JSON.stringify(out));
  assert.ok(!out.includes(ESC));
  assert.equal(clean('Proton Mail – ✔ 日本語 😀'), 'Proton Mail – ✔ 日本語 😀');
  assert.equal(clean({ toString: () => ESC }), '');
  assert.equal(clean(null), '');
  assert.equal(clean(42), '42');
});

test('safeUrl allows only plain http(s) URLs', () => {
  assert.equal(safeUrl('https://example.com/a b'), 'https://example.com/a%20b');
  assert.equal(safeUrl('javascript:alert(1)'), null);
  assert.equal(safeUrl('file:///etc/passwd'), null);
  assert.equal(safeUrl('https://user:pw@example.com/'), null);
  assert.equal(safeUrl(`https://example.com/${ESC}]8;;x`), 'https://example.com/%1B]8;;x');
  assert.equal(safeUrl(42), null);
  assert.ok(isSlug('email-providers') && !isSlug('../etc') && !isSlug('A') && !isSlug('a/b') && !isSlug('-x'));
});

const raw = () => ({
  categories: [{ id: 'vpns', n: `VPN${ESC}[31m`, g: 'Net', count: 1 }, { id: '../../x', n: 'bad' }, null, 'x'],
  countries: { CH: 'Switzerland', evil: 5 },
  alternatives: { 'vpns/a': ['vpns/b', 5], 'vpns/b': 'not-a-list' },
  entries: [
    { c: 'vpns', s: 'a', n: nasty, g: 'constructor', sc: '100', p: 'x', d: nasty, j: 'constructor' },
    { c: 'vpns', s: 'b', n: 'Bee', g: 'B', sc: 999, p: 1 },
    { c: 'vpns', s: 'b', n: 'Duplicate', g: 'A', sc: 1 },
    { c: '..', s: 'etc', n: 'Traversal' },
    { c: 'vpns', s: 'Bad Slug & calc', n: 'Injection' },
    { c: 'vpns', s: 'c' },
    null,
    7
  ]
});

test('prepare drops malformed records and normalizes fields', () => {
  const index = prepare(raw());
  assert.deepEqual(index.categories.map((c) => c.id), ['vpns']);
  assert.deepEqual(index.entries.map((e) => e.s), ['a', 'b', 'c']);
  const [a, b, c] = index.entries;
  assert.equal(a.g, null);
  assert.equal(a.sc, null);
  assert.equal(a.p, 0);
  assert.equal(b.sc, 100);
  assert.equal(b.n, 'Bee');
  assert.equal(c.n, 'c');
  assert.equal(index.byCategory.constructor, undefined);
  assert.equal(index.countries.constructor, undefined);
  assert.equal(index.countries.evil, undefined);
  assert.deepEqual(index.alternatives['vpns/a'], ['vpns/b']);
  assert.equal(index.alternatives['vpns/b'], undefined);
  assert.equal(find(index, 'bee').s, 'b');
  assert.ok(Array.isArray(search(index, 'constructor')));
});

test('prepare rejects data that is not an index', () => {
  for (const bad of [null, [], 'x', {}, { categories: [], entries: {} }]) assert.throws(() => prepare(bad), /not in the expected format/);
  assert.deepEqual(prepare({ categories: [], entries: [] }).entries, []);
});

test('plain output never contains control characters from the data', async () => {
  const saved = { NO_COLOR: process.env.NO_COLOR, FORCE_COLOR: process.env.FORCE_COLOR };
  const { resultLine, entryText } = await import('../src/format.js');
  const index = prepare(raw());
  const detail = {
    description: nasty,
    pick: true,
    pick_reason: nasty,
    disclosure: nasty,
    jurisdiction: { name: nasty, eyes: nasty },
    answers: { x: { answer: 'constructor', title: nasty, note: nasty, evidence: nasty }, y: { answer: '__proto__' }, z: null, w: 'str' },
    tests: { ssllabs: nasty, observatory: nasty, internetnl_web: nasty },
    website: nasty,
    source: nasty,
    url: 'https://evil.example/'
  };
  try {
    for (const color of ['0', '1']) {
      delete process.env.NO_COLOR;
      process.env.FORCE_COLOR = color;
      for (const out of [resultLine(index.entries[0], index, 1), entryText(index.entries[0], detail, index)]) {
        // Only the tool's own SGR color codes may remain.
        const stripped = out.replace(/\x1b\[[0-9;]*m/g, '');
        assert.ok(!hasControl(stripped.replace(/\n/g, '')), JSON.stringify(stripped));
        assert.ok(!out.includes('evil.example/'), 'the rating link comes from the slug, not the data');
      }
    }
  } finally {
    for (const [k, v] of Object.entries(saved)) (v === undefined ? delete process.env[k] : (process.env[k] = v));
  }
});

test('PRIVACYRATINGS_URL must be https, or http on this machine', () => {
  assert.equal(siteFrom(''), 'https://privacyratings.com');
  assert.equal(siteFrom('https://staging.example.com/'), 'https://staging.example.com');
  assert.equal(siteFrom('http://localhost:8080'), 'http://localhost:8080');
  assert.equal(siteFrom('http://127.0.0.1:8080/'), 'http://127.0.0.1:8080');
  assert.equal(siteFrom('http://example.com'), null);
  assert.equal(siteFrom('file:///tmp'), null);
  assert.equal(siteFrom('https://u:p@example.com'), null);
  assert.equal(siteFrom('not a url'), null);
});

test('only rating pages on the site are opened, and never through a shell', () => {
  const site = 'https://privacyratings.com';
  assert.equal(openableUrl('https://privacyratings.com/vpns/a/', site), 'https://privacyratings.com/vpns/a/');
  assert.equal(openableUrl('https://evil.example/', site), null);
  assert.equal(openableUrl('javascript:alert(1)', site), null);
  assert.equal(openableUrl('https://privacyratings.com.evil.example/', site), null);
  assert.equal(openableUrl('file:///C:/Windows/System32/calc.exe', site), null);
  // Characters cmd.exe would interpret are percent-encoded or harmless without a shell.
  const href = openableUrl('https://privacyratings.com/a"&calc&"/', site);
  assert.ok(!href.includes('"'));
  const [cmd, args] = browserCommand(href, 'win32');
  assert.match(cmd, /rundll32\.exe$/);
  assert.deepEqual(args, ['url.dll,FileProtocolHandler', href]);
  assert.deepEqual(browserCommand(href, 'darwin'), ['open', [href]]);
  assert.deepEqual(browserCommand(href, 'linux'), ['xdg-open', [href]]);
});

test('version comparison handles prereleases and garbage', () => {
  assert.ok(newer('1.0.0', '1.0.0-beta.2'));
  assert.ok(!newer('1.0.0-beta.2', '1.0.0'));
  assert.ok(newer('1.0.0-beta.10', '1.0.0-beta.2'));
  assert.ok(newer('1.0.0-beta', '1.0.0-alpha'));
  assert.ok(newer('1.10.0', '1.9.0'));
  assert.ok(!newer('garbage', '1.0.0'));
  assert.ok(!newer('99.0.0; rm -rf /', '1.0.0'));
  assert.ok(!newer('1.0', '0.9.0'));
  assert.ok(isRelease('v1.2.3') && !isRelease('1.2.3-rc.1') && !isRelease('1.2.3 && calc'));
});

test('SHA256SUMS parsing wants an exact asset name', () => {
  const h = 'a'.repeat(64);
  const sums = `${'b'.repeat(64)}  privacyratings-linux-x64-musl\n${h} *privacyratings-linux-x64\r\n${'c'.repeat(63)}  privacyratings-darwin-arm64\n`;
  assert.equal(checksumFor(sums, 'privacyratings-linux-x64'), h);
  assert.equal(checksumFor(sums, 'privacyratings-darwin-arm64'), null);
  assert.equal(checksumFor(sums, 'privacyratings-linux'), null);
});

test('npm updates only for global npm installs', () => {
  assert.equal(kindFromPath('/usr/local/lib/node_modules/privacyratings/bin/privacyratings.js', { platform: 'linux' }), 'npm');
  assert.equal(kindFromPath('/home/n/.nvm/versions/node/v22.0.0/lib/node_modules/privacyratings/bin/privacyratings.js', { platform: 'linux' }), 'npm');
  assert.equal(kindFromPath('/home/n/project/node_modules/privacyratings/bin/privacyratings.js', { platform: 'linux' }), 'dev');
  assert.equal(kindFromPath('/usr/lib/node_modules/other/node_modules/privacyratings/bin/privacyratings.js', { platform: 'linux' }), 'dev');
  assert.equal(kindFromPath('/home/n/.npm/_npx/abc/node_modules/privacyratings/bin/privacyratings.js', { platform: 'linux' }), 'npx');
  assert.equal(kindFromPath('/home/n/src/privacyratings.com/cli/bin/privacyratings.js', { platform: 'linux' }), 'dev');
  const win = { platform: 'win32', execPath: 'C:\\Program Files\\nodejs\\node.exe', appData: 'C:\\Users\\n\\AppData\\Roaming' };
  assert.equal(kindFromPath('C:\\Users\\n\\AppData\\Roaming\\npm\\node_modules\\privacyratings\\bin\\privacyratings.js', win), 'npm');
  assert.equal(kindFromPath('C:\\Program Files\\nodejs\\node_modules\\privacyratings\\bin\\privacyratings.js', win), 'npm');
  assert.equal(kindFromPath('C:\\code\\app\\node_modules\\privacyratings\\bin\\privacyratings.js', win), 'dev');
});

test('update opt-outs', () => {
  assert.ok(updatesDisabled({ PRIVACYRATINGS_NO_UPDATE: '1' }));
  assert.ok(updatesDisabled({ CI: 'true' }));
  assert.ok(updatesDisabled({ PRIVACYRATINGS_BACKGROUND: '1' }));
  assert.ok(!updatesDisabled({ CI: 'false', PRIVACYRATINGS_NO_UPDATE: '0' }));
  assert.ok(!updatesDisabled({}));
});

test('update downloads refuse non-GitHub hosts, plain HTTP and redirects away from GitHub', async () => {
  const real = globalThis.fetch;
  const seen = [];
  globalThis.fetch = async (url) => {
    seen.push(String(url));
    return new Response(null, { status: 302, headers: { location: 'https://evil.example/binary' } });
  };
  try {
    await assert.rejects(gh('https://github.com/privacyratings/privacyratings.com/releases/download/v1.0.0/x'), /Refusing to download from https:\/\/evil\.example/);
    await assert.rejects(gh('http://github.com/x'), /Refusing/);
    await assert.rejects(gh('https://evil.example/x'), /Refusing/);
    assert.deepEqual(seen, ['https://github.com/privacyratings/privacyratings.com/releases/download/v1.0.0/x']);
  } finally {
    globalThis.fetch = real;
  }
});

test('a new binary needs a matching SHA256SUMS entry, digest and size', async () => {
  const { verifiedBinary } = await import('../src/update.js');
  const { createHash } = await import('node:crypto');
  const bin = Buffer.from('new binary');
  const sha = createHash('sha256').update(bin).digest('hex');
  const name = 'privacyratings-linux-x64';
  const real = globalThis.fetch;
  let files;
  globalThis.fetch = async (url) => {
    const u = new URL(url);
    assert.equal(u.origin, 'https://github.com');
    const file = decodeURIComponent(u.pathname.split('/').pop());
    return file in files ? new Response(files[file]) : new Response('missing', { status: 404 });
  };
  const release = (assets) => ({ tag: 'v9.9.9', version: '9.9.9', assets });
  try {
    files = { [name]: bin, SHA256SUMS: `${sha}  ${name}\n` };
    const ok = release({ [name]: { size: bin.length, digest: `sha256:${sha}` }, SHA256SUMS: { size: 0 } });
    assert.deepEqual(await verifiedBinary(ok, name), bin);

    await assert.rejects(verifiedBinary(release({ [name]: { size: bin.length } }), name), /No SHA256SUMS/);
    await assert.rejects(verifiedBinary(release({ [name]: { size: bin.length, digest: `sha256:${'0'.repeat(64)}` }, SHA256SUMS: {} }), name), /digest/);
    await assert.rejects(verifiedBinary(release({ [name]: { size: bin.length + 1 }, SHA256SUMS: {} }), name), /incomplete/);
    await assert.rejects(verifiedBinary(release({ [name]: { size: 10 ** 10 }, SHA256SUMS: {} }), name), /too large/);
    files = { [name]: Buffer.from('tampered!!'), SHA256SUMS: `${sha}  ${name}\n` };
    await assert.rejects(verifiedBinary(release({ [name]: { size: 10 }, SHA256SUMS: {} }), name), /Checksum mismatch/);
    files = { [name]: bin, SHA256SUMS: `${sha}  other-file\n` };
    await assert.rejects(verifiedBinary(release({ [name]: { size: bin.length }, SHA256SUMS: {} }), name), /no checksum/);
  } finally {
    globalThis.fetch = real;
  }
});
