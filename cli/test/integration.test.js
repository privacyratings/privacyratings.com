import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { execFile } from 'node:child_process';
import { mkdtemp, mkdir, readFile, writeFile, symlink, chmod, readdir, stat, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// A clean environment, so FORCE_COLOR, NO_COLOR or PRIVACYRATINGS_* in the shell running the tests
// cannot change the output.
function cleanEnv() {
  const e = { ...process.env };
  for (const k of Object.keys(e)) if (/^(CI|NO_COLOR|FORCE_COLOR|NODE_OPTIONS|PRIVACYRATINGS_.*)$/.test(k)) delete e[k];
  return e;
}

const BIN = fileURLToPath(new URL('../bin/privacyratings.js', import.meta.url));
const ESC = '\x1b';
const nasty = `Evil${ESC}]8;;https://evil.example${ESC}\\link${ESC}]8;;${ESC}\\${ESC}[2J${ESC}]52;c;cm0gLXJmIH4=\x07\x9b31m\r‮`;

const index = {
  categories: [{ id: 'vpns', n: `VPNs${nasty}`, g: `Networking${nasty}`, count: 2 }],
  countries: {},
  alternatives: {},
  entries: [
    { c: 'vpns', s: 'evil-vpn', n: nasty, g: 'A', sc: 99, p: 1, d: nasty },
    { c: 'vpns', s: 'Bad"&calc&"', n: 'Injection', g: 'A', sc: 99 }
  ]
};
const entry = { description: nasty, answers: { a: { answer: 'yes', title: nasty, note: nasty, evidence: `https://x.example/${nasty}` } }, website: nasty, url: 'https://evil.example/' };

let server;
let site;
let big = false;
let requests = 0;
before(async () => {
  server = createServer((req, res) => {
    requests++;
    if (req.url === '/api/cli.json') {
      if (big) {
        res.writeHead(200, { 'content-type': 'application/json' });
        const chunk = Buffer.alloc(1024 * 1024, 0x20);
        let n = 0;
        const write = () => {
          while (n < 40) {
            n++;
            if (!res.write(chunk)) return res.once('drain', write);
          }
          res.end('{}');
        };
        return write();
      }
      res.writeHead(200, { 'content-type': 'application/json', etag: '"v1"' });
      return res.end(JSON.stringify(index));
    }
    if (req.url === '/api/entries/vpns/evil-vpn.json') {
      res.writeHead(200, { 'content-type': 'application/json' });
      return res.end(JSON.stringify(entry));
    }
    res.writeHead(404).end();
  });
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  site = `http://127.0.0.1:${server.address().port}`;
});
after(() => server.close());

const run = (args, env = {}) =>
  new Promise((resolve) => {
    execFile(process.execPath, [BIN, ...args], { env: { ...cleanEnv(), PRIVACYRATINGS_URL: site, PRIVACYRATINGS_NO_UPDATE: '1', NO_COLOR: '', FORCE_COLOR: '1', ...env }, timeout: 20000 }, (err, stdout, stderr) =>
      resolve({ code: err ? err.code : 0, stdout, stderr })
    );
  });

const onlySgr = (s) => !/[\u0000-\u0009\u000b-\u001f\u007f-\u009f‪-‮]/.test(s.replace(/\x1b\[[0-9;]*m/g, ''));

test('search, show, categories and errors print no escape sequences from the data', async () => {
  const cache = await mkdtemp(join(tmpdir(), 'pr-test-'));
  try {
    for (const args of [['search', 'evil'], ['show', 'evil-vpn'], ['categories'], ['picks'], ['show', 'nothing-here']]) {
      const { stdout, stderr } = await run(args, { PRIVACYRATINGS_CACHE: cache });
      assert.ok(onlySgr(stdout), `${args}: ${JSON.stringify(stdout)}`);
      assert.ok(onlySgr(stderr), `${args}: ${JSON.stringify(stderr)}`);
    }
    const { stdout } = await run(['show', 'evil-vpn'], { PRIVACYRATINGS_CACHE: cache });
    assert.match(stdout, /Rating\S*\s+http:\/\/127\.0\.0\.1:\d+\/vpns\/evil-vpn\//);
    assert.ok(!stdout.includes('evil.example/\n'));
    // Entries with unsafe slugs are dropped, so they can never reach a URL or a shell.
    const inj = await run(['search', 'injection', '--json'], { PRIVACYRATINGS_CACHE: cache });
    assert.deepEqual(JSON.parse(inj.stdout), []);
    // JSON output keeps the data as it is.
    const json = await run(['search', 'evil', '--json'], { PRIVACYRATINGS_CACHE: cache });
    assert.equal(JSON.parse(json.stdout)[0].name, nasty);
  } finally {
    await rm(cache, { recursive: true, force: true });
  }
});

test('the cache is private, atomic, and does not follow planted symlinks', { skip: process.platform === 'win32' }, async () => {
  const root = await mkdtemp(join(tmpdir(), 'pr-test-'));
  try {
    const cache = join(root, 'cache');
    await run(['search', 'evil'], { PRIVACYRATINGS_CACHE: cache });
    assert.equal((await stat(cache)).mode & 0o777, 0o700);
    const files = await readdir(cache);
    assert.equal(files.length, 1);
    assert.ok(!files[0].endsWith('.tmp'));
    assert.equal((await stat(join(cache, files[0]))).mode & 0o777, 0o600);

    // A symlink planted where the cache file goes is replaced, not written through.
    const victim = join(root, 'victim');
    await writeFile(victim, 'keep');
    await rm(join(cache, files[0]));
    await symlink(victim, join(cache, files[0]));
    await run(['search', 'evil', '--refresh'], { PRIVACYRATINGS_CACHE: cache });
    assert.equal(await readFile(victim, 'utf8'), 'keep');

    // A world-writable cache folder (like a shared /tmp) is not used at all.
    const shared = join(root, 'shared');
    await mkdir(shared);
    await chmod(shared, 0o777);
    const r = await run(['search', 'evil'], { PRIVACYRATINGS_CACHE: shared });
    assert.equal(r.code, 0);
    assert.deepEqual(await readdir(shared), []);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('a corrupted cache is ignored and refetched', async () => {
  const cache = await mkdtemp(join(tmpdir(), 'pr-test-'));
  try {
    await chmod(cache, 0o700);
    await run(['search', 'evil'], { PRIVACYRATINGS_CACHE: cache });
    const [file] = await readdir(cache);
    for (const junk of ['{not json', JSON.stringify({ etag: 1, data: { categories: 'x' } }), JSON.stringify({ data: null })]) {
      await writeFile(join(cache, file), junk);
      const before = requests;
      const r = await run(['search', 'evil', '--json'], { PRIVACYRATINGS_CACHE: cache });
      assert.equal(r.code, 0, r.stderr);
      assert.equal(JSON.parse(r.stdout).length, 1);
      assert.ok(requests > before);
    }
  } finally {
    await rm(cache, { recursive: true, force: true });
  }
});

test('oversized responses are refused instead of filling memory', async () => {
  const cache = await mkdtemp(join(tmpdir(), 'pr-test-'));
  big = true;
  try {
    const r = await run(['search', 'evil'], { PRIVACYRATINGS_CACHE: cache });
    assert.equal(r.code, 1);
    assert.match(r.stderr, /too large/);
  } finally {
    big = false;
    await rm(cache, { recursive: true, force: true });
  }
});

test('an unsafe PRIVACYRATINGS_URL is refused', async () => {
  const r = await run(['search', 'x'], { PRIVACYRATINGS_URL: 'http://example.com' });
  assert.equal(r.code, 1);
  assert.match(r.stderr, /PRIVACYRATINGS_URL must be/);
});

test('a closed pipe is not an error', { skip: process.platform === 'win32' }, async () => {
  const cache = await mkdtemp(join(tmpdir(), 'pr-test-'));
  try {
    const out = await new Promise((resolve) => {
      execFile('sh', ['-c', `"${process.execPath}" "${BIN}" categories --json | head -c 1 >/dev/null; "${process.execPath}" "${BIN}" search | head -c 1 >/dev/null; echo "\${PIPESTATUS:-ok}"`], {
        env: { ...cleanEnv(), PRIVACYRATINGS_URL: site, PRIVACYRATINGS_NO_UPDATE: '1', PRIVACYRATINGS_CACHE: cache }
      }, (err, stdout, stderr) => resolve({ err, stdout, stderr }));
    });
    assert.equal(out.err, null);
    assert.ok(!/EPIPE|Error/.test(out.stderr), out.stderr);
  } finally {
    await rm(cache, { recursive: true, force: true });
  }
});
