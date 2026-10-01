'use strict';

// Checks every data file. Runs on every pull request. Exit code 1 on any error.

const fs = require('node:fs');
const path = require('node:path');
const { Lexer } = require('marked');
const { ROOT, ANSWERS, PLATFORMS, isSlug, readYaml, loadCategories, loadCriteria, criteriaFor, loadEntries, normalizeAnswer, jurisdictionInfo } = require('./lib');

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

const ENTRY_KEYS = new Set([
  'name', 'description', 'website', 'source', 'license', 'platforms', 'domain', 'mail_domain',
  'pick', 'pick_reason', 'disclosure', 'caveat', 'criteria', 'imported_from', 'imported_name', 'aliases', 'also_in', 'alternatives_page', 'family', 'jurisdiction', 'mainstream', 'imap_host', 'pop3_host', 'smtp_host'
]);
const CRITERION_KEYS = ['id', 'title', 'weight', 'question', 'yes', 'partial', 'no', 'why', 'verify'];
const AUTO = new Set(['ssllabs', 'observatory', 'internetnl-web', 'internetnl-mail', 'imap', 'pop3', 'smtp', 'mail-dns']);
const SCANS = new Set(['ssllabs', 'observatory', 'internetnl-web', 'internetnl-mail', 'mail', 'hardenize']);
const TRACKING_PARAMS = /[?&](ref|aff|affiliate|utm_[a-z]+|via|coupon|irclickid|clickid)=/i;
// The top-level domain is letters, or punycode for internationalized ones (xn--p1ai is .рф).
const HOST = /^(?=.{1,253}$)([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+([a-z]{2,63}|xn--[a-z0-9-]{1,59})$/i;

// Top-level paths used by the site itself. Category ids, guide slugs and page names cannot use
// them (or a language code), or one page would overwrite another.
const RESERVED = new Set(['api', 'badge', 'badges', 'cli', 'compare', 'alternatives', 'open-source', 'criteria', 'search', 'offline', 'why', 'contribute', 'governance', 'tests', 'og', 'i18n', 'screenshots', 'jurisdictions', 'index', 'feed', 'sitemap']);
const CONTROL = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f\u2028\u2029]/;
const TAG = /<\/?[a-zA-Z!?][^>]*>/;

// Problems with a URL from a data file, or null. Only https:// links to a real host name.
function urlProblem(value) {
  let url = null;
  try {
    url = typeof value === 'string' ? new URL(value) : null;
  } catch {}
  if (!url || !/^https:\/\/[^\s"'<>\\`]+$/.test(value) || url.protocol !== 'https:' || !HOST.test(url.hostname) || url.username || url.password) return 'must be an https:// URL';
  if (TRACKING_PARAMS.test(value)) return 'contains a referral or tracking parameter';
  return null;
}

// Plain text shown on pages, in feeds and in images: a string with no control characters.
function textProblem(value, { max = 1000, required = false } = {}) {
  if (value === undefined || value === null || value === '') return required ? 'is missing' : null;
  if (typeof value !== 'string') return 'must be text';
  if (CONTROL.test(value)) return 'contains control characters';
  if (value.length > max) return `is longer than ${max} characters`;
  return null;
}

// Links allowed in Markdown: https/http, mailto, #anchors and relative paths without a scheme.
function safeHref(href) {
  const s = String(href ?? '').trim();
  if (!s || /[\u0000- \u007f-\u009f]/.test(s)) return false;
  const head = s.split(/[/?#]/, 1)[0];
  if (!head.includes(':') && !head.includes('&')) return !s.startsWith('//');
  return /^(https?:\/\/|mailto:)/i.test(s);
}

// Markdown is rendered with raw HTML shown as text and unsafe links dropped. Catch both here so
// the author sees the problem instead of a silently changed page.
function markdownProblems(text) {
  const out = [];
  if (typeof text !== 'string' || !text) return out;
  if (CONTROL.test(text.replace(/\r/g, ''))) out.push('contains control characters');
  const walk = (tokens) => {
    for (const tok of tokens || []) {
      if (tok.type === 'html' && tok.text.trim() && !/^<!--[\s\S]*-->\s*$/.test(tok.text.trim())) out.push(`raw HTML is not allowed in Markdown: ${tok.text.trim().slice(0, 60)}`);
      if ((tok.type === 'link' || tok.type === 'image') && !safeHref(tok.href)) out.push(`link must be https://, mailto:, a relative path or #anchor: ${String(tok.href).slice(0, 80)}`);
      else if (tok.type === 'image' && !/^\/(?!\/)/.test(String(tok.href).trim())) out.push(`image must be a path on this site, like /screenshots/x.png (other images are blocked by the Content Security Policy): ${String(tok.href).slice(0, 80)}`);
      if (tok.tokens) walk(tok.tokens);
      if (tok.items) walk(tok.items);
      if (tok.header) for (const c of tok.header) walk(c.tokens);
      if (tok.rows) for (const r of tok.rows) for (const c of r) walk(c.tokens);
    }
  };
  try {
    walk(new Lexer({ gfm: true }).lex(text));
  } catch (e) {
    out.push(`invalid Markdown: ${e.message}`);
  }
  return out;
}

// Translations must keep the English placeholders ({name} is filled in after translation) and
// must not add HTML: interface text is escaped, and Markdown shows raw HTML as text.
const placeholders = (s) => [...new Set([...String(s).matchAll(/\{(\w+)\}/g)].map((m) => m[1]))].sort();
const PLURAL_FORMS = new Set(['zero', 'one', 'two', 'few', 'many', 'other']);
function translationProblems(key, value) {
  const k = JSON.stringify(String(key).slice(0, 60));
  const want = placeholders(key);
  const one = (text, plural) => {
    if (typeof text !== 'string') return [`translation of ${k} must be text`];
    const out = [];
    if (CONTROL.test(text)) out.push(`translation of ${k} contains control characters`);
    if (text.length > Math.max(500, String(key).length * 5)) out.push(`translation of ${k} is far longer than the English`);
    if (TAG.test(text) && !TAG.test(key)) out.push(`translation of ${k} adds HTML`);
    const got = placeholders(text);
    // A plural form may leave out {n} ("one file"), but must not invent placeholders.
    if (plural ? got.some((p) => !want.includes(p)) : text && got.join() !== want.join()) out.push(`placeholders differ: ${k} -> ${JSON.stringify(text.slice(0, 60))}`);
    if (text.includes('](')) for (const m of markdownProblems(text)) out.push(`translation of ${k}: ${m}`);
    return out;
  };
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const out = [];
    if (typeof value.other !== 'string') out.push(`plural forms of ${k} need "other"`);
    for (const [form, text] of Object.entries(value)) {
      if (!PLURAL_FORMS.has(form)) out.push(`unknown plural form "${form}" for ${k}`);
      out.push(...one(text, true));
    }
    return out;
  }
  return one(value, false);
}

if (require.main !== module) {
  module.exports = { urlProblem, textProblem, safeHref, markdownProblems, translationProblems, RESERVED };
  return;
}

const checkUrl = (where, field, value) => {
  const p = urlProblem(value);
  if (p) err(where, `${field} ${p}`);
};
const checkText = (where, field, value, opts) => {
  const p = textProblem(value, opts);
  if (p) err(where, p === 'is missing' ? `missing ${field}` : `${field} ${p}`);
};
const checkMarkdown = (where, text) => {
  for (const m of markdownProblems(text)) err(where, m);
};

// ---------- categories ----------

let categories = [];
try {
  categories = loadCategories();
} catch (e) {
  err('categories.yml', e.message);
}

const catIds = new Set();
for (const c of categories) {
  const where = `categories.yml (${c.id})`;
  if (!isSlug(c.id)) err(where, 'id must be kebab-case');
  if (RESERVED.has(c.id)) err(where, `id "${c.id}" is a reserved path`);
  if (catIds.has(c.id)) err(where, 'duplicate id');
  for (const k of ['name', 'description', 'group', 'h1', 'seo_title', 'intro']) checkText(where, k, c[k], { max: 500 });
  if (c.common !== undefined && typeof c.common !== 'boolean') err(where, 'common must be true or false');
  catIds.add(c.id);
  for (const k of ['name', 'type', 'description', 'group']) if (!c[k]) err(where, `missing ${k}`);
  if (!['app', 'service'].includes(c.type)) err(where, 'type must be app or service');
  for (const s of c.scans || []) if (!SCANS.has(s)) err(where, `unknown scan "${s}"`);
  if (c.type === 'app' && (c.scans || []).length) err(where, 'app categories cannot have scans');
}

// ---------- criteria ----------

let criteria = { common: [], byCategory: {} };
try {
  criteria = loadCriteria(categories);
} catch (e) {
  err('criteria/', e.message);
}

for (const file of fs.readdirSync(path.join(ROOT, 'criteria'))) {
  const id = file.replace(/\.yml$/, '');
  if (id !== '_common' && !catIds.has(id)) err(`criteria/${file}`, 'no category with this id');
}

const commonIds = new Set(criteria.common.map((c) => c.id));
function checkCriteria(list, file) {
  const seen = new Set();
  for (const c of list) {
    const where = `criteria/${file} (${c.id})`;
    for (const k of CRITERION_KEYS) if (c[k] === undefined || c[k] === '') err(where, `missing ${k}`);
    for (const k of CRITERION_KEYS.filter((x) => !['id', 'weight'].includes(x))) checkText(where, k, c[k], { max: 2000 });
    if (!/^[a-z0-9]+(_[a-z0-9]+)*$/.test(c.id || '')) err(where, 'id must be snake_case');
    if (seen.has(c.id)) err(where, 'duplicate id');
    const ownOnly = categories.some((cc) => `${cc.id}.yml` === file && cc.common === false);
    if (file !== '_common.yml' && !ownOnly && commonIds.has(c.id)) err(where, 'id already used by a common criterion');
    seen.add(c.id);
    if (![1, 2, 3].includes(c.weight)) err(where, 'weight must be 1, 2 or 3');
    if (c.auto && !AUTO.has(c.auto)) err(where, `unknown auto "${c.auto}"`);
    if (c.auto && !c.services) err(where, 'automated criteria must set services: true');
  }
}

checkCriteria(criteria.common, '_common.yml');
for (const [id, list] of Object.entries(criteria.byCategory)) if (list.length) checkCriteria(list, `${id}.yml`);

// ---------- ratings ----------

for (const dir of fs.readdirSync(path.join(ROOT, 'ratings'))) {
  if (!catIds.has(dir)) err(`ratings/${dir}`, 'folder does not match a category id');
}

let entries = [];
try {
  entries = loadEntries(categories);
} catch (e) {
  err('ratings/', e.message);
}

const byId = Object.fromEntries(categories.map((c) => [c.id, c]));
const names = new Map();
let jurisdictions = { countries: {}, alliances: {} };
try {
  jurisdictions = require('./lib').loadJurisdictions();
} catch (e) {
  err('jurisdictions.yml', e.message);
}

for (const [code, c] of Object.entries(jurisdictions.countries)) {
  const where = `jurisdictions.yml (${code})`;
  if (!/^[A-Z]{2}$/.test(code)) err(where, 'code must be two capital letters');
  if (!c || !c.name) {
    err(where, 'missing name');
    continue;
  }
  checkText(where, 'name', c.name, { max: 100 });
  if (c.eyes !== undefined && c.eyes !== null && !(jurisdictions.alliances || {})[c.eyes]) err(where, `eyes: ${c.eyes} is not an alliance in jurisdictions.yml`);
  if (c.cloud_act !== undefined && c.cloud_act !== null && !['provider', 'agreement'].includes(c.cloud_act)) err(where, 'cloud_act must be provider or agreement');
  if (c.notes !== undefined && !Array.isArray(c.notes)) err(where, 'notes must be a list');
  for (const n of Array.isArray(c.notes) ? c.notes : []) {
    if (!n || !n.text) err(where, 'note missing text');
    else checkText(where, 'note text', n.text, { max: 2000 });
    checkUrl(where, 'note source', n && n.source);
  }
}

// Country pages live at /jurisdictions/<slug>/, made from the name.
const countrySlugs = new Map();
for (const code of Object.keys(jurisdictions.countries)) {
  let slug = '';
  try {
    slug = jurisdictionInfo(code, jurisdictions).slug;
  } catch {}
  if (!isSlug(slug)) err(`jurisdictions.yml (${code})`, 'name must contain Latin letters, to make the page address');
  else if (countrySlugs.has(slug)) err(`jurisdictions.yml (${code})`, `same page address as ${countrySlugs.get(slug)}`);
  countrySlugs.set(slug, code);
}

for (const e of entries) {
  const where = e.file;
  const cat = byId[e.category];
  const crit = new Map(criteriaFor(criteria, cat).map((c) => [c.id, c]));

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(e.slug)) err(where, 'file name must be kebab-case, like proton-mail.md');
  for (const k of Object.keys(e)) {
    if (['slug', 'category', 'file', 'body'].includes(k)) continue;
    if (!ENTRY_KEYS.has(k)) err(where, `unknown field "${k}"`);
  }

  if (!e.name || typeof e.name !== 'string') err(where, 'missing name');
  checkText(where, 'name', e.name, { max: 100 });
  for (const k of ['description', 'pick_reason', 'disclosure', 'caveat']) checkText(where, k, e[k], { max: 1000 });
  for (const k of ['license', 'imported_name']) checkText(where, k, e[k], { max: 200 });
  if (e.imported_from !== undefined && e.imported_from !== 'awesome-privacy') err(where, 'imported_from must be awesome-privacy');
  if (e.family !== undefined && !isSlug(e.family)) err(where, 'family must be kebab-case, like proton');
  if (e.alternatives_page !== undefined && typeof e.alternatives_page !== 'boolean') err(where, 'alternatives_page must be true or false');
  for (const a of Array.isArray(e.aliases) ? e.aliases : []) checkText(where, 'alias', a, { max: 100 });
  for (const p of Array.isArray(e.platforms) ? e.platforms : []) {
    if (!Object.prototype.hasOwnProperty.call(PLATFORMS, p)) err(where, `unknown platform ${JSON.stringify(p)}. Use one per list item from: ${Object.keys(PLATFORMS).join(', ')}`);
  }
  if (Array.isArray(e.platforms) && new Set(e.platforms).size !== e.platforms.length) err(where, 'platforms lists the same platform twice');
  checkMarkdown(where, e.body);
  if (e.aliases !== undefined && (!Array.isArray(e.aliases) || e.aliases.some((a) => typeof a !== 'string' || !a.trim()))) err(where, 'aliases must be a list of names');
  if (!e.description || typeof e.description !== 'string') err(where, 'missing description');
  else if (e.description.length > 300) warn(where, 'description is longer than 300 characters');
  if (e.website) checkUrl(where, 'website', e.website);
  else err(where, 'missing website');
  if (e.source) checkUrl(where, 'source', e.source);

  const key = `${e.category}/${String(e.name).toLowerCase()}`;
  if (names.has(key)) err(where, `duplicate name, also in ${names.get(key)}`);
  names.set(key, where);

  if (e.domain !== undefined) {
    if (!HOST.test(e.domain)) err(where, 'domain must be a hostname like example.com');
    if (cat.type !== 'service') err(where, 'domain is only used in service categories');
  }

  if (e.mail_domain !== undefined) {
    if (!HOST.test(e.mail_domain)) err(where, 'mail_domain must be a hostname like example.com');
    if (!(cat.scans || []).includes('internetnl-mail')) err(where, 'mail_domain is only used in email categories');
  }

  if (e.jurisdiction !== undefined && !jurisdictions.countries[e.jurisdiction]) {
    err(where, `jurisdiction "${e.jurisdiction}" is not in jurisdictions.yml`);
  }

  if (e.mainstream !== undefined && typeof e.mainstream !== 'boolean') err(where, 'mainstream must be true or false');
  for (const k of ['imap_host', 'pop3_host', 'smtp_host']) {
    if (e[k] === undefined) continue;
    if (e[k] !== false && !HOST.test(String(e[k]))) err(where, `${k} must be a hostname, or false when not offered`);
    if (!(cat.scans || []).includes('mail')) err(where, `${k} is only used in email categories`);
  }

  if (e.also_in !== undefined) {
    if (!Array.isArray(e.also_in)) err(where, 'also_in must be a list of category ids');
    else for (const id of e.also_in) if (!categories.some((c) => c.id === id) || id === e.category) err(where, `also_in: "${id}" is not another category`);
  }
  if (e.pick !== undefined && ![true, 1, 2].includes(e.pick)) err(where, 'pick must be true, 1 or 2');
  if (e.pick && !e.pick_reason) err(where, 'pick needs a pick_reason');
  if (e.pick_reason && !e.pick) err(where, 'pick_reason without pick: true');
  if (e.platforms && !Array.isArray(e.platforms)) err(where, 'platforms must be a list');
  if (e.criteria !== undefined && (typeof e.criteria !== 'object' || e.criteria === null || Array.isArray(e.criteria))) err(where, 'criteria must be a map of criterion ids to answers');

  for (const [id, raw] of Object.entries(e.criteria || {})) {
    const c = crit.get(id);
    if (!c) {
      err(where, `criteria.${id} is not a criterion for ${cat.id}`);
      continue;
    }

    if (c.auto) {
      err(where, `criteria.${id} is filled in by automated tests and cannot be set by hand`);
      continue;
    }

    const a = normalizeAnswer(raw);
    if (!ANSWERS.includes(a.answer)) err(where, `criteria.${id} answer must be one of ${ANSWERS.join(', ')}`);
    if (['yes', 'partial'].includes(a.answer) && !a.evidence) err(where, `criteria.${id} needs an evidence link`);
    if (a.answer === 'no' && !a.evidence && !a.note) err(where, `criteria.${id} "no" needs a note or evidence`);
    if (a.evidence) checkUrl(where, `criteria.${id}.evidence`, a.evidence);
    checkText(where, `criteria.${id}.note`, a.note, { max: 2000 });
    for (const k of Object.keys(typeof raw === 'object' && raw ? raw : {})) {
      if (!['answer', 'evidence', 'note'].includes(k)) err(where, `criteria.${id} has unknown field "${k}"`);
    }
  }
}

// ---------- pages ----------

const pageDir = path.join(ROOT, 'pages');
if (fs.existsSync(pageDir)) {
  for (const file of fs.readdirSync(pageDir).filter((f) => f.endsWith('.md'))) {
    const slug = file.replace(/\.md$/, '');
    if (!isSlug(slug)) err(`pages/${file}`, 'file name must be kebab-case, like cloud-act.md');
    if (slug !== 'jurisdictions' && (RESERVED.has(slug) || catIds.has(slug))) err(`pages/${file}`, `"${slug}" is already used by another page`);
    try {
      const { data, body } = require('./lib').parseEntryFile(path.join(pageDir, file));
      if (!data.title) err(`pages/${file}`, 'missing title');
      if (!data.description) err(`pages/${file}`, 'missing description');
      checkText(`pages/${file}`, 'title', data.title, { max: 200 });
      checkText(`pages/${file}`, 'description', data.description, { max: 500 });
      checkMarkdown(`pages/${file}`, body);
    } catch (e) {
      err(`pages/${file}`, e.message);
    }
  }
}

// ---------- documents ----------

for (const f of ['WHY.md', 'CONTRIBUTING.md', 'GOVERNANCE.md', 'SCANS.md']) {
  if (fs.existsSync(path.join(ROOT, f))) checkMarkdown(f, fs.readFileSync(path.join(ROOT, f), 'utf8'));
}

// ---------- guides ----------

const pageSlugs = new Set(fs.existsSync(pageDir) ? fs.readdirSync(pageDir).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, '')) : []);
let localeCodes = new Set();
try {
  const locales = readYaml(path.join(ROOT, 'i18n', 'locales.yml'));
  if (!Array.isArray(locales)) throw new Error('must be a list');
  for (const l of locales) {
    const where = `i18n/locales.yml (${l && l.code})`;
    if (!l || !/^[a-z]{2,3}(-[a-z0-9]{2,8})?$/.test(String(l.code))) err(where, 'code must be a language code like de or pt-br');
    else if (localeCodes.has(l.code)) err(where, 'duplicate code');
    else localeCodes.add(l.code);
    if (!l) continue;
    if (!/^[a-z]{2,3}(-[A-Za-z0-9]{2,8})*$/.test(String(l.hreflang))) err(where, 'hreflang must be a language tag like de or pt-BR');
    if (!/^[a-z]{2,3}_[A-Z]{2}$/.test(String(l.og))) err(where, 'og must be a locale like de_DE');
    if (l.dir !== undefined && !['ltr', 'rtl'].includes(l.dir)) err(where, 'dir must be ltr or rtl');
    checkText(where, 'name', l.name, { max: 60, required: true });
  }
  if (!localeCodes.has('en')) err('i18n/locales.yml', 'English (en) must be listed');
} catch (e) {
  err('i18n/locales.yml', e.message);
}

for (const id of catIds) if (localeCodes.has(id)) err(`categories.yml (${id})`, 'id is a language code');
for (const slug of pageSlugs) if (localeCodes.has(slug)) err(`pages/${slug}.md`, 'file name is a language code');

let topics = [];
try {
  topics = fs.existsSync(path.join(ROOT, 'topics.yml')) ? readYaml(path.join(ROOT, 'topics.yml')) || [] : [];
  if (!Array.isArray(topics)) throw new Error('must be a list of guides');
} catch (e) {
  err('topics.yml', e.message);
  topics = [];
}

const entryIds = new Set(entries.map((e) => `${e.category}/${e.slug}`));
const allCriteria = new Set([...criteria.common, ...Object.values(criteria.byCategory).flat()].map((c) => c.id));
const topicSlugs = new Set();
for (const g of topics) {
  const where = `topics.yml (${g && g.slug})`;
  if (!g || typeof g !== 'object') {
    err('topics.yml', 'every guide must be a map of fields');
    continue;
  }
  if (!isSlug(g.slug)) err(where, 'slug must be kebab-case, like private-email');
  else if (topicSlugs.has(g.slug)) err(where, 'duplicate slug');
  else if (RESERVED.has(g.slug) || catIds.has(g.slug) || pageSlugs.has(g.slug) || localeCodes.has(g.slug)) err(where, `slug "${g.slug}" is already used by another page`);
  topicSlugs.add(g.slug);
  for (const k of ['title', 'h1', 'description']) checkText(where, k, g[k], { max: 300, required: true });
  checkText(where, 'intro', g.intro, { max: 5000 });
  checkMarkdown(`${where} intro`, g.intro);
  if (g.categories !== undefined && (!Array.isArray(g.categories) || g.categories.some((id) => !catIds.has(id)))) err(where, 'categories must be a list of category ids');
  if (g.limit !== undefined && !(Number.isInteger(g.limit) && g.limit > 0 && g.limit <= 100)) err(where, 'limit must be a whole number from 1 to 100');
  if (g.vendor !== undefined && !isSlug(g.vendor)) err(where, 'vendor must be kebab-case');
  if (g.picks !== undefined && typeof g.picks !== 'boolean') err(where, 'picks must be true or false');
  if (g.require !== undefined) {
    if (!g.require || typeof g.require !== 'object' || Array.isArray(g.require)) err(where, 'require must map criterion ids to lists of answers');
    else
      for (const [id, ok] of Object.entries(g.require)) {
        if (!allCriteria.has(id)) err(where, `require: "${id}" is not a criterion`);
        if (!Array.isArray(ok) || !ok.length || ok.some((a) => !ANSWERS.includes(normalizeAnswer(a).answer))) err(where, `require.${id} must be a list of answers (${ANSWERS.join(', ')})`);
      }
  }
  if (g.replace !== undefined) {
    if (!g.replace || typeof g.replace !== 'object' || Array.isArray(g.replace)) err(where, 'replace must map entries to lists of entries');
    else
      for (const [id, list] of Object.entries(g.replace)) {
        if (!entryIds.has(id)) err(where, `replace: "${id}" is not a rating (category/slug)`);
        if (!Array.isArray(list)) err(where, `replace.${id} must be a list`);
        else for (const x of list) if (!entryIds.has(x)) err(where, `replace.${id}: "${x}" is not a rating (category/slug)`);
      }
  }
  if (g.faq !== undefined && !Array.isArray(g.faq)) err(where, 'faq must be a list');
  for (const f of Array.isArray(g.faq) ? g.faq : []) {
    checkText(where, 'faq question', f && f.q, { max: 500, required: true });
    checkText(where, 'faq answer', f && f.a, { max: 3000, required: true });
  }
}

// ---------- translations ----------

const i18nDir = path.join(ROOT, 'i18n');
const sourceDocs = new Set([...['WHY.md', 'CONTRIBUTING.md', 'GOVERNANCE.md', 'SCANS.md'], ...[...pageSlugs].map((p) => `${p}.md`)]);
if (fs.existsSync(i18nDir)) {
  for (const code of fs.readdirSync(i18nDir)) {
    const dir = path.join(i18nDir, code);
    if (!fs.statSync(dir).isDirectory() || code === 'source') continue;
    if (!localeCodes.has(code) || code === 'en') {
      err(`i18n/${code}`, 'folder does not match a language in i18n/locales.yml');
      continue;
    }
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.json'))) {
      const where = `i18n/${code}/${f}`;
      let data;
      try {
        data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      } catch (e) {
        err(where, `invalid JSON: ${e.message}`);
        continue;
      }
      if (!data || typeof data !== 'object' || Array.isArray(data)) {
        err(where, 'must be a JSON object of English text to translations');
        continue;
      }
      for (const [key, value] of Object.entries(data)) for (const m of translationProblems(key, value)) err(where, m);
    }
    const pdir = path.join(dir, 'pages');
    if (fs.existsSync(pdir)) {
      for (const f of fs.readdirSync(pdir)) {
        const where = `i18n/${code}/pages/${f}`;
        if (!sourceDocs.has(f)) {
          err(where, 'no English document with this name');
          continue;
        }
        const text = fs.readFileSync(path.join(pdir, f), 'utf8');
        if (!/^<!-- source: [0-9a-f]{12} -->\n/.test(text)) err(where, 'must start with the <!-- source: ... --> line from i18n/source/pages');
        checkMarkdown(where, text.replace(/^<!-- source: [0-9a-f]{12} -->\n/, ''));
      }
    }
  }
}

// ---------- picks and scans ----------

for (const c of categories) {
  const picks = entries.filter((e) => e.category === c.id && e.pick);
  if (picks.length > 2) err(`ratings/${c.id}`, `has ${picks.length} picks. The limit is 2 (see GOVERNANCE.md)`);
  const ranks = picks.map((e) => (e.pick === true ? 1 : e.pick));
  if (new Set(ranks).size !== ranks.length) err(`ratings/${c.id}`, 'two picks have the same order. Use pick: 1 and pick: 2');
}

const entryKeys = new Set(entries.map((e) => `${e.category}--${e.slug}`));
const scanDir = path.join(ROOT, 'scans');
if (fs.existsSync(scanDir)) {
  for (const file of fs.readdirSync(scanDir)) {
    // internetnl-requests.json records Internet.nl batch requests (see scripts/internetnl-limits.js).
    if (file.endsWith('.json') && file !== 'internetnl-requests.json' && !entryKeys.has(file.replace(/\.json$/, ''))) {
      warn(`scans/${file}`, 'no matching rating file. Delete it if the rating was renamed or removed');
    }
  }
}

// ---------- report ----------

for (const w of warnings) console.warn(`warning  ${w}`);
for (const e of errors) console.error(`error    ${e}`);
console.log(`\nChecked ${categories.length} categories and ${entries.length} entries: ${errors.length} errors, ${warnings.length} warnings.`);
process.exit(errors.length ? 1 : 0);
