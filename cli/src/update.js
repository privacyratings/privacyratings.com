// Automatic updates.
//
// Once a day, a detached background process checks the latest GitHub release. When a newer
// version exists it updates the way the tool was installed:
//   standalone binary  downloads the new binary, checks its SHA-256, and swaps it in place
//   npm global install runs `npm install -g privacyratings@<version>`
//   anything else      (npx, a local checkout, a project dependency) prints a one-line notice
// The command you ran is never slowed down. Set PRIVACYRATINGS_NO_UPDATE=1 (or pass
// --no-update) to turn this off. `privacyratings update` updates right away.
//
// Updates only ever talk to GitHub over HTTPS; PRIVACYRATINGS_URL is not used here.
// What is checked before a new binary replaces the running one:
//   - the release tag is a plain, newer x.y.z version (no prereleases, no downgrades)
//   - the asset is fetched from github.com/<REPO>/releases/download/<tag>/<exact name>, and
//     every redirect must stay on HTTPS GitHub hosts
//   - its size is bounded, and its SHA-256 matches SHA256SUMS from the same release and, when
//     GitHub reports one, the asset digest from the API. SHA256SUMS comes from the same place
//     as the binary, so it catches corruption and truncation rather than a compromised release.
//   - the new binary runs and prints the expected version
// The swap is a rename within the binary's folder, with a rollback on Windows.

import { execFile, spawn } from 'node:child_process';
import { createHash, randomBytes } from 'node:crypto';
import { access, chmod, constants, open, readFile, rename, rm, stat } from 'node:fs/promises';
import { realpathSync } from 'node:fs';
import { join, dirname, basename, win32 } from 'node:path';
import { ensureCacheDir, readLimited, writeAtomic } from './data.js';
import { VERSION } from './version.js';

export const REPO = 'privacyratings/privacyratings.com';
export const PACKAGE = 'privacyratings';
const DAY = 24 * 60 * 60 * 1000;
const LOCK_STALE = 15 * 60 * 1000;
const MAX_BINARY = 300 * 1024 * 1024;
const MAX_SUMS = 64 * 1024;
const MAX_API = 2 * 1024 * 1024;
export const GITHUB_HOSTS = new Set(['github.com', 'api.github.com', 'objects.githubusercontent.com', 'release-assets.githubusercontent.com', 'github-releases.githubusercontent.com']);

// Semantic versions: x.y.z with an optional -prerelease. Anything else is not a version.
const SEMVER = /^v?(0|[1-9]\d{0,8})\.(0|[1-9]\d{0,8})\.(0|[1-9]\d{0,8})(?:-([0-9A-Za-z.-]{1,64}))?$/;
export const parseVersion = (v) => {
  const m = SEMVER.exec(String(v ?? ''));
  return m ? { nums: [Number(m[1]), Number(m[2]), Number(m[3])], pre: m[4] ? m[4].split('.') : [] } : null;
};
export const isRelease = (v) => {
  const p = parseVersion(v);
  return Boolean(p && !p.pre.length);
};

// True when a is a higher version than b. Unparseable versions are never newer.
export function newer(a, b) {
  const pa = parseVersion(a);
  const pb = parseVersion(b);
  if (!pa || !pb) return false;
  for (let i = 0; i < 3; i++) if (pa.nums[i] !== pb.nums[i]) return pa.nums[i] > pb.nums[i];
  // 1.0.0 is newer than 1.0.0-beta.1; prerelease identifiers compare per semver.
  if (!pa.pre.length || !pb.pre.length) return !pa.pre.length && pb.pre.length > 0;
  for (let i = 0; i < Math.max(pa.pre.length, pb.pre.length); i++) {
    const x = pa.pre[i];
    const y = pb.pre[i];
    if (x === undefined) return false;
    if (y === undefined) return true;
    if (x === y) continue;
    const nx = /^\d+$/.test(x);
    const ny = /^\d+$/.test(y);
    if (nx && ny) return Number(x) > Number(y);
    if (nx !== ny) return ny;
    return x > y;
  }
  return false;
}

const truthy = (v) => Boolean(v) && !/^(0|false|no|off)$/i.test(v);
export const updatesDisabled = (env = process.env) => truthy(env.PRIVACYRATINGS_NO_UPDATE) || truthy(env.CI) || truthy(env.PRIVACYRATINGS_BACKGROUND);

export async function isSea() {
  try {
    const sea = await import('node:sea');
    return sea.isSea();
  } catch {
    return false;
  }
}

// 'npm' only for a global npm install (<prefix>/lib/node_modules on macOS and Linux;
// %APPDATA%\npm\node_modules or the Node.js folder on Windows), never for a project's own
// node_modules, where `npm install -g` would be a surprise.
export function kindFromPath(script, { platform = process.platform, execPath = process.execPath, appData = process.env.APPDATA } = {}) {
  const norm = (p) => String(p || '').replace(/\\/g, '/').replace(/\/+$/, '');
  const s = norm(script);
  if (/\/_npx\//.test(s)) return 'npx';
  const m = /^(.*)\/node_modules\/privacyratings\/bin\/privacyratings\.js$/.exec(s);
  if (!m || m[1].includes('/node_modules')) return 'dev';
  if (platform === 'win32') {
    const prefixes = [win32.dirname(execPath), appData && win32.join(appData, 'npm')].filter(Boolean).map((p) => norm(p).toLowerCase());
    return prefixes.includes(m[1].toLowerCase()) ? 'npm' : 'dev';
  }
  return m[1].endsWith('/lib') ? 'npm' : 'dev';
}

export async function installKind() {
  if (await isSea()) return 'binary';
  let script = process.argv[1] || '';
  try {
    script = realpathSync(script);
  } catch {}
  return kindFromPath(script);
}

export function assetName(platform = process.platform, arch = process.arch) {
  const os = platform === 'win32' ? 'win' : platform;
  return `privacyratings-${os}-${arch}${platform === 'win32' ? '.exe' : ''}`;
}

async function stateFile() {
  const dir = await ensureCacheDir();
  return dir && join(dir, 'update.json');
}

async function readState() {
  try {
    const file = await stateFile();
    const state = file ? JSON.parse(await readFile(file, 'utf8')) : {};
    return state && typeof state === 'object' && !Array.isArray(state) ? state : {};
  } catch {
    return {};
  }
}

async function writeState(state) {
  try {
    const file = await stateFile();
    if (file) await writeAtomic(file, JSON.stringify(state));
  } catch {}
}

// One updater at a time. The lock is a file created exclusively in the private cache folder;
// a lock older than LOCK_STALE is from a process that died and is taken over.
async function lock() {
  const dir = await ensureCacheDir();
  if (!dir) return async () => {};
  const file = join(dir, 'update.lock');
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const handle = await open(file, 'wx', 0o600);
      await handle.writeFile(String(process.pid));
      await handle.close();
      return () => rm(file, { force: true }).catch(() => {});
    } catch (err) {
      if (err.code !== 'EEXIST') return async () => {};
      const info = await stat(file).catch(() => null);
      if (info && Date.now() - info.mtimeMs < LOCK_STALE) return null;
      await rm(file, { force: true }).catch(() => {});
    }
  }
  return null;
}

// Fetches from GitHub, following redirects by hand so every hop is checked.
export async function gh(url, { accept = 'application/vnd.github+json', timeout = 20000 } = {}) {
  let current = url;
  for (let hop = 0; hop < 6; hop++) {
    const u = new URL(current);
    if (u.protocol !== 'https:' || !GITHUB_HOSTS.has(u.hostname) || u.port) throw new Error(`Refusing to download from ${u.origin}`);
    let res;
    try {
      res = await fetch(u, { headers: { 'user-agent': `privacyratings-cli/${VERSION}`, accept }, signal: AbortSignal.timeout(timeout), redirect: 'manual' });
    } catch (err) {
      const why = err?.name === 'TimeoutError' ? 'timed out' : err?.cause?.code || err?.cause?.message || err?.message || 'failed';
      throw new Error(`Could not reach ${u.hostname} (${why}). Check your connection and try again.`);
    }
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      await res.body?.cancel().catch(() => {});
      current = new URL(res.headers.get('location'), u).href;
      continue;
    }
    return res;
  }
  throw new Error('Too many redirects');
}

export async function latestRelease() {
  const res = await gh(`https://api.github.com/repos/${REPO}/releases/latest`);
  if (!res.ok) throw new Error(`GitHub returned ${res.status}${res.status === 403 || res.status === 429 ? ' (rate limited, try again later)' : ''}`);
  const r = JSON.parse((await readLimited(res, MAX_API)).toString('utf8'));
  const tag = typeof r?.tag_name === 'string' ? r.tag_name : '';
  if (!isRelease(tag) || r.draft || r.prerelease) throw new Error('The latest release has no usable version');
  const assets = Object.create(null);
  for (const a of Array.isArray(r.assets) ? r.assets : []) {
    if (a && typeof a.name === 'string') assets[a.name] = { size: Number(a.size) || 0, digest: typeof a.digest === 'string' ? a.digest : null };
  }
  return { tag, version: tag.replace(/^v/, ''), assets };
}

const assetUrl = (release, name) => `https://github.com/${REPO}/releases/download/${encodeURIComponent(release.tag)}/${encodeURIComponent(name)}`;

async function download(release, name, max) {
  const info = release.assets[name];
  if (!info) throw new Error(`No ${name} in release ${release.tag}`);
  if (info.size > max) throw new Error(`${name} is too large`);
  const res = await gh(assetUrl(release, name), { accept: 'application/octet-stream', timeout: 5 * 60 * 1000 });
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  const body = await readLimited(res, max);
  if (info.size && body.length !== info.size) throw new Error(`${name} download was incomplete`);
  return body;
}

// Finds the checksum for `name` in a SHA256SUMS file ("<hex>  <name>" or "<hex> *<name>").
export function checksumFor(sums, name) {
  for (const line of sums.split(/\r?\n/)) {
    const m = /^([0-9a-fA-F]{64}) [ *](.+)$/.exec(line.trim());
    if (m && m[2] === name) return m[1].toLowerCase();
  }
  return null;
}

export async function verifiedBinary(release, name = assetName()) {
  const sums = (await download(release, 'SHA256SUMS', MAX_SUMS)).toString('utf8');
  const want = checksumFor(sums, name);
  if (!want) throw new Error(`SHA256SUMS has no checksum for ${name}, update skipped`);
  const bin = await download(release, name, MAX_BINARY);
  const got = createHash('sha256').update(bin).digest('hex');
  if (got !== want) throw new Error('Checksum mismatch, update skipped');
  const digest = release.assets[name].digest;
  if (digest && digest.toLowerCase() !== `sha256:${got}`) throw new Error('Checksum does not match the GitHub asset digest, update skipped');
  return bin;
}

function runVersion(file) {
  return new Promise((resolve) => {
    execFile(file, ['--version'], { timeout: 30000, windowsHide: true, env: { ...process.env, PRIVACYRATINGS_NO_UPDATE: '1' } }, (err, stdout) => resolve(err ? null : String(stdout).trim()));
  });
}

// Replaces the running binary. POSIX systems allow renaming over a running file; Windows
// allows renaming the running file out of the way first.
async function swapBinary(release) {
  const target = process.execPath;
  const dir = dirname(target);
  try {
    // Replacing the file is a rename, which needs write access to the folder only.
    await access(dir, constants.W_OK);
  } catch {
    throw new Error(`Cannot write to ${dir}. Run "sudo privacyratings update", or reinstall to a folder you own.`);
  }
  const bin = await verifiedBinary(release);

  const tmp = join(dir, `.${basename(target)}.${process.pid}.${randomBytes(4).toString('hex')}.new${process.platform === 'win32' ? '.exe' : ''}`);
  const old = `${target}.old`;
  let movedOld = false;
  try {
    const handle = await open(tmp, 'wx', 0o755);
    try {
      await handle.writeFile(bin);
      await handle.sync();
    } finally {
      await handle.close();
    }
    if (process.platform !== 'win32') await chmod(tmp, 0o755);
    const printed = await runVersion(tmp);
    if (printed !== release.version) throw new Error(`The new binary did not run correctly (${printed ?? 'no output'}), update skipped`);
    if (process.platform === 'win32') {
      await rm(old, { force: true });
      await rename(target, old);
      movedOld = true;
    }
    await rename(tmp, target);
  } catch (err) {
    if (movedOld) await rename(old, target).catch(() => {});
    await rm(tmp, { force: true }).catch(() => {});
    throw err;
  }
}

// npm is a .cmd script on Windows, which Node only runs through a shell. The arguments are
// fixed strings plus a version that matched SEMVER, so nothing reaches the shell unescaped.
// `privacyratings update` shows npm's own output, so errors like EACCES are explained.
function npmUpdate(version, { quiet = false } = {}) {
  if (!isRelease(version)) return Promise.reject(new Error('Bad version'));
  return new Promise((resolve, reject) => {
    const child = spawn('npm', ['install', '-g', `${PACKAGE}@${version}`], { stdio: quiet ? 'ignore' : ['ignore', 'inherit', 'inherit'], shell: process.platform === 'win32', windowsHide: true });
    child.on('error', (err) => reject(new Error(`Could not run npm (${err.code || err.message}). Update with: npm install -g ${PACKAGE}`)));
    child.on('exit', (code) => (code ? reject(new Error(`npm install -g ${PACKAGE}@${version} failed (exit code ${code}).`)) : resolve()));
  });
}

// Does the work. Used by `privacyratings update` and by the background process.
export async function update({ quiet = false } = {}) {
  const log = quiet ? () => {} : (m) => console.log(m);
  const unlock = await lock();
  if (!unlock) {
    if (quiet) return false;
    throw new Error('Another privacyratings update is running. Try again in a few minutes.');
  }
  try {
    const kind = await installKind();
    const release = await latestRelease();
    const state = await readState();
    await writeState({ ...state, checked: Date.now(), latest: release.version });
    if (!newer(release.version, VERSION)) {
      log(`privacyratings ${VERSION} is the latest version.`);
      return false;
    }

    try {
      if (kind === 'binary') {
        log(`Downloading privacyratings ${release.version}…`);
        await swapBinary(release);
      } else if (kind === 'npm') {
        log(`Running npm install -g ${PACKAGE}@${release.version}…`);
        await npmUpdate(release.version, { quiet });
      } else {
        log(`privacyratings ${release.version} is available. Install it with: npm install -g ${PACKAGE}`);
        return false;
      }
    } catch (err) {
      await writeState({ ...(await readState()), failed: release.version });
      throw err;
    }

    const { failed, ...rest } = await readState();
    await writeState({ ...rest, installed: release.version, from: VERSION });
    log(`Updated to privacyratings ${release.version}.`);
    return true;
  } finally {
    await unlock();
  }
}

// Called on every run. Returns a notice to print, if any, and starts a background check
// when the last one is more than a day old.
// `quiet` (for --json) still checks for updates but leaves the notice for a later run.
export async function autoUpdate({ disabled = false, quiet = false } = {}) {
  if (disabled || updatesDisabled()) return null;
  const state = await readState();
  const kind = await installKind();
  const latest = isRelease(state.latest) ? state.latest : null;
  const installed = isRelease(state.installed) ? state.installed : null;
  let notice = null;
  if (quiet) notice = null;
  else if (installed && installed !== state.announced && !newer(installed, VERSION) && newer(installed, isRelease(state.from) ? state.from : '0.0.0')) {
    notice = `privacyratings was updated to ${installed}.`;
    await writeState({ ...state, announced: installed });
  } else if (latest && newer(latest, VERSION) && (!['binary', 'npm'].includes(kind) || state.failed === latest)) {
    notice = kind === 'binary' ? `privacyratings ${latest} is available, but updating failed: run "privacyratings update"` : `privacyratings ${latest} is available: npm install -g ${PACKAGE}`;
  }

  if (!(Number(state.checked) > 0) || Date.now() - state.checked > DAY || state.checked > Date.now() + DAY) {
    await writeState({ ...(await readState()), checked: Date.now() });
    try {
      const args = (await isSea()) ? ['__update'] : [process.argv[1], '__update'];
      spawn(process.execPath, args, { detached: true, stdio: 'ignore', windowsHide: true, cwd: dirname(process.execPath), env: { ...process.env, PRIVACYRATINGS_BACKGROUND: '1' } })
        .on('error', () => {})
        .unref();
    } catch {}
  }

  // Clean up after a Windows swap.
  if (process.platform === 'win32' && kind === 'binary') rm(`${process.execPath}.old`, { force: true }).catch(() => {});
  return notice;
}

