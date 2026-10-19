'use strict';

// Search and AI-crawler details of the generated pages: titles, descriptions, canonical and social
// tags, structured data, robots.txt, llms.txt and the sitemap. Pages are rendered with the same
// templates the build uses, then parsed. Run with `npm run test:unit`.

const test = require('node:test');
const assert = require('node:assert');
const templates = require('../scripts/templates');
const machine = require('../scripts/machine');
const ctx = require('../scripts/context');
const i18n = require('../scripts/i18n');

const SITE = ctx.SITE_URL;
const decode = (s) => s.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const meta = (html, attr, name) => {
  const m = html.match(new RegExp(`<meta ${attr}="${name}" content="([^"]*)"`));
  return m ? decode(m[1]) : null;
};
const graph = (html) => {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert.strictEqual(blocks.length, 1, 'one JSON-LD block');
  const data = JSON.parse(blocks[0][1]);
  assert.strictEqual(data['@context'], 'https://schema.org');
  return data['@graph'];
};
// Inline tags join their text; block tags separate it.
const text = (html) => decode(html.replace(/<\/?(a|strong|em|code|span|abbr|time)\b[^>]*>/g, '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ');

// One page of every type, rendered the way build.js renders it.
function samples() {
  const cat = ctx.categories.find((c) => ctx.inCategory[c.id].some((e) => e.pick)) || ctx.categories[0];
  const entry = ctx.entries.find((e) => e.pick && e.rating.grade) || ctx.entries[0];
  const compare = ctx.comparisons.find((c) => c.a.disclosure || c.b.disclosure) || ctx.comparisons[0];
  const alt = ctx.alternatives.find((a) => a.list.some((x) => x.pick)) || ctx.alternatives[0];
  const altNoPick = ctx.alternatives.find((a) => !a.list.some((x) => x.pick));
  const privacy = ctx.pages.find((p) => p.slug === 'privacy');
  const list = [
    ['/', templates.homePage()],
    [`/${cat.id}/`, templates.categoryPage(cat)],
    [entry.path, templates.entryPage(entry)],
    [compare.path, templates.comparePage(compare)],
    [alt.path, templates.alternativesPage(alt)],
    [ctx.topics[0].path, templates.topicPage(ctx.topics[0])],
    [ctx.openSource[0].path, templates.openSourcePage(ctx.openSource[0])],
    [ctx.countries[0].path, templates.countryPage(ctx.countries[0])],
    ['/criteria/', templates.criteriaPage()],
    ['/badges/', templates.badgesPage()],
    ['/cli/', templates.cliPage()],
    [privacy.path, templates.docPage(privacy)],
    [ctx.DOCS[0].path, templates.docPage(ctx.DOCS[0])]
  ];
  if (altNoPick) list.push([altNoPick.path, templates.alternativesPage(altNoPick)]);
  return list;
}

test('every page type has a title, description, canonical URL, social tags and one h1', () => {
  for (const [pathname, html] of samples()) {
    const title = decode(html.match(/<title>([^<]*)<\/title>/)[1]);
    assert.ok(Array.from(title).length <= 70, `${pathname}: title too long (${title})`);
    const desc = meta(html, 'name', 'description');
    assert.ok(desc && Array.from(desc).length >= 50 && Array.from(desc).length <= 160, `${pathname}: description length (${desc})`);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)">/)[1];
    assert.strictEqual(canonical, `${SITE}${pathname}`);
    assert.match(canonical, /^https:\/\//);
    assert.strictEqual(meta(html, 'property', 'og:url'), canonical, `${pathname}: og:url`);
    for (const p of ['og:title', 'og:description', 'og:image', 'og:image:alt', 'og:type', 'og:site_name']) assert.ok(meta(html, 'property', p), `${pathname}: ${p}`);
    assert.strictEqual(meta(html, 'property', 'og:image:width'), '1200');
    assert.strictEqual(meta(html, 'property', 'og:image:height'), '630');
    assert.match(meta(html, 'property', 'og:image'), /^https:\/\/.+\.png$/);
    assert.strictEqual(meta(html, 'name', 'twitter:card'), 'summary_large_image');
    assert.strictEqual((html.match(/<h1[\s>]/g) || []).length, 1, `${pathname}: one h1`);
    assert.match(html, /<html lang="en">/);
    assert.match(html, /<link rel="alternate" type="text\/markdown" href="[^"]+index\.md"/);
    for (const [, attrs] of html.matchAll(/<a ([^>]*target="_blank"[^>]*)>/g)) assert.match(attrs, /rel="[^"]*noopener/, `${pathname}: target=_blank without noopener`);
  }
});

test('titles keep the site name only while it fits', () => {
  const titles = samples().map(([, html]) => decode(html.match(/<title>([^<]*)<\/title>/)[1]));
  for (const title of titles) if (title.endsWith(` | ${ctx.site.title}`)) assert.ok(Array.from(title).length <= templates.TITLE_MAX, title);
  const home = titles[0];
  assert.ok(Array.from(home).length <= 60, home);
  assert.ok(home.startsWith(ctx.site.title));
  assert.ok(home.includes(String(ctx.entries.length)));
});

test('structured data is valid and every FAQ answer is shown on the page', () => {
  for (const [pathname, html] of samples()) {
    const items = graph(html);
    const org = items.find((x) => x['@type'] === 'Organization');
    assert.ok(org && org.sameAs.every((u) => /^https:\/\//.test(u)), `${pathname}: organization`);
    assert.ok(items.some((x) => x['@type'] === 'WebSite'));
    for (const x of items) assert.notStrictEqual(x['@type'], 'AggregateRating', `${pathname}: AggregateRating`);
    if (pathname !== '/') {
      const crumbs = items.find((x) => x['@type'] === 'BreadcrumbList');
      assert.ok(crumbs, `${pathname}: breadcrumbs`);
      for (const li of crumbs.itemListElement) assert.match(li.item, /^https:\/\//);
    }
    const visible = text(html.replace(/<script[\s\S]*?<\/script>/g, ''));
    for (const faq of items.filter((x) => x['@type'] === 'FAQPage')) {
      assert.ok(faq.mainEntity.length, `${pathname}: empty FAQPage`);
      for (const q of faq.mainEntity) {
        assert.ok(visible.includes(q.name), `${pathname}: question not shown: ${q.name}`);
        assert.ok(visible.includes(q.acceptedAnswer.text), `${pathname}: answer not shown: ${q.acceptedAnswer.text.slice(0, 80)}`);
      }
    }
  }
});

test('category, comparison and alternatives pages answer their main question', () => {
  const byPath = Object.fromEntries(samples());
  const types = (p) => graph(byPath[p]).map((x) => x['@type']);
  const [, cat, , compare, alt] = samples().map(([p]) => p);
  for (const p of [cat, compare, alt]) assert.ok(types(p).includes('FAQPage'), `${p}: FAQPage`);
  // Picks named in an answer keep their disclosure.
  const altPage = ctx.alternatives.find((a) => a.path === alt);
  const picksOn = { [cat]: ctx.inCategory[cat.slice(1, -1)].filter((e) => e.pick), [alt]: altPage.list.filter((e) => e.pick) };
  for (const p of [cat, alt]) {
    const faq = graph(byPath[p]).find((x) => x['@type'] === 'FAQPage');
    const first = faq.mainEntity[0].acceptedAnswer.text;
    for (const e of picksOn[p]) {
      assert.ok(first.includes(e.name), `${p}: pick ${e.name} not named`);
      if (e.disclosure) assert.ok(first.includes(e.disclosure), `${p}: ${e.name} disclosure`);
    }
  }
  const c = ctx.comparisons.find((x) => x.a.rating.grade && x.b.rating.grade && x.a.rating.score !== x.b.rating.score);
  const q = templates.compareQuestion(c);
  const [hi] = c.a.rating.score > c.b.rating.score ? [c.a, c.b] : [c.b, c.a];
  assert.ok(q.text.startsWith(hi.name), q.text);
  assert.match(machine.compareMd(c), new RegExp(`## Which is more private`));
  // An affiliated entry in a comparison keeps its disclosure in the answer.
  const affiliated = ctx.comparisons.find((x) => x.a.disclosure || x.b.disclosure);
  const answer = templates.compareQuestion(affiliated).text;
  for (const e of [affiliated.a, affiliated.b]) if (e.disclosure) assert.ok(answer.includes(e.disclosure), `${affiliated.path}: ${e.name} disclosure`);
  // Without picks, every alternative that shares the highest score is named, with any disclosure.
  for (const a of ctx.alternatives.filter((x) => !x.list.some((y) => y.pick))) {
    const graded = a.list.filter((x) => x.rating.grade);
    const best = Math.max(...graded.map((x) => x.rating.score));
    const text = templates.alternativesQuestion(a).text;
    for (const x of graded.filter((y) => y.rating.score === best)) {
      assert.ok(text.includes(x.name), `${a.path}: ${x.name} not named`);
      if (x.disclosure) assert.ok(text.includes(x.disclosure), `${a.path}: ${x.name} disclosure`);
    }
  }
});

test('the home page answers what the site is, with current figures', () => {
  const html = templates.homePage();
  const body = text(html);
  assert.match(body, /What is Privacy Ratings\?/);
  assert.ok(body.includes(`scores ${ctx.entries.length} apps and services in ${ctx.categories.length} categories`));
  assert.match(machine.homeMd(), /## What is Privacy Ratings\?/);
});

test('robots.txt allows every crawler, names the AI crawlers and points to the sitemap', () => {
  const robots = machine.robots();
  for (const bot of ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'CCBot', 'Bingbot', 'DuckAssistBot', 'Meta-ExternalAgent']) assert.match(robots, new RegExp(`^User-agent: ${bot}$`, 'm'), bot);
  assert.match(robots, /^User-agent: \*\nAllow: \//m);
  assert.doesNotMatch(robots, /^Disallow: \/\s*$/m);
  assert.match(robots, new RegExp(`^Sitemap: ${SITE}/sitemap\\.xml$`, 'm'));
});

test('llms.txt follows the llmstxt.org format and links only to pages the build writes', () => {
  const txt = machine.llmsTxt();
  const lines = txt.split('\n');
  assert.match(lines[0], /^# \S/);
  assert.ok(lines.find((l) => l.startsWith('> ')), 'summary blockquote');
  assert.ok((txt.match(/^## /gm) || []).length >= 5);
  const known = new Set(['/', ...ctx.categories.map((c) => `/${c.id}/`), ...ctx.entries.map((e) => e.path), ...ctx.comparisons.map((c) => c.path), ...ctx.alternatives.map((a) => a.path), ...ctx.topics.map((g) => g.path), ...ctx.openSource.map((o) => o.path), ...ctx.countries.map((c) => c.path), ...ctx.pages.map((p) => p.path), ...ctx.DOCS.map((d) => d.path), '/criteria/', '/badges/', '/cli/']);
  const files = new Set(['/api/ratings.json', '/api/search.json', '/api/cli.json', '/sitemap.xml', '/llms-full.txt']);
  const links = [...txt.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map((m) => m[1]);
  assert.ok(links.length > 50);
  for (const link of links) {
    assert.ok(link.startsWith(`${SITE}/`), link);
    const p = link.slice(SITE.length);
    assert.ok(files.has(p) || known.has(p.replace(/index\.md$/, '')), `llms.txt links to a missing page: ${p}`);
  }
  assert.ok(links.includes(`${SITE}/privacy/index.md`));
  assert.match(machine.llmsFullTxt(), /# Privacy policy/);
});

test('the API catalog lists the public JSON files', () => {
  const catalog = JSON.parse(machine.apiCatalog());
  const [set] = catalog.linkset;
  assert.strictEqual(set.anchor, `${SITE}/.well-known/api-catalog`);
  assert.deepStrictEqual(
    set.item.map((x) => x.href),
    ['/api/ratings.json', '/api/search.json', '/api/cli.json'].map((p) => `${SITE}${p}`)
  );
});

test('sitemaps list absolute https URLs and dates from git only', () => {
  const xml = machine.sitemap([{ path: '/', lastmod: '2026-01-02' }, { path: '/privacy/', lastmod: null }]);
  assert.match(xml, new RegExp(`<loc>${SITE}/</loc><lastmod>2026-01-02</lastmod>`));
  assert.match(xml, new RegExp(`<loc>${SITE}/privacy/</loc></url>`));
  for (const [, loc] of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) assert.match(loc, /^https:\/\//);
  const index = machine.sitemapIndex([{ file: 'sitemap-en.xml', lastmod: null }]);
  assert.match(index, new RegExp(`<sitemap><loc>${SITE}/sitemap-en\\.xml</loc></sitemap>`));
});

test('the privacy policy is linked from every page and translated into every language', () => {
  const privacy = ctx.pages.find((p) => p.slug === 'privacy');
  assert.ok(privacy, 'pages/privacy.md');
  for (const [pathname, html] of samples()) assert.match(html, /<a href="\/privacy\/">Privacy policy<\/a>/, pathname);
  try {
    for (const l of i18n.LOCALES.filter((x) => x.code !== i18n.DEFAULT)) {
      i18n.setLocale(l.code);
      assert.ok(i18n.page(privacy.file, privacy.body), `${l.code}: privacy.md is missing or out of date`);
      assert.notStrictEqual(i18n.t('Privacy policy'), 'Privacy policy', `${l.code}: footer link`);
    }
  } finally {
    i18n.setLocale('en');
  }
});
