// Runs install.sh with fake uname, curl, wget, getconf and ldd, for every platform it supports
// and a few it refuses. POSIX only; uses dash when it is installed, since that is /bin/sh on
// Debian and Ubuntu and has no bash extensions.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFile, execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtemp, mkdir, writeFile, readFile, readdir, symlink, chmod, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT = fileURLToPath(new URL('../install.sh', import.meta.url));
const skip = process.platform === 'win32';
const which = (cmd) => {
  try {
    return execFileSync('sh', ['-c', `command -v ${cmd}`], { encoding: 'utf8' }).trim();
  } catch {
    return null;
  }
};
const SH = skip ? null : which('dash') || '/bin/sh';
// Real tools the script needs; everything else on PATH is a fake written below.
const TOOLS = ['awk', 'cat', 'chmod', 'cp', 'grep', 'ls', 'mkdir', 'mktemp', 'mv', 'rm', 'sha256sum', 'shasum', 'printf', 'echo'];

const fake = (body) => `#!/bin/sh\n${body}\n`;
// Serves $FAKE_FILES/<last path segment of the URL> and records every URL.
const CURL = fake(`out=; url=
while [ $# -gt 0 ]; do case "$1" in -o) out="$2"; shift ;; https://*|http://*) url="$1" ;; esac; shift; done
echo "curl $url" >> "$FAKE_LOG"
f="$FAKE_FILES/\${url##*/}"
[ -f "$f" ] || exit 22
cp "$f" "$out"`);
const WGET = fake(`if [ "$1" = --help ]; then echo "  --https-only  only follow secure HTTPS links"; exit 0; fi
out=; url=
while [ $# -gt 0 ]; do case "$1" in -O) out="$2"; shift ;; https://*) url="$1" ;; esac; shift; done
echo "wget $url" >> "$FAKE_LOG"
f="$FAKE_FILES/\${url##*/}"
[ -f "$f" ] || exit 8
cp "$f" "$out"`);

async function setup({ s = 'Linux', m = 'x86_64', libc = 'glibc', translated = '0', downloader = 'curl', sums } = {}) {
  const root = await mkdtemp(join(tmpdir(), 'pr install '));
  const bin = join(root, 'bin');
  const files = join(root, 'files');
  const tmp = join(root, 'tmp');
  await Promise.all([mkdir(bin), mkdir(files), mkdir(tmp)]);
  for (const t of TOOLS) {
    const p = which(t);
    if (p && p.startsWith('/')) await symlink(p, join(bin, t));
  }
  const write = async (name, body) => {
    await writeFile(join(bin, name), body);
    await chmod(join(bin, name), 0o755);
  };
  await write('uname', fake(`case "$1" in -s) echo ${s} ;; -m) echo ${m} ;; esac`));
  await write('sysctl', fake(`echo ${translated}`));
  await write('xattr', fake('exit 0'));
  await write('getconf', fake(`case "$1" in LONG_BIT) echo 64 ;; GNU_LIBC_VERSION) ${libc === 'glibc' ? 'echo "glibc 2.39"' : 'exit 1'} ;; *) exit 1 ;; esac`));
  await write('ldd', fake(libc === 'musl' ? 'echo "musl libc (x86_64)" >&2; exit 1' : 'echo "ldd (GNU libc) 2.39"'));
  if (downloader === 'curl' || downloader === 'both') await write('curl', CURL);
  if (downloader === 'wget' || downloader === 'both') await write('wget', WGET);

  // A stand-in binary that reads stdin, as a real program might; with `curl | sh`, stdin is the
  // script, so the installer gives it /dev/null (and must not hang waiting here).
  const release = fake('cat >/dev/null 2>&1\necho 1.2.3');
  const os = s === 'Darwin' ? 'darwin' : 'linux';
  const arch = /^(aarch64|arm64)$/.test(m) || (s === 'Darwin' && translated === '1') ? 'arm64' : 'x64';
  const asset = `privacyratings-${os}-${arch}`;
  for (const a of ['privacyratings-linux-x64', 'privacyratings-linux-arm64', 'privacyratings-darwin-x64', 'privacyratings-darwin-arm64']) {
    await writeFile(join(files, a), a === asset ? release : fake(`echo wrong asset ${a}`));
  }
  const sha = (name) => createHash('sha256').update(name === asset ? release : fake(`echo wrong asset ${name}`)).digest('hex');
  const lines = sums ?? ['privacyratings-linux-x64', 'privacyratings-linux-arm64', 'privacyratings-darwin-x64', 'privacyratings-darwin-arm64'].map((a) => `${sha(a)}  ${a}`).join('\n');
  await writeFile(join(files, 'SHA256SUMS'), typeof lines === 'function' ? lines(sha, asset) : `${lines}\n`);
  return { root, bin, files, tmp, asset, release };
}

function install(ctx, env = {}, { viaStdin = false } = {}) {
  return new Promise((resolve) => {
    const e = { PATH: ctx.bin, HOME: join(ctx.root, 'home'), TMPDIR: ctx.tmp, FAKE_FILES: ctx.files, FAKE_LOG: join(ctx.root, 'log'), PRIVACYRATINGS_BIN_DIR: join(ctx.root, 'my bin'), ...env };
    const child = execFile(SH, viaStdin ? ['-s'] : [SCRIPT], { env: e, timeout: 20000 }, (err, stdout, stderr) => resolve({ code: err ? err.code : 0, stdout, stderr }));
    if (viaStdin) readFile(SCRIPT).then((s) => child.stdin.end(s));
    else child.stdin.end();
  });
}
const log = async (ctx) => (await readFile(join(ctx.root, 'log'), 'utf8').catch(() => '')).trim().split('\n');

test('install.sh passes sh -n', { skip }, () => {
  execFileSync(SH, ['-n', SCRIPT]);
});

for (const [s, m, asset, extra] of [
  ['Linux', 'x86_64', 'privacyratings-linux-x64'],
  ['Linux', 'aarch64', 'privacyratings-linux-arm64'],
  ['Darwin', 'arm64', 'privacyratings-darwin-arm64'],
  ['Darwin', 'x86_64', 'privacyratings-darwin-x64'],
  ['Darwin', 'x86_64', 'privacyratings-darwin-arm64', { translated: '1' }]
]) {
  test(`install.sh on ${s} ${m}${extra ? ' under Rosetta' : ''} installs ${asset}`, { skip }, async () => {
    const ctx = await setup({ s, m, ...extra });
    const r = await install(ctx);
    assert.equal(r.code, 0, r.stderr);
    const dest = join(ctx.root, 'my bin', 'privacyratings');
    assert.equal(await readFile(dest, 'utf8'), ctx.release);
    assert.equal((await stat(dest)).mode & 0o777, 0o755);
    assert.match(r.stdout, /Installed 1\.2\.3 to .*my bin\/privacyratings/);
    assert.deepEqual(await log(ctx), [`curl https://github.com/privacyratings/privacyratings.com/releases/latest/download/${asset}`, 'curl https://github.com/privacyratings/privacyratings.com/releases/latest/download/SHA256SUMS']);
    assert.deepEqual(await readdir(ctx.tmp), [], 'the temporary folder is removed');
    assert.deepEqual(await readdir(join(ctx.root, 'my bin')), ['privacyratings']);
  });
}

test('install.sh works when piped to sh, with wget, a version and "*name" checksums', { skip }, async () => {
  const ctx = await setup({ downloader: 'wget', sums: (sha, asset) => `${sha(asset)} *${asset}\n` });
  const r = await install(ctx, { PRIVACYRATINGS_VERSION: 'v1.2.3' }, { viaStdin: true });
  assert.equal(r.code, 0, r.stderr);
  assert.match(r.stdout, /Run: {2}privacyratings/, 'the script ran to the end');
  assert.deepEqual(await log(ctx), ['wget https://github.com/privacyratings/privacyratings.com/releases/download/v1.2.3/privacyratings-linux-x64', 'wget https://github.com/privacyratings/privacyratings.com/releases/download/v1.2.3/SHA256SUMS']);
});

test('install.sh falls back to ~/.local/bin', { skip: skip || !existsSync('/usr/local/bin') }, async () => {
  const ctx = await setup();
  // Only meaningful when /usr/local/bin is not writable (not root).
  if (process.getuid?.() === 0) return;
  const r = await install(ctx, { PRIVACYRATINGS_BIN_DIR: '' });
  assert.equal(r.code, 0, r.stderr);
  assert.ok(existsSync(join(ctx.root, 'home', '.local', 'bin', 'privacyratings')));
  assert.match(r.stdout, /Add .* to your PATH/);
});

for (const [name, opts, env, message] of [
  ['musl', { libc: 'musl' }, {}, /musl-based systems/],
  ['FreeBSD', { s: 'FreeBSD' }, {}, /Unsupported system FreeBSD/],
  ['32-bit ARM', { m: 'armv7l' }, {}, /Unsupported processor armv7l/],
  ['Windows shells', { s: 'MINGW64_NT-10.0' }, {}, /install\.ps1/],
  ['a bad version', {}, { PRIVACYRATINGS_VERSION: 'v1.2.3/../../evil' }, /must be a release tag/],
  ['a checksum mismatch', { sums: (sha, asset) => `${'0'.repeat(64)}  ${asset}\n` }, {}, /Checksum mismatch/],
  ['a missing checksum', { sums: (sha, asset) => `${sha(asset)}  ${asset}-musl\n` }, {}, /Checksum mismatch/],
  ['no downloader', { downloader: 'none' }, {}, /curl or wget is required/]
]) {
  test(`install.sh refuses ${name} and installs nothing`, { skip }, async () => {
    const ctx = await setup(opts);
    const r = await install(ctx, env);
    assert.equal(r.code, 1);
    assert.match(r.stderr, message);
    assert.ok(!existsSync(join(ctx.root, 'my bin', 'privacyratings')));
    assert.deepEqual(await readdir(ctx.tmp), []);
  });
}
