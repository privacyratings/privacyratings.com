'use strict';

// Machine-readable outputs for search engines, AI agents and developers:
// Markdown copies of every page, llms.txt, JSON API, sitemap, robots.txt and an Atom feed.

const { execFileSync } = require('node:child_process');
const ctx = require('./context');
const { summarize, jurisdictionFacts, LABEL, lowerName } = require('./templates');
const { platformName } = require('./lib');

const { site, SITE_URL, REPO, NOW, categories, catById, criteria, criteriaFor, entries, inCategory, comparisons, alternatives, openSource, topics, countries, pages, DOCS, MIN_COVERAGE } = ctx;

const abs = (p) => `${SITE_URL}${p}`;
const mdLink = (text, p) => `[${text}](${abs(p)})`;
const cellText = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
const grade = (e) => (e.rating.grade ? `${e.rating.grade} (${e.rating.score}/100)` : `Not graded (${e.rating.coverage}% evidence)`);
const where = (e) => (e.juris ? `${e.juris.name}${e.juris.eyesName ? ` (${e.juris.eyesName})` : ''}` : 'Unknown');

// ---------- Markdown pages ----------

function homeMd() {
  const picks = categories
    .map((c) => ({ c, p: inCategory[c.id].filter((e) => e.pick) }))
    .filter((x) => x.p.length)
    .map(({ c, p }) => `- **${c.name}:** ${p.map((e) => mdLink(e.name, e.path)).join(' or ')}`);
  const groups = [...new Set(categories.map((c) => c.group))].map(
    (g) => `### ${g}\n\n${categories
      .filter((c) => c.group === g)
      .map((c) => `- ${mdLink(c.name, `/${c.id}/`)} (${inCategory[c.id].length})`)
      .join('\n')}`
  );
  return `# ${site.title}

> ${site.tagline}

${entries.length} apps and services across ${categories.length} categories, scored against public criteria with evidence links, jurisdiction details and automated security tests. Managed entirely on GitHub: ${REPO}

## Our picks

${picks.join('\n')}

## Categories

${groups.join('\n\n')}

## More

- ${mdLink('Criteria and scoring', '/criteria/')}
- ${mdLink('Jurisdictions and Five Eyes', '/jurisdictions/')}
- ${mdLink('What is the CLOUD Act?', '/cloud-act/')}
- ${mdLink('Automated tests', '/tests/')}
- ${mdLink('Why Privacy Ratings exists', '/why/')}
- ${mdLink('All data as JSON', '/api/ratings.json')}
`;
}

function categoryMd(cat) {
  const list = ctx.shownIn[cat.id];
  const crit = criteriaFor(criteria, cat).filter((c) => !(c.services && cat.type !== 'service'));
  const rows = list.map((e) => `| ${mdLink(cellText(e.name), e.path)}${e.category !== cat.id ? ` (rated under ${catById[e.category].name})` : e.pick ? ' (our pick)' : ''} | ${grade(e)} | ${cellText(where(e))} | ${cellText(e.description)} |`);
  const picks = list.filter((e) => e.pick && e.category === cat.id);
  return `# ${cat.name} privacy ratings

${cat.description}

${picks.length ? `**Our pick${picks.length > 1 ? 's' : ''}:** ${picks.map((e) => `${mdLink(e.name, e.path)}: ${e.pick_reason}`).join(' ')}\n\n` : ''}| Name | Grade | Jurisdiction | Description |
| --- | --- | --- | --- |
${rows.join('\n')}

## Criteria

${crit.map((c) => `- **${c.title}** (weight ${c.weight}${c.auto ? ', automated' : ''}): ${c.question}`).join('\n')}

Source: ${abs(`/${cat.id}/`)}
`;
}

function entryMd(e) {
  const cat = catById[e.category];
  const r = e.rating;
  const rows = r.answers
    .filter((a) => a.answer !== 'n/a')
    .map((a) => `| ${a.criterion.title} | ${LABEL[a.answer]} | ${cellText(a.note)} | ${a.evidence || ''} |`);
  const facts = [
    e.website && `- Website: ${e.website}`,
    e.source && `- Source code: ${e.source}`,
    (e.license || r.scan?.github?.license) && `- License: ${e.license || r.scan.github.license}`,
    e.juris && `- Jurisdiction: ${e.juris.name}. ${jurisdictionFacts(e.juris).join('. ')}.`,
    e.platforms?.length && `- Platforms: ${e.platforms.map(platformName).join(', ')}`,
    r.scan?.trackers?.found && !r.scan.trackers.skipped && `- Home page trackers: ${r.scan.trackers.found.map((t) => t.name + (t.analytics ? ' (cookieless analytics)' : t.soft ? ' (not scored)' : '')).join(', ') || 'none found'}`,
    `- Category: ${mdLink(cat.name, `/${cat.id}/`)}`,
    e.siblings.length && `- Also rated: ${e.siblings.map((x) => `${mdLink(x.name, x.path)} (${catById[x.category].name})`).join(', ')}`,
    `- Grade: ${grade(e)}`
  ].filter(Boolean);
  return `# ${e.name} privacy rating

${e.description || ''}

${e.disclosure ? `> **Disclosure:** ${e.disclosure}\n\n` : ''}${e.pick ? `**Our pick.** ${e.pick_reason}\n\n` : ''}${e.caveat ? `**Keep in mind:** ${e.caveat}\n\n` : ''}## Summary

${summarize(e)}

${facts.join('\n')}

## Criteria

| Criterion | Answer | Note | Evidence |
| --- | --- | --- | --- |
${rows.join('\n')}
${e.body ? `\n${e.body}\n` : ''}
Source: ${abs(e.path)}
Edit: ${REPO}/edit/${site.branch}/${e.file}
`;
}

function compareMd(c) {
  const { a, b } = c;
  const cat = catById[c.category];
  const A = Object.fromEntries(a.rating.answers.map((x) => [x.criterion.id, x]));
  const B = Object.fromEntries(b.rating.answers.map((x) => [x.criterion.id, x]));
  const crit = criteriaFor(criteria, cat).filter((x) => !(x.services && cat.type !== 'service'));
  return `# ${a.name} vs ${b.name}: privacy compared

| Criterion | ${a.name} | ${b.name} |
| --- | --- | --- |
| Grade | ${grade(a)} | ${grade(b)} |
| Jurisdiction | ${where(a)} | ${where(b)} |
${crit.map((x) => `| ${x.title} | ${LABEL[A[x.id]?.answer || 'unknown']} | ${LABEL[B[x.id]?.answer || 'unknown']} |`).join('\n')}

**${a.name}.** ${summarize(a)}

**${b.name}.** ${summarize(b)}

Source: ${abs(c.path)}
`;
}

function alternativesMd(alt) {
  const aka = alt.entry.aliases?.length ? `\n\nAlso covers ${alt.entry.aliases.join(', ')}.` : '';
  return `# Private and open-source alternatives to ${alt.entry.name}${aka}

${alt.list.map((x, i) => `${i + 1}. ${mdLink(x.name, x.path)}${x.pick ? ' (our pick)' : ''}: ${grade(x)}. ${x.description || ''}`).join('\n')}

Source: ${abs(alt.path)}
`;
}

function topicMd(t) {
  return `# ${t.h1}

${t.description}

${(t.intro || '').trim()}

${t.list.map((x, i) => `${i + 1}. ${mdLink(x.name, x.path)}${x.pick ? ' (our pick)' : ''}: ${grade(x)}. ${x.description || ''}`).join('\n')}

${(t.faq || []).map((f) => `## ${f.q}\n\n${f.a}`).join('\n\n')}

Source: ${abs(t.path)}
`;
}

function cliMd() {
  return `# Privacy Ratings command-line tool

Search every rating from the terminal, with the same grades, picks, criteria and evidence as the website.

## Install

- macOS and Linux: \`curl -fsSL https://privacyratings.com/install.sh | sh\`
- Windows (PowerShell): \`irm https://privacyratings.com/install.ps1 | iex\`
- npm (Node.js 20 or newer): \`npm install -g privacyratings\`

## Use

\`\`\`sh
privacyratings                          # interactive search
privacyratings "gmail alternatives"     # start with a query
privacyratings search vpn --picks       # print matching ratings
privacyratings show "Proton Mail"       # every criterion, with notes and evidence
privacyratings picks password-managers  # our picks in one category
privacyratings search email --json      # JSON for scripts
\`\`\`

The tool updates itself once a day in the background. Set \`PRIVACYRATINGS_NO_UPDATE=1\` to turn that off. It sends no analytics or telemetry.

Source: ${REPO}/tree/${site.branch}/cli
`;
}

function badgesMd() {
  return `# Privacy Ratings badges

Every rated app and service has an SVG badge showing its current grade and score, generated from the ratings at build time. Embed it with a link to the rating page.

- Flat: ${abs('/badge/<category>/<entry>.svg')}
- Flat square: ${abs('/badge/<category>/<entry>-flat-square.svg')}
- Large: ${abs('/badge/<category>/<entry>-large.svg')}
- Card: ${abs('/badge/<category>/<entry>-card.svg')}
- Card, dark: ${abs('/badge/<category>/<entry>-card-dark.svg')}
- Shields.io endpoint: ${abs('/badge/<category>/<entry>.json')}

Source: ${abs('/badges/')}
`;
}

function openSourceMd(o) {
  return `# Open-source ${lowerName(o.category.name)}

${o.list.length} open-source ${lowerName(o.category.name)} rated against public privacy criteria.

${o.list.map((x, i) => `${i + 1}. ${mdLink(x.name, x.path)}${x.pick ? ' (our pick)' : ''}: ${grade(x)}. ${x.description || ''}`).join('\n')}

Source: ${abs(o.path)}
`;
}

function countryMd(c) {
  return `# Privacy apps and services based in ${c.inName}

${jurisdictionFacts(c).join('. ')}.

${c.notes.map((n) => `- ${n.text} (${n.source})`).join('\n')}

${c.entries.map((e) => `- ${mdLink(e.name, e.path)} (${catById[e.category].name}): ${grade(e)}`).join('\n')}

Source: ${abs(c.path)}
`;
}

function jurisdictionsMd(page) {
  return `${page.body}

| Country | Eyes | Data protection | CLOUD Act | Rated |
| --- | --- | --- | --- | --- |
${countries.map((c) => `| ${mdLink(c.name, c.path)} | ${c.eyesName || 'None'} | ${c.eu ? 'EU' : c.eea ? 'EEA' : c.gdpr ? 'GDPR-style' : '-'} | ${c.cloudAct || '-'} | ${c.entries.length} |`).join('\n')}
`;
}

function criteriaMd() {
  const block = (c) => `### ${c.title} (weight ${c.weight})

${c.question}

- Yes: ${c.yes}
- Partial: ${c.partial}
- No: ${c.no}
- Why: ${c.why}
- Verify: ${c.verify}`;
  return `# Privacy rating criteria

Scoring: yes = full weight, partial = half, no and unknown = zero; not applicable and automated tests that have not run yet are left out. Score = earned / possible × 100. Grades: A ≥ 90, B ≥ 75, C ≥ 60, D ≥ 40, F < 40. A grade needs evidence for ${Math.round(MIN_COVERAGE * 100)}% of criteria by weight. Jurisdiction is shown but not scored. Picks do not change scores.

## Every category

${criteria.common.map(block).join('\n\n')}

${categories
  .filter((c) => (criteria.byCategory[c.id] || []).length)
  .map((c) => `## ${c.name}\n\n${criteria.byCategory[c.id].map(block).join('\n\n')}`)
  .join('\n\n')}
`;
}

// ---------- llms.txt ----------

function llmsTxt() {
  const picks = entries.filter((e) => e.pick).sort((a, b) => a.category.localeCompare(b.category));
  return `# ${site.title}

> ${site.tagline} ${entries.length} apps and services in ${categories.length} categories, scored against public criteria. Every answer links to evidence. Hosted services are tested with Qualys SSL Labs, Mozilla HTTP Observatory and Internet.nl. Each rating shows jurisdiction (country, Five/Nine/Fourteen Eyes, EU/GDPR, CLOUD Act). Maintained on GitHub by the team behind Forward Email, which is also rated and carries a disclosure.

Every page has a Markdown version at the same URL plus \`index.md\`. The full data set is at ${abs('/api/ratings.json')} and in one text file at ${abs('/llms-full.txt')}. Content is CC BY-SA 4.0.

## Key pages

- ${mdLink('Criteria and scoring', '/criteria/index.md')}: the public questions, weights and grading rules
- ${mdLink('Jurisdictions', '/jurisdictions/index.md')}: countries, Five Eyes, and why jurisdiction is shown but not scored
- ${mdLink('What is the CLOUD Act?', '/cloud-act/index.md')}: plain-language explainer and how it applies to Forward Email
- ${mdLink('Automated tests', '/tests/index.md')}: SSL Labs, HTTP Observatory, Internet.nl, Hardenize
- ${mdLink('Why Privacy Ratings exists', '/why/index.md')}
- ${mdLink('Governance and conflicts of interest', '/governance/index.md')}
- ${mdLink('Command-line tool', '/cli/index.md')}: search ratings from a terminal, with JSON output (\`npx privacyratings search <words> --json\`)
- ${mdLink('Compact index for tools', '/api/cli.json')}: every entry with grade, score and pick, plus alternatives lists

## Picks

${picks.map((e) => `- ${mdLink(`${e.name} (${catById[e.category].name})`, `${e.path}index.md`)}: ${e.pick_reason}`).join('\n')}

## Categories

${categories.map((c) => `- ${mdLink(c.name, `/${c.id}/index.md`)}: ${c.description}`).join('\n')}

## Private alternatives

${alternatives.map((a) => `- ${mdLink(`Alternatives to ${a.entry.name}`, `${a.path}index.md`)}`).join('\n')}

## Guides

${topics.map((t) => `- ${mdLink(t.h1, `${t.path}index.md`)}: ${t.description}`).join('\n')}

## Open-source lists

${openSource.map((o) => `- ${mdLink(`Open-source ${lowerName(o.category.name)}`, `${o.path}index.md`)}`).join('\n')}

## Data

- ${mdLink('All ratings (JSON)', '/api/ratings.json')}
- ${mdLink('Search index (JSON)', '/api/search.json')}
- One JSON file per entry at \`/api/entries/<category>/<slug>.json\`
- ${mdLink('Sitemap', '/sitemap.xml')}
- Source repository: ${REPO}
`;
}

function llmsFullTxt() {
  return [
    llmsTxt(),
    criteriaMd(),
    ...categories.map((c) => [categoryMd(c), ...inCategory[c.id].map(entryMd)].join('\n')),
    ...pages.map((p) => p.body),
    ...DOCS.map((d) => d.body)
  ].join('\n\n---\n\n');
}

// ---------- JSON ----------

function entryJson(e) {
  return {
    slug: e.slug,
    category: e.category,
    name: e.name,
    description: e.description,
    website: e.website,
    source: e.source,
    license: e.license || e.rating.scan?.github?.license || null,
    platforms: e.platforms || [],
    jurisdiction: e.juris ? { code: e.juris.code, name: e.juris.name, eyes: e.juris.eyesName, eu: e.juris.eu, gdpr: e.juris.gdpr, cloud_act: e.juris.cloudAct } : null,
    pick: Boolean(e.pick),
    pick_reason: e.pick_reason || null,
    disclosure: e.disclosure || null,
    grade: e.rating.grade,
    score: e.rating.score,
    coverage: e.rating.coverage,
    summary: summarize(e),
    url: abs(e.path),
    markdown: abs(`${e.path}index.md`),
    answers: Object.fromEntries(e.rating.answers.map((a) => [a.criterion.id, { title: a.criterion.title, weight: a.criterion.weight, answer: a.answer, evidence: a.evidence || null, note: a.note || null }])),
    tests: e.rating.scan
      ? {
          ssllabs: e.rating.scan.ssllabs?.grade || null,
          observatory: e.rating.scan.observatory?.grade || null,
          internetnl_web: e.rating.scan.internetnl?.web?.score ?? null,
          internetnl_mail: e.rating.scan.internetnl?.mail?.score ?? null,
          trackers: e.rating.scan.trackers?.found ? e.rating.scan.trackers.found.map((t) => ({ name: t.name, host: t.host, effect: t.analytics ? 'partial' : t.soft ? 'none' : 'no' })) : null,
          tested_at: e.rating.scan.scanned_at || null
        }
      : null,
    last_modified: e.lastmod
  };
}

function ratingsJson() {
  return {
    site: { title: site.title, url: SITE_URL, repository: REPO, license: 'CC-BY-SA-4.0', generated: NOW },
    categories: categories.map((c) => ({ id: c.id, name: c.name, group: c.group, type: c.type, description: c.description, url: abs(`/${c.id}/`), criteria: criteriaFor(criteria, c).map((x) => x.id) })),
    criteria: [...criteria.common, ...Object.values(criteria.byCategory).flat()],
    jurisdictions: countries.map((c) => ({ code: c.code, name: c.name, eyes: c.eyesName, eu: c.eu, gdpr: c.gdpr, cloud_act: c.cloudAct, notes: c.notes, url: abs(c.path) })),
    entries: entries.map(entryJson)
  };
}

// Search index for the site search. Short keys keep the file small.
// t: type (e entry, c category, a alternatives, o open-source list, j jurisdiction, p page)
// n: name, u: URL, c: category or context, d: description, k: other names, g: grade, p: pick
// Compact index for the command-line tool (cli/). Entry details come from /api/entries/.
function cliJson() {
  const oss = (e) => e.rating.answers.some((a) => a.criterion.id === 'open_source' && a.answer === 'yes');
  return {
    v: 1,
    site: SITE_URL,
    generated: NOW,
    categories: categories.map((c) => ({ id: c.id, n: c.name, g: c.group, d: c.description, count: inCategory[c.id].length })),
    countries: Object.fromEntries(countries.map((c) => [c.code, c.name])),
    // "Alternatives to X" lists, keyed by category/slug of X.
    alternatives: Object.fromEntries(alternatives.map((a) => [`${a.entry.category}/${a.entry.slug}`, a.list.map((x) => `${x.category}/${x.slug}`)])),
    entries: entries.map((e) => ({
      c: e.category,
      s: e.slug,
      n: e.name,
      g: e.rating.grade,
      sc: e.rating.score,
      p: e.pick === true ? 1 : e.pick || 0,
      ...(e.juris ? { j: e.juris.code } : {}),
      d: e.description || '',
      ...(e.aliases?.length ? { k: e.aliases.join(' ') } : {}),
      ...(oss(e) ? { o: 1 } : {})
    }))
  };
}

// The search index for the site's search box, in the current language. English names and
// keywords stay searchable in every language.
function searchJson() {
  const { u: link } = require('./templates');
  const { t } = require('./i18n');
  const en = require('./i18n').isDefault();
  const kw = (...parts) => [...new Set(parts.filter(Boolean))].join(' ') || undefined;
  const lc = (s) => (en ? lowerName(s) : s);
  const out = entries.map((e) => ({
    t: 'e',
    n: e.name,
    c: t(catById[e.category].name),
    u: link(e.path),
    g: e.rating.grade,
    p: e.pick ? 1 : 0,
    d: t(e.description || '').slice(0, 120),
    ...(kw(e.aliases?.join(' '), en ? '' : catById[e.category].name) ? { k: kw(e.aliases?.join(' '), en ? '' : catById[e.category].name) } : {})
  }));
  for (const c of categories) out.push({ t: 'c', n: t(c.name), c: t(c.group), u: link(`/${c.id}/`), d: t(c.description), k: kw(c.id.replace(/-/g, ' '), en ? '' : c.name) });
  for (const a of alternatives) out.push({ t: 'a', n: t('{name} alternatives', { name: a.entry.name }), c: t(catById[a.entry.category].name), u: link(a.path), d: t('{n} private and open-source alternatives', { n: a.list.length }), ...(kw(a.entry.aliases?.join(' '), en ? '' : `${a.entry.name} alternatives`) ? { k: kw(a.entry.aliases?.join(' '), en ? '' : `${a.entry.name} alternatives`) } : {}) });
  for (const o of openSource) out.push({ t: 'o', n: t('Open-source {category}', { category: lc(t(o.category.name)) }), c: t(o.category.name), u: link(o.path), d: t('{n} rated', { n: o.list.length }), k: 'open source oss foss free software' });
  for (const g of topics) out.push({ t: 'g', n: t(g.h1), c: t('Guide'), u: link(g.path), d: t(g.description).slice(0, 120), k: kw(g.slug.replace(/-/g, ' '), en ? '' : g.h1) });
  for (const j of countries) out.push({ t: 'j', n: t(j.name), c: t('Jurisdiction'), u: link(j.path), d: j.eyesName ? `${t('{n} rated', { n: j.entries.length })}, ${t(j.eyesName)}` : t('{n} rated', { n: j.entries.length }), k: kw(j.code, en ? '' : j.name) });
  const docs = [
    ['Criteria and scoring', '/criteria/', 'How every answer is scored'],
    ['Automated tests', '/tests/', 'SSL Labs, Observatory, Internet.nl, email and tracker tests'],
    ['Why Privacy Ratings exists', '/why/', 'The reasons behind the project'],
    ['Contribute', '/contribute/', 'Suggest, correct and review ratings on GitHub'],
    ['Governance', '/governance/', 'Picks and conflicts of interest'],
    ['Badges', '/badges/', 'Embed a privacy grade badge on your site'],
    ['Command-line tool', '/cli/', 'Search ratings from your terminal: privacyratings'],
    ...pages.map((p) => [p.title, p.path, p.description || ''])
  ];
  for (const [n, pth, d] of docs) out.push({ t: 'p', n: t(n), c: t('Page'), u: link(pth), d: t(d) });
  return out;
}

// ---------- sitemap, robots, feed, manifest ----------

const xml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// One sitemap per language (paths already include the language prefix), and an index.
function sitemap(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ path, lastmod }) => `  <url><loc>${xml(abs(path))}</loc>${lastmod ? `<lastmod>${xml(lastmod)}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`;
}

function sitemapIndex(files) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${files.map(({ file, lastmod }) => `  <sitemap><loc>${xml(abs(`/${file}`))}</loc>${lastmod ? `<lastmod>${xml(lastmod)}</lastmod>` : ''}</sitemap>`).join('\n')}
</sitemapindex>
`;
}

function robots() {
  const bots = ['Googlebot', 'Bingbot', 'DuckDuckBot', 'Applebot', 'Applebot-Extended', 'Google-Extended', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai', 'PerplexityBot', 'Perplexity-User', 'CCBot', 'Meta-ExternalAgent', 'MistralAI-User', 'cohere-ai', 'Amazonbot', 'YouBot'];
  // A crawler reads only the group that names it, so every group repeats the content signal.
  const signal = 'Content-Signal: search=yes, ai-input=yes, ai-train=yes';
  return `# Privacy Ratings welcomes search engines and AI crawlers.
# Content is CC BY-SA 4.0. Markdown versions: add index.md to any page URL. Summary for AI: ${abs('/llms.txt')}

${bots.map((b) => `User-agent: ${b}`).join('\n')}
Allow: /
${signal}

User-agent: *
Allow: /
${signal}

Sitemap: ${abs('/sitemap.xml')}
`;
}

function feed() {
  let log = '';
  try {
    log = execFileSync('git', ['log', '-n', '60', '--format=@%H|%cI|%s', '--name-only', '--', 'ratings', 'criteria', 'jurisdictions.yml', 'pages'], {
      cwd: require('./lib').ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    });
  } catch {}

  const items = [];
  let cur = null;
  for (const line of log.split('\n')) {
    if (line.startsWith('@')) {
      const [hash, date, ...subject] = line.slice(1).split('|');
      cur = { hash, date, subject: subject.join('|'), files: [] };
      items.push(cur);
    } else if (line && cur) cur.files.push(line);
  }

  const byFile = Object.fromEntries(entries.map((e) => [e.file, e]));
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const updated = items[0]?.date || NOW;
  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${esc(site.title)}: rating changes</title>
  <link href="${abs('/')}"/>
  <link rel="self" href="${abs('/feed.xml')}"/>
  <id>${abs('/')}</id>
  <updated>${updated}</updated>
${items
  .map((it) => {
    const changed = it.files.map((f) => byFile[f]).filter(Boolean);
    const link = changed.length === 1 ? abs(changed[0].path) : `${REPO}/commit/${it.hash}`;
    return `  <entry>
    <title>${esc(it.subject)}</title>
    <link href="${esc(link)}"/>
    <id>${REPO}/commit/${it.hash}</id>
    <updated>${it.date}</updated>
    <summary>${esc(changed.length ? `Updated: ${changed.map((e) => e.name).join(', ')}` : it.files.slice(0, 10).join(', '))}</summary>
  </entry>`;
  })
  .join('\n')}
</feed>
`;
}

function manifest() {
  const B = ctx.BASE;
  return JSON.stringify(
    {
      id: `${B}/`,
      name: site.title,
      short_name: site.title,
      description: site.tagline,
      lang: 'en',
      dir: 'ltr',
      start_url: `${B}/`,
      scope: `${B}/`,
      display: 'standalone',
      display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
      orientation: 'any',
      background_color: '#0b0d10',
      theme_color: '#0b6e66',
      categories: ['security', 'utilities', 'reference'],
      icons: [
        { src: `${B}/favicon.svg`, sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
        { src: `${B}/icon-192.png`, sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: `${B}/icon-512.png`, sizes: '512x512', type: 'image/png', purpose: 'any' },
        { src: `${B}/icon-maskable-192.png`, sizes: '192x192', type: 'image/png', purpose: 'maskable' },
        { src: `${B}/icon-maskable-512.png`, sizes: '512x512', type: 'image/png', purpose: 'maskable' }
      ],
      screenshots: [
        { src: `${B}/screenshots/wide.png`, sizes: '1280x720', type: 'image/png', form_factor: 'wide', label: 'Privacy ratings home page' },
        { src: `${B}/screenshots/narrow.png`, sizes: '540x1080', type: 'image/png', form_factor: 'narrow', label: 'A privacy rating on a phone' }
      ],
      shortcuts: [
        { name: 'Search', short_name: 'Search', url: `${B}/search/`, icons: [{ src: `${B}/icon-192.png`, sizes: '192x192' }] },
        { name: 'Private email', short_name: 'Email', url: `${B}/private-email/`, icons: [{ src: `${B}/icon-192.png`, sizes: '192x192' }] },
        { name: 'Privacy tools', short_name: 'Tools', url: `${B}/privacy-tools/`, icons: [{ src: `${B}/icon-192.png`, sizes: '192x192' }] },
        { name: 'Criteria', short_name: 'Criteria', url: `${B}/criteria/`, icons: [{ src: `${B}/icon-192.png`, sizes: '192x192' }] }
      ]
    },
    null,
    2
  );
}

// Service worker: pages are network first with an offline fallback, and assets are
// served from cache while being refreshed. The version changes when the CSS or JavaScript does.
function serviceWorker() {
  const fs = require('node:fs');
  const path = require('node:path');
  const hash = require('node:crypto').createHash('sha256');
  for (const f of ['style.css', 'app.js']) hash.update(fs.readFileSync(path.join(__dirname, '..', 'site', f)));
  const version = hash.digest('hex').slice(0, 10);
  return `'use strict';
// Privacy Ratings service worker. Generated by scripts/machine.js.
const VERSION = '${version}';
const SHELL = 'shell-' + VERSION;
const PAGES = 'pages-v1';
const ASSETS = 'assets-v1';
const MAX_PAGES = 60;
const MAX_ASSETS = 120;
const scope = new URL(self.registration.scope);
const at = (p) => new URL(p, scope).href;
const SHELL_FILES = ['./', './offline/', './style.css', './app.js', './favicon.svg', './icon-192.png', './site.webmanifest'].map(at);

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(SHELL).then((c) => c.addAll(SHELL_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('shell-') && k !== SHELL).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function trim(name, max) {
  const cache = await caches.open(name);
  const keys = await cache.keys();
  for (const k of keys.slice(0, Math.max(0, keys.length - max))) await cache.delete(k);
}

// Network first: always fresh when online, cached copy (or the offline page) when not.
async function networkFirst(request, name, max, fallback) {
  try {
    const res = await fetch(request);
    if (res.ok) {
      const copy = res.clone();
      caches.open(name).then((c) => c.put(request, copy)).then(() => trim(name, max));
    }
    return res;
  } catch (err) {
    return (await caches.match(request)) || (fallback && (await caches.match(fallback))) || Response.error();
  }
}

async function asset(request, event) {
  const cached = await caches.match(request);
  const fresh = fetch(request)
    .then((res) => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(ASSETS).then((c) => c.put(request, copy)).then(() => trim(ASSETS, MAX_ASSETS));
      }
      return res;
    })
    .catch(() => cached || Response.error());
  if (cached) {
    event.waitUntil(fresh);
    return cached;
  }
  return fresh;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;
  if (url.pathname.endsWith('/sw.js')) return;
  if (request.mode === 'navigate') return event.respondWith(networkFirst(request, PAGES, MAX_PAGES, at('./offline/')));
  // Styles, scripts and data change with each release, so they are fetched fresh when possible.
  if (/\\.(css|js|json|webmanifest)$/.test(url.pathname)) return event.respondWith(networkFirst(request, ASSETS, MAX_ASSETS));
  // Images rarely change: serve from cache and refresh in the background.
  if (/\\.(svg|png|ico)$/.test(url.pathname)) return event.respondWith(asset(request, event));
});
`;
}

module.exports = {
  homeMd,
  categoryMd,
  entryMd,
  compareMd,
  alternativesMd,
  openSourceMd,
  topicMd,
  badgesMd,
  cliMd,
  countryMd,
  jurisdictionsMd,
  criteriaMd,
  llmsTxt,
  llmsFullTxt,
  entryJson,
  ratingsJson,
  searchJson,
  cliJson,
  sitemap,
  sitemapIndex,
  robots,
  feed,
  manifest,
  serviceWorker
};
