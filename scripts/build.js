'use strict';

// Builds the whole site into _site/: HTML pages, Markdown copies, JSON API, llms.txt,
// sitemap, robots.txt and feed. Everything is generated from the data files.
// Run with `npm run build`.

const fs = require('node:fs');
const path = require('node:path');
const { ROOT } = require('./lib');
const ctx = require('./context');
const t = require('./templates');
const m = require('./machine');
const badges = require('./badges');
const og = require('./og');
const i18n = require('./i18n');
const { dataStrings, entryStrings } = require('./i18n-data');

const OUT = path.join(ROOT, '_site');
const { categories, entries, comparisons, alternatives, openSource, topics, countries, pages, DOCS, site, BASE, SITE_URL } = ctx;
const sitemaps = { en: [] };
let sitemapUrls = sitemaps.en;
let langDir = '';

// Paths come from data files (slugs, category ids, guide slugs, locale codes), so every write is
// checked to stay inside _site/.
function write(file, content) {
  const full = path.resolve(OUT, file);
  if (!full.startsWith(OUT + path.sep)) throw new Error(`Refusing to write outside _site/: ${file}`);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
}

// Page paths are lowercase kebab-case segments, like /email-providers/proton-mail/. Two pages with
// the same path (for example a guide slug that equals a category id) would silently overwrite each other.
const PAGE_PATH = /^\/([a-z0-9]+(-[a-z0-9]+)*\/)*$/;
const written = new Set();

// Write a page as HTML plus a Markdown copy, and list it in the sitemap when indexable.
function page(p, html, markdown, { index = true, lastmod = null } = {}) {
  if (!PAGE_PATH.test(p)) throw new Error(`Invalid page path ${JSON.stringify(p)}`);
  const id = `${langDir}${p}`;
  if (written.has(id)) throw new Error(`Two pages share the path ${id}`);
  written.add(id);
  const dir = path.join(langDir, p === '/' ? '' : p.replace(/^\//, ''));
  write(path.join(dir, 'index.html'), html);
  if (markdown && !langDir) write(path.join(dir, 'index.md'), markdown);
  if (index) sitemapUrls.push({ path: `${langDir ? `/${langDir}` : ''}${p}`, lastmod: lastmod ? lastmod.slice(0, 10) : null });
}

// Pages published in every language. Comparisons and most single ratings stay English-only
// to keep the site within GitHub Pages' size limit; picks are translated, and the alternatives
// pages cover searches for well-known products.
const translatedEntries = entries.filter((e) => e.pick || e.alternatives_page);
const localizedPaths = new Set([
  '/',
  '/criteria/',
  '/badges/',
  '/cli/',
  '/search/',
  ...categories.map((c) => `/${c.id}/`),
  ...translatedEntries.map((e) => e.path),
  ...alternatives.map((a) => a.path),
  ...openSource.map((o) => o.path),
  ...topics.map((g) => g.path),
  ...countries.map((c) => c.path),
  ...pages.map((p) => p.path),
  ...DOCS.map((d) => d.path)
]);
t.setLocalized(localizedPaths);
i18n.record(true);

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
fs.cpSync(path.join(ROOT, 'site'), OUT, { recursive: true });
// Minify the one script and stylesheet. The sources in site/ stay readable.
{
  const esbuild = require('esbuild');
  for (const [file, loader] of [['app.js', 'js'], ['style.css', 'css']]) {
    const src = fs.readFileSync(path.join(ROOT, 'site', file), 'utf8');
    fs.writeFileSync(path.join(OUT, file), esbuild.transformSync(src, { loader, minify: true, target: loader === 'js' ? 'es2017' : ['chrome100', 'firefox100', 'safari15'], legalComments: 'none' }).code);
  }
}

// Pages
page('/', t.homePage(), m.homeMd(), { lastmod: entries.map((e) => e.lastmod).filter(Boolean).sort().pop() });
for (const c of categories) {
  const list = entries.filter((e) => e.category === c.id);
  page(`/${c.id}/`, t.categoryPage(c), m.categoryMd(c), { lastmod: list.map((e) => e.lastmod).filter(Boolean).sort().pop() });
}

for (const e of entries) {
  page(e.path, t.entryPage(e), m.entryMd(e), { index: e.indexable, lastmod: e.lastmod });
  write(`api/entries/${e.category}/${e.slug}.json`, JSON.stringify(m.entryJson(e), null, 2));
  for (const s of badges.STYLES) write(badges.badgePath(e, s.suffix).slice(1), badges.badgeSvg(e, s.id, ctx.catById[e.category].name));
  write(badges.badgePath(e, '', 'json').slice(1), JSON.stringify(badges.badgeJson(e)));
}

for (const c of comparisons) page(c.path, t.comparePage(c), m.compareMd(c), { lastmod: [c.a.lastmod, c.b.lastmod].filter(Boolean).sort().pop() });
for (const a of alternatives) page(a.path, t.alternativesPage(a), m.alternativesMd(a), { lastmod: a.entry.lastmod });
for (const g of topics) page(g.path, t.topicPage(g), m.topicMd(g), { lastmod: g.list.map((e) => e.lastmod).filter(Boolean).sort().pop() });
for (const o of openSource) page(o.path, t.openSourcePage(o), m.openSourceMd(o), { lastmod: o.list.map((e) => e.lastmod).filter(Boolean).sort().pop() });
for (const c of countries) page(c.path, t.countryPage(c), m.countryMd(c), { lastmod: ctx.lastmod('jurisdictions.yml') });

for (const p of pages) {
  if (p.slug === 'jurisdictions') page(p.path, t.jurisdictionsPage(p), m.jurisdictionsMd(p), { lastmod: ctx.lastmod(p.file, 'jurisdictions.yml') });
  else page(p.path, t.docPage(p), p.body, { lastmod: ctx.lastmod(p.file) });
}

for (const d of DOCS) page(d.path, t.docPage(d), d.body, { lastmod: ctx.lastmod(d.file) });
page('/criteria/', t.criteriaPage(), m.criteriaMd(), { lastmod: ctx.lastmod('criteria/_common.yml') });
page('/badges/', t.badgesPage(), m.badgesMd());
page('/cli/', t.cliPage(), m.cliMd());
page('/search/', t.searchPage(), null, { index: false });
write('404.html', t.notFound());

// Machine-readable files
write('index.md', m.homeMd());
write('llms.txt', m.llmsTxt());
write('llms-full.txt', m.llmsFullTxt());
write('api/ratings.json', JSON.stringify(m.ratingsJson(), null, 2));
write('api/search.json', JSON.stringify(m.searchJson()));
write('api/cli.json', JSON.stringify(m.cliJson()));
fs.copyFileSync(path.join(ROOT, 'cli', 'install.sh'), path.join(OUT, 'install.sh'));
fs.copyFileSync(path.join(ROOT, 'cli', 'install.ps1'), path.join(OUT, 'install.ps1'));
write('robots.txt', m.robots());
write('feed.xml', m.feed());
write('site.webmanifest', m.manifest());
write('.nojekyll', '');
// Custom domain: the CNAME file at the repository root (kept in sync with site.yml's url).
if (!BASE) {
  const cname = fs.existsSync(path.join(ROOT, 'CNAME')) ? fs.readFileSync(path.join(ROOT, 'CNAME'), 'utf8').trim() : site.url && new URL(site.url).hostname;
  if (site.url && cname !== new URL(site.url).hostname) throw new Error(`CNAME (${cname}) does not match the url in site.yml`);
  if (cname) write('CNAME', `${cname}\n`);
}

write('sw.js', m.serviceWorker());
page('/offline/', t.offlinePage(), null, { index: false });

// Interface strings seen while building the English site: the list translators work from.
{
  const used = i18n.record(false);
  const skip = new Set([...dataStrings(), ...entryStrings(), ...DOCS.map((d) => d.body), ...pages.map((p) => p.body)]);
  const ui = [...used.keys()].filter((k) => !skip.has(k) && /[A-Za-z]/.test(k)).sort();
  const js = [...fs.readFileSync(path.join(ROOT, 'site', 'app.js'), 'utf8').matchAll(/\bT\('((?:[^'\\]|\\.)+)'/g)].map((x) => x[1].replace(/\\'/g, "'"));
  const src = path.join(ROOT, 'i18n', 'source');
  fs.mkdirSync(src, { recursive: true });
  const save = (f, list) => fs.writeFileSync(path.join(src, f), `${JSON.stringify([...new Set(list)], null, 1)}\n`);
  save('ui.json', [...ui, ...js]);
  fs.writeFileSync(path.join(src, 'plurals.json'), `${JSON.stringify(Object.fromEntries([...i18n.recordedPlurals()].sort()), null, 1)}\n`);
  save('app.json', js);
  save('data.json', dataStrings());
  save('entries.json', entryStrings());
  const docs = path.join(src, 'pages');
  fs.mkdirSync(docs, { recursive: true });
  for (const d of [...DOCS, ...pages]) fs.writeFileSync(path.join(docs, path.basename(d.file)), `<!-- source: ${i18n.hash(d.body)} -->\n${d.body}`);
}

// Every other language.
const appKeys = JSON.parse(fs.readFileSync(path.join(ROOT, 'i18n', 'source', 'app.json'), 'utf8'));
for (const loc of i18n.LOCALES.filter((l) => l.code !== i18n.DEFAULT)) {
  if (!/^[a-z]{2,3}(-[A-Za-z0-9]{2,8})*$/.test(loc.code)) throw new Error(`i18n/locales.yml: invalid code ${JSON.stringify(loc.code)}`);
  if (written.has(`/${loc.code}/`)) throw new Error(`Locale code ${loc.code} clashes with a page path`);
  i18n.setLocale(loc.code);
  langDir = loc.code;
  sitemapUrls = sitemaps[loc.code] = [];
  page('/', t.homePage(), null, { lastmod: entries.map((e) => e.lastmod).filter(Boolean).sort().pop() });
  for (const c of categories) page(`/${c.id}/`, t.categoryPage(c), null, { lastmod: entries.filter((e) => e.category === c.id).map((e) => e.lastmod).filter(Boolean).sort().pop() });
  for (const e of translatedEntries) page(e.path, t.entryPage(e), null, { index: e.indexable, lastmod: e.lastmod });
  for (const a of alternatives) page(a.path, t.alternativesPage(a), null, { lastmod: a.entry.lastmod });
  for (const g of topics) page(g.path, t.topicPage(g), null, { lastmod: g.list.map((e) => e.lastmod).filter(Boolean).sort().pop() });
  for (const o of openSource) page(o.path, t.openSourcePage(o), null, { lastmod: o.list.map((e) => e.lastmod).filter(Boolean).sort().pop() });
  for (const c of countries) page(c.path, t.countryPage(c), null, { lastmod: ctx.lastmod('jurisdictions.yml') });
  for (const p of pages) page(p.path, p.slug === 'jurisdictions' ? t.jurisdictionsPage(p) : t.docPage(p), null, { lastmod: ctx.lastmod(p.file) });
  for (const d of DOCS) page(d.path, t.docPage(d), null, { lastmod: ctx.lastmod(d.file) });
  page('/criteria/', t.criteriaPage(), null, { lastmod: ctx.lastmod('criteria/_common.yml') });
  page('/badges/', t.badgesPage(), null);
  page('/cli/', t.cliPage(), null);
  page('/search/', t.searchPage(), null, { index: false });
  write(`${loc.code}/api/search.json`, JSON.stringify(m.searchJson()));
  const dict = Object.fromEntries(appKeys.map((k) => [k, i18n.t(k)]).filter(([k, v]) => v !== k));
  write(`i18n/${loc.code}.js`, `window.PR_T=${JSON.stringify(dict)};\n`);
}
i18n.setLocale(i18n.DEFAULT);
langDir = '';

// Sitemaps: one per language, and an index at /sitemap.xml.
const newest = (list) => list.map((x) => x.lastmod).filter(Boolean).sort().pop();
const sitemapFiles = Object.entries(sitemaps).map(([code, list]) => {
  const file = `sitemap-${code}.xml`;
  write(file, m.sitemap(list));
  return { file, lastmod: newest(list) };
});
write('sitemap.xml', m.sitemapIndex(sitemapFiles));

// Social images, one per page, then the site-wide default (the home page image).
og.renderAll(t.ogJobs, OUT)
  .then(({ total, rendered }) => {
    fs.copyFileSync(path.join(OUT, 'og', 'home.png'), path.join(OUT, 'og.png'));
    console.log(`Social images: ${total} (${rendered} newly rendered, the rest from .cache/og)`);
  })
  .catch((err) => {
    // Fail the build: pages link to these images.
    console.error('Social images failed:', err);
    process.exitCode = 1;
  });

const count = (dir) => fs.readdirSync(dir, { recursive: true }).filter((f) => String(f).endsWith('index.html')).length;
const inSitemaps = Object.values(sitemaps).reduce((n, l) => n + l.length, 0);
const size = (dir) => fs.readdirSync(dir, { recursive: true, withFileTypes: true }).filter((d) => d.isFile()).reduce((n, d) => n + fs.statSync(path.join(d.parentPath || d.path, d.name)).size, 0);
console.log(`Languages: ${i18n.LOCALES.length}, ${localizedPaths.size} pages each besides English`);
process.on('exit', () => {
  const mb = size(OUT) / 1e6;
  console.log(`Site size: ${mb.toFixed(0)} MB${mb > 950 ? ' (over the GitHub Pages budget of 950 MB)' : ''}`);
  if (mb > 1000) process.exitCode = 1;
});
console.log(`Built ${count(OUT)} pages (${inSitemaps} in the sitemaps) for ${entries.length} entries in ${categories.length} categories: ${comparisons.length} comparisons, ${alternatives.length} alternatives pages, ${openSource.length} open-source lists, ${topics.length} guides, ${countries.length} jurisdictions. Site URL: ${SITE_URL}`);
