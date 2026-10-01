'use strict';

// Loads everything once and derives what every page needs: URLs, related entries,
// comparison pairs, alternatives, jurisdictions and last-modified dates.

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { ROOT, readYaml, loadAll, criteriaFor, sortEntries, MIN_COVERAGE, jurisdictionInfo, parseEntryFile, isSlug } = require('./lib');

const site = readYaml(path.join(ROOT, 'site.yml'));
const BASE = (process.env.BASE_PATH ?? site.base_path ?? '').replace(/\/$/, '');
const SITE_URL = (process.env.SITE_URL || site.url).replace(/\/$/, '');
const REPO = `https://github.com/${site.repo}`;

const data = loadAll();
const { categories, criteria, entries, jurisdictions } = data;
const catById = Object.fromEntries(categories.map((c) => [c.id, c]));

// ---------- last modified dates from git ----------

function gitDates() {
  const dates = {};
  try {
    const out = execFileSync('git', ['log', '--format=@%cI', '--name-only', '--no-renames'], {
      cwd: ROOT,
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'ignore']
    });
    let current = null;
    for (const line of out.split('\n')) {
      if (line.startsWith('@')) current = line.slice(1);
      else if (line && current && !dates[line]) dates[line] = current;
    }
  } catch {}

  return dates;
}

const DATES = gitDates();
const NOW = new Date().toISOString();
const lastmod = (...files) =>
  files
    .map((f) => DATES[f])
    .filter(Boolean)
    .sort()
    .pop() || null;

// ---------- entry helpers ----------

const entryPath = (e) => `/${e.category}/${e.slug}/`;
const answered = (e) => e.rating.answers.filter((a) => !['unknown', 'n/a', 'pending'].includes(a.answer)).length;

// Thin pages are kept out of search indexes (they stay linked, in llms-full.txt and in the API).
function indexable(e) {
  return Boolean(e.pick || e.mainstream || e.body || e.juris || e.rating.coverage >= 25 || answered(e) >= 3);
}

for (const e of entries) {
  e.path = entryPath(e);
  e.indexable = indexable(e);
  e.affiliated = Boolean(e.disclosure);
  e.lastmod = lastmod(e.file, `scans/${e.category}--${e.slug}.json`);
}

const inCategory = {};
for (const c of categories) inCategory[c.id] = entries.filter((e) => e.category === c.id).sort(sortEntries);

// Category tables also show entries listed there with `also_in`, for example a macOS firewall under macOS hardening.
// Everything else (comparisons, picks, alternatives) uses the entry's own category.
const shownIn = {};
for (const c of categories) {
  const extra = entries.filter((e) => e.category !== c.id && (e.also_in || []).includes(c.id));
  shownIn[c.id] = [...inCategory[c.id], ...extra.sort((a, b) => sortEntries({ ...a, pick: false }, { ...b, pick: false }))];
}

// ---------- criteria anchors ----------

// Each criterion gets one anchor on /criteria/. A criterion id used by several categories (like
// e2ee for email providers and video calls) is written once per category, so the first one (the
// common criterion, or the first category in categories.yml) keeps the bare id and the others get
// "<category>-<id>". Keyed by the criterion object, which ratings share with criteria.byCategory.
const critAnchors = new Map();
{
  const taken = new Set();
  const add = (c, catId) => {
    let id = taken.has(c.id) ? `${catId}-${c.id}` : c.id;
    for (let n = 2; taken.has(id); n++) id = `${catId}-${c.id}-${n}`;
    taken.add(id);
    critAnchors.set(c, id);
  };
  for (const c of criteria.common) add(c, 'common');
  for (const cat of categories) for (const c of criteria.byCategory[cat.id] || []) add(c, cat.id);
}
const criterionAnchor = (c) => critAnchors.get(c) || c.id;

// ---------- products from the same vendor ----------

// Entries from the same company or project are linked to each other ("Also rated"), for example
// Forward Email as an email provider, email client and webmail. Grouped by `family` when set,
// otherwise by the website's registrable domain. Code hosts and app stores are not vendors.
const NOT_VENDOR = /(^|\.)(github\.com|gitlab\.com|codeberg\.org|sourceforge\.net|sr\.ht|launchpad\.net|framagit\.org|0xacab\.org|gumroad\.com|f-droid\.org|readthedocs\.io|play\.google\.com|apps\.apple\.com|apps\.microsoft\.com|addons\.mozilla\.org|addons\.thunderbird\.net|chromewebstore\.google\.com|apps\.nextcloud\.com)$/;
const HOSTED = /(^|\.)(wordpress\.com|github\.io|gitlab\.io|js\.org|sourceforge\.io|netlify\.app|vercel\.app|pages\.dev|blogspot\.com)$/;
const SUFFIX2 = /\.(co|com|org|net|ac|gov)\.[a-z]{2}$/;
function vendorKey(e) {
  if (e.family) return `family:${e.family}`;
  let host;
  try {
    host = new URL(e.website).hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
  if (NOT_VENDOR.test(host)) return null;
  if (HOSTED.test(host)) return host;
  return host.split('.').slice(SUFFIX2.test(host) ? -3 : -2).join('.');
}

const families = new Map();
for (const e of entries) {
  const k = vendorKey(e);
  if (!k) continue;
  if (!families.has(k)) families.set(k, []);
  families.get(k).push(e);
}

for (const e of entries) {
  const k = vendorKey(e);
  e.siblings = k ? families.get(k).filter((x) => x !== e) : [];
}

// ---------- guides for common searches ----------

const TOPIC_FILE = path.join(ROOT, 'topics.yml');
const answerOf = (e, id) => e.rating.answers.find((a) => a.criterion.id === id);
const topics = (fs.existsSync(TOPIC_FILE) ? readYaml(TOPIC_FILE) || [] : []).map((t) => {
  // The slug becomes the page path and output folder, so check it here too, not only in validate.js.
  if (!t || !isSlug(t.slug)) throw new Error(`topics.yml: guide slug ${JSON.stringify(t && t.slug)} must be kebab-case, like private-email`);
  let list;
  if (t.picks) {
    list = categories.flatMap((c) => inCategory[c.id].filter((e) => e.pick));
  } else if (t.vendor) {
    const keys = new Set([`${t.vendor}.com`, 'youtube.com', 'android.com'].filter((k) => t.vendor === 'google' || k === `${t.vendor}.com`));
    list = entries.filter((e) => keys.has(vendorKey(e)) && e.mainstream).sort((a, b) => a.category.localeCompare(b.category));
  } else {
    const req = Object.entries(t.require || {});
    list = (t.categories || [])
      .flatMap((id) => inCategory[id] || [])
      .filter((e) => {
        const applicable = req.filter(([id]) => answerOf(e, id));
        if (req.length && !applicable.length) return false;
        return applicable.every(([id, ok]) => ok.includes(answerOf(e, id).answer));
      })
      .sort(sortEntries)
      .slice(0, t.limit || 20);
  }
  // One item per product: the same name in several categories (for example a pick for both email
  // and forwarding) is listed once, with links to its other ratings.
  const seen = new Map();
  const also = new Map();
  list = list.filter((e) => {
    const key = e.name.toLowerCase();
    const first = seen.get(key);
    if (!first) {
      seen.set(key, e);
      return true;
    }
    also.set(first, [...(also.get(first) || []), e]);
    return false;
  });
  return { ...t, path: `/${t.slug}/`, list, also };
});

// ---------- comparisons and alternatives ----------

const slugPair = (a, b) => `${a.slug}-vs-${b.slug}`;
const comparisons = [];
const seenPairs = new Set();
for (const c of categories) {
  const list = inCategory[c.id];
  const picks = list.filter((e) => e.pick);
  const others = list.filter((e) => !e.pick && (e.mainstream || (e.indexable && answered(e) >= 2)));
  const add = (a, b) => {
    const key = [a.slug, b.slug].sort().join('|');
    if (a === b || seenPairs.has(`${c.id}:${key}`)) return;
    seenPairs.add(`${c.id}:${key}`);
    comparisons.push({ category: c.id, a, b, path: `/compare/${c.id}/${slugPair(a, b)}/` });
  };

  for (const p of picks) for (const o of [...picks, ...others]) add(p, o);
}

// "Alternatives to X" pages for mainstream products, listing the best-rated non-mainstream entries.
// `alternatives_page: true` adds the same page for an entry that is not mainstream.
const alternatives = entries
  .filter((e) => e.mainstream || e.alternatives_page)
  .map((e) => ({
    entry: e,
    path: `/alternatives/${e.slug}/`,
    list: inCategory[e.category].filter((x) => x !== e && !x.mainstream && x.rating.grade).slice(0, 15)
  }))
  .filter((a) => a.list.length >= 2);

// Vendor guides (such as De-Google): each product with its replacements. `replace` in topics.yml
// is the curated list; other products from the vendor get their best-rated alternatives from other vendors.
const byId = new Map(entries.map((e) => [`${e.category}/${e.slug}`, e]));
for (const g of topics.filter((x) => x.vendor)) {
  const vendorOf = new Set(g.list.map(vendorKey));
  const curated = Object.entries(g.replace || {}).map(([id, ids]) => {
    const product = byId.get(id);
    if (!product) throw new Error(`topics.yml ${g.slug}: unknown entry ${id}`);
    const alts = ids.map((x) => {
      const e = byId.get(x);
      if (!e) throw new Error(`topics.yml ${g.slug}: unknown entry ${x}`);
      return e;
    });
    return { product, alts };
  });
  const done = new Set(curated.map((r) => r.product));
  const auto = g.list
    .filter((e) => !done.has(e))
    .map((product) => ({
      product,
      alts: (alternatives.find((a) => a.entry === product)?.list || []).filter((e) => !vendorOf.has(vendorKey(e))).slice(0, 4)
    }))
    .filter((r) => r.alts.length);
  g.replacements = [...curated, ...auto];
  g.list = g.replacements.map((r) => r.product);
}

// "Open-source X" pages: entries whose open_source answer is yes.
// Source-available code counts for the score but not for these lists.
const isOpenSource = (e) => e.rating.answers.some((a) => a.criterion.id === 'open_source' && a.answer === 'yes' && !a.source_available);
const openSource = categories
  .map((c) => ({ category: c, path: `/open-source/${c.id}/`, list: inCategory[c.id].filter(isOpenSource) }))
  .filter((o) => o.list.length >= 3);

// ---------- jurisdictions ----------

const countries = Object.keys(jurisdictions.countries)
  .map((code) => {
    const info = jurisdictionInfo(code, jurisdictions);
    const list = entries.filter((e) => e.jurisdiction === code).sort((a, b) => a.name.localeCompare(b.name));
    return { ...info, path: `/jurisdictions/${info.slug}/`, entries: list };
  })
  .filter((c) => c.entries.length)
  .sort((a, b) => b.entries.length - a.entries.length || a.name.localeCompare(b.name));

// ---------- static pages written in Markdown ----------

const PAGE_DIR = path.join(ROOT, 'pages');
const pages = fs.existsSync(PAGE_DIR)
  ? fs
      .readdirSync(PAGE_DIR)
      .filter((f) => f.endsWith('.md'))
      .map((f) => {
        const { data: meta, body } = parseEntryFile(path.join(PAGE_DIR, f));
        return { ...meta, slug: f.replace(/\.md$/, ''), body, file: `pages/${f}`, path: `/${f.replace(/\.md$/, '')}/` };
      })
  : [];

const DOCS = [
  { file: 'WHY.md', path: '/why/', title: 'Why Privacy Ratings exists', description: 'The reasons behind Privacy Ratings and how it differs from other privacy guides.' },
  { file: 'CONTRIBUTING.md', path: '/contribute/', title: 'Contribute to Privacy Ratings', description: 'How to suggest, correct and review privacy ratings on GitHub.' },
  { file: 'GOVERNANCE.md', path: '/governance/', title: 'Governance and conflicts of interest', description: 'How decisions, picks and conflicts of interest are handled at Privacy Ratings.' },
  { file: 'SCANS.md', path: '/tests/', title: 'Automated security tests', description: 'How hosted services are tested with SSL Labs, Mozilla HTTP Observatory, Internet.nl and Hardenize.' }
].map((d) => ({ ...d, body: fs.readFileSync(path.join(ROOT, d.file), 'utf8') }));

module.exports = {
  site,
  BASE,
  SITE_URL,
  REPO,
  NOW,
  MIN_COVERAGE,
  categories,
  catById,
  criteria,
  criteriaFor,
  entries,
  inCategory,
  shownIn,
  comparisons,
  alternatives,
  openSource,
  topics,
  countries,
  jurisdictions,
  pages,
  DOCS,
  lastmod,
  answered,
  criterionAnchor
};
