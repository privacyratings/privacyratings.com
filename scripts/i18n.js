'use strict';

// Translations. English text is the key: every translation file maps English strings to
// the translated strings, so when the English changes the old translation stops matching
// and the English shows until it is translated again. Nothing is ever shown out of date.
//
//   i18n/locales.yml            the languages
//   i18n/<code>/ui.json         interface text (buttons, headings, sentences in templates)
//   i18n/<code>/data.json       categories, criteria, guides and jurisdictions
//   i18n/<code>/entries.json    rating descriptions, pick reasons and disclosures
//   i18n/<code>/pages/*.md      whole documents (WHY.md, pages/disclaimer.md ...)
//
// Placeholders like {name} are filled in after translation. A value can also be an object of
// plural forms ({ "one": "...", "other": "..." }) chosen with Intl.PluralRules.

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const YAML = require('yaml');
const { ROOT } = require('./lib');

const DIR = path.join(ROOT, 'i18n');
const LOCALES = YAML.parse(fs.readFileSync(path.join(DIR, 'locales.yml'), 'utf8'));
const DEFAULT = 'en';
const byCode = Object.assign(Object.create(null), Object.fromEntries(LOCALES.map((l) => [l.code, l])));

// Locale codes become folder names and URL prefixes.
const CODE = /^[a-z]{2,3}(-[a-z0-9]{2,8})?$/;
for (const l of LOCALES) if (!l || !CODE.test(String(l.code))) throw new Error(`i18n/locales.yml: invalid code ${JSON.stringify(l && l.code)}`);

// Catalogs have no prototype, so keys like "constructor" or "__proto__" are plain strings.
const catalogs = Object.create(null);
function load(code) {
  if (catalogs[code]) return catalogs[code];
  const cat = Object.create(null);
  const dir = path.join(DIR, code);
  if (code !== DEFAULT && CODE.test(code) && fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort()) {
      const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error(`i18n/${code}/${f}: must be a JSON object`);
      for (const [k, v] of Object.entries(data)) cat[k] = v;
    }
  }
  return (catalogs[code] = cat);
}

let current = DEFAULT;
const used = new Map(); // English strings seen while building, for i18n/source/ui.json
const plurals = new Map(); // English "one" form -> "other" form, for i18n/source/plurals.json
let recording = false;

function setLocale(code) {
  if (!byCode[code]) throw new Error(`Unknown locale ${code}`);
  current = code;
  load(code);
}

const locale = () => byCode[current];
const isDefault = () => current === DEFAULT;

// Only the caller's own values fill placeholders, so "{constructor}" in a translation stays as text.
const fill = (text, vars) => (vars ? String(text).replace(/\{(\w+)\}/g, (m, k) => (!Object.prototype.hasOwnProperty.call(vars, k) || vars[k] === undefined ? m : String(vars[k]))) : String(text));

function lookup(s, n) {
  if (s == null || s === '') return s;
  if (recording) used.set(s, (used.get(s) || 0) + 1);
  const hit = current === DEFAULT ? undefined : catalogs[current][s];
  if (hit && typeof hit === 'object') {
    const form = new Intl.PluralRules(locale().hreflang).select(n ?? 1);
    return hit[form] ?? hit.other ?? s;
  }
  return typeof hit === 'string' && hit.trim() ? hit : s;
}

// Plain text.
const t = (s, vars) => fill(lookup(s, vars?.n), vars);

// HTML: the translated text is escaped, then placeholders are filled with HTML from `vars`.
const escHtml = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const th = (s, vars) => fill(escHtml(lookup(s, vars?.n)), vars);

// Plural choice in English, with the English "one" form as the key. The translation file
// holds an object of plural forms for that key.
function tp(n, one, other, vars = {}) {
  const v = { n, ...vars };
  if (recording) plurals.set(one, other);
  if (current === DEFAULT) return fill(n === 1 ? one : other, v);
  const hit = catalogs[current][one];
  if (hit && typeof hit === 'object') {
    const form = new Intl.PluralRules(locale().hreflang).select(n);
    return fill(hit[form] ?? hit.other, v);
  }
  if (typeof hit === 'string') return fill(hit, v);
  return fill(n === 1 ? one : other, v);
}

// Translated Markdown document for a source file, if one exists and still matches the English.
const hash = (s) => crypto.createHash('sha256').update(s).digest('hex').slice(0, 12);
function page(file, english) {
  if (current === DEFAULT) return null;
  const f = path.join(DIR, current, 'pages', path.basename(file));
  if (!fs.existsSync(f)) return null;
  const text = fs.readFileSync(f, 'utf8');
  const m = text.match(/^<!-- source: ([0-9a-f]{12}) -->\n/);
  if (!m || m[1] !== hash(english)) return null;
  return text.slice(m[0].length);
}

function record(on) {
  recording = on;
  if (on) {
    used.clear();
    plurals.clear();
  }
  return used;
}
const recordedPlurals = () => plurals;

module.exports = { LOCALES, DEFAULT, byCode, setLocale, locale, isDefault, t, th, tp, page, hash, record, recordedPlurals, load, current: () => current };
