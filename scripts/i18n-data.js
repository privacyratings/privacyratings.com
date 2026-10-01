'use strict';

// The English strings that come from data files (categories, criteria, guides, jurisdictions
// and ratings), grouped the way translation files are organized. Used by i18n.js to write
// i18n/source/*.json, the lists translators work from.

const ctx = require('./context');
const { loadJurisdictions } = require('./lib');

const uniq = (list) => [...new Set(list.filter((s) => typeof s === 'string' && s.trim()))];

function dataStrings() {
  const out = [];
  for (const c of ctx.categories) out.push(c.name, c.description, c.h1, c.seo_title, c.intro, c.group);
  for (const c of [...ctx.criteria.common, ...Object.values(ctx.criteria.byCategory).flat()]) out.push(c.title, c.question, c.yes, c.partial, c.no, c.why, c.verify);
  for (const t of ctx.topics) {
    out.push(t.title, t.h1, t.description, t.intro);
    for (const f of t.faq || []) out.push(f.q, f.a);
  }
  const j = loadJurisdictions();
  for (const c of ctx.countries) out.push(c.name, c.inName, c.eyesName);
  for (const c of Object.values(j.countries)) for (const n of c.notes || []) out.push(n.text);
  for (const a of Object.values(j.alliances || {})) out.push(a.name, a.description);
  return uniq(out);
}

function entryStrings() {
  const out = [];
  for (const e of ctx.entries) out.push(e.description, e.pick_reason, e.caveat, e.disclosure);
  return uniq(out);
}

module.exports = { dataStrings, entryStrings };
