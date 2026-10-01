'use strict';

// Adds entries from Awesome Privacy (https://github.com/lissy93/awesome-privacy, CC0).
//
// Only creates new files. Existing ratings are never changed, so curated data is safe.
// Sections map to categories through the `awesome` list in categories.yml.
//
// Usage:
//   npm run import                            Download the latest awesome-privacy.yml
//   npm run import -- ./awesome-privacy.yml   Use a local copy
//   npm run import -- --offline               Use the committed snapshot only
//
// The source is kept in vendor/awesome-privacy/. A download that fails, times out, is blocked or
// does not look like a real Awesome Privacy file falls back to that snapshot, so the import (and
// the monthly workflow) never fails because of Awesome Privacy. A good download refreshes it.

const fs = require('node:fs');
const path = require('node:path');
const YAML = require('yaml');
const net = require('node:net');
const { ROOT, loadCategories, loadEntries } = require('./lib');
const { readLimited, isPublicIp } = require('./trackers');

const SOURCES = [
  'https://raw.githubusercontent.com/Lissy93/awesome-privacy/main/awesome-privacy.yml',
  'https://cdn.jsdelivr.net/gh/Lissy93/awesome-privacy@main/awesome-privacy.yml'
];
const VENDOR = path.join(ROOT, 'vendor', 'awesome-privacy');
const SNAPSHOT = path.join(VENDOR, 'awesome-privacy.yml');
const META = path.join(VENDOR, 'meta.json');
// Sections that list payment methods or advice rather than apps or services.
const IGNORED = new Set(['Other Payment Methods']);
const TRACKING = /^(ref|aff|affiliate|utm_[a-z]+|via|coupon)$/i;
// The real file is well under 1 MB. Anything far larger is not it.
const MAX_BYTES = 10 * 1024 * 1024;
const HOSTNAME = /^(?=.{1,253}$)([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i;

const slugify = (s) =>
  s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const normName = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

// The source file is third-party data: only plain https URLs on public hostnames are kept.
function cleanUrl(raw) {
  if (typeof raw !== 'string' || !raw.trim()) return null;
  let url;
  try {
    url = new URL(raw.trim());
  } catch {
    return null;
  }

  if (url.protocol === 'http:') url.protocol = 'https:';
  if (url.protocol !== 'https:') return null;
  const ip = url.hostname.replace(/^\[|\]$/g, '');
  if (url.username || url.password || url.port || (net.isIP(ip) ? !isPublicIp(ip) : !HOSTNAME.test(url.hostname))) return null;
  for (const k of [...url.searchParams.keys()]) if (TRACKING.test(k)) url.searchParams.delete(k);
  return url.toString().replace(/\/$/, '');
}

// Repository fields are usually "owner/repo", but some hold a full URL.
const repoPath = (v, host) => String(v).trim().replace(new RegExp(`^https?://(www\\.)?${host.replace('.', '\\.')}/`), '').replace(/^\/|\/$/g, '');

function sourceUrl(s) {
  const onHost = (v, host) => {
    const url = cleanUrl(`https://${host}/${repoPath(v, host)}`);
    return url && new URL(url).hostname === host && /^https:\/\/[^/]+\/[A-Za-z0-9_.-]+(\/[A-Za-z0-9_.-]+)?$/.test(url) ? url : null;
  };
  if (s.github) return onHost(s.github, 'github.com');
  if (s.codeberg) return onHost(s.codeberg, 'codeberg.org');
  if (s.git) return cleanUrl(s.git);
  return null;
}

function clean(text) {
  return String(text || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

// Keep whole sentences, up to about 220 characters.
function shorten(text, max = 220) {
  if (text.length <= max) return text;
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [];
  let out = '';
  for (const sentence of sentences) {
    if ((out + sentence).trim().length > max) break;
    out += sentence;
  }

  if (out.trim()) return out.trim();
  return text.slice(0, max).replace(/\s+\S*$/, '') + '…';
}

function toFile(s, cat) {
  const website = cleanUrl(s.url);
  if (!website) return null;
  const source = sourceUrl(s);
  const host = new URL(website).hostname;
  const data = {
    name: s.name.trim(),
    description: shorten(clean(s.description)),
    website
  };
  if (source) data.source = source;
  if (cat.type === 'service' && !/^(github\.com|codeberg\.org|gitlab\.com)$/.test(host)) data.domain = host;
  if (s.openSource === true && source) {
    data.criteria = { open_source: { answer: 'yes', evidence: source } };
  }

  data.imported_from = 'awesome-privacy';
  return `---\n${YAML.stringify(data, { lineWidth: 0 })}---\n`;
}

// Number of listed services, or 0 when the text is not a usable Awesome Privacy file.
function countServices(text) {
  try {
    const data = YAML.parse(text);
    if (!data || !Array.isArray(data.categories)) return 0;
    let n = 0;
    for (const g of data.categories) for (const s of g.sections || []) n += (s.services || []).length;
    return n;
  } catch {
    return 0;
  }
}

async function download(url, attempts = 3) {
  for (let i = 1; i <= attempts; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(30000), headers: { 'user-agent': 'privacyratings-import (+https://github.com/privacyratings/privacyratings.com)' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await readLimited(res, MAX_BYTES + 1);
      if (Buffer.byteLength(text) > MAX_BYTES) throw new Error(`larger than ${MAX_BYTES} bytes`);
      return text;
    } catch (err) {
      console.warn(`Download ${i}/${attempts} from ${url} failed: ${err.message}`);
      if (i < attempts) await new Promise((r) => setTimeout(r, 2000 * i));
    }
  }
  return null;
}

// The newest trustworthy copy: a fresh download when it looks complete, otherwise the snapshot.
async function loadSource() {
  const snapshot = fs.existsSync(SNAPSHOT) ? fs.readFileSync(SNAPSHOT, 'utf8') : null;
  const known = snapshot ? countServices(snapshot) : 0;
  if (process.argv.includes('--offline')) {
    if (!known) throw new Error(`No usable snapshot at ${SNAPSHOT}`);
    return { text: snapshot, from: 'snapshot' };
  }

  for (const url of SOURCES) {
    const text = await download(url);
    if (!text) continue;
    const count = countServices(text);
    if (!count) {
      console.warn(`${url} did not return a valid Awesome Privacy file. Ignoring it.`);
      continue;
    }
    // A sudden large drop usually means a broken or replaced file, not real removals.
    if (known && count < known * 0.5) {
      console.warn(`${url} lists ${count} services, down from ${known}. Keeping the snapshot.`);
      continue;
    }
    if (text !== snapshot) {
      fs.mkdirSync(VENDOR, { recursive: true });
      fs.writeFileSync(SNAPSHOT, text);
      fs.writeFileSync(META, `${JSON.stringify({ source: url, services: count, updated: new Date().toISOString().slice(0, 10) }, null, 2)}\n`);
      console.log(`Snapshot updated from ${url} (${count} services).`);
    }
    return { text, from: url };
  }

  if (!known) {
    console.warn('Awesome Privacy could not be downloaded and there is no snapshot. Nothing imported.');
    return null;
  }
  console.warn(`Awesome Privacy could not be downloaded. Using the snapshot (${known} services).`);
  return { text: snapshot, from: 'snapshot' };
}

async function main() {
  const local = process.argv.slice(2).find((a) => !a.startsWith('--'));
  const source = local ? { text: fs.readFileSync(local, 'utf8'), from: local } : await loadSource();
  if (!source) return;
  const awesome = YAML.parse(source.text);

  const categories = loadCategories();
  const existing = loadEntries(categories);
  // Names already listed, names entries were first imported under, and entries removed on purpose.
  const skipFile = path.join(ROOT, 'import-skip.yml');
  const skipped = fs.existsSync(skipFile) ? YAML.parse(fs.readFileSync(skipFile, 'utf8')) || [] : [];
  const names = new Set([
    ...existing.map((e) => normName(e.name)),
    ...existing.filter((e) => e.imported_name).map((e) => normName(e.imported_name)),
    ...skipped.map((x) => normName(x.name))
  ]);
  const hosts = new Set(
    existing.map((e) => {
      try {
        return `${e.category}:${new URL(e.website).hostname.replace(/^www\./, '')}`;
      } catch {
        return '';
      }
    })
  );

  const sectionToCat = new Map();
  for (const c of categories) for (const s of c.awesome) sectionToCat.set(s, c);

  let added = 0;
  const unmapped = new Set();
  for (const group of awesome.categories) {
    for (const section of group.sections || []) {
      const cat = sectionToCat.get(section.name);
      if (!cat) {
        if (!IGNORED.has(section.name)) unmapped.add(section.name);
        continue;
      }

      const items = [...(section.services || []), ...(section.notableMentions || [])];
      for (const s of items) {
        // Skip items without a description rather than inventing one.
        if (typeof s?.name !== 'string' || !s.name.trim() || typeof s.url !== 'string' || !clean(s.description)) continue;
        const website = cleanUrl(s.url);
        if (!website) continue;
        const hostKey = `${cat.id}:${new URL(website).hostname.replace(/^www\./, '')}`;
        const isRepoHost = /:(github\.com|codeberg\.org|gitlab\.com)$/.test(hostKey);
        if (names.has(normName(s.name)) || (!isRepoHost && hosts.has(hostKey))) continue;

        const slug = slugify(s.name);
        if (!slug) continue;
        const file = path.join(ROOT, 'ratings', cat.id, `${slug}.md`);
        if (fs.existsSync(file)) continue;
        const content = toFile(s, cat);
        if (!content) continue;
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, content);
        names.add(normName(s.name));
        hosts.add(hostKey);
        added++;
      }
    }
  }

  if (unmapped.size) console.warn(`Sections without a category (add them to categories.yml): ${[...unmapped].join(', ')}`);
  console.log(`Added ${added} new entries.`);
}

// The import is a convenience: report problems, but never fail the workflow over them.
main().catch((err) => {
  console.error(`Import skipped: ${err.message}`);
});
