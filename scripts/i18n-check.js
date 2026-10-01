'use strict';

// Reports translation coverage and problems. Run after `npm run build`, which writes the
// English source lists to i18n/source/.
//
//   node scripts/i18n-check.js              every language, a summary line each
//   node scripts/i18n-check.js de           one language, with details
//   node scripts/i18n-check.js de entries   only i18n/source/entries.json, listing what is missing
//
// Checks: valid JSON, missing translations, {placeholders} that do not match the English,
// plural objects without an "other" form, and documents whose English source has changed.

const fs = require('node:fs');
const path = require('node:path');
const { LOCALES, DEFAULT, hash } = require('./i18n');

const DIR = path.join(__dirname, '..', 'i18n');
const SRC = path.join(DIR, 'source');
const read = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));
const holes = (s) => [...String(s).matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',');

let [only, onlySource] = process.argv.slice(2);
if (only && !LOCALES.some((l) => l.code === only)) {
  console.error(`Unknown language ${JSON.stringify(only)}. Languages: ${LOCALES.map((l) => l.code).join(', ')}`);
  process.exit(1);
}
const sources = {
  ui: read(path.join(SRC, 'ui.json')),
  data: read(path.join(SRC, 'data.json')),
  entries: read(path.join(SRC, 'entries.json')),
  plurals: Object.keys(read(path.join(SRC, 'plurals.json')))
};
// A path to a JSON list of English strings checks just that list.
if (onlySource && onlySource.endsWith('.json')) {
  sources.file = read(path.resolve(onlySource));
  onlySource = 'file';
}

let failed = false;
for (const loc of LOCALES.filter((l) => l.code !== DEFAULT && (!only || l.code === only))) {
  const dir = path.join(DIR, loc.code);
  // No prototype: a key like "__proto__" or "constructor" in a translation file stays a plain key.
  const cat = Object.create(null);
  const problems = [];
  if (fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) {
      try {
        Object.assign(cat, read(path.join(dir, f)));
      } catch (e) {
        problems.push(`${f}: invalid JSON (${e.message})`);
      }
    }
  }

  const line = [];
  for (const [name, keys] of Object.entries(sources)) {
    if (onlySource && name !== onlySource) continue;
    const missing = keys.filter((k) => cat[k] === undefined || cat[k] === '');
    for (const k of keys) {
      const v = cat[k];
      if (v === undefined) continue;
      if (typeof v === 'object') {
        if (!v.other) problems.push(`plural without "other": ${k}`);
        for (const form of Object.values(v)) if (holes(form) !== holes(k)) problems.push(`placeholders differ: ${k} -> ${form}`);
      } else if (holes(v) !== holes(k)) problems.push(`placeholders differ: ${k} -> ${v}`);
    }
    line.push(`${name} ${keys.length - missing.length}/${keys.length}`);
    if (only && onlySource && missing.length) console.log(`Missing (${missing.length}):\n${missing.slice(0, 50).map((k) => `  ${JSON.stringify(k)}`).join('\n')}`);
  }

  const pagesSrc = path.join(SRC, 'pages');
  let pagesOk = 0;
  const pageFiles = fs.existsSync(pagesSrc) ? fs.readdirSync(pagesSrc) : [];
  for (const f of pageFiles) {
    const english = fs.readFileSync(path.join(pagesSrc, f), 'utf8').replace(/^<!-- source: [0-9a-f]{12} -->\n/, '');
    const tf = path.join(dir, 'pages', f);
    if (!fs.existsSync(tf)) continue;
    const head = fs.readFileSync(tf, 'utf8').match(/^<!-- source: ([0-9a-f]{12}) -->\n/);
    if (head && head[1] === hash(english)) pagesOk++;
    else problems.push(`pages/${f}: missing or outdated source line`);
  }
  if (!onlySource) line.push(`pages ${pagesOk}/${pageFiles.length}`);

  console.log(`${loc.code.padEnd(3)} ${line.join('  ')}${problems.length ? `  (${problems.length} problems)` : ''}`);
  if (only) for (const p of problems.slice(0, 40)) console.log(`  ${p}`);
  if (problems.some((p) => p.includes('invalid JSON'))) failed = true;
}
process.exit(failed ? 1 : 0);
