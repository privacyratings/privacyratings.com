// The same ranking as the search box on privacyratings.com: every word must match,
// name matches beat alias, category and description matches, and picks and higher
// grades break ties.

import { isSlug } from './sanitize.js';

const GRADE = Object.assign(Object.create(null), { A: 5, B: 4, C: 3, D: 2, F: 1 });
export const fold = (s) => String(s ?? '').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '');

const dict = (entries) => Object.assign(Object.create(null), Object.fromEntries(entries));
const str = (v) => (typeof v === 'string' ? v : '');
const isObj = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

// Checks the shape of downloaded data (contributors write it, so nothing is assumed), drops
// malformed records, and adds folded search fields. Lookups use prototype-free objects so
// ids like "constructor" or "__proto__" are just ids.
export function prepare(raw) {
  if (!isObj(raw) || !Array.isArray(raw.categories) || !Array.isArray(raw.entries)) throw new Error('The ratings data is not in the expected format. Try again with --refresh.');
  const categories = raw.categories
    .filter((c) => isObj(c) && isSlug(c.id))
    .map((c) => ({ id: c.id, n: str(c.n) || c.id, g: str(c.g), count: Number.isFinite(c.count) ? c.count : 0 }));
  const cats = dict(categories.map((c) => [c.id, c]));
  const entries = [];
  const seen = new Set();
  for (const r of raw.entries) {
    if (!isObj(r) || !isSlug(r.c) || !isSlug(r.s) || seen.has(`${r.c}/${r.s}`)) continue;
    seen.add(`${r.c}/${r.s}`);
    const e = {
      c: r.c,
      s: r.s,
      n: str(r.n) || r.s,
      g: GRADE[r.g] ? r.g : null,
      sc: Number.isFinite(r.sc) ? Math.max(0, Math.min(100, Math.round(r.sc))) : null,
      p: Number.isInteger(r.p) && r.p > 0 && r.p < 8 ? r.p : 0,
      d: str(r.d),
      k: str(r.k),
      j: str(r.j) || null,
      o: r.o ? 1 : 0
    };
    e._n = fold(e.n);
    e._k = fold(e.k);
    e._c = fold(`${cats[e.c]?.n || ''} ${e.c.replace(/-/g, ' ')}`);
    e._d = fold(e.d);
    entries.push(e);
  }
  const alternatives = isObj(raw.alternatives)
    ? dict(Object.entries(raw.alternatives).filter(([, v]) => Array.isArray(v)).map(([k, v]) => [k, v.filter((id) => typeof id === 'string')]))
    : dict([]);
  const countries = isObj(raw.countries) ? dict(Object.entries(raw.countries).filter(([, v]) => typeof v === 'string')) : dict([]);
  return { ...raw, categories, entries, alternatives, countries, byCategory: cats, byId: dict(entries.map((e) => [`${e.c}/${e.s}`, e])) };
}

const byRank = (a, b) => (b.p ? 3 - b.p : 0) - (a.p ? 3 - a.p : 0) || (GRADE[b.g] || 0) - (GRADE[a.g] || 0) || (b.sc || 0) - (a.sc || 0) || a.n.localeCompare(b.n);

export function search(index, query, { category = null, picks = false, limit = Infinity } = {}) {
  let list = index.entries;
  if (category) list = list.filter((e) => e.c === category);
  if (picks) list = list.filter((e) => e.p);
  const q = fold(query).trim();
  if (!q) return [...list].sort(byRank).slice(0, limit);

  const oss = /\bopen[ -]?source\b|\bfoss\b|\boss\b/.test(q);
  const alt = /\balternatives?\b|\binstead of\b|\breplace(ment)?s?\b/.test(q);
  let words = q.replace(/\balternatives?( to)?\b|\binstead of\b|\bopen[ -]?source\b|\bfoss\b|\bprivate\b|\bprivacy\b|\bbest\b|\bsecure\b/g, ' ').split(/\s+/).filter(Boolean);
  if (!words.length && !oss) words = q.split(/\s+/);

  // "gmail alternatives": the rated alternatives to the best-matching mainstream product.
  if (alt && index.alternatives) {
    const rest = words.filter((w) => !/^(to|for|of|replace(ment)?s?)$/.test(w)).join(' ');
    // Prefer an exact name or alias, then the shortest name ("chrome" means Google Chrome, not Chrome Remote Desktop).
    const exact = (e) => e._n === rest || e._k.split(/\s*,\s*|\s{2,}/).includes(rest) || e._n.split(' ').includes(rest);
    const target = rest && search(index, rest, { limit: 12 }).filter((e) => index.alternatives[`${e.c}/${e.s}`]).sort((a, b) => exact(b) - exact(a) || a.n.length - b.n.length)[0];
    if (target) {
      let alts = index.alternatives[`${target.c}/${target.s}`].map((id) => index.byId[id]).filter(Boolean);
      if (category) alts = alts.filter((e) => e.c === category);
      if (picks) alts = alts.filter((e) => e.p);
      if (oss) alts = alts.filter((e) => e.o);
      const out = alts.slice(0, limit);
      out.alternativesTo = target;
      return out;
    }
  }

  const hits = [];
  for (const e of list) {
    if (oss && !e.o) continue;
    let score = 0;
    let ok = true;
    for (const w of words) {
      let s = 0;
      if (e._n === w) s = 100;
      else if (e._n.startsWith(w)) s = 60;
      else if (e._n.includes(` ${w}`) || e._n.includes(`-${w}`)) s = 40;
      else if (e._n.includes(w)) s = 25;
      else if (e._k.includes(w)) s = 30;
      else if (e._c.includes(w)) s = 12;
      else if (e._d.includes(w)) s = 5;
      if (!s) {
        ok = false;
        break;
      }
      score += s;
    }
    if (!ok) continue;
    if (e._n === q) score += 200;
    if (e.p) score += 8 - e.p;
    score += (GRADE[e.g] || 0) * 1.5;
    hits.push([score, e]);
  }
  hits.sort((a, b) => b[0] - a[0] || byRank(a[1], b[1]));
  return hits.slice(0, limit).map((h) => h[1]);
}

// Finds one entry from "category/slug", a slug or a name.
export function find(index, ref) {
  const r = fold(ref).trim();
  const [c, s] = r.includes('/') ? r.split('/') : [null, r];
  return (
    index.entries.find((e) => e.c === c && e.s === s) ||
    index.entries.find((e) => e._n === r) ||
    index.entries.find((e) => e.s === r) ||
    search(index, ref, { limit: 1 })[0] ||
    null
  );
}
