// `privacyratings update` against a fake GitHub: messages and exit codes, and that the daily
// background check stays out of the way. The fake replaces fetch through NODE_OPTIONS=--require,
// so only api.github.com, github.com and the asset host are faked.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdtemp, mkdir, readFile, writeFile, utimes } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { VERSION } from '../src/version.js';

const BIN = fileURLToPath(new URL('../bin/privacyratings.js', import.meta.url));

const MOCK = `
const { appendFileSync } = require('node:fs');
const S = process.env.MOCK_SCENARIO;
const real = globalThis.fetch;
globalThis.fetch = async (url, opts) => {
  url = String(url);
  if (!/github/.test(new URL(url).hostname)) return real(url, opts);
  appendFileSync(process.env.MOCK_LOG, url + '\\n');
  if (S === 'down') throw new TypeError('fetch failed', { cause: Object.assign(new Error('getaddrinfo ENOTFOUND api.github.com'), { code: 'ENOTFOUND' }) });
  if (S === 'limited') return new Response('{}', { status: 403 });
  const tag = { newer: 'v9.9.9', same: 'v${VERSION}', prerelease: 'v9.9.9-rc.1' }[S];
  return Response.json({ tag_name: tag, draft: false, prerelease: S === 'prerelease', assets: [] });
};
`;

async function setup() {
  const root = await mkdtemp(join(tmpdir(), 'pr-update-'));
  await writeFile(join(root, 'mock.cjs'), MOCK);
  await mkdir(join(root, 'cache'), { mode: 0o700 });
  return root;
}

const run = (root, args, scenario, env = {}) =>
  new Promise((resolve) => {
    const { CI, PRIVACYRATINGS_NO_UPDATE, ...base } = process.env;
    const e = { ...base, NODE_OPTIONS: `--require ${JSON.stringify(join(root, 'mock.cjs'))}`, MOCK_SCENARIO: scenario, MOCK_LOG: join(root, 'log'), PRIVACYRATINGS_CACHE: join(root, 'cache'), NO_COLOR: '1', ...env };
    execFile(process.execPath, [BIN, ...args], { env: e, timeout: 20000 }, (err, stdout, stderr) => resolve({ code: err ? err.code : 0, stdout, stderr }));
  });

test('update reports the latest version, a newer one, and GitHub problems with exit codes', async () => {
  const root = await setup();
  let r = await run(root, ['update'], 'same');
  assert.deepEqual([r.code, r.stdout.trim(), r.stderr], [0, `privacyratings ${VERSION} is the latest version.`, '']);

  // A checkout is not updated in place; it says how to install instead.
  r = await run(root, ['update'], 'newer');
  assert.equal(r.code, 0);
  assert.match(r.stdout, /9\.9\.9 is available\. Install it with: npm install -g privacyratings/);

  r = await run(root, ['update'], 'prerelease');
  assert.equal(r.code, 1);
  assert.match(r.stderr, /no usable version/);

  r = await run(root, ['update'], 'down');
  assert.equal(r.code, 1);
  assert.match(r.stderr, /Could not reach api\.github\.com \(ENOTFOUND\)\. Check your connection/);

  r = await run(root, ['update'], 'limited');
  assert.equal(r.code, 1);
  assert.match(r.stderr, /GitHub returned 403 \(rate limited/);
});

test('update fails clearly while another update holds the lock, and takes over a stale lock', async () => {
  const root = await setup();
  const lock = join(root, 'cache', 'update.lock');
  await writeFile(lock, '1');
  let r = await run(root, ['update'], 'same');
  assert.equal(r.code, 1);
  assert.match(r.stderr, /Another privacyratings update is running/);

  const old = new Date(Date.now() - 60 * 60 * 1000);
  await utimes(lock, old, old);
  r = await run(root, ['update'], 'same');
  assert.equal(r.code, 0, r.stderr);
  await assert.rejects(readFile(lock), { code: 'ENOENT' }, 'the lock is released');
});

test('the background check is skipped with CI, --no-update and PRIVACYRATINGS_NO_UPDATE, and never prints', async () => {
  for (const [args, env] of [
    [['--no-update'], {}],
    [[], { CI: 'true' }],
    [[], { PRIVACYRATINGS_NO_UPDATE: '1' }]
  ]) {
    const root = await setup();
    // An unreachable site: the command fails fast, before anything could be printed about updates.
    const r = await run(root, ['search', 'x', ...args], 'newer', { PRIVACYRATINGS_URL: 'http://127.0.0.1:9', ...env });
    assert.equal(r.code, 1);
    assert.doesNotMatch(r.stderr, /update/i);
    await new Promise((res) => setTimeout(res, 300));
    assert.equal(await readFile(join(root, 'log'), 'utf8').catch(() => ''), '', `no GitHub request with ${JSON.stringify({ args, env })}`);
    assert.equal(await readFile(join(root, 'cache', 'update.json'), 'utf8').catch(() => null), null);
  }
  // Without them, the command still finishes on its own and the check happens in the background.
  const root = await setup();
  const r = await run(root, ['search', 'x'], 'same', { PRIVACYRATINGS_URL: 'http://127.0.0.1:9' });
  assert.equal(r.code, 1);
  assert.doesNotMatch(r.stderr, /update/i);
  let seen = '';
  for (let i = 0; i < 50 && !seen; i++) {
    await new Promise((res) => setTimeout(res, 100));
    seen = await readFile(join(root, 'log'), 'utf8').catch(() => '');
  }
  assert.match(seen, /api\.github\.com/);
});

test('the update notice goes to stderr, and never with --json', async () => {
  const server = createServer((req, res) => res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({ categories: [{ id: 'vpns', n: 'VPNs', g: 'Networking', count: 1 }], entries: [{ c: 'vpns', s: 'x', n: 'X VPN', g: 'B', sc: 80, d: 'x' }], countries: {}, alternatives: {} })));
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  try {
    const root = await setup();
    const site = `http://127.0.0.1:${server.address().port}`;
    await writeFile(join(root, 'cache', 'update.json'), JSON.stringify({ checked: Date.now(), latest: '9.9.9' }));
    let r = await run(root, ['categories', '--json'], 'newer', { PRIVACYRATINGS_URL: site });
    assert.equal(r.code, 0, r.stderr);
    assert.equal(r.stderr, '');
    assert.equal(JSON.parse(r.stdout)[0].id, 'vpns');
    r = await run(root, ['categories'], 'newer', { PRIVACYRATINGS_URL: site });
    assert.equal(r.code, 0, r.stderr);
    assert.doesNotMatch(r.stdout, /9\.9\.9/);
    assert.match(r.stderr, /privacyratings 9\.9\.9 is available: npm install -g privacyratings/);
    // The last check is less than a day old, so no background process was started.
    assert.equal(await readFile(join(root, 'log'), 'utf8').catch(() => ''), '');
  } finally {
    server.close();
  }
});
