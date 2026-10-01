'use strict';

// HTML templates. Every page is plain, semantic HTML with structured data.

const crypto = require('node:crypto');
const { Marked } = require('marked');
const badges = require('./badges');
const { logo } = require('./icons');
const ctx = require('./context');
const i18n = require('./i18n');
const { t, th, tp } = i18n;

const { site, BASE, SITE_URL, REPO, MIN_COVERAGE, categories, catById, criteria, criteriaFor, criterionAnchor, entries, inCategory, comparisons, alternatives, openSource, topics, countries, answered } = ctx;
const { platformName } = require('./lib');

// ---------- helpers ----------

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// Pages that exist in the current language. Links to anything else go to the English page.
let localized = new Set();
const setLocalized = (set) => (localized = set);
const prefix = (p) => {
  if (i18n.isDefault()) return p;
  const bare = p.replace(/[#?].*$/, '');
  return localized.has(bare) ? `/${i18n.current()}${p}` : p;
};
const u = (p) => `${BASE}${prefix(p)}`;
const abs = (p) => `${SITE_URL}${prefix(p)}`;

const DOC_LINKS = { 'WHY.md': '/why/', 'CONTRIBUTING.md': '/contribute/', 'GOVERNANCE.md': '/governance/', 'SCANS.md': '/tests/' };

// An absolute http(s) URL from data (website, evidence, test reports), or null. Anything else
// (javascript:, data:, relative paths, text with quotes or spaces) is not linked.
const httpUrl = (value) => {
  const s = typeof value === 'string' ? value.trim() : '';
  if (!/^https?:\/\/[^\s"'<>\\]+$/i.test(s)) return null;
  try {
    return /^https?:$/.test(new URL(s).protocol) ? s : null;
  } catch {
    return null;
  }
};

// Links allowed in Markdown: http(s), mailto, same-page anchors and relative paths. Anything with a
// scheme before the first "/", "?" or "#" (javascript:, data:, vbscript:, entity-encoded tricks) is not.
const stripControls = (href) => String(href ?? '').replace(/[\u0000-\u0020\u007f-\u009f]/g, '');
const safeMdHref = (href) => {
  const s = stripControls(href);
  if (!s) return false;
  const head = s.split(/[/?#]/, 1)[0];
  if (!head.includes(':') && !head.includes('&')) return true;
  return /^(https?:\/\/|mailto:)/i.test(s);
};
// The URL as it goes into an attribute: control characters removed, the scheme lowercased (so the
// rewrites in md() see "https:" and "mailto:" however they were typed) and percent-encoded the way
// marked does it, which also encodes quotes, backslashes and spaces.
const mdHref = (href) => {
  try {
    return encodeURI(stripControls(href).replace(/^[a-z][a-z0-9+.-]*:/i, (m) => m.toLowerCase())).replace(/%25/g, '%');
  } catch {
    return null;
  }
};

// Markdown comes from contributors and translators, so raw HTML is shown as text rather than
// passed through, and links and images with unsafe URLs are dropped (their text is kept). Links
// and images are rendered here rather than by marked, whose image renderer does not escape alt text.
const mdParser = new Marked({
  gfm: true,
  renderer: {
    html({ text }) {
      return esc(text);
    },
    link(token) {
      const text = this.parser.parseInline(token.tokens);
      const href = safeMdHref(token.href) ? mdHref(token.href) : null;
      if (href === null) return text;
      return `<a href="${esc(href)}"${token.title ? ` title="${esc(token.title)}"` : ''}>${text}</a>`;
    },
    image(token) {
      const alt = token.tokens ? this.parser.parseInline(token.tokens, this.parser.textRenderer) : token.text;
      // Images load from this site only (the Content Security Policy blocks others); an image on
      // another site becomes a link to it.
      const href = stripControls(token.href);
      if (/^https?:\/\//i.test(href) && mdHref(href) !== null) return `<a href="${esc(mdHref(href))}">${esc(alt)}</a>`;
      const src = /^\/(?!\/)/.test(href) ? mdHref(href) : null;
      if (src === null) return esc(alt);
      return `<img src="${esc(src)}" alt="${esc(alt)}"${token.title ? ` title="${esc(token.title)}"` : ''}>`;
    }
  }
});

// Heading anchor from heading HTML. Letters and digits of any script are kept, so translated
// headings in Japanese or Arabic still get an id; Latin accents are dropped ("für" becomes "fur").
// ASCII headings get the same ids as before.
function headingSlug(inner) {
  return String(inner)
    .replace(/<[^>]+>/g, '')
    .replace(/&(#\d+|#x[0-9a-f]+|[a-z]+);/gi, '')
    .normalize('NFKD')
    .replace(/(\p{Script=Latin})\p{M}+/gu, '$1')
    .normalize('NFC')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-|-$/g, '');
}

// Level and slug of every h2 and h3 in a Markdown document, in order.
function headingSlugs(text) {
  const html = mdParser.parse(text || '');
  return [...html.matchAll(/<h([23])>([\s\S]*?)<\/h\1>/g)].map(([, n, inner]) => ({ level: n, slug: headingSlug(inner) }));
}

// Links to this site written as full URLs in documents. Translated pages send them to the page in
// the same language when it exists.
const OWN_URL = new RegExp(`href="(?:${[SITE_URL, 'https://privacyratings.com', 'https://www.privacyratings.com'].map((x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})(/[^"]*)"`, 'g');

// `ugc` marks external links as contributor content (rating notes), so search engines do not
// treat them as endorsements. `source` is the English Markdown a translation was made from: its
// heading anchors are reused by position, so /de/tests/#website-trackers works like /tests/#website-trackers.
function md(text, { ugc = false, source = null } = {}) {
  let html = mdParser.parse(text || '');
  for (const [file, page] of Object.entries(DOC_LINKS)) html = html.replaceAll(`href="${file}`, `href="${u(page)}`);
  html = html.replace(/href="(\/(?!\/)[^"]*)"/g, (_, p) => `href="${u(p)}"`);
  html = html.replace(/<img src="(\/(?!\/)[^"]*)"/g, (_, p) => `<img src="${BASE}${p}"`);
  if (!i18n.isDefault()) html = html.replace(OWN_URL, (m, p) => (prefix(p) === p ? m : `href="${u(p)}"`));
  // Other relative links point at files in the repository. Leading "./" and "../" are dropped, so a
  // link cannot climb out of the repository on GitHub.
  html = html.replace(/href="(?!https?:|#|\/|mailto:)([^"]+)"/g, (_, p) => `href="${REPO}/blob/${site.branch}/${p.replace(/^(?:\.{1,2}\/)+/, '')}"`);
  html = html.replace(/<a href="(?:https?:)?\/\/(?!privacyratings\.com[/"])/g, (m) => m.replace('<a ', `<a rel="${ugc ? 'nofollow ugc noopener' : 'noopener'}" `));
  // Anchors on headings, so sections can be linked. Ids are never empty or repeated.
  const english = source ? headingSlugs(source) : null;
  const own = [...html.matchAll(/<h([23])>[\s\S]*?<\/h\1>/g)].map((m) => m[1]);
  const sameShape = english && english.length === own.length && english.every((h, i) => h.level === own[i]);
  const seen = new Set();
  const next = new Map(); // the next suffix to try for each base, so many equal headings stay fast
  let i = 0;
  html = html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_, n, inner) => {
    const base = (sameShape && english[i].slug) || headingSlug(inner) || 'section';
    i++;
    let id = base;
    let k = next.get(base) || 2;
    for (; seen.has(id); k++) id = `${base}-${k}`;
    next.set(base, k);
    seen.add(id);
    return `<h${n} id="${esc(id)}">${inner}</h${n}>`;
  });
  // Wide tables and code blocks scroll sideways, so they take keyboard focus to be scrollable with arrow keys.
  html = html.replace(/<table>/g, '<div class="table-wrap" tabindex="0"><table>').replace(/<\/table>/g, '</table></div>');
  html = html.replace(/<pre>/g, '<pre tabindex="0">');
  return html;
}

const ICON = { yes: '✔', partial: '◐', no: '✖', unknown: '?', 'n/a': '–', pending: '…' };
const LABELS = { yes: 'Yes', partial: 'Partial', no: 'No', unknown: 'Unknown', 'n/a': 'Not applicable', pending: 'Not tested yet' };
const LABEL = new Proxy(LABELS, { get: (o, k) => (typeof k === 'string' && o[k] ? t(o[k]) : o[k]) });

// Answer badge. `tip` adds a tooltip; `focus` makes it reachable by keyboard.
// `srTip` repeats the tip for screen readers; tables leave it out to keep pages small.
function answerBadge(a, tip = '', focus = false, srTip = true) {
  const label = LABEL[a];
  const full = tip ? `${label}: ${tip}` : label;
  return `<span class="ans ans-${esc(a.replace('/', ''))}" data-tip="${esc(full)}"${focus ? ' tabindex="0"' : ''}><span aria-hidden="true">${ICON[a]}</span><span class="sr">${esc(srTip ? full : label)}</span></span>`;
}

function gradeBadge(r) {
  if (!r.grade) return `<span class="grade grade-none" data-tip="${esc(t('Not graded yet: {pct}% of criteria have evidence', { pct: r.coverage }))}"><span aria-hidden="true">?</span><span class="sr">${th('Not graded')}</span></span>`;
  return `<span class="grade grade-${r.grade}" data-tip="${esc(t('Grade {grade}, score {score} out of 100', { grade: r.grade, score: r.score }))}"><span class="sr">${th('Grade')} </span>${r.grade}</span>`;
}

// Circular score meter used in page headers. Its size comes from style.css: inline styles are
// blocked by the Content Security Policy, so another size needs a CSS class, not a style attribute.
function gradeRing(r) {
  const radius = 44;
  const circ = 2 * Math.PI * radius;
  const pct = r.grade ? r.score / 100 : r.coverage / 100;
  const label = r.grade ? t('Grade {grade}, score {score} out of 100', { grade: r.grade, score: r.score }) : t('Not graded yet, {pct}% of criteria have evidence', { pct: r.coverage });
  return `<div class="ring ring-${r.grade || 'none'}" role="img" aria-label="${esc(label)}" data-tip="${esc(label)}" tabindex="0">
  <svg viewBox="0 0 100 100" aria-hidden="true"><circle class="ring-track" cx="50" cy="50" r="${radius}"/><circle class="ring-bar" cx="50" cy="50" r="${radius}" stroke-dasharray="${(pct * circ).toFixed(1)} ${circ.toFixed(1)}"/></svg>
  <span class="ring-grade" aria-hidden="true">${r.grade || '?'}</span>
  <span class="ring-score" aria-hidden="true">${r.grade ? `${r.score}/100` : esc(t('{pct}% data', { pct: r.coverage }))}</span>
</div>`;
}

// An Ink-style box with a title set into its top border.
const box = (title, content, cls = '') => `<section class="box ${cls}">${title ? `<h2 class="box-title">${title}</h2>` : ''}${content}</section>`;

function hostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

const issueUrl = (template, title) => `${REPO}/issues/new?${new URLSearchParams({ template, title })}`;
// Lowercase a title for use mid-sentence, but keep acronyms and names (TLS, OpenPGP, IMAP).
// German capitalizes nouns, and many scripts have no case, so only lowercase where it helps.
const KEEP_CASE = new Set(['de']);
const lowerFirst = (s) => {
  if (KEEP_CASE.has(i18n.current())) return s;
  const [first, second] = s.split(' ');
  if (/^[A-Z0-9]{2,}/.test(first) || /[a-z][A-Z]/.test(first) || (second && /^[A-Z]/.test(second))) return s;
  return s.charAt(0).toLowerCase() + s.slice(1);
};
// An English category name mid-sentence: "Email providers" becomes "email providers", but
// "VPN providers", "macOS hardening", "Node.js frameworks", ".NET web frameworks" and names that
// start with a proper noun ("Linux hardening") stay as they are. Only the first letter changes.
const PROPER = new Set(['Linux', 'Windows', 'Python', 'Ruby', 'Go', 'Rust', 'Java', 'Kotlin', 'Elixir', 'Erlang', 'Gleam', 'Android', 'Apple', 'Google', 'Microsoft', 'Firefox', 'Chrome', 'Mastodon', 'Signal', 'Tor']);
const lowerName = (s) => {
  const first = String(s).split(/[\s,]/, 1)[0];
  return /^[A-Z][a-z]*(-[a-z]+)*$/.test(first) && !PROPER.has(first) ? s.charAt(0).toLowerCase() + s.slice(1) : s;
};
// A category name mid-sentence, in the current language.
const catLower = (c) => (i18n.isDefault() ? lowerName(c.name) : lowerFirst(t(c.name)));
const pickBadge = (e) => (e.pick ? `<span class="pick">${th('Our pick')}</span>` : '');
// "a, b and c" in the current language.
const joinList = (items, conj = 'and') => {
  if (items.length <= 1) return items.join('');
  if (i18n.isDefault()) return `${items.slice(0, -1).join(', ')} ${conj} ${items[items.length - 1]}`;
  return new Intl.ListFormat(i18n.locale().hreflang, { type: conj === 'or' ? 'disjunction' : 'conjunction' }).format(items);
};

function eyesBadge(j) {
  if (!j) return '';
  const cls = j.eyes === 5 ? 'eyes-5' : j.eyes ? 'eyes-14' : 'eyes-none';
  const label = j.eyesName ? t(j.eyesName) : t('Outside Eyes');
  return `<span class="eyes ${cls}" title="${esc(label)}">${esc(label)}</span>`;
}

function jurisdictionShort(j) {
  if (!j) return `<span class="muted">${th('Unknown')}</span>`;
  return `<a href="${u(`/jurisdictions/${j.slug}/`)}">${esc(t(j.name))}</a> ${eyesBadge(j)}`;
}

function jurisdictionFacts(j) {
  const f = [];
  f.push(j.eyesName ? t('{alliance} member', { alliance: t(j.eyesName) }) : t('Not in the Five, Nine or Fourteen Eyes'));
  if (j.eu) f.push(t('EU member (GDPR)'));
  else if (j.eea) f.push(t('EEA member (GDPR)'));
  else if (j.gdpr) f.push(t('GDPR-style data protection law'));
  if (j.cloudAct === 'provider') f.push(t('Subject to the US CLOUD Act'));
  if (j.cloudAct === 'agreement') f.push(t('CLOUD Act data access agreement with the US'));
  return f;
}

// Plain-language summary of a rating, used on pages, in Markdown and for AI agents.
function summarize(e) {
  const r = e.rating;
  const applicable = r.answers.filter((a) => a.answer !== 'n/a' && a.answer !== 'pending');
  const by = (x) => applicable.filter((a) => a.answer === x).map((a) => lowerFirst(t(a.criterion.title)));
  const yes = by('yes');
  const partial = by('partial');
  const no = by('no');
  const unknown = by('unknown');
  const parts = [];
  parts.push(
    r.grade
      ? t('{name} scores {score} out of 100 (grade {grade}) on the {category} criteria.', { name: e.name, score: r.score, grade: r.grade, category: catLower(catById[e.category]) })
      : t('{name} is not graded yet: {pct}% of its criteria have evidence, and {min}% is needed.', { name: e.name, pct: r.coverage, min: Math.round(MIN_COVERAGE * 100) })
  );
  if (yes.length) parts.push(t('It meets {n} of {total} criteria: {list}.', { n: yes.length, total: applicable.length, list: joinList(yes) }));
  if (partial.length) parts.push(t('It partly meets {list}.', { list: joinList(partial) }));
  if (no.length) parts.push(t('It does not meet {list}.', { list: joinList(no) }));
  if (unknown.length) parts.push(t('Still needing evidence: {list}.', { list: joinList(unknown) }));
  if (e.juris) {
    const j = e.juris;
    parts.push(t('It is based in {place}: {facts}.', { place: t(j.inName), facts: jurisdictionFacts(j).map((f, i) => (i ? lowerFirst(f) : f)).join('; ') }));
  }

  const s = r.scan || {};
  const tests = [];
  if (s.ssllabs?.grade) tests.push(t('SSL Labs grade {grade}', { grade: s.ssllabs.grade }));
  if (s.observatory?.grade) tests.push(t('Mozilla HTTP Observatory grade {grade}', { grade: s.observatory.grade }));
  if (s.internetnl?.web) tests.push(t('Internet.nl website score {pct}%', { pct: s.internetnl.web.score }));
  if (s.internetnl?.mail) tests.push(t('Internet.nl email score {pct}%', { pct: s.internetnl.mail.score }));
  if (tests.length) parts.push(t('Automated tests: {list}.', { list: joinList(tests) }));
  return parts.join(' ');
}

// ---------- structured data ----------

const ORG = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: site.title,
  url: `${SITE_URL}/`,
  description: site.tagline,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon-512.png`, width: 512, height: 512 },
  image: `${SITE_URL}/og.png`,
  sameAs: [REPO, 'https://x.com/privacyratings', 'https://www.reddit.com/r/privacyratings/'],
  funder: { '@type': 'Organization', name: 'Forward Email', url: 'https://forwardemail.net' }
};

const website = () => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: site.title,
  description: t(site.tagline),
  url: `${SITE_URL}/`,
  inLanguage: i18n.isDefault() ? 'en' : i18n.locale().hreflang,
  publisher: { '@id': `${SITE_URL}/#organization` },
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}${prefix('/search/')}?q={search_term_string}` }, 'query-input': 'required name=search_term_string' }
});

function breadcrumbs(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(p) }))
  };
}

// ---------- layout ----------

const ICONS = {
  system: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>',
  light: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  dark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  share: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></svg>',
  link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
  globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true" class="fill"><path d="M18.9 1.2h3.7l-8 9.2 9.4 12.4h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L.1 1.2h7.6l5.2 6.9 6-6.9zm-1.3 19.4h2L6.5 3.3H4.3l13.3 17.3z"/></svg>',
  reddit: '<svg viewBox="0 0 24 24" aria-hidden="true" class="fill"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm6.7 13.6c0 .2.1.4.1.6 0 3-3.5 5.5-7.8 5.5s-7.8-2.5-7.8-5.5c0-.2 0-.4.1-.6a1.8 1.8 0 1 1 2-2.9c1.4-1 3.3-1.6 5.3-1.6l1-4.7c0-.1.2-.2.3-.2l3.3.7a1.3 1.3 0 1 1-.1.6l-2.9-.6-.9 4.2c2 .1 3.8.7 5.2 1.6a1.8 1.8 0 1 1 2.2 2.3zM8.7 12a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6zm6.6 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6zm-.2 4c-.1-.1-.3-.1-.4 0-.7.6-1.7.9-2.7.9s-2-.3-2.7-.9c-.1-.1-.3-.1-.4 0-.1.1-.1.3 0 .4.8.7 2 1.1 3.1 1.1s2.3-.4 3.1-1.1c.1-.1.1-.3 0-.4z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>'
};

const NAV = [
  ['Categories', '/#categories'],
  ['Criteria', '/criteria/'],
  ['Jurisdictions', '/jurisdictions/'],
  ['Tests', '/tests/'],
  ['CLI', '/cli/'],
  ['Why', '/why/'],
  ['Contribute', '/contribute/']
];

// Share popover for the current page. Plain links to each network's own share page: no scripts,
// widgets or trackers from those sites are loaded. app.js adds the device's native share sheet.
function shareBox(url, text) {
  const U = encodeURIComponent(url);
  const T = encodeURIComponent(text);
  const both = encodeURIComponent(`${text} ${url}`);
  const targets = [
    [t('Messages'), `sms:?&body=${both}`],
    [t('Email'), `mailto:?subject=${T}&body=${both}`],
    ['WhatsApp', `https://wa.me/?text=${both}`],
    ['Telegram', `https://t.me/share/url?url=${U}&text=${T}`],
    ['Mastodon', `https://mastodon.social/share?text=${both}`],
    ['Bluesky', `https://bsky.app/intent/compose?text=${both}`],
    ['X', `https://x.com/intent/post?text=${T}&url=${U}`],
    ['Reddit', `https://www.reddit.com/submit?url=${U}&title=${T}`],
    ['Hacker News', `https://news.ycombinator.com/submitlink?u=${U}&t=${T}`],
    ['LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${U}`],
    ['Facebook', `https://www.facebook.com/sharer/sharer.php?u=${U}`]
  ].filter(([, href]) => href);
  return `<div id="share" class="share-pop" popover role="dialog" aria-labelledby="share-h" data-share-pop data-url="${esc(url)}" data-text="${esc(text)}">
  <div class="embed-head"><h2 id="share-h">${th('Share')}</h2><button class="icon-btn" type="button" popovertarget="share" popovertargetaction="hide" aria-label="${esc(t('Close'))}">✕</button></div>
  <p class="share-title">${esc(text)}</p>
  <button class="btn share-native" type="button" data-share-native hidden>${ICONS.share}<span>${th('Share with an app on this device')}</span></button>
  <div class="share-link"><label class="sr" for="share-url">${th('Link')}</label><input id="share-url" type="text" value="${esc(url)}" readonly data-share-url><button class="btn btn-quiet" type="button" data-share-copy>${ICONS.link}<span>${th('Copy link')}</span></button></div>
  <ul class="share-grid">${targets.map(([n, href]) => `<li><a class="share-to" href="${esc(href)}"${/^(mailto|sms):/.test(href) ? '' : ' rel="nofollow noopener noreferrer" target="_blank"'}${n === 'Mastodon' ? ' data-mastodon' : ''}>${esc(n)}</a></li>`).join('')}</ul>
  <form class="share-mastodon" data-mastodon-form hidden><label for="share-instance">${th('Your Mastodon server')}</label><div><input id="share-instance" type="text" inputmode="url" placeholder="mastodon.social" autocomplete="off" spellcheck="false"><button class="btn" type="submit">${th('Share')}</button></div></form>
  <p class="muted small" data-share-status role="status">${th('These are plain links. No share buttons, scripts or trackers from other sites are loaded.')}</p>
</div>`;
}

// A "Share" button for page headers. It opens the page's share popover.
const shareButton = (label = 'Share') => `<button class="btn btn-quiet btn-share" type="button" popovertarget="share" data-share>${ICONS.share}<span>${esc(t(label))}</span></button>`;

// Social images requested by pages. build.js renders them with scripts/og.js.
const ogJobs = [];
const IMAGE_TYPES = new Set(['WebPage', 'CollectionPage', 'Article', 'SoftwareApplication', 'WebApplication', 'MobileApplication', 'Product', 'Service', 'Dataset']);
const ogFile = (pathname) => `og${pathname === '/' ? '/home' : pathname.replace(/\/$/, '')}.png`;
function ogAlt(spec) {
  if (!spec) return `${site.title}: ${t(site.tagline)}`;
  const ng = t('not graded');
  if (spec.kind === 'entry') {
    const r = spec.entry.rating;
    return `${spec.entry.name}: ${r.grade ? t('privacy grade {grade}, {score} out of 100', { grade: r.grade, score: r.score }) : t('not graded yet')}. ${t(spec.category)}.`;
  }
  if (spec.kind === 'compare') return t('{a} ({ga}) versus {b} ({gb}), compared by Privacy Ratings.', { a: spec.a.name, ga: spec.a.rating.grade || ng, b: spec.b.name, gb: spec.b.rating.grade || ng });
  if (spec.kind === 'list') return `${spec.title}: ${spec.entries.slice(0, 4).map((e) => `${e.name} (${e.rating.grade || ng})`).join(', ')}.`;
  return `${spec.title}. ${site.title}.`;
}

// Shown in the footer of translated pages.
const TRANSLATION_NOTE = {
  "ar": "الترجمات مقدمة للتيسير فقط. النسخة الإنجليزية هي المرجع.",
  "cs": "Překlady slouží pro pohodlí. Rozhodující je anglická verze.",
  "da": "Oversættelser stilles til rådighed for nemheds skyld. Den engelske version har forrang.",
  "de": "Übersetzungen dienen nur der Bequemlichkeit. Maßgeblich ist die englische Fassung.",
  "es": "Las traducciones se ofrecen por comodidad. Prevalece la versión en inglés.",
  "fi": "Käännökset ovat vain avuksi. Englanninkielinen versio on ratkaiseva.",
  "fr": "Les traductions sont fournies à titre indicatif. La version anglaise fait foi.",
  "he": "התרגומים מסופקים לנוחות בלבד. הגרסה האנגלית היא הקובעת.",
  "hu": "A fordítások csak tájékoztató jellegűek. Az angol változat az irányadó.",
  "id": "Terjemahan disediakan untuk kemudahan. Versi bahasa Inggris yang berlaku.",
  "it": "Le traduzioni sono fornite per comodità. Prevale la versione inglese.",
  "ja": "翻訳は便宜のために提供されています。英語版が優先されます。",
  "ko": "번역은 편의를 위해 제공됩니다. 영어 버전이 우선합니다.",
  "nl": "Vertalingen worden voor het gemak aangeboden. De Engelse versie is leidend.",
  "no": "Oversettelser tilbys for enkelhets skyld. Den engelske versjonen gjelder.",
  "pl": "Tłumaczenia udostępniono dla wygody. Rozstrzygająca jest wersja angielska.",
  "pt": "As traduções são fornecidas por conveniência. A versão em inglês prevalece.",
  "ru": "Переводы предоставляются для удобства. Преимущественную силу имеет английская версия.",
  "sv": "Översättningar tillhandahålls för enkelhetens skull. Den engelska versionen gäller.",
  "th": "คำแปลมีไว้เพื่อความสะดวก ฉบับภาษาอังกฤษมีผลบังคับเหนือกว่า",
  "tr": "Çeviriler kolaylık için sunulmuştur. İngilizce sürüm esastır.",
  "uk": "Переклади надано для зручності. Переважну силу має англійська версія.",
  "vi": "Bản dịch chỉ nhằm mục đích tiện lợi. Bản tiếng Anh có giá trị ưu tiên.",
  "zh": "译文仅为方便阅读而提供。以英文版本为准。"
};

// Which languages have this page. Every translated page exists in all languages.
const hasTranslations = (pathname) => localized.has(pathname);
const inLocale = (code, pathname) => `${SITE_URL}${code === i18n.DEFAULT ? '' : `/${code}`}${pathname}`;

// Shorten text to at most `max` characters, at the end of a sentence when one ends late enough,
// otherwise at a word boundary with an ellipsis. Counted by code point, so it never ends in half
// an emoji or surrogate pair. Scripts without spaces (Chinese, Japanese, Thai) are cut at a
// sentence end or, failing that, mid-text with an ellipsis.
function clip(text, max) {
  const chars = Array.from(String(text ?? '').replace(/\s+/g, ' ').trim());
  if (chars.length <= max) return chars.join('');
  const min = Math.floor(max * 0.6);
  // A sentence ends at ". ", "! ", "? " or at CJK full stops, which need no space after them.
  for (let n = max; n >= min; n--) {
    const c = chars[n - 1];
    if (/[。！？]/u.test(c) || (/[.!?]/.test(c) && chars[n] === ' ')) return chars.slice(0, n).join('');
  }
  const cut = chars.slice(0, max - 1);
  const space = cut.lastIndexOf(' ');
  const words = space >= min ? cut.slice(0, space) : cut;
  return `${words.join('').replace(/[\s,;:–—-]+$/u, '')}…`;
}

function layout({ title, description, body, pathname, jsonld = [], noindex = false, lastmod = null, type = 'website', markdown = true, share = null, shareable = true, og = null }) {
  const loc = i18n.locale();
  const tagline = t(site.tagline);
  const fullTitle = title ? `${title} | ${site.title}` : `${site.title}: ${tagline}`;
  // Search results show about 160 characters; social cards have a little more room.
  const text = description || tagline;
  const desc = clip(text, 160);
  const socialDesc = clip(text, 200);
  const url = abs(pathname);
  // Social images are drawn once, from the English page, and shared by every language.
  if (og && i18n.isDefault()) ogJobs.push({ file: ogFile(pathname), spec: og });
  const image = og ? `${SITE_URL}/${ogFile(pathname)}` : `${SITE_URL}/og.png`;
  const imageAlt = ogAlt(og);
  const graph = { '@context': 'https://schema.org', '@graph': [ORG, website(), ...jsonld.map((j) => (IMAGE_TYPES.has(j['@type']) && !j.image ? { ...j, image, ...(i18n.isDefault() ? {} : { inLanguage: loc.hreflang }) } : j))] };
  const nav = NAV.map(([n, p]) => `<a href="${u(p)}"${pathname === p ? ' aria-current="page"' : ''}>${th(n)}</a>`).join('');
  const translated = hasTranslations(pathname) && !noindex;
  const alternates = translated
    ? `${i18n.LOCALES.map((l) => `<link rel="alternate" hreflang="${esc(l.hreflang)}" href="${esc(inLocale(l.code, pathname))}">`).join('\n')}\n<link rel="alternate" hreflang="x-default" href="${esc(inLocale(i18n.DEFAULT, pathname))}">\n`
    : '';
  const mdHref = u(pathname === '/' ? '/index.md' : `${pathname}index.md`).replace(new RegExp(`^${BASE}/${i18n.current()}/`), `${BASE}/`);
  return `<!doctype html>
<html lang="${esc(loc.hreflang)}"${loc.dir === 'rtl' ? ' dir="rtl"' : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="${CSP}">
<meta name="referrer" content="strict-origin-when-cross-origin">
<script>${THEME_SCRIPT}</script>
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'}">
<link rel="canonical" href="${esc(url)}">
${alternates}${markdown ? `<link rel="alternate" type="text/markdown" href="${esc(mdHref)}" title="Markdown version">\n` : ''}<link rel="alternate" type="application/json" href="${BASE}/api/ratings.json" title="All ratings as JSON">
<link rel="alternate" type="application/atom+xml" href="${BASE}/feed.xml" title="Rating changes">
<meta name="theme-color" content="#f6f6f3" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0b0d10" media="(prefers-color-scheme: dark)">
<meta name="color-scheme" content="light dark">
<meta property="og:site_name" content="${esc(site.title)}">
<meta property="og:title" content="${esc(title || fullTitle)}">
<meta property="og:description" content="${esc(socialDesc)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:type" content="${type}">
<meta property="og:locale" content="${esc(loc.og)}">
<meta property="og:image" content="${esc(image)}">
<meta property="og:image:secure_url" content="${esc(image)}">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(imageAlt)}">
${lastmod ? `<meta property="article:modified_time" content="${esc(lastmod)}">\n` : ''}<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title || fullTitle)}">
<meta name="twitter:description" content="${esc(socialDesc)}">
<meta name="twitter:image" content="${esc(image)}">
<meta name="twitter:image:alt" content="${esc(imageAlt)}">
<link rel="icon" href="${BASE}/favicon.ico" sizes="48x48">
<link rel="icon" href="${BASE}/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${BASE}/apple-touch-icon.png">
<link rel="mask-icon" href="${BASE}/safari-pinned-tab.svg" color="#0b6e66">
<link rel="manifest" href="${BASE}/site.webmanifest">
<meta name="application-name" content="${esc(site.title)}">
<meta name="apple-mobile-web-app-title" content="${esc(site.title)}">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="format-detection" content="telephone=no">
<link rel="stylesheet" href="${BASE}/style.css">
<script type="application/ld+json">${JSON.stringify(graph).replace(/</g, '\\u003c')}</script>
${i18n.isDefault() ? `<script>${LANG_REDIRECT}</script>\n` : ''}</head>
<body data-base="${esc(BASE)}"${i18n.isDefault() ? '' : ` data-lang="${esc(i18n.current())}"`}>
<a class="skip" href="#main">${th('Skip to content')}</a>
<header class="top">
  <div class="wrap top-inner">
    <a class="brand" href="${u('/')}">${logo(28)}<span>${esc(site.title)}</span></a>
    <nav class="nav-desktop" aria-label="${esc(t('Main'))}">${nav}</nav>
    <div class="top-actions">
      <a class="search-trigger" href="${u('/search/')}" data-palette aria-label="${esc(t('Search ratings'))}" aria-keyshortcuts="Control+K Meta+K">${ICONS.search}<span class="st-label">${th('Search')}</span><kbd class="st-kbd" aria-hidden="true" data-k="⌘K"></kbd></a>
      ${shareable ? `<button class="icon-btn" type="button" popovertarget="share" data-share data-tip="${esc(t('Share this page'))}" aria-label="${esc(t('Share this page'))}">${ICONS.share}</button>` : ''}
      <button class="icon-btn hide-xs" type="button" popovertarget="lang" data-tip="${esc(t('Language'))}" aria-label="${esc(t('Language'))}: ${esc(loc.name)}">${ICONS.globe}</button>
      <a class="icon-btn hide-sm" href="${REPO}" data-tip="${esc(t('Source and discussions on GitHub'))}" aria-label="${esc(t('GitHub repository'))}">${ICONS.github}</a>
      <button class="icon-btn theme-toggle" type="button" data-theme-toggle aria-label="${esc(t('Color theme: system'))}" data-tip="${esc(t('Theme: follows your system'))}">
        <span class="ti ti-system">${ICONS.system}</span><span class="ti ti-light">${ICONS.light}</span><span class="ti ti-dark">${ICONS.dark}</span>
      </button>
      <details class="menu">
        <summary class="icon-btn" aria-label="${esc(t('Menu'))}">${ICONS.menu}</summary>
        <nav class="nav-mobile" aria-label="${esc(t('Main'))}">${nav}<button class="nav-lang" type="button" popovertarget="lang">${ICONS.globe}<span>${th('Language')}: ${esc(loc.name)}</span></button></nav>
      </details>
    </div>
  </div>
</header>
<main id="main" class="wrap">
${body}
</main>
${shareable ? shareBox(url, share || (title ? title : `${site.title}: ${tagline}`)) : ''}
<div id="lang" class="lang-pop" popover role="dialog" aria-labelledby="lang-h"><div class="embed-head"><h2 id="lang-h">${th('Language')}</h2><button class="icon-btn" type="button" popovertarget="lang" popovertargetaction="hide" aria-label="${esc(t('Close'))}">✕</button></div><ul class="lang-list" data-lang-list data-current="${esc(i18n.current())}"></ul>${translated ? '' : `<p class="muted small">${th('This page is available in English only. Other languages open their home page.')}</p>`}</div>
<footer class="foot">
  <div class="wrap foot-grid">
    <div>
      <p class="brand-sm">${logo(22)} ${esc(site.title)}</p>
      <p>${th(site.disclosure)}</p>
      <p><a href="${u('/governance/')}">${th('How conflicts of interest are handled')}</a></p>
      <ul class="social"><li><a href="https://x.com/privacyratings" rel="me noopener">${ICONS.x}<span>X</span></a></li><li><a href="https://www.reddit.com/r/privacyratings/" rel="me noopener">${ICONS.reddit}<span>Reddit</span></a></li><li><a href="${REPO}" rel="me noopener">${ICONS.github}<span>GitHub</span></a></li></ul>
    </div>
    <nav aria-label="${esc(t('Explore'))}">
      <h2 class="foot-h">${th('Explore')}</h2>
      <ul><li><a href="${u('/#categories')}">${th('Categories')}</a></li><li><a href="${u('/criteria/')}">${th('Criteria')}</a></li><li><a href="${u('/jurisdictions/')}">${th('Jurisdictions')}</a></li><li><a href="${u('/cloud-act/')}">${th('CLOUD Act')}</a></li><li><a href="${u('/tests/')}">${th('Automated tests')}</a></li><li><a href="${u('/badges/')}">${th('Badges')}</a></li><li><a href="${u('/cli/')}">${th('Command-line tool')}</a></li><li><a href="${u('/why/')}">${th('Why this exists')}</a></li></ul>
    </nav>
    <nav aria-label="${esc(t('Participate'))}">
      <h2 class="foot-h">${th('Participate')}</h2>
      <ul><li><a href="${REPO}">GitHub</a></li><li><a href="https://www.reddit.com/r/privacyratings/">r/privacyratings</a></li><li><a href="https://x.com/privacyratings">@privacyratings</a></li><li><a href="${REPO}/issues">${th('Issues')}</a></li><li><a href="${REPO}/discussions">${th('Discussions')}</a></li><li><a href="${u('/contribute/')}">${th('Contribute')}</a></li></ul>
    </nav>
    <nav aria-label="${esc(t('Data'))}">
      <h2 class="foot-h">${th('Data')}</h2>
      <ul><li><a href="${BASE}/api/ratings.json">${th('JSON API')}</a></li><li><a href="${BASE}/llms.txt">llms.txt</a></li><li><a href="${BASE}/feed.xml">${th('Atom feed')}</a></li><li><a href="${BASE}/sitemap.xml">${th('Sitemap')}</a></li></ul>
    </nav>
  </div>
  <div class="wrap foot-legal">
    <p class="disclaimer">${th('Ratings are provided for information only and may be inaccurate or out of date. They are not legal or security advice. Anyone can {correction}.', { correction: `<a href="${REPO}/issues/new?template=correction.yml">${th('submit a correction')}</a>` })} <a href="${u('/disclaimer/')}">${th('Disclaimer')}</a>${i18n.isDefault() ? '' : ` ${TRANSLATION_NOTE[i18n.current()] || ''}`}</p>
    <p>${th('Content {content} · Code {code} · Includes data from {ap} (CC0) · No trackers, cookies, ads or affiliate links.', { content: '<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">CC BY-SA 4.0</a>', code: `<a href="${REPO}/blob/${site.branch}/LICENSE">MIT</a>`, ap: '<a href="https://github.com/lissy93/awesome-privacy">Awesome Privacy</a>' })}</p>
  </div>
</footer>
${i18n.isDefault() ? '' : `<script src="${BASE}/i18n/${esc(i18n.current())}.js" defer></script>\n`}<script src="${BASE}/app.js" defer></script>
</body>
</html>
`;
}

// On an English page, send first-time visitors whose browser prefers another available
// language to that version, once. Choosing a language in the menu is remembered and always wins.
// The query string and fragment are kept. The Chinese pages are Simplified Chinese, so browsers
// asking for Traditional Chinese (zh-TW, zh-HK, zh-MO, zh-Hant) stay on English unless zh was chosen.
const LANG_REDIRECT = `(function(){try{var alts={};document.querySelectorAll('link[rel=alternate][hreflang]').forEach(function(l){alts[l.hreflang]=new URL(l.href).pathname.replace(/^\\/+/,'/')});if(!alts.en)return;var hl=function(c){return c==='no'||c==='nn'?'nb':c};var to=function(h){location.replace(h+location.search+location.hash)};var s=localStorage.getItem('lang');if(s){if(alts[hl(s)]&&s!=='en')to(alts[hl(s)]);return}var langs=navigator.languages||[navigator.language];for(var i=0;i<langs.length;i++){var c=String(langs[i]).toLowerCase(),b=c.split('-')[0];if(b==='en'){localStorage.setItem('lang','en');return}if(b==='zh'&&/^zh-(tw|hk|mo|hant)\\b/.test(c))return;if(alts[c]||alts[hl(b)]){localStorage.setItem('lang',b==='nb'||b==='nn'?'no':b);to(alts[c]||alts[hl(b)]);return}}}catch(e){}})();`;

// Applied before the first paint so the page does not flash the wrong theme.
const THEME_SCRIPT = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

// Content Security Policy. GitHub Pages cannot send headers, so it is a <meta> tag: the two inline
// scripts above are allowed by hash, everything else must come from this site. JSON-LD is data,
// not script, so it needs no hash. frame-ancestors and report-uri are ignored in <meta>, so they
// are left out (browsers log a console error otherwise).
const scriptHash = (s) => `'sha256-${crypto.createHash('sha256').update(s, 'utf8').digest('base64')}'`;
const CSP = [
  "default-src 'self'",
  `script-src 'self' ${scriptHash(THEME_SCRIPT)} ${scriptHash(LANG_REDIRECT)}`,
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self'",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'self'"
].join('; ');

// ---------- home ----------

function homePage() {
  const groups = [...new Set(categories.map((c) => c.group))];
  const pickCards = categories
    .map((c) => ({ c, picks: inCategory[c.id].filter((e) => e.pick) }))
    .filter((x) => x.picks.length)
    .map(
      ({ c, picks }) => `<li class="card">
  <a class="card-cat" href="${u(`/${c.id}/`)}">${esc(t(c.name))}</a>
  ${picks
    .map((e) => `<div class="card-row"><a class="card-name" href="${u(e.path)}">${esc(e.name)}</a>${gradeBadge(e.rating)}</div>`)
    .join('')}
</li>`
    )
    .join('\n');

  const groupHtml = groups
    .map((g) => {
      const cats = categories.filter((c) => c.group === g);
      const id = `g-${g.toLowerCase().replace(/\W+/g, '-')}`;
      return `<section class="box group" aria-labelledby="${id}">
  <h3 class="box-title" id="${id}">${esc(t(g))}</h3>
  <ul class="cat-list">
    ${cats.map((c) => `<li><a href="${u(`/${c.id}/`)}" data-tip="${esc(t(c.description))}">${esc(t(c.name))}</a><span class="count">${inCategory[c.id].length}</span></li>`).join('\n    ')}
  </ul>
</section>`;
    })
    .join('\n');

  const alts = alternatives.map((a) => `<li><a href="${u(a.path)}">${esc(a.entry.name)}</a></li>`).join('');
  const oss = openSource.map((o) => `<li><a href="${u(o.path)}">${esc(t(o.category.name))}</a></li>`).join('');
  const critCount = criteria.common.length + Object.values(criteria.byCategory).flat().length;
  const tested = entries.filter((e) => e.rating.scan && (e.rating.scan.ssllabs || e.rating.scan.observatory || e.rating.scan.mail)).length;
  const a = (href, text) => `<a href="${href}">${th(text)}</a>`;

  const body = `
<section class="hero">
  <p class="prompt" aria-hidden="true"><span class="prompt-sign">$</span> privacyratings "private email"<span class="cursor"></span></p>
  <h1>${th(site.tagline)}</h1>
  <p class="lede">${th('Scored against {criteria}, backed by evidence links, checked by {tests}, with {jurisdiction} on every page. Run by {fe}, managed in the open on {github}.', { criteria: a(u('/criteria/'), 'public criteria'), tests: a(u('/tests/'), 'automated security tests'), jurisdiction: a(u('/jurisdictions/'), 'jurisdiction'), fe: '<a href="https://forwardemail.net">Forward Email</a>', github: `<a href="${REPO}">GitHub</a>` })}</p>
  <form class="search" role="search" action="${u('/search/')}">
    <label class="sr" for="q">${th('Search ratings')}</label>
    <input id="q" name="q" type="search" placeholder="${esc(t('Search {n} apps and services', { n: entries.length }))}" autocomplete="off" data-search>
    <kbd class="kbd" aria-hidden="true">/</kbd>
  </form>
  <ul class="search-results" data-results hidden></ul>
  <p class="hero-share">${shareButton('Share Privacy Ratings')}</p>
  <dl class="stats">
    <div><dt>${th('Rated')}</dt><dd>${entries.length}</dd></div>
    <div><dt>${th('Categories')}</dt><dd>${categories.length}</dd></div>
    <div><dt>${th('Criteria')}</dt><dd>${critCount}</dd></div>
    <div><dt>${th('Tested services')}</dt><dd>${tested}</dd></div>
  </dl>
</section>

${box(
  th('Our picks'),
  `<p class="muted">${th('Chosen by the maintainers and explained on each page. Scores are calculated separately.')} ${a(u('/governance/'), 'How picks work')}</p>
<ul class="cards">
${pickCards}
</ul>`,
  'picks'
)}

<section id="categories" aria-labelledby="cats">
  <h2 id="cats" class="section-h">${th('Categories')}</h2>
  <div class="groups">
${groupHtml}
  </div>
</section>

${box(th('Guides'), `<ul class="inline-list">${topics.map((g) => `<li><a href="${u(g.path)}">${esc(t(g.h1))}</a></li>`).join('')}</ul>`)}

${box(th('Private alternatives to'), `<ul class="inline-list">${alts}</ul>`)}

${box(th('Open-source lists'), `<ul class="inline-list">${oss}</ul>`)}

${box(
  th('How ratings work'),
  `<ol class="steps">
    <li><strong>${th('Public criteria.')}</strong> ${th('Short yes-or-no questions weighted from 1 to 3.')} ${a(u('/criteria/'), 'See all criteria')}.</li>
    <li><strong>${th('Evidence for every answer.')}</strong> ${th('A "yes" or "partial" needs a link anyone can check. Anything unproven scores zero.')}</li>
    <li><strong>${th('Automated tests.')}</strong> ${th('SSL Labs, Mozilla HTTP Observatory, Internet.nl, and IMAP, POP3, SMTP, MTA-STS, DANE and DNSSEC checks for email.')} ${a(u('/tests/'), 'About the tests')}.</li>
    <li><strong>${th('Jurisdiction shown, practices scored.')}</strong> ${th('Country, Five, Nine or Fourteen Eyes, and CLOUD Act exposure on every page.')} ${a(u('/jurisdictions/'), 'Why')}.</li>
    <li><strong>${th('No grade without data.')}</strong> ${th('At least {pct}% of criteria need evidence before a letter grade appears.', { pct: Math.round(MIN_COVERAGE * 100) })}</li>
    <li><strong>${th('Open to everyone.')}</strong> ${th('Suggestions and corrections go through GitHub issues and pull requests.')} ${a(u('/contribute/'), 'How to contribute')}.</li>
  </ol>`,
  'how'
)}

${box(
  th('Command-line tool'),
  `<div class="cli-teaser"><div><p>${th('Search every rating from your terminal: interactive search, plain text for scripts and JSON. One line to install, and it keeps itself up to date.')}</p>${installBlock()}<p>${a(u('/cli/'), 'Try it in your browser')}</p></div>${terminalDemo({ rows: 6, compact: true })}</div>`,
  'cli-box'
)}`;

  const jsonld = [
    {
      '@type': 'Dataset',
      name: `${site.title} data`,
      description: `Privacy ratings for ${entries.length} apps and services, with criteria answers, evidence links, jurisdictions and automated security test results.`,
      url: `${SITE_URL}/`,
      license: 'https://creativecommons.org/licenses/by-sa/4.0/',
      creator: { '@id': `${SITE_URL}/#organization` },
      isAccessibleForFree: true,
      keywords: ['privacy', 'security', 'ratings', 'email', 'VPN', 'browser', 'jurisdiction', 'Five Eyes'],
      distribution: [
        { '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: `${SITE_URL}/api/ratings.json` },
        { '@type': 'DataDownload', encodingFormat: 'text/markdown', contentUrl: `${SITE_URL}/llms-full.txt` }
      ]
    }
  ];

  return layout({
    title: '',
    description: `${t(site.tagline)} ${t('Compare {n} private email providers, VPNs, browsers, password managers and more by public criteria, evidence and security tests.', { n: entries.length })}`,
    body,
    pathname: '/',
    jsonld,
    og: { kind: 'page', title: 'Open, testable privacy ratings', text: 'For the apps and services people use every day.', kicker: 'Open source', stats: [['Rated', String(entries.length)], ['Categories', String(categories.length)], ['Criteria', String(critCount)]] }
  });
}

// ---------- category ----------

function categoryIntro(cat, list) {
  const picks = list.filter((e) => e.pick && e.category === cat.id);
  const graded = list.filter((e) => e.rating.grade);
  const crit = criteriaFor(criteria, cat).filter((c) => !(c.services && cat.type !== 'service'));
  const withJ = list.filter((e) => e.juris);
  const five = withJ.filter((e) => e.juris.eyes === 5).length;
  const fourteen = withJ.filter((e) => e.juris.eyes).length;
  const names = joinList(picks.map((e) => `<a href="${u(e.path)}">${esc(e.name)}</a>`), 'or');
  const p = [];
  p.push(
    graded.length
      ? th('{n} {category} are rated against {crit} public criteria, and {graded} have enough evidence for a letter grade.', { n: list.length, category: esc(catLower(cat)), crit: crit.length, graded: graded.length })
      : th('{n} {category} are rated against {crit} public criteria.', { n: list.length, category: esc(catLower(cat)), crit: crit.length })
  );
  if (picks.length) p.push(picks.length > 1 ? th('Our picks are {names}.', { names }) : th('Our pick is {names}.', { names }));
  if (withJ.length) p.push(th('Of the {n} with a known jurisdiction, {five} based in a Five Eyes country, and {fourteen} in the wider Fourteen Eyes.', { n: withJ.length, five: esc(tp(five, '{n} is', '{n} are')), fourteen }));
  return p.join(' ');
}

function categoryPage(cat) {
  const list = ctx.shownIn[cat.id];
  const crit = criteriaFor(criteria, cat).filter((c) => !(c.services && cat.type !== 'service'));
  const manual = crit.filter((c) => !c.auto);
  const auto = crit.filter((c) => c.auto);
  const showJ = list.some((e) => e.juris);
  const picks = list.filter((e) => e.pick && e.category === cat.id);
  const name = t(cat.name);
  const lower = catLower(cat);
  const autoTag = t('(automated test)');

  const head = `<tr>
  <th scope="col">${th('Name')}</th>
  <th scope="col" class="num">${th('Grade')}</th>
  <th scope="col" class="num">${th('Score')}</th>
  <th scope="col" class="num"><span class="tip" tabindex="0" data-tip="${esc(t('Share of criteria answered with evidence'))}">${th('Data')}</span></th>
  ${showJ ? `<th scope="col">${th('Jurisdiction')}</th>` : ''}
  ${[...manual, ...auto].map((c) => `<th scope="col" class="c${c.auto ? ' auto' : ''}"><span class="tip" tabindex="0" data-tip="${esc(t(c.question))}${c.auto ? ` ${esc(autoTag)}` : ''}">${esc(t(c.title))}</span></th>`).join('')}
</tr>`;

  const L = { grade: esc(t('Grade')), score: esc(t('Score')), data: esc(t('Data')), jur: esc(t('Jurisdiction')) };
  const titles = Object.fromEntries(crit.map((c) => [c.id, esc(t(c.title))]));
  const rows = list
    .map((e) => {
      const byId = Object.fromEntries(e.rating.answers.map((a) => [a.criterion.id, a]));
      const cross = e.category !== cat.id;
      const home = catById[e.category];
      const cell = (c) => {
        const a = byId[c.id] || { answer: cross ? 'n/a' : 'unknown', note: cross ? t('Not a criterion for {category}', { category: catLower(home) }) : '' };
        // Notes are in English, so translated tables show the answer alone.
        return `<td class="c" data-label="${titles[c.id]}">${answerBadge(a.answer, i18n.isDefault() || cross ? a.note || '' : '', false, false)}</td>`;
      };

      return `<tr data-name="${esc(e.name.toLowerCase())}">
  <th scope="row"><div class="row-name"><a href="${u(e.path)}">${esc(e.name)}</a> ${cross ? `<span class="pill" data-tip="${esc(t('Rated under {category}', { category: t(home.name) }))}">${esc(t(home.name))}</span>` : pickBadge(e)}</div><div class="desc">${esc(t(e.description || ''))}</div></th>
  <td class="num" data-label="${L.grade}">${gradeBadge(e.rating)}</td>
  <td class="num" data-label="${L.score}">${e.rating.grade ? e.rating.score : '<span class="muted">–</span>'}</td>
  <td class="num" data-label="${L.data}">${e.rating.coverage}%</td>
  ${showJ ? `<td class="nowrap j" data-label="${L.jur}">${e.juris ? jurisdictionShort(e.juris) : '<span class="muted">–</span>'}</td>` : ''}
  ${[...manual, ...auto].map(cell).join('')}
</tr>`;
    })
    .join('\n');

  const compareLinks = ctx.comparisons.filter((c) => c.category === cat.id).slice(0, 24);
  const alt = alternatives.filter((a) => a.entry.category === cat.id);
  const oss = openSource.find((o) => o.category.id === cat.id);
  const h1 = t(cat.h1 || `${cat.name} privacy ratings`);
  const pickNames = joinList(picks.map((e) => `<a href="${u(e.path)}">${esc(e.name)}</a>`), 'or');

  const body = `
<nav class="crumbs" aria-label="${esc(t('Breadcrumb'))}"><a href="${u('/')}">${th('Home')}</a> › ${esc(t(cat.group))}</nav>
<div class="h1-row"><h1>${esc(h1)}</h1>${shareButton()}</div>
<p class="lede">${esc(t(cat.description))}</p>
<p>${categoryIntro(cat, list)}</p>
<p class="muted">${oss ? `<a href="${u(oss.path)}">${th('Open-source {category} only', { category: esc(lower) })}</a> · ` : ''}<a href="${u(`/criteria/#${cat.id}`)}">${th('Criteria for this category')}</a> · <a href="${issueUrl('suggest.yml', `Suggest: <name> (${cat.name})`)}">${th('Suggest an addition')}</a> · <a href="${BASE}/${cat.id}/index.md">Markdown</a></p>
<div class="legend" aria-hidden="true">${['yes', 'partial', 'no', 'unknown', 'pending', 'n/a'].map((x) => `<span>${answerBadge(x)} ${esc(LABEL[x])}</span>`).join('')}</div>
<div class="toolbar"><label class="sr" for="filter">${th('Filter {category}', { category: esc(lower) })}</label><input id="filter" class="filter" type="search" placeholder="${esc(t('Filter {n} entries', { n: list.length }))}" data-filter><span class="muted small" data-count>${th('{n} shown', { n: list.length })}</span></div>
<div class="table-wrap" role="region" aria-label="${esc(t('{category} ratings', { category: name }))}" tabindex="0">
<table class="ratings responsive">
<caption class="sr">${th('{category} privacy ratings, sorted by pick and then by grade', { category: esc(name) })}</caption>
<thead>${head}</thead>
<tbody>
${rows}
</tbody>
</table>
</div>

<section aria-labelledby="faq">
<h2 id="faq">${th('Questions')}</h2>
<h3>${th('What is the most private option among {category}?', { category: esc(lower) })}</h3>
<p>${picks.length ? `${picks.length > 1 ? th('Our picks are {names}.', { names: pickNames }) : th('Our pick is {names}.', { names: pickNames })} ${picks.map((e) => esc(t(e.pick_reason || ''))).join(' ')}` : th('No pick has been made yet. The table above is sorted by score, based on public evidence.')}</p>
<h3>${th('How are {category} rated?', { category: esc(lower) })}</h3>
<p>${th('Each entry answers {n} questions: {list}. Answers need links to evidence.', { n: crit.length, list: esc(joinList(crit.map((c) => lowerFirst(t(c.title))))) })} <a href="${u(`/criteria/#${cat.id}`)}">${th('See the full criteria')}</a>.</p>
${showJ ? `<h3>${th('Does jurisdiction matter?')}</h3><p>${th('Jurisdiction decides which laws can compel a provider to hand over data. Each entry shows its country and whether it is in the Five, Nine or Fourteen Eyes. The data a provider can hand over depends mostly on what it stores and who holds the keys.')} ${th('Read about {jurisdictions} and {cloudact}.', { jurisdictions: `<a href="${u('/jurisdictions/')}">${th('jurisdictions')}</a>`, cloudact: `<a href="${u('/cloud-act/')}">${th('the CLOUD Act')}</a>` })}</p>` : ''}
</section>
${
  compareLinks.length || alt.length
    ? `<section aria-labelledby="more"><h2 id="more">${th('Comparisons')}</h2><ul class="inline-list">${alt.map((x) => `<li><a href="${u(x.path)}">${th('{name} alternatives', { name: esc(x.entry.name) })}</a></li>`).join('')}${compareLinks.map((c) => `<li><a href="${u(c.path)}">${esc(c.a.name)} vs ${esc(c.b.name)}</a></li>`).join('')}</ul></section>`
    : ''
}`;

  const lastmod = list.map((e) => e.lastmod).filter(Boolean).sort().pop();
  const jsonld = [
    breadcrumbs([[t('Home'), '/'], [name, `/${cat.id}/`]]),
    {
      '@type': 'CollectionPage',
      name: t('{category} privacy ratings', { category: name }),
      url: abs(`/${cat.id}/`),
      description: t(cat.description),
      ...(lastmod ? { dateModified: lastmod } : {}),
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: list.length,
        itemListOrder: 'https://schema.org/ItemListOrderDescending',
        itemListElement: list.slice(0, 100).map((e, i) => ({ '@type': 'ListItem', position: i + 1, name: e.name, url: abs(e.path) }))
      }
    }
  ];

  return layout({
    title: cat.seo_title ? t(cat.seo_title) : t('{category} privacy ratings: {n} compared', { category: name, n: list.length }),
    description: picks.length
      ? t('Compare {n} {category} by privacy and security. Our pick: {picks}. Public criteria, evidence links, jurisdictions and automated tests.', { n: list.length, category: lower, picks: joinList(picks.map((e) => e.name), 'or') })
      : t('Compare {n} {category} by privacy and security. Public criteria, evidence links, jurisdictions and automated tests.', { n: list.length, category: lower }),
    body,
    pathname: `/${cat.id}/`,
    jsonld,
    lastmod,
    og: { kind: 'list', title: cat.h1 || `${cat.name} privacy ratings`, kicker: cat.group, entries: [...picks, ...list.filter((e) => !picks.includes(e) && e.rating.grade)], foot: `${list.length} compared by public criteria` }
  });
}

// ---------- entry ----------

function testLinks(e) {
  const cat = catById[e.category];
  const s = e.rating.scan || {};
  const out = [];
  if (!e.domain || !cat.scans.length) return out;
  if (cat.scans.includes('ssllabs')) out.push(['SSL Labs', httpUrl(s.ssllabs?.report) || `https://www.ssllabs.com/ssltest/analyze.html?d=${e.domain}&hideResults=on`, s.ssllabs?.grade]);
  if (cat.scans.includes('observatory')) out.push(['Mozilla HTTP Observatory', httpUrl(s.observatory?.report) || `https://developer.mozilla.org/en-US/observatory/analyze?host=${e.domain}`, s.observatory?.grade]);
  if (cat.scans.includes('internetnl-web')) out.push(['Internet.nl website test', httpUrl(s.internetnl?.web?.report) || `https://internet.nl/site/${e.domain}/`, s.internetnl?.web ? `${s.internetnl.web.score}%` : null]);
  if (cat.scans.includes('internetnl-mail') && e.mail_domain) out.push(['Internet.nl email test', httpUrl(s.internetnl?.mail?.report) || `https://internet.nl/mail/${e.mail_domain}/`, s.internetnl?.mail ? `${s.internetnl.mail.score}%` : null]);
  if (cat.scans.includes('hardenize')) out.push(['Hardenize public report', `https://www.hardenize.com/report/${e.domain}`, null]);
  return out;
}

function answersList(rows) {
  return `<ul class="answers">
${rows
  .map(
    (a) => `<li class="answer answer-${a.answer.replace('/', '')}">
  ${answerBadge(a.answer)}
  <div class="answer-body">
    <p class="answer-title"><a href="${u(`/criteria/#${criterionAnchor(a.criterion)}`)}">${esc(t(a.criterion.title))}</a> <span class="w" data-tip="${esc(t('Weight {w} of 3', { w: a.criterion.weight }))}"><span aria-hidden="true">×${a.criterion.weight}</span><span class="sr">${th('Weight {w} of 3', { w: a.criterion.weight })}</span></span></p>
    <p class="answer-q">${esc(t(a.criterion.question))}</p>
    ${a.note ? `<p class="answer-note"${i18n.isDefault() ? '' : ' lang="en"'}>${esc(a.note)}</p>` : ''}
    ${httpUrl(a.evidence) ? `<p class="answer-ev"><a href="${esc(httpUrl(a.evidence))}" rel="nofollow ugc noopener">${esc(hostname(a.evidence))}</a></p>` : a.answer === 'unknown' && !a.note ? `<p class="answer-note muted">${th('Needs evidence.')} <a href="${issueUrl('correction.yml', 'Evidence: ' + a.criterion.title)}">${th('Add it')}</a></p>` : ''}
  </div>
</li>`
  )
  .join('\n')}
</ul>`;
}

// Email standards details from the automated mail tests.
function mailDetails(m) {
  if (!m) return '';
  const d = m.dns || {};
  const row = (ok, name, value, tip) => `<li>${answerBadge(ok === null ? 'unknown' : ok ? 'yes' : 'no', t(tip))}<span class="mono">${esc(name)}</span><span class="muted">${esc(value)}</span></li>`;
  const pub = t('published');
  const missing = t('missing');
  const none = t('none');
  const checks = [
    row(Boolean(d.mx?.length), 'MX', (d.mx || []).join(', ') || none, 'Mail servers'),
    row(d.spf, 'SPF', d.spf ? pub : missing, 'RFC 7208 sender policy'),
    row(['quarantine', 'reject'].includes(d.dmarc), 'DMARC', d.dmarc ? `p=${d.dmarc}` : missing, 'RFC 7489. Quarantine or reject counts as enforced'),
    row(d.mta_sts === 'enforce', 'MTA-STS', d.mta_sts || missing, 'RFC 8461 strict transport security'),
    row(d.tls_rpt, 'TLS-RPT', d.tls_rpt ? pub : missing, 'RFC 8460 TLS failure reports'),
    row(d.dnssec, 'DNSSEC', d.dnssec ? t('signed and validated') : t('not validated'), 'RFC 4033 signed DNS'),
    row(d.dane === 'all', 'DANE', d.dane || none, 'RFC 7672 TLSA records on MX hosts'),
    row(d.bimi, 'BIMI', d.bimi ? pub : none, 'Brand logo record (not scored)'),
    row(Boolean(d.srv && (d.srv.imaps || d.srv.submissions || d.srv.submission)), 'SRV', d.srv && (d.srv.imaps || d.srv.submissions) ? t('client autoconfiguration published') : none, 'RFC 6186 and RFC 8314 service records (not scored)')
  ].join('');
  const proto = (name, r, key) => {
    if (!r) return `<div class="proto"><p class="proto-h">${name}</p><p class="muted">${th('Not tested yet.')}</p></div>`;
    if (r.offered === false) return `<div class="proto"><p class="proto-h">${name}</p><p class="muted">${th('Not offered.')}</p></div>`;
    if (r.error) return `<div class="proto"><p class="proto-h">${name}</p><p class="muted">${th('Could not test: {error}', { error: esc(r.error) })}</p></div>`;
    const caps = r[key] || [];
    return `<div class="proto"><p class="proto-h">${name} <span class="mono muted">${esc(r.host)}:${esc(r.port)} · ${r.tls === 'implicit' ? th('implicit TLS') : 'STARTTLS'}</span></p><ul class="chips">${caps.map((c) => `<li class="chip mono">${esc(c)}</li>`).join('')}</ul></div>`;
  };

  return `<ul class="checks">${checks}</ul>
<div class="protos">${proto('IMAP', m.imap, 'capabilities')}${proto('POP3', m.pop3, 'capabilities')}${proto(th('SMTP submission'), m.smtp, 'extensions')}</div>
<p class="muted small">${th('Capabilities are what each server advertises before login.')} <a href="${u('/tests/')}">${th('How these tests work')}</a></p>`;
}

// "Embed badge" box and popover on entry pages. Works as a native popover without JavaScript;
// app.js adds live switching between styles and formats, and copy buttons.
const STYLE_LABELS = { flat: 'Small', 'flat-square': 'Small, square', large: 'Medium', card: 'Card', 'card-dark': 'Card, dark' };

function badgeWidth(svg) {
  return Number((svg.match(/width="(\d+(?:\.\d+)?)"/) || [])[1]) || null;
}

// The embed code always points to the English page, so badges link to one canonical place.
function embedSnippets(e, style) {
  const page = `${SITE_URL}${e.path}`;
  const img = `${SITE_URL}${badges.badgePath(e, style.suffix)}`;
  return { page, img, alt: badgeAlt(e) };
}

// Alt text for a badge image, in the current language.
function badgeAlt(e) {
  const d = badges.badgeData(e);
  return d.grade ? t('{name} privacy rating: {grade} ({score}/100)', { name: e.name, grade: d.grade, score: d.score }) : `${t('{name} privacy rating', { name: e.name })}: ${t('not graded')}`;
}

function embedBox(e) {
  const cat = catById[e.category];
  const id = `embed-${e.slug}`;
  const styles = badges.STYLES.map((s) => {
    const svg = badges.badgeSvg(e, s.id, cat.name);
    return { ...s, width: badgeWidth(svg), ...embedSnippets(e, s) };
  });
  const first = styles[0];
  const html = `<a href="${first.page}"><img src="${first.img}" alt="${esc(first.alt)}" width="${first.width}" height="${first.height}"></a>`;
  const json = `${SITE_URL}${badges.badgePath(e, '', 'json')}`;
  const data = styles.map((s) => ({ id: s.id, img: s.img, w: s.width, h: s.height }));
  return `<p><a href="${u(e.path)}"><img src="${BASE}${badges.badgePath(e)}" alt="${esc(first.alt)}" width="${first.width}" height="20" loading="lazy"></a></p>
<p class="muted small">${th('Show this rating on your site. The badge updates when the rating changes and links back here.')}</p>
<button class="btn btn-quiet" type="button" popovertarget="${id}">${th('Embed badge')}</button>
<div id="${id}" class="embed-pop" popover role="dialog" aria-labelledby="${id}-h" data-embed data-page="${esc(first.page)}" data-alt="${esc(first.alt)}" data-json="${esc(json)}" data-styles="${esc(JSON.stringify(data))}">
  <div class="embed-head"><h2 id="${id}-h">${th('Embed a {name} badge', { name: esc(e.name) })}</h2><button class="icon-btn" type="button" popovertarget="${id}" popovertargetaction="hide" aria-label="${esc(t('Close'))}">✕</button></div>
  <p class="muted small">${th('Badges show the current grade and score from this page and cannot be edited.')} <a href="${u('/badges/')}">${th('About badges')}</a></p>
  <fieldset class="embed-opts"><legend>${th('Style and size')}</legend>
    ${styles.map((s, i) => `<label class="opt"><input type="radio" name="${id}-style" value="${s.id}"${i === 0 ? ' checked' : ''}><span>${esc(t(STYLE_LABELS[s.id]))}</span></label>`).join('')}
  </fieldset>
  <div class="embed-preview" data-preview><a href="${u(e.path)}"><img src="${BASE}${badges.badgePath(e)}" alt="${esc(first.alt)}" width="${first.width}" height="${first.height}" loading="lazy"></a></div>
  <fieldset class="embed-opts"><legend>${th('Format')}</legend>
    ${[['html', 'HTML'], ['md', 'Markdown'], ['rst', 'reStructuredText'], ['url', 'Image URL'], ['shields', 'Shields.io']].map(([v, n], i) => `<label class="opt"><input type="radio" name="${id}-fmt" value="${v}"${i === 0 ? ' checked' : ''}><span>${esc(t(n))}</span></label>`).join('')}
  </fieldset>
  <label class="sr" for="${id}-code">${th('Embed code')}</label>
  <textarea id="${id}-code" class="embed-code" rows="4" readonly data-code>${esc(html)}</textarea>
  <div class="embed-actions"><button class="btn" type="button" data-copy>${th('Copy code')}</button><span class="muted small" data-copied role="status"></span></div>
</div>`;
}

// Results of the home page tracker test.
function trackerDetails(tr) {
  if (tr.skipped) return `<p class="muted">${esc(t(tr.skipped))} ${th('Not tested.')}</p>`;
  if (tr.error && !tr.found) return `<p class="muted">${th('Could not test: {error}', { error: esc(tr.error) })}</p>`;
  const found = tr.found || [];
  const hard = found.filter((x) => !x.soft);
  const soft = found.filter((x) => x.soft);
  const li = (x, ok) => `<li>${answerBadge(ok ? 'partial' : 'no', !ok ? t('Third-party tracker') : x.analytics ? t('Cookieless analytics. Limits the answer to partial.') : t('Font, embed, support or consent tool. Not scored.'))}<span class="trk"><span class="trk-n">${esc(x.name)}</span><span class="trk-h">${esc(x.host)}</span></span></li>`;
  const tested = httpUrl(tr.url) ? `<a href="${esc(httpUrl(tr.url))}" rel="nofollow noopener">${esc(hostname(tr.url))}</a>` : esc(tr.url || '');
  return `${found.length ? `<ul class="checks trackers">${hard.map((x) => li(x, false)).join('')}${soft.map((x) => li(x, true)).join('')}</ul>` : `<p>${answerBadge('yes')} ${th('No known trackers on the home page.')}</p>`}
<p class="muted small">${tr.tested_at ? th('Tested {site} on {date}.', { site: tested, date: `<time datetime="${esc(tr.tested_at)}">${esc(tr.tested_at.slice(0, 10))}</time>` }) : th('Tested {site}.', { site: tested })} ${th('Only trackers in the page itself are found.')} <a href="${u('/tests/#website-trackers')}">${th('How this works')}</a></p>`;
}

// schema.org applicationCategory for apps (one of the values search engines list), by category and
// otherwise by group. Operating systems fall back to UtilitiesApplication with their group.
const APP_GROUP = {
  Email: 'CommunicationApplication',
  Browsing: 'BrowserApplication',
  Security: 'SecurityApplication',
  Communication: 'CommunicationApplication',
  Networking: 'UtilitiesApplication',
  'Operating systems': 'UtilitiesApplication',
  Productivity: 'BusinessApplication',
  Development: 'DeveloperApplication',
  'Home and IoT': 'HomeApplication',
  Health: 'HealthApplication',
  Finance: 'FinanceApplication',
  'Social and media': 'MultimediaApplication'
};
const APP_CATEGORY = {
  'ad-blockers': 'SecurityApplication',
  'app-stores': 'UtilitiesApplication',
  'email-security-tools': 'SecurityApplication',
  vpns: 'SecurityApplication',
  firewalls: 'SecurityApplication',
  blocklists: 'SecurityApplication',
  'anonymity-networks': 'SecurityApplication',
  proxies: 'SecurityApplication',
  'self-hosted-network-security': 'SecurityApplication',
  'intrusion-detection': 'SecurityApplication',
  'mesh-vpns': 'SecurityApplication',
  'linux-hardening': 'SecurityApplication',
  'windows-hardening': 'SecurityApplication',
  'macos-hardening': 'SecurityApplication',
  'security-cameras': 'SecurityApplication',
  keyboards: 'DesktopEnhancementApplication',
  launchers: 'DesktopEnhancementApplication',
  'clipboard-managers': 'DesktopEnhancementApplication',
  'screen-recording': 'MultimediaApplication',
  'ebook-readers': 'ReferenceApplication',
  translation: 'ReferenceApplication',
  maps: 'TravelApplication',
  'habit-trackers': 'LifestyleApplication',
  accessibility: 'UtilitiesApplication',
  archivers: 'UtilitiesApplication',
  diagrams: 'DesignApplication',
  'home-design': 'DesignApplication',
  'creative-tools': 'DesignApplication',
  wearables: 'HealthApplication',
  weather: 'UtilitiesApplication',
  'social-networks': 'SocialNetworkingApplication',
  blogging: 'SocialNetworkingApplication',
  'news-readers': 'ReferenceApplication',
  games: 'GameApplication',
  'file-converters': 'UtilitiesApplication',
  'torrent-clients': 'UtilitiesApplication'
};
const applicationCategory = (cat) => APP_CATEGORY[cat.id] || APP_GROUP[cat.group] || 'UtilitiesApplication';

function entryPage(e) {
  const cat = catById[e.category];
  const r = e.rating;
  const manual = r.answers.filter((a) => !a.criterion.auto && a.answer !== 'n/a');
  const auto = r.answers.filter((a) => a.criterion.auto && a.answer !== 'n/a');
  const tests = testLinks(e);
  const others = inCategory[e.category].filter((x) => x !== e);
  // 6 fills one, two or three columns evenly; smaller lists get a column count that leaves no gap.
  const related = others.slice(0, others.length >= 6 ? 6 : others.length === 5 ? 4 : others.length);
  const compares = comparisons.filter((c) => c.a === e || c.b === e).slice(0, 12);
  const alt = alternatives.find((a) => a.entry === e);
  const catName = t(cat.name);
  const license = e.license || r.scan?.github?.license;

  const facts = [
    e.aliases?.length && [th('Also known as'), esc(e.aliases.join(', '))],
    httpUrl(e.website) && [th('Website'), `<a href="${esc(httpUrl(e.website))}" rel="nofollow ugc noopener">${esc(hostname(e.website))}</a>`],
    httpUrl(e.source) && [th('Source code'), `<a href="${esc(httpUrl(e.source))}" rel="nofollow ugc noopener">${esc(e.source.replace(/^https?:\/\/(www\.)?(github\.com\/)?/, ''))}</a>`],
    license && [th('License'), esc(license)],
    e.juris && [th('Jurisdiction'), jurisdictionShort(e.juris)],
    e.platforms?.length && [th('Platforms'), esc(e.platforms.map((p) => t(platformName(p))).join(', '))],
    e.domain && [th('Tested domain'), esc(e.domain)],
    e.mail_domain && [th('Tested mail domain'), esc(e.mail_domain)],
    r.scan?.scanned_at && [th('Last tested'), `<time datetime="${esc(r.scan.scanned_at)}">${esc(r.scan.scanned_at.slice(0, 10))}</time>`]
  ].filter(Boolean);

  const chips = [
    e.juris && `<a class="chip" href="${u(`/jurisdictions/${e.juris.slug}/`)}" data-tip="${esc(jurisdictionFacts(e.juris).join('. '))}">${esc(t(e.juris.name))} ${eyesBadge(e.juris)}</a>`,
    license && `<span class="chip mono" data-tip="${esc(t('License'))}"><span class="sr">${th('License')}: </span>${esc(license)}</span>`,
    e.platforms?.length && `<span class="chip" data-tip="${esc(t('Platforms'))}"><span class="sr">${th('Platforms')}: </span>${esc(e.platforms.map((p) => t(platformName(p))).join(' · '))}</span>`
  ].filter(Boolean);

  const body = `
<nav class="crumbs" aria-label="${esc(t('Breadcrumb'))}"><a href="${u('/')}">${th('Home')}</a> <span aria-hidden="true">/</span> <a href="${u(`/${cat.id}/`)}">${esc(catName)}</a></nav>
<article>
<header class="entry-hero">
  ${gradeRing(r)}
  <div class="entry-intro">
    <p class="kicker">${esc(catName)}</p>
    <h1>${th('{name} privacy rating', { name: esc(e.name) })}</h1>
    ${e.pick ? `<p>${pickBadge(e)}</p>` : ''}
    <p class="lede">${esc(t(e.description || ''))}</p>
    ${chips.length ? `<div class="chip-row">${chips.join('')}</div>` : ''}
    <p class="entry-share">${shareButton()}</p>
  </div>
</header>
${e.disclosure ? `<aside class="note note-warn"><strong>${th('Disclosure.')}</strong> ${esc(t(e.disclosure))}</aside>` : ''}
${e.pick ? `<aside class="note note-pick"><strong>${th('Why it is our pick.')}</strong> ${esc(t(e.pick_reason || ''))}</aside>` : ''}
${e.caveat ? `<aside class="note"><strong>${th('Keep in mind.')}</strong> ${esc(t(e.caveat))}</aside>` : ''}
<div class="entry-grid">
<div class="entry-main">
${box(th('Summary'), `<p class="summary">${esc(summarize(e))}</p><p class="muted small">${r.grade ? th('Score {score} out of 100.', { score: r.score }) : th('Not graded yet: {pct}% of criteria have evidence, {min}% needed.', { pct: r.coverage, min: Math.round(MIN_COVERAGE * 100) })} <a href="${u('/criteria/#scoring')}">${th('How scoring works')}</a></p>`)}
${manual.length ? box(th('Criteria'), answersList(manual)) : ''}
${auto.length ? box(th('Automated tests'), answersList(auto)) : ''}
${r.scan?.mail ? box(th('Email standards'), mailDetails(r.scan.mail)) : ''}
${e.body ? `<div class="prose box"${i18n.isDefault() ? '' : ' lang="en"'}>${md(e.body, { ugc: true })}</div>` : ''}
</div>
<aside class="entry-side">
${box(th('Facts'), `<dl class="facts">${facts.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`)}
${e.siblings.length ? box(th('Also rated'), `<ul class="plain">${e.siblings.slice(0, 15).map((x) => `<li><a href="${u(x.path)}">${esc(x.name)}</a> <span class="muted small">${esc(t(catById[x.category].name))}</span> ${gradeBadge(x.rating)}</li>`).join('')}</ul>`) : ''}
${
  e.juris
    ? box(th('Jurisdiction'), `<p>${th('Based in {place}.', { place: `<a href="${u(`/jurisdictions/${e.juris.slug}/`)}">${esc(t(e.juris.inName))}</a>` })}</p><ul class="plain">${jurisdictionFacts(e.juris).map((f) => `<li>${esc(f)}</li>`).join('')}</ul>${e.juris.cloudAct === 'provider' ? `<p><a href="${u('/cloud-act/')}">${th('What the CLOUD Act means')}</a></p>` : ''}`)
    : ''
}
${tests.length ? box(th('Test reports'), `<ul class="plain tests">${tests.map(([n, href, v]) => `<li><a href="${esc(href)}" rel="nofollow noopener">${esc(t(n))}</a>${v ? ` <span class="pill">${esc(v)}</span>` : ''}</li>`).join('')}</ul>${e.rating.scan?.internetnl ? `<p class="muted small">${th('This website re-uses test results provided by the Internet.nl test tool.')}</p>` : ''}`) : ''}
${r.scan?.trackers ? box(th('Website trackers'), trackerDetails(r.scan.trackers)) : ''}
${alt || compares.length ? box(th('Compare'), `<ul class="plain">${alt ? `<li><a href="${u(alt.path)}">${th('{name} alternatives', { name: esc(e.name) })}</a></li>` : ''}${compares.map((c) => `<li><a href="${u(c.path)}">${esc(c.a.name)} vs ${esc(c.b.name)}</a></li>`).join('')}</ul>`) : ''}
${box(th('Badge'), embedBox(e))}
${box(
  th('Improve this rating'),
  `<div class="actions">
  <a class="btn" href="${REPO}/edit/${site.branch}/${e.file}">${th('Edit on GitHub')}</a>
  <a class="btn btn-quiet" href="${issueUrl('correction.yml', `Correction: ${e.name}`)}">${th('Report a correction')}</a>
  <a class="btn btn-quiet" href="${REPO}/commits/${site.branch}/${e.file}">${th('History')}</a>
</div>
<p class="muted small">${th('This rating may be inaccurate or out of date. Check the evidence, and report anything wrong.')} <a href="${u('/disclaimer/')}">${th('Disclaimer')}</a></p>
<p class="muted small"><a href="${BASE}${e.path}index.md">Markdown</a> · <a href="${BASE}/api/entries/${e.category}/${e.slug}.json">JSON</a>${e.imported_from ? ` · ${th('First listed from {source}', { source: '<a href="https://github.com/lissy93/awesome-privacy">Awesome Privacy</a>' })}` : ''}</p>`
)}
</aside>
</div>
</article>
${box(th('Other {category}', { category: esc(catLower(cat)) }), `<ul class="related${related.length < 6 ? ` related-${related.length % 2 ? (related.length === 1 ? 1 : 3) : 2}` : ''}">${related.map((x) => `<li><a href="${u(x.path)}">${esc(x.name)}</a>${gradeBadge(x.rating)}${x.pick ? pickBadge(x) : ''}</li>`).join('')}</ul><p><a href="${u(`/${cat.id}/`)}">${th('All {n} {category}', { n: inCategory[cat.id].length, category: esc(catLower(cat)) })}</a></p>`)}`;

  const about = {
    '@type': cat.type === 'service' ? 'Organization' : 'SoftwareApplication',
    name: e.name,
    url: e.website,
    ...(cat.type === 'service' ? {} : { applicationCategory: applicationCategory(cat), operatingSystem: (e.platforms || []).map(platformName).join(', ') || undefined }),
    ...(e.source ? { sameAs: [e.source] } : {})
  };
  // Review markup only for graded entries without a conflict of interest (no self-serving reviews).
  if (r.grade && !e.affiliated) {
    about.review = {
      '@type': 'Review',
      author: { '@id': `${SITE_URL}/#organization` },
      reviewBody: summarize(e),
      reviewRating: { '@type': 'Rating', ratingValue: r.score, bestRating: 100, worstRating: 0 }
    };
  }

  const jsonld = [
    breadcrumbs([[t('Home'), '/'], [catName, `/${cat.id}/`], [e.name, e.path]]),
    {
      '@type': 'WebPage',
      name: t('{name} privacy rating', { name: e.name }),
      url: abs(e.path),
      description: summarize(e),
      ...(e.lastmod ? { dateModified: e.lastmod } : {}),
      inLanguage: i18n.isDefault() ? 'en' : i18n.locale().hreflang,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      about
    }
  ];

  // The entry's own description is shortened so the grade still fits in a search result snippet.
  const descFor = (description) =>
    r.grade
      ? t('{name}: {description} Privacy grade {grade}, {score}/100. Criteria, evidence and security tests.', { name: e.name, description, grade: r.grade, score: r.score })
      : t('{name}: {description} Criteria, evidence and security tests.', { name: e.name, description });
  const desc = descFor(clip(t(e.description || ''), Math.max(60, 160 - Array.from(descFor('')).length)));
  return layout({
    title: r.grade ? t('{name} privacy rating: {grade} ({score}/100)', { name: e.name, grade: r.grade, score: r.score }) : t('{name} privacy rating', { name: e.name }),
    description: desc,
    body,
    pathname: e.path,
    jsonld,
    noindex: !e.indexable,
    lastmod: e.lastmod,
    type: 'article',
    og: { kind: 'entry', entry: e, category: cat.name, country: e.juris ? e.juris.name : null }
  });
}

// ---------- comparison ----------

function comparePage(c) {
  const { a, b } = c;
  const cat = catById[c.category];
  const byId = (e) => Object.fromEntries(e.rating.answers.map((x) => [x.criterion.id, x]));
  const A = byId(a);
  const B = byId(b);
  const crit = criteriaFor(criteria, cat).filter((x) => !(x.services && cat.type !== 'service'));
  const src = th('source');
  const cell = (x) => (x ? `${answerBadge(x.answer)}${httpUrl(x.evidence) ? ` <a class="ev" href="${esc(httpUrl(x.evidence))}" rel="nofollow ugc noopener">${src}</a>` : ''}` : answerBadge('unknown'));
  const score = (e) => (e.rating.grade ? `${e.rating.grade} (${e.rating.score}/100)` : t('Not graded ({pct}% evidence)', { pct: e.rating.coverage }));
  const diff = crit.filter((x) => (A[x.id]?.answer || 'unknown') !== (B[x.id]?.answer || 'unknown') && A[x.id]?.answer !== 'unknown' && B[x.id]?.answer !== 'unknown');
  const better = (e, other, E, O) => diff.filter((x) => ({ yes: 2, partial: 1, no: 0 })[E[x.id].answer] > ({ yes: 2, partial: 1, no: 0 })[O[x.id].answer]).map((x) => lowerFirst(t(x.title)));
  const aBetter = better(a, b, A, B);
  const bBetter = better(b, a, B, A);
  const place = (e) => (e.juris.eyesName ? `${t(e.juris.inName)} (${t(e.juris.eyesName)})` : t(e.juris.inName));
  const catName = t(cat.name);

  const intro = [
    t('{a} and {b} are both rated in {category} against the same {n} public criteria.', { a: a.name, b: b.name, category: catLower(cat), n: crit.length }),
    aBetter.length ? t('{name} does better on {list}.', { name: a.name, list: joinList(aBetter) }) : '',
    bBetter.length ? t('{name} does better on {list}.', { name: b.name, list: joinList(bBetter) }) : '',
    a.juris && b.juris ? t('{a} is based in {pa}; {b} is based in {pb}.', { a: a.name, pa: place(a), b: b.name, pb: place(b) }) : ''
  ]
    .filter(Boolean)
    .join(' ');
  const title = t('{a} vs {b}: privacy compared', { a: a.name, b: b.name });

  const body = `
<nav class="crumbs" aria-label="${esc(t('Breadcrumb'))}"><a href="${u('/')}">${th('Home')}</a> › <a href="${u(`/${cat.id}/`)}">${esc(catName)}</a></nav>
<div class="h1-row"><h1>${esc(title)}</h1>${shareButton()}</div>
<p class="lede">${esc(intro)}</p>
${[a, b].filter((e) => e.disclosure).map((e) => `<aside class="note note-warn"><strong>${th('Disclosure.')}</strong> ${esc(t(e.disclosure))}</aside>`).join('')}
<div class="table-wrap" role="region" aria-label="${esc(t('Side-by-side comparison'))}" tabindex="0">
<table class="ratings compare">
<caption class="sr">${th('{a} compared with {b}', { a: esc(a.name), b: esc(b.name) })}</caption>
<thead><tr><th scope="col">${th('Criterion')}</th><th scope="col"><a href="${u(a.path)}">${esc(a.name)}</a> ${pickBadge(a)}</th><th scope="col"><a href="${u(b.path)}">${esc(b.name)}</a> ${pickBadge(b)}</th></tr></thead>
<tbody>
<tr><th scope="row">${th('Grade')}</th><td>${gradeBadge(a.rating)} ${esc(score(a))}</td><td>${gradeBadge(b.rating)} ${esc(score(b))}</td></tr>
<tr><th scope="row">${th('Jurisdiction')}</th><td>${jurisdictionShort(a.juris)}</td><td>${jurisdictionShort(b.juris)}</td></tr>
${crit.map((x) => `<tr><th scope="row"><a href="${u(`/criteria/#${criterionAnchor(x)}`)}">${esc(t(x.title))}</a><div class="desc">${esc(t(x.question))}</div></th><td>${cell(A[x.id])}</td><td>${cell(B[x.id])}</td></tr>`).join('\n')}
</tbody>
</table>
</div>
<h2>${th('Summaries')}</h2>
<p><strong>${esc(a.name)}.</strong> ${esc(summarize(a))}</p>
<p><strong>${esc(b.name)}.</strong> ${esc(summarize(b))}</p>
<p><a href="${u(`/${cat.id}/`)}">${th('Compare all {n} {category}', { n: inCategory[cat.id].length, category: esc(catLower(cat)) })}</a></p>`;

  return layout({
    title,
    description: t('{a} vs {b} side by side: {n} privacy and security criteria with evidence, grades, jurisdiction and automated test results.', { a: a.name, b: b.name, n: crit.length }),
    body,
    pathname: c.path,
    jsonld: [
      breadcrumbs([[t('Home'), '/'], [catName, `/${cat.id}/`], [`${a.name} vs ${b.name}`, c.path]]),
      { '@type': 'WebPage', name: `${a.name} vs ${b.name}`, url: abs(c.path), about: [a, b].map((e) => ({ '@type': 'Thing', name: e.name, url: abs(e.path) })) }
    ],
    lastmod: [a.lastmod, b.lastmod].filter(Boolean).sort().pop(),
    og: { kind: 'compare', a, b, category: cat.name }
  });
}

// ---------- alternatives ----------

function alternativesPage(alt) {
  const e = alt.entry;
  const cat = catById[e.category];
  const fails = e.rating.answers.filter((a) => a.answer === 'no' || a.answer === 'partial');
  const h1 = t('Private and open-source alternatives to {name}', { name: e.name });
  const place = (x) => (x.juris.eyesName ? `${t(x.juris.inName)} (${t(x.juris.eyesName)})` : t(x.juris.inName));
  const body = `
<nav class="crumbs" aria-label="${esc(t('Breadcrumb'))}"><a href="${u('/')}">${th('Home')}</a> › <a href="${u(`/${cat.id}/`)}">${esc(t(cat.name))}</a></nav>
<div class="h1-row"><h1>${esc(h1)}</h1>${shareButton()}</div>
<p class="lede">${esc(t('{n} {category} rated against the same public privacy criteria as {name}, with our picks first.', { n: alt.list.length, category: catLower(cat), name: e.aliases?.length ? `${e.name} (${e.aliases.join(', ')})` : e.name }))}</p>
${fails.length ? `<h2>${th('Why look for an alternative?')}</h2><ul>${fails.map((a) => `<li><strong>${esc(t(a.criterion.title))}:</strong> ${esc(LABEL[a.answer].toLowerCase())}${a.note ? `. <span${i18n.isDefault() ? '' : ' lang="en"'}>${esc(a.note)}</span>` : ''}</li>`).join('')}</ul><p><a href="${u(e.path)}">${th('See the full {name} rating', { name: esc(e.name) })}</a>.</p>` : ''}
<h2>${th('The alternatives')}</h2>
<ol class="alts">
${alt.list
  .map(
    (x) => `<li><h3><a href="${u(x.path)}">${esc(x.name)}</a> ${gradeBadge(x.rating)} ${pickBadge(x)}</h3>
<p>${esc(t(x.description || ''))}</p>
${x.pick ? `<p><strong>${th('Why it is our pick:')}</strong> ${esc(t(x.pick_reason))}</p>` : ''}
<p class="muted small">${x.juris ? `${esc(t('Based in {place}.', { place: place(x) }))} ` : ''}${esc(summarize(x).split('. ').slice(0, 2).join('. '))}.</p></li>`
  )
  .join('\n')}
</ol>
<p><a href="${u(`/${cat.id}/`)}">${th('Compare all {n} {category}', { n: inCategory[cat.id].length, category: esc(catLower(cat)) })}</a></p>`;

  const picks = alt.list.filter((x) => x.pick).map((x) => x.name);
  return layout({
    title: t('{name} alternatives: {n} private and open-source options', { name: e.name, n: alt.list.length }),
    description: picks.length
      ? t('Private and open-source alternatives to {name}, including {picks}, rated by public privacy criteria with evidence and security tests.', { name: e.name, picks: joinList(picks) })
      : t('Private and open-source alternatives to {name}, rated by public privacy criteria with evidence and security tests.', { name: e.name }),
    body,
    pathname: alt.path,
    og: { kind: 'list', title: `Alternatives to ${e.name}`, kicker: cat.name, entries: alt.list, foot: 'Private and open-source options, rated' },
    jsonld: [
      breadcrumbs([[t('Home'), '/'], [t(cat.name), `/${cat.id}/`], [t('Alternatives to {name}', { name: e.name }), alt.path]]),
      {
        '@type': 'CollectionPage',
        name: t('Alternatives to {name}', { name: e.name }),
        url: abs(alt.path),
        mainEntity: { '@type': 'ItemList', itemListElement: alt.list.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.name, url: abs(x.path) })) }
      }
    ]
  });
}

// ---------- guides ----------

function topicPage(g) {
  const multi = new Set(g.list.map((e) => e.category)).size > 1;
  const altFor = (e) => alternatives.find((a) => a.entry === e);
  const place = (x) => (x.juris.eyesName ? `${t(x.juris.inName)} (${t(x.juris.eyesName)})` : t(x.juris.inName));
  const replaceItem = ({ product: x, alts: all }) => {
    // 6, 4, 3, 2 or 1 fill the grid without gaps.
    const alts = all.slice(0, all.length >= 6 ? 6 : all.length === 5 ? 4 : all.length);
    const alt = altFor(x);
    return `<li class="swap"><h2 class="h3">${th('Instead of {name}', { name: `<a href="${u(x.path)}">${esc(x.name)}</a>` })} ${gradeBadge(x.rating)}</h2>
<p class="muted small">${esc(t(catById[x.category].name))}.</p>
<ul class="related${alts.length === 6 ? '' : alts.length === 3 ? ' related-3' : alts.length === 1 ? ' related-1' : ' related-2'}">${alts.map((e) => `<li><a href="${u(e.path)}">${esc(e.name)}</a>${gradeBadge(e.rating)}${e.pick ? pickBadge(e) : ''}</li>`).join('')}</ul>
${alt ? `<p class="small"><a href="${u(alt.path)}">${th('{n} private alternatives to {name}', { n: alt.list.length, name: esc(x.name) })}</a></p>` : ''}</li>`;
  };
  const items = g.replacements
    ? g.replacements.map(replaceItem).join('\n')
    : g.list
    .map((x, i) => {
      const alt = g.vendor ? altFor(x) : null;
      return `<li><h2 class="h3"><span class="rank">${i + 1}.</span> <a href="${u(x.path)}">${esc(x.name)}</a> ${gradeBadge(x.rating)} ${pickBadge(x)}</h2>
<p>${esc(t(x.description || ''))}</p>
${x.pick && !g.vendor ? `<p><strong>${th('Why it is our pick:')}</strong> ${esc(t(x.pick_reason || ''))}</p>` : ''}
<p class="muted small">${multi || g.picks || g.vendor ? `${esc(t(catById[x.category].name))}. ` : ''}${x.juris ? `${esc(t('Based in {place}.', { place: place(x) }))} ` : ''}${x.rating.grade ? esc(t('Score {score}/100.', { score: x.rating.score })) : ''}${alt ? ` <a href="${u(alt.path)}">${th('{n} private alternatives to {name}', { n: alt.list.length, name: esc(x.name) })}</a>` : ''}</p>${g.also?.get(x) ? `<p class="muted small">${th('Also rated in {list}.', { list: joinList(g.also.get(x).map((o) => `<a href="${u(o.path)}">${esc(t(catById[o.category].name))}</a>`)) })}</p>` : ''}</li>`;
    })
    .join('\n');
  const cats = [...new Set(g.list.map((e) => e.category))].map((id) => catById[id]);
  const related = topics.filter((o) => o !== g).slice(0, 12);
  const faq = (g.faq || []).map((f) => ({ q: t(f.q), a: t(f.a) }));
  const allCrit = criteria.common.concat(Object.values(criteria.byCategory).flat());
  const required = g.require ? joinList(Object.keys(g.require).map((id) => lowerFirst(t((allCrit.find((c) => c.id === id) || { title: id }).title)))) : '';
  const body = `
<nav class="crumbs" aria-label="${esc(t('Breadcrumb'))}"><a href="${u('/')}">${th('Home')}</a> › ${th('Guides')}</nav>
<div class="h1-row"><h1>${esc(t(g.h1))}</h1>${shareButton()}</div>
<div class="prose lede-block">${md(t(g.intro || ''))}</div>
<ol class="alts topic-list">
${items}
</ol>
<section aria-labelledby="how"><h2 id="how">${th('How this list is made')}</h2>
<p>${th('Entries are ranked with our picks first, then by score against public criteria. Every answer links to evidence, and hosted services are tested automatically.')}${g.require ? ` ${th('Only entries answering {criteria} with evidence are included.', { criteria: esc(required) })}` : ''} ${th('The list updates when ratings change.')}</p>
${cats.length ? `<p>${th('Compare all: {list}.', { list: cats.map((c) => `<a href="${u(`/${c.id}/`)}">${esc(catLower(c))}</a>`).join(', ') })} <a href="${u('/criteria/')}">${th('Criteria and scoring')}</a>.</p>` : ''}
</section>
${faq.length ? `<section aria-labelledby="faq"><h2 id="faq">${th('Questions')}</h2>${faq.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}</section>` : ''}
<section aria-labelledby="more-guides"><h2 id="more-guides">${th('More guides')}</h2><ul class="inline-list">${related.map((o) => `<li><a href="${u(o.path)}">${esc(t(o.h1))}</a></li>`).join('')}</ul></section>`;

  const lastmod = g.list.map((e) => e.lastmod).filter(Boolean).sort().pop();
  return layout({
    title: t(g.title),
    description: t(g.description),
    body,
    pathname: g.path,
    lastmod,
    type: 'article',
    og: { kind: 'list', title: g.h1, kicker: 'Guide', entries: g.list, foot: `${g.list.length} rated by public criteria and evidence` },
    jsonld: [
      breadcrumbs([[t('Home'), '/'], [t(g.h1), g.path]]),
      { '@type': 'ItemList', name: t(g.h1), itemListOrder: 'https://schema.org/ItemListOrderDescending', numberOfItems: g.list.length, itemListElement: g.list.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.name, url: abs(x.path) })) },
      ...(faq.length ? [{ '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }] : [])
    ]
  });
}

// ---------- open-source lists ----------

function openSourcePage(o) {
  const cat = o.category;
  const title = t('Open-source {category}', { category: catLower(cat) });
  const body = `
<nav class="crumbs" aria-label="${esc(t('Breadcrumb'))}"><a href="${u('/')}">${th('Home')}</a> › <a href="${u(`/${cat.id}/`)}">${esc(t(cat.name))}</a></nav>
<div class="h1-row"><h1>${esc(title)}</h1>${shareButton()}</div>
<p class="lede">${esc(t('{n} {category} whose code is public under an OSI-approved license, rated for privacy with evidence. Picks first, then by score.', { n: o.list.length, category: catLower(cat) }))}</p>
<ol class="alts">
${o.list
  .map(
    (x) => `<li><h2 class="h3"><a href="${u(x.path)}">${esc(x.name)}</a> ${gradeBadge(x.rating)} ${pickBadge(x)}</h2>
<p>${esc(t(x.description || ''))}</p>
<p class="muted small"><span${i18n.isDefault() ? '' : ' lang="en"'}>${esc(x.rating.answers.find((a) => a.criterion.id === 'open_source')?.note || '')}</span>${httpUrl(x.source) ? ` <a href="${esc(httpUrl(x.source))}" rel="nofollow ugc noopener">${th('Source code')}</a>` : ''}</p></li>`
  )
  .join('\n')}
</ol>
<p>${th('{link}, open source or not.', { link: `<a href="${u(`/${cat.id}/`)}">${th('Compare all {n} {category}', { n: inCategory[cat.id].length, category: esc(catLower(cat)) })}</a>` })}</p>`;

  return layout({
    title: t('{title}: {n} rated for privacy', { title, n: o.list.length }),
    description: t('The open-source {category} worth using, rated by public privacy criteria with evidence: {names} and more.', { category: catLower(cat), names: o.list.slice(0, 5).map((x) => x.name).join(', ') }),
    body,
    pathname: o.path,
    og: { kind: 'list', title: `Open-source ${lowerName(cat.name)}`, kicker: 'Open source', entries: o.list, foot: `${o.list.length} open-source options, rated` },
    jsonld: [
      breadcrumbs([[t('Home'), '/'], [t(cat.name), `/${cat.id}/`], [title, o.path]]),
      {
        '@type': 'CollectionPage',
        name: title,
        url: abs(o.path),
        mainEntity: { '@type': 'ItemList', itemListElement: o.list.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.name, url: abs(x.path) })) }
      }
    ]
  });
}

// ---------- jurisdictions ----------

// A document's Markdown in the current language, or the English with lang="en" when there is no
// up-to-date translation.
function docBody(file, english) {
  const translated = i18n.page(file, english);
  return { html: md(translated ?? english, { source: translated ? english : null }), lang:translated || i18n.isDefault() ? '' : ' lang="en"' };
}

function jurisdictionsPage(page) {
  const rows = countries
    .map(
      (c) => `<tr><th scope="row"><a href="${u(c.path)}">${esc(t(c.name))}</a></th><td>${eyesBadge(c)}</td><td>${c.eu ? 'EU' : c.eea ? 'EEA' : c.gdpr ? th('GDPR-style law') : '–'}</td><td>${c.cloudAct === 'provider' ? th('Subject to it') : c.cloudAct === 'agreement' ? th('Agreement with US') : '–'}</td><td class="num">${c.entries.length}</td></tr>`
    )
    .join('\n');
  const doc = docBody(page.file, page.body);
  const body = `<article class="prose wide"${doc.lang}>${doc.html}</article>
<div class="table-wrap" role="region" aria-label="${esc(t('Countries'))}" tabindex="0"><table class="ratings">
<caption class="sr">${th('Countries where rated companies are based')}</caption>
<thead><tr><th scope="col">${th('Country')}</th><th scope="col">${th('Eyes')}</th><th scope="col">${th('Data protection')}</th><th scope="col">${th('CLOUD Act')}</th><th scope="col" class="num">${th('Rated')}</th></tr></thead>
<tbody>${rows}</tbody></table></div>
<p class="muted">${th('Country data lives in {file}. Every note links to its source.', { file: `<a href="${REPO}/blob/${site.branch}/jurisdictions.yml">jurisdictions.yml</a>` })}</p>`;
  const title = t(page.title);
  return layout({ title, description: t(page.description), body, pathname: page.path, og: { kind: 'page', title: page.title, text: page.description, kicker: 'Jurisdictions', stats: [['Countries', String(countries.length)]] }, jsonld: [breadcrumbs([[t('Home'), '/'], [t('Jurisdictions'), page.path]]), { '@type': 'Article', headline: title, url: abs(page.path), author: { '@id': `${SITE_URL}/#organization` }, publisher: { '@id': `${SITE_URL}/#organization` }, dateModified: ctx.lastmod(page.file, 'jurisdictions.yml') || undefined }], lastmod: ctx.lastmod(page.file, 'jurisdictions.yml'), type: 'article' });
}

function countryPage(c) {
  const byCat = {};
  for (const e of c.entries) (byCat[e.category] ||= []).push(e);
  const facts = jurisdictionFacts(c);
  const inName = t(c.inName);
  const body = `
<nav class="crumbs" aria-label="${esc(t('Breadcrumb'))}"><a href="${u('/')}">${th('Home')}</a> › <a href="${u('/jurisdictions/')}">${th('Jurisdictions')}</a></nav>
<h1>${th('Privacy apps and services based in {place}', { place: esc(inName) })}</h1>
<p class="lede">${esc(tp(c.entries.length, '{n} rated company is based in {place}.', '{n} rated companies are based in {place}.', { place: inName }))} ${esc(facts.join('. '))}.</p>
${eyesBadge(c)}
${c.notes.length ? `<h2>${th('Laws that matter for privacy')}</h2><ul>${c.notes.map((n) => `<li>${esc(t(n.text))}${httpUrl(n.source) ? ` <a href="${esc(httpUrl(n.source))}" rel="noopener">${th('Source')}</a>` : ''}</li>`).join('')}</ul>` : ''}
${c.cloudAct ? `<p><a href="${u('/cloud-act/')}">${th('What is the CLOUD Act?')}</a></p>` : ''}
${Object.entries(byCat)
  .map(
    ([id, list]) => `<h2><a href="${u(`/${id}/`)}">${esc(t(catById[id].name))}</a></h2>
<ul class="related">${list.map((e) => `<li><a href="${u(e.path)}">${esc(e.name)}</a> ${gradeBadge(e.rating)} ${pickBadge(e)}</li>`).join('')}</ul>`
  )
  .join('\n')}
<p><a href="${u('/jurisdictions/')}">${th('All jurisdictions')}</a> · <a href="${REPO}/blob/${site.branch}/jurisdictions.yml">${th('Edit country data')}</a></p>`;
  return layout({
    title: c.eyesName ? t('Privacy services based in {place} ({alliance})', { place: inName, alliance: t(c.eyesName) }) : t('Privacy services based in {place}', { place: inName }),
    description: t('{n} rated apps and services based in {place}. {facts}. Laws, surveillance alliances and ratings.', { n: c.entries.length, place: inName, facts: facts.join('. ') }),
    body,
    pathname: c.path,
    og: { kind: 'page', title: `Privacy services based in ${c.inName}`, text: jurisdictionFactsEn(c), kicker: 'Jurisdiction', stats: [['Rated here', String(c.entries.length)]] },
    jsonld: [breadcrumbs([[t('Home'), '/'], [t('Jurisdictions'), '/jurisdictions/'], [t(c.name), c.path]]), { '@type': 'WebPage', name: t('Privacy services based in {place}', { place: t(c.name) }), url: abs(c.path), about: { '@type': 'Country', name: c.name } }]
  });
}

// English facts for social images, which are drawn once in English.
function jurisdictionFactsEn(c) {
  if (!i18n.isDefault()) return '';
  const f = jurisdictionFacts(c);
  return f.length ? `${f.join('. ')}.` : '';
}

// ---------- criteria, docs, search, 404 ----------

function criteriaPage() {
  const block = (c, h) => `<article class="crit" id="${esc(criterionAnchor(c))}">
  <${h}>${esc(t(c.title))} <span class="w">${th('weight {w}', { w: c.weight })}</span>${c.auto ? ` <span class="pill">${th('automated')}</span>` : ''}${c.services ? ` <span class="pill">${th('hosted services')}</span>` : ''}</${h}>
  <p class="q">${esc(t(c.question))}</p>
  <dl>
    <dt>${answerBadge('yes')} ${esc(LABEL.yes)}</dt><dd>${esc(t(c.yes))}</dd>
    <dt>${answerBadge('partial')} ${esc(LABEL.partial)}</dt><dd>${esc(t(c.partial))}</dd>
    <dt>${answerBadge('no')} ${esc(LABEL.no)}</dt><dd>${esc(t(c.no))}</dd>
  </dl>
  <p><strong>${th('Why:')}</strong> ${esc(t(c.why))}</p>
  <p><strong>${th('How to verify:')}</strong> ${esc(t(c.verify))}</p>
</article>`;

  // Every category has a section, the target of "Criteria for this category" links: the common
  // criteria that apply to it (hosted-service criteria only for services), then its own criteria.
  const commonLink = `<a href="#h-common">${th('Criteria for every category')}</a>`;
  const perCategory = categories
    .map((c) => {
      const own = criteria.byCategory[c.id] || [];
      const common = c.common === false ? [] : criteria.common.filter((x) => !(x.services && c.type !== 'service'));
      const list = common.length ? `<p class="muted small">${commonLink}: ${common.map((x) => `<a href="#${esc(criterionAnchor(x))}">${esc(t(x.title))}</a>`).join(', ')}</p>` : '';
      return `<section id="${c.id}" aria-labelledby="h-${c.id}"><h3 id="h-${c.id}"><a href="${u(`/${c.id}/`)}">${esc(t(c.name))}</a></h3>${list}${own.map((x) => block(x, 'h4')).join('\n')}</section>`;
    })
    .join('\n');
  const b = (x) => `<strong>${th(x)}</strong>`;

  const body = `
<h1>${th('Privacy rating criteria')}</h1>
<p class="lede">${th('Every rating answers the same public questions. Criteria live in the {folder} folder and change only through reviewed pull requests.', { folder: `<a href="${REPO}/tree/${site.branch}/criteria"><code>criteria/</code></a>` })}</p>
<section id="scoring" class="prose" aria-labelledby="h-scoring">
<h2 id="h-scoring">${th('Scoring')}</h2>
<ul>
  <li>${th('Each answer earns points: {yes} = full weight, {partial} = half, {no} and {unknown} = zero. {na} and automated tests that have {notrun} are left out.', { yes: b('yes'), partial: b('partial'), no: b('no'), unknown: b('unknown'), na: b('Not applicable'), notrun: b('not run yet') })}</li>
  <li>${th('The score is points earned divided by points possible, from 0 to 100.')}</li>
  <li>${th('Grades: A is 90 or more, B is 75 or more, C is 60 or more, D is 40 or more, F is below 40.')}</li>
  <li>${th('An entry needs evidence for at least {pct}% of its criteria (by weight) before a grade is shown. Until then it shows "?".', { pct: Math.round(MIN_COVERAGE * 100) })}</li>
  <li>${th('"Yes" and "partial" answers must link to evidence. "No" answers must explain why.')}</li>
  <li>${th('Jurisdiction is shown on every page but not scored.')} <a href="${u('/jurisdictions/')}">${th('Why')}</a>.</li>
  <li>${th('Picks are editorial and do not change scores.')}</li>
</ul>
</section>
<section aria-labelledby="h-common">
<h2 id="h-common">${th('Criteria for every category')}</h2>
${criteria.common.map((c) => block(c, 'h3')).join('\n')}
</section>
<section aria-labelledby="h-bycat">
<h2 id="h-bycat">${th('Criteria by category')}</h2>
${perCategory}
<p class="muted"><a href="${issueUrl('criteria.yml', 'Criteria: ')}">${th('Propose criteria')}</a>.</p>
</section>`;

  const terms = [...criteria.common, ...categories.flatMap((c) => criteria.byCategory[c.id] || [])];
  return layout({
    title: t('Privacy rating criteria and scoring'),
    description: t('The {n} public criteria and the scoring method behind every privacy rating, with what each answer means and how to verify it.', { n: terms.length }),
    body,
    pathname: '/criteria/',
    og: { kind: 'page', title: 'Privacy rating criteria and scoring', text: 'Every criterion, what each answer means and how to verify it.', kicker: 'Criteria', stats: [['Criteria', String(terms.length)], ['Categories', String(categories.length)]] },
    jsonld: [
      breadcrumbs([[t('Home'), '/'], [t('Criteria'), '/criteria/']]),
      { '@type': 'DefinedTermSet', name: t('Privacy rating criteria'), url: abs('/criteria/'), hasDefinedTerm: terms.map((x) => ({ '@type': 'DefinedTerm', name: t(x.title), description: t(x.question), url: abs(`/criteria/#${criterionAnchor(x)}`) })) }
    ],
    lastmod: ctx.lastmod('criteria/_common.yml')
  });
}

// ---------- badges ----------

// ---------- command-line tool ----------

const INSTALL = [
  ['macOS and Linux', 'curl -fsSL https://privacyratings.com/install.sh | sh'],
  ['Windows', 'irm https://privacyratings.com/install.ps1 | iex'],
  ['npm', 'npm install -g privacyratings']
];

// A terminal that looks like the CLI. It is rendered with real results so it works
// without JavaScript, and app.js makes it searchable with the same ranking as the CLI.
// The terminal itself stays in English, like the CLI.
function terminalDemo({ query = 'gmail alternatives', rows = 9, compact = false } = {}) {
  const alt = alternatives.find((a) => a.entry.slug === 'gmail');
  const list = (alt ? alt.list : entries.filter((e) => e.pick)).slice(0, rows);
  const first = list[0];
  const row = (e, i) => `<li role="option" id="t-list${compact ? '-c' : ''}-${i}" aria-selected="${i === 0}"${i === 0 ? ' class="on"' : ''}><span class="t-g t-g-${e.rating.grade || 'none'}">${e.rating.grade || '–'}</span><span class="t-sc">${e.rating.grade ? e.rating.score : ''}</span><span class="t-nm">${esc(e.name)}</span><span class="t-pk">${e.pick ? '★' : ''}</span><span class="t-ct">${esc(catById[e.category].name)}</span></li>`;
  const marks = first ? first.rating.answers.filter((a) => ['yes', 'partial', 'no'].includes(a.answer)).slice(0, 8) : [];
  const detail = first
    ? `<p class="t-d-name">${esc(first.name)}</p><p class="t-muted">${esc(catById[first.category].name)}${first.juris ? ` · ${esc(first.juris.name)}` : ''}</p><p><span class="t-tile t-g-${first.rating.grade || 'none'}">${first.rating.grade || '–'}</span> <b>${first.rating.grade ? `${first.rating.score}/100` : 'Not graded'}</b></p>${first.pick ? '<p class="t-pick">★ Our pick</p>' : ''}<p class="t-h">Criteria</p><ul class="t-ans">${marks.map((a) => `<li><span class="t-m t-m-${a.answer}">${ICON[a.answer]}</span>${esc(a.criterion.title)}</li>`).join('')}</ul>`
    : '';
  return `<div class="term${compact ? ' term-compact' : ''}" data-term data-src="${BASE}/api/cli.json" lang="en" dir="ltr">
  <div class="term-bar" aria-hidden="true"><span class="term-dots"><i></i><i></i><i></i></span><span>privacyratings</span></div>
  <div class="term-screen">
    <div class="t-top"><span>◆ Privacy Ratings</span><span>${entries.length} rated · ${categories.length} categories</span></div>
    <div class="t-bar"><span class="t-sig" aria-hidden="true">›</span><label class="sr" for="t-q${compact ? '-c' : ''}">Try the command-line search</label><input id="t-q${compact ? '-c' : ''}" data-term-input type="text" value="${esc(query)}" autocomplete="off" spellcheck="false" role="combobox" aria-expanded="true" aria-controls="t-list${compact ? '-c' : ''}" aria-activedescendant="t-list${compact ? '-c' : ''}-0"></div>
    <p class="t-status" data-term-status role="status">${alt ? `${alt.list.length} rated alternatives to Gmail.` : ''} ★ marks our picks.</p>
    <div class="t-main"><ul class="t-list" id="t-list${compact ? '-c' : ''}" data-term-list role="listbox" aria-label="Results">${list.map(row).join('')}</ul><div class="t-detail" data-term-detail tabindex="0" role="region" aria-label="Rating details">${detail}</div></div>
    <p class="t-hint" aria-hidden="true"><b>↑↓</b> move · <b>Enter</b> full rating · <b>Esc</b> back or quit</p>
  </div>
</div>`;
}

const installBlock = () => `<div class="install">${INSTALL.map(([label, cmd], i) => `<div class="install-row"><span class="install-os">${esc(t(label))}</span><code id="install-${i}" dir="ltr" tabindex="0">${esc(cmd)}</code><button class="btn btn-quiet btn-sm" type="button" data-copy-text="${esc(cmd)}" aria-label="${esc(t('Copy the {os} install command', { os: t(label) }))}">${th('Copy')}</button></div>`).join('')}</div>`;

function cliPage() {
  const keys = [
    ['Type', 'Filter. Try "open source", "alternatives" and category names.'],
    ['↑ ↓, Page Up, Page Down', 'Move'],
    ['Enter', 'Full rating with notes and evidence'],
    ['Tab', 'Picks only, or everything'],
    ['Ctrl+O', 'Open the rating in your browser'],
    ['Esc', 'Back, or quit']
  ];
  const code = (x) => `<code>${esc(x)}</code>`;
  const body = `<nav class="crumbs" aria-label="${esc(t('Breadcrumb'))}"><a href="${u('/')}">${th('Home')}</a> › <span>${th('Command-line tool')}</span></nav>
<h1>${th('Privacy Ratings in your terminal')}</h1>
<p class="lede">${th('Search every rating from the command line, with the same grades, picks, criteria and evidence as this site. Interactive search, plain output for scripts, JSON when you need it. Free and open source.')}</p>
${terminalDemo()}
<p class="muted small">${th('This is a live preview. Type to search the real ratings, use the arrow keys, and press Enter for a full rating.')}</p>
<h2 id="install">${th('Install')}</h2>
${installBlock()}
<p>${th('The macOS, Linux and Windows installers download a standalone binary from the {release}, check its SHA-256 checksum and install it. Node.js is not needed. The npm package needs Node.js 20 or newer, and {npx} runs it without installing.', { release: `<a href="${REPO}/releases/latest">${th('latest GitHub release')}</a>`, npx: code('npx privacyratings') })}</p>
<h2 id="use">${th('Use')}</h2>
<pre class="code" dir="ltr" tabindex="0"><code>privacyratings                          # interactive search
privacyratings "gmail alternatives"     # start with a query
privacyratings search vpn --picks       # print matching ratings
privacyratings show "Proton Mail"       # every criterion, with notes and evidence
privacyratings open bitwarden           # open a rating in your browser
privacyratings picks password-managers  # our picks in one category
privacyratings categories               # every category and its id
privacyratings search email --json      # JSON for scripts</code></pre>
<div class="table-wrap" role="region" aria-label="${esc(t('Keys'))}" tabindex="0"><table class="ratings">
<caption class="sr">${th('Keys in the interactive search')}</caption>
<thead><tr><th scope="col">${th('Key')}</th><th scope="col">${th('Action')}</th></tr></thead>
<tbody>
${keys.map(([k, v]) => `<tr><td>${k === 'Type' ? th(k) : esc(k)}</td><td>${th(v)}</td></tr>`).join('\n')}
</tbody></table></div>
<h2 id="updates">${th('Automatic updates')}</h2>
<p>${th('Once a day, a background process checks for a new release, so the command you ran is never slowed down. The standalone binary downloads the new version, checks its checksum and replaces itself. An npm install runs {npm}. Run {update} to update right away, or set {env} to turn updates off.', { npm: code('npm install -g privacyratings@latest'), update: code('privacyratings update'), env: code('PRIVACYRATINGS_NO_UPDATE=1') })}</p>
<h2 id="privacy">${th('Privacy')}</h2>
<p>${th("No analytics and no telemetry. The tool only downloads ratings from this site's {api}, cached for an hour so it also works offline, and checks the GitHub API for a new release once a day.", { api: `<a href="${BASE}/api/ratings.json">${th('public API')}</a>` })}</p>
<p><a class="btn" href="${REPO}/tree/${site.branch}/cli">${th('Source code on GitHub')}</a> <a class="btn btn-quiet" href="https://www.npmjs.com/package/privacyratings">${th('npm package')}</a></p>`;
  return layout({
    title: t('Privacy Ratings command-line tool'),
    description: t('Search privacy ratings for apps and services from your terminal. Interactive search, JSON output, automatic updates, and a one-line install for macOS, Linux and Windows.'),
    body,
    pathname: '/cli/',
    og: { kind: 'page', title: 'Privacy Ratings in your terminal', text: 'curl -fsSL https://privacyratings.com/install.sh | sh', kicker: 'CLI' },
    jsonld: [
      breadcrumbs([[t('Home'), '/'], [t('Command-line tool'), '/cli/']]),
      {
        '@type': 'SoftwareApplication',
        name: 'privacyratings',
        description: t('Command-line tool to search open, testable privacy ratings.'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'macOS, Linux, Windows',
        url: abs('/cli/'),
        downloadUrl: `${REPO}/releases/latest`,
        installUrl: `${SITE_URL}/install.sh`,
        license: 'https://opensource.org/licenses/MIT',
        isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
        publisher: { '@id': `${SITE_URL}/#organization` }
      }
    ]
  });
}

function badgesPage() {
  const picked = entries.filter((e) => e.pick);
  const examples = (picked.length ? picked : entries).slice(0, 4);
  const ex = examples[0];
  const cat = catById[ex.category];
  const img = (p) => `${BASE}${p}`;
  const rows = badges.STYLES.map((s) => `<tr><th scope="row">${esc(t(STYLE_LABELS[s.id]))}</th><td><img src="${img(badges.badgePath(ex, s.suffix))}" alt="${esc(badgeAlt(ex))}" height="${s.height}" width="${badgeWidth(badges.badgeSvg(ex, s.id, cat.name))}" loading="lazy"></td><td><code>${esc(badges.badgePath({ category: '&lt;category&gt;', slug: '&lt;entry&gt;' }, s.suffix)).replace(/&amp;/g, '&')}</code></td></tr>`).join('');
  const page = `${SITE_URL}${ex.path}`;
  const src = `${SITE_URL}${badges.badgePath(ex)}`;
  const body = `
<article class="prose">
<h1>${th('Privacy Ratings badges')}</h1>
<p class="lede">${th('Every app and service rated here has a badge that shows its current grade and score, and links back to its rating. Open any rating and choose {embed} to copy the code.', { embed: `<strong>${th('Embed badge')}</strong>` })}</p>
<div class="badge-examples">${examples.map((e) => `<a href="${u(e.path)}"><img src="${img(badges.badgePath(e))}" alt="${esc(badgeAlt(e))}" height="20" width="${badgeWidth(badges.badgeSvg(e, 'flat', ''))}" loading="lazy"></a>`).join(' ')}</div>
<h2>${th('Styles and sizes')}</h2>
<div class="table-wrap" tabindex="0"><table><thead><tr><th scope="col">${th('Style')}</th><th scope="col">${th('Example')}</th><th scope="col">${th('Path')}</th></tr></thead><tbody>${rows}</tbody></table></div>
<h2>${th('How badges work')}</h2>
<ul>
<li>${th('Badges are generated from the ratings every time the site is built, so they always match the rating page. Nobody can pick their own grade or text.')}</li>
<li>${th('Entries without enough evidence show {ng}.', { ng: `<strong>${th('not graded')}</strong>` })}</li>
<li>${th('The grade can go down as well as up when evidence or automated test results change.')}</li>
<li>${th('Badges are plain SVG images with no scripts, cookies or tracking. Loading one tells this site nothing about your visitors beyond a normal image request to GitHub Pages.')}</li>
</ul>
<h2>${th('Embed code')}</h2>
<p>HTML:</p>
<pre dir="ltr" tabindex="0"><code>${esc(`<a href="${page}"><img src="${src}" alt="${esc(badgeAlt(ex))}"></a>`)}</code></pre>
<p>Markdown:</p>
<pre dir="ltr" tabindex="0"><code>${esc(`[![${badgeAlt(ex)}](${src})](${page})`)}</code></pre>
<h2>Shields.io</h2>
<p>${th('Each entry also has a {endpoint} file, for anyone who wants Shields.io styles:', { endpoint: `<a href="https://shields.io/badges/endpoint-badge">${th('Shields.io endpoint')}</a>` })}</p>
<pre dir="ltr" tabindex="0"><code>${esc(`https://img.shields.io/endpoint?url=${encodeURIComponent(`${SITE_URL}${badges.badgePath(ex, '', 'json')}`)}`)}</code></pre>
<h2>${th('Rules')}</h2>
<p>${th('Use badges as they are. Do not edit, recolor or crop them, or show an old grade as current. A badge is a link to public evidence, not an endorsement or certification.')}</p>
</article>`;
  return layout({
    title: t('Privacy Ratings badges'),
    description: t('Embed a badge that shows the current privacy grade and score for any rated app or service, linked to its evidence.'),
    body,
    pathname: '/badges/',
    og: { kind: 'page', title: 'Privacy Ratings badges', text: 'Embed the current privacy grade of any rated app or service, linked to its evidence.', kicker: 'Badges' },
    jsonld: [breadcrumbs([[t('Home'), '/'], [t('Badges'), '/badges/']])]
  });
}

function docPage(doc) {
  const d = docBody(doc.file, doc.body);
  const body = `<article class="prose"${d.lang}>${d.html}</article>
<p class="actions"><a class="btn btn-quiet" href="${REPO}/edit/${site.branch}/${doc.file}">${th('Edit this page on GitHub')}</a> <a class="btn btn-quiet" href="${BASE}${doc.path}index.md">Markdown</a></p>`;
  const lm = ctx.lastmod(doc.file);
  const title = t(doc.title);
  const description = t(doc.description);
  return layout({
    title,
    description,
    body,
    pathname: doc.path,
    type: 'article',
    og: { kind: 'page', title: doc.title, text: doc.description, kicker: 'Docs' },
    lastmod: lm,
    jsonld: [breadcrumbs([[t('Home'), '/'], [title, doc.path]]), { '@type': 'Article', headline: title, description, url: abs(doc.path), author: { '@id': `${SITE_URL}/#organization` }, publisher: { '@id': `${SITE_URL}/#organization` }, ...(lm ? { dateModified: lm } : {}) }]
  });
}

function searchPage() {
  const body = `<h1>${th('Search privacy ratings')}</h1>
<form class="search" role="search" action="${u('/search/')}">
  <label class="sr" for="q2">${th('Search ratings')}</label>
  <input id="q2" name="q" type="search" placeholder="${esc(t('Search {n} apps and services', { n: entries.length }))}" autocomplete="off" data-search data-autofill>
</form>
<ul class="search-results" data-results></ul>
<noscript><p>${th('Search needs JavaScript. Browse {all} instead.', { all: `<a href="${u('/#categories')}">${th('all categories')}</a>` })}</p></noscript>`;
  return layout({ title: t('Search'), body, pathname: '/search/', noindex: true, markdown: false });
}

function offlinePage() {
  const body = `<h1>${th('You are offline')}</h1>
<p class="lede">${th('This page is not saved on this device yet. Pages you have opened before still work offline.')}</p>
<p><a class="btn" href="${u('/')}">${th('Home')}</a> <button class="btn btn-quiet" type="button" data-reload>${th('Try again')}</button></p>`;
  // The offline page is shown in place of other pages, so there is nothing here worth sharing.
  return layout({ title: t('Offline'), body, pathname: '/offline/', noindex: true, markdown: false, shareable: false });
}

function notFound() {
  return layout({ title: t('Page not found'), body: `<h1>${th('Page not found')}</h1><p>${th('Try the {home} or {search}.', { home: `<a href="${u('/')}">${th('home page')}</a>`, search: `<a href="${u('/search/')}">${th('search')}</a>` })}</p>`, pathname: '/404.html', noindex: true, markdown: false, shareable: false });
}

module.exports = {
  esc,
  md,
  httpUrl,
  CSP,
  u,
  abs,
  summarize,
  jurisdictionFacts,
  homePage,
  categoryPage,
  entryPage,
  comparePage,
  alternativesPage,
  openSourcePage,
  topicPage,
  jurisdictionsPage,
  countryPage,
  criteriaPage,
  docPage,
  badgesPage,
  searchPage,
  notFound,
  offlinePage,
  cliPage,
  terminalDemo,
  installBlock,
  LABEL,
  lowerName,
  clip,
  headingSlug,
  ogJobs,
  ogAlt,
  setLocalized
};
