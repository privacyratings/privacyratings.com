'use strict';

// Page details found by crawling the built site: anchors, heading ids, descriptions, category
// names mid-sentence, platforms and robots.txt. Run with `npm run test:unit`.

const test = require('node:test');
const assert = require('node:assert');
const templates = require('../scripts/templates');
const machine = require('../scripts/machine');
const ctx = require('../scripts/context');
const i18n = require('../scripts/i18n');
const { PLATFORMS, platformName } = require('../scripts/lib');

const ids = (html) => [...html.matchAll(/\sid="([^"]*)"/g)].map((m) => m[1]);
const dupes = (list) => list.filter((x, i) => list.indexOf(x) !== i);

test('the criteria page has one anchor per category and no repeated ids', () => {
  const html = templates.criteriaPage();
  const all = ids(html);
  assert.deepStrictEqual(dupes(all), []);
  assert.ok(!all.includes(''));
  for (const c of ctx.categories) assert.ok(all.includes(c.id), `no anchor for ${c.id}`);
});

test('criteria links from ratings and comparisons land on the right criterion', () => {
  const anchors = new Set(ids(templates.criteriaPage()));
  const video = ctx.criteria.byCategory['video-calls'].find((c) => c.id === 'e2ee');
  const email = ctx.criteria.byCategory['email-providers'].find((c) => c.id === 'e2ee');
  assert.strictEqual(ctx.criterionAnchor(email), 'e2ee');
  assert.strictEqual(ctx.criterionAnchor(video), 'video-calls-e2ee');
  const pages = [...ctx.entries.slice(0, 200).map(templates.entryPage), ...ctx.comparisons.slice(0, 50).map(templates.comparePage)];
  for (const html of pages) for (const [, a] of html.matchAll(/href="[^"]*\/criteria\/#([^"]+)"/g)) assert.ok(anchors.has(a), `broken link to /criteria/#${a}`);
  const entry = ctx.entries.find((e) => e.category === 'video-calls' && e.rating.answers.some((a) => a.criterion === video && a.answer !== 'n/a'));
  if (entry) assert.match(templates.entryPage(entry), /\/criteria\/#video-calls-e2ee"/);
});

test('heading ids are never empty or repeated, and translations reuse the English ids', () => {
  const english = '## Website trackers\n\nText.\n\n### Limits\n\n## Limits\n';
  assert.deepStrictEqual(ids(templates.md(english)), ['website-trackers', 'limits', 'limits-2']);
  assert.deepStrictEqual(ids(templates.md('## ウェブサイトのトラッカー\n\n### 制限\n\n## 制限\n', { source: english })), ['website-trackers', 'limits', 'limits-2']);
  // Without a matching English structure: letters of any script, Latin accents dropped.
  assert.deepStrictEqual(ids(templates.md('## ウェブサイトのトラッカー\n\n## Grenzen für internet.nl\n\n## !!!\n\n## !!!\n')), ['ウェブサイトのトラッカー', 'grenzen-fur-internet-nl', 'section', 'section-2']);
  assert.strictEqual(templates.headingSlug('Crypto &amp; <code>Wallets</code>'), 'crypto-wallets');
});

test('every translated document keeps the English heading ids', () => {
  const docs = [...ctx.DOCS, ...ctx.pages];
  const english = Object.fromEntries(docs.map((d) => [d.file, ids(templates.md(d.body))]));
  try {
    for (const l of i18n.LOCALES.filter((x) => x.code !== i18n.DEFAULT)) {
      i18n.setLocale(l.code);
      for (const d of docs) {
        const translated = i18n.page(d.file, d.body);
        if (translated) assert.deepStrictEqual(ids(templates.md(translated, { source: d.body })), english[d.file], `${l.code} ${d.file}`);
      }
    }
  } finally {
    i18n.setLocale('en');
  }
});

test('descriptions are cut at a sentence or word, with an ellipsis only when shortened', () => {
  assert.strictEqual(templates.clip('Short.', 160), 'Short.');
  const long = `${'First sentence is here and it is long enough to count. '.repeat(2)}${'word '.repeat(40)}`;
  const cut = templates.clip(long, 160);
  assert.ok(cut.length <= 160);
  assert.ok(cut.endsWith('.') || cut.endsWith('…'));
  const words = templates.clip('alpha '.repeat(60), 160);
  assert.match(words, /alpha…$/);
  assert.ok(Array.from(templates.clip('測試文字'.repeat(80), 160)).length <= 160);
  const page = templates.entryPage(ctx.entries.find((e) => e.rating.grade && e.description.length > 150) || ctx.entries[0]);
  const desc = page.match(/<meta name="description" content="([^"]*)"/)[1];
  assert.ok(Array.from(desc.replace(/&[a-z]+;/g, 'x')).length <= 160, desc);
  assert.doesNotMatch(desc, /\s\S{1,2}$/);
});

test('category names mid-sentence keep acronyms and names', () => {
  const want = { 'VPN providers': 'VPN providers', 'Email providers': 'email providers', 'macOS hardening': 'macOS hardening', 'Node.js frameworks': 'Node.js frameworks', '.NET web frameworks': '.NET web frameworks', 'Linux hardening': 'Linux hardening', 'Mesh VPNs and private networks': 'mesh VPNs and private networks', 'Two-factor authentication': 'two-factor authentication', 'AI assistants': 'AI assistants' };
  for (const [name, lower] of Object.entries(want)) assert.strictEqual(templates.lowerName(name), lower);
  for (const c of ctx.categories) assert.match(templates.lowerName(c.name), /^([a-z]|[A-Z.][A-Za-z.]*[A-Z.]|Linux|Windows|Python|Ruby|Go|Rust|Java|Elixir|Node\.js)/, c.name);
});

test('platforms are single known ids and show display names', () => {
  for (const e of ctx.entries) for (const p of e.platforms || []) assert.ok(Object.prototype.hasOwnProperty.call(PLATFORMS, p), `${e.file}: ${p}`);
  assert.strictEqual(platformName('macos'), 'macOS');
  const e = ctx.entries.find((x) => x.platforms?.includes('macos') && ctx.catById[x.category].type === 'app');
  const html = templates.entryPage(e);
  assert.match(html, /macOS/);
  const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  const about = graph.find((x) => x['@type'] === 'WebPage').about;
  assert.match(about.operatingSystem, /macOS/);
  assert.match(about.applicationCategory, /^[A-Z][A-Za-z]+Application$/);
});

test('robots.txt gives every group the content signal', () => {
  const groups = machine.robots().split(/\n\s*\n/).filter((g) => /User-agent:/.test(g));
  assert.ok(groups.length >= 2);
  for (const g of groups) assert.match(g, /Content-Signal: /);
});

test('offline and 404 pages have no share popover, and retry needs no inline script', () => {
  for (const html of [templates.offlinePage(), templates.notFound()]) assert.doesNotMatch(html, /id="share"|data-share\b/);
  assert.match(templates.offlinePage(), /<button [^>]*data-reload/);
  assert.doesNotMatch(templates.offlinePage(), /href=""/);
});

test('the language redirect keeps the query and leaves Traditional Chinese on English', () => {
  const js = [...templates.homePage().matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]).find((s) => s.includes('hreflang'));
  const run = (languages, stored) => {
    const store = stored ? { lang: stored } : {};
    let to = null;
    const env = {
      document: { querySelectorAll: () => ['en', 'zh', 'de'].map((h) => ({ hreflang: h, href: `https://example.com${h === 'en' ? '' : `/${h}`}/` })) },
      localStorage: { getItem: (k) => store[k] || null, setItem: (k, v) => (store[k] = v) },
      location: { search: '?q=vpn', hash: '#x', replace: (u) => (to = u) },
      navigator: { languages }
    };
    new Function('document', 'localStorage', 'location', 'navigator', 'URL', js)(env.document, env.localStorage, env.location, env.navigator, URL);
    return to;
  };
  assert.strictEqual(run(['de-DE']), '/de/?q=vpn#x');
  assert.strictEqual(run(['zh-TW', 'zh']), null);
  assert.strictEqual(run(['zh-Hant-HK']), null);
  assert.strictEqual(run(['zh-CN']), '/zh/?q=vpn#x');
  assert.strictEqual(run(['zh-TW'], 'zh'), '/zh/?q=vpn#x');
});

test('translated documents link to pages in the same language', () => {
  const saved = new Set(ctx.DOCS.map((d) => d.path));
  templates.setLocalized(saved);
  i18n.setLocale('de');
  try {
    assert.match(templates.md('[x](https://privacyratings.com/why/) [y](https://privacyratings.com/install.sh)'), /href="\/de\/why\/"[\s\S]*href="https:\/\/privacyratings\.com\/install\.sh"/);
  } finally {
    i18n.setLocale('en');
    templates.setLocalized(new Set());
  }
});
