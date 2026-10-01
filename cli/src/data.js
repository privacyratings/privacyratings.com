// Loads ratings from privacyratings.com and keeps a copy on disk, so repeat runs are
// instant and the tool still works offline with the last data it saw.

import { randomBytes } from 'node:crypto';
import { mkdir, open, readFile, rename, rm, stat } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { VERSION } from './version.js';

const DEFAULT_SITE = 'https://privacyratings.com';
const HOUR = 60 * 60 * 1000;
const MAX_JSON = 32 * 1024 * 1024;

// PRIVACYRATINGS_URL is for testing against a local build of the site. It must be https, or
// http on this machine; anything else is refused rather than silently sending requests there.
export function siteFrom(value) {
  if (!value) return DEFAULT_SITE;
  let u;
  try {
    u = new URL(value);
  } catch {
    return null;
  }
  const local = ['localhost', '127.0.0.1', '[::1]'].includes(u.hostname);
  if (!(u.protocol === 'https:' || (u.protocol === 'http:' && local)) || u.username || u.password || u.search || u.hash) return null;
  return u.href.replace(/\/+$/, '');
}

const siteSetting = siteFrom(process.env.PRIVACYRATINGS_URL);
export const SITE = siteSetting || DEFAULT_SITE;
const checkSite = () => {
  if (!siteSetting) throw new Error('PRIVACYRATINGS_URL must be an https:// URL (or http://localhost for testing).');
};

export function cacheDir() {
  if (process.env.PRIVACYRATINGS_CACHE) return process.env.PRIVACYRATINGS_CACHE;
  if (process.platform === 'win32') return join(process.env.LOCALAPPDATA || join(homedir(), 'AppData', 'Local'), 'privacyratings', 'cache');
  if (process.platform === 'darwin') return join(homedir(), 'Library', 'Caches', 'privacyratings');
  return join(process.env.XDG_CACHE_HOME || join(homedir(), '.cache'), 'privacyratings');
}

// Creates the cache folder (private to this user) and checks that nobody else can write to it,
// so a PRIVACYRATINGS_CACHE in a shared folder like /tmp cannot be used to plant data or
// symlinks. Returns the folder, or null when there should be no cache.
export async function ensureCacheDir() {
  const dir = cacheDir();
  try {
    await mkdir(dir, { recursive: true, mode: 0o700 });
    const info = await stat(dir);
    if (!info.isDirectory()) return null;
    if (process.platform !== 'win32') {
      if (typeof process.getuid === 'function' && info.uid !== process.getuid()) return null;
      if (info.mode & 0o002) return null;
    }
    return dir;
  } catch {
    return null;
  }
}

// Writes a file atomically: a new, exclusively created file in the same folder is renamed over
// the old one, so readers never see half a file and an existing symlink is replaced, not followed.
export async function writeAtomic(file, contents, mode = 0o600) {
  const tmp = `${file}.${process.pid}.${randomBytes(4).toString('hex')}.tmp`;
  let handle;
  try {
    handle = await open(tmp, 'wx', mode);
    await handle.writeFile(contents);
    await handle.close();
    handle = null;
    await rename(tmp, file);
  } catch (err) {
    await handle?.close().catch(() => {});
    await rm(tmp, { force: true }).catch(() => {});
    throw err;
  }
}

// Reads a response body, refusing more than `max` bytes so a bad server cannot exhaust memory.
export async function readLimited(res, max) {
  const declared = Number(res.headers.get('content-length'));
  if (declared > max) throw new Error(`Response too large (${declared} bytes)`);
  if (!res.body) return Buffer.alloc(0);
  const chunks = [];
  let size = 0;
  for await (const chunk of res.body) {
    size += chunk.length;
    if (size > max) throw new Error('Response too large');
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

// Cache files are named after the host (when it is not the default) and the path.
const fileFor = (dir, path) => {
  const host = SITE === DEFAULT_SITE ? '' : `${new URL(SITE).host}_`;
  return join(dir, `${host}${path}`.replace(/^\/+/, '').replace(/[^a-z0-9._-]+/gi, '_').replace(/^\.+/, '_'));
};

async function readCache(file) {
  try {
    const info = await stat(file);
    if (!info.isFile() || info.size > MAX_JSON * 2) return null;
    const { etag, data } = JSON.parse(await readFile(file, 'utf8'));
    return { etag: typeof etag === 'string' ? etag : null, data, age: Date.now() - info.mtimeMs };
  } catch {
    return null;
  }
}

async function writeCache(file, etag, data) {
  try {
    await writeAtomic(file, JSON.stringify({ etag, data }));
  } catch {
    // A read-only home directory only means no cache.
  }
}

// Fetch JSON with a disk cache. Fresh copies are used as is; stale ones are revalidated
// with the ETag; when the network fails, any cached copy is better than an error.
// `valid` checks the shape of the data; cached data that fails it is ignored.
export async function getJson(path, { maxAge = HOUR, refresh = false, valid = () => true } = {}) {
  checkSite();
  const dir = await ensureCacheDir();
  const file = dir && fileFor(dir, path);
  let cached = file && (await readCache(file));
  if (cached && !safeValid(valid, cached.data)) cached = null;
  if (cached && !refresh && cached.age >= 0 && cached.age < maxAge) return cached.data;
  try {
    const etag = cached?.etag && /^[\x21-\x7e ]{1,200}$/.test(cached.etag) ? cached.etag : null;
    const res = await fetch(`${SITE}${path}`, {
      headers: { 'user-agent': `privacyratings-cli/${VERSION}`, accept: 'application/json', ...(etag ? { 'if-none-match': etag } : {}) },
      signal: AbortSignal.timeout(15000)
    });
    if (res.status === 304 && cached) {
      if (file) await writeCache(file, cached.etag, cached.data);
      return cached.data;
    }
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const data = JSON.parse((await readLimited(res, MAX_JSON)).toString('utf8'));
    if (!safeValid(valid, data)) throw new Error('unexpected data');
    if (file) await writeCache(file, res.headers.get('etag'), data);
    return data;
  } catch (err) {
    if (cached) return cached.data;
    throw new Error(`Could not load ${SITE}${path} (${err.message}). Check your connection and try again.`);
  }
}

function safeValid(valid, data) {
  try {
    return Boolean(valid(data));
  } catch {
    return false;
  }
}

const isObj = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
export const validIndex = (d) => isObj(d) && Array.isArray(d.categories) && Array.isArray(d.entries);

// Category and slug come from the index, which prepare() has already restricted to
// [a-z0-9-], so they cannot change the path or the host.
export const loadIndex = (opts) => getJson('/api/cli.json', { ...opts, valid: validIndex });
export const loadEntry = (category, slug, opts) => getJson(`/api/entries/${encodeURIComponent(category)}/${encodeURIComponent(slug)}.json`, { ...opts, valid: isObj });
export const entryUrl = (e) => `${SITE}/${encodeURIComponent(e.c)}/${encodeURIComponent(e.s)}/`;
