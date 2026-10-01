'use strict';

// Social sharing images (Open Graph and X/Twitter cards), one per page, 1200 x 630.
//
// Each page describes its image with a small spec (see templates.js), for example
//   { kind: 'entry', entry }   grade tile, score, category, jurisdiction
//   { kind: 'list', title, entries }   top entries with their grades
//   { kind: 'compare', a, b }  two grade tiles side by side
//   { kind: 'page', title, text }      plain title card
// The spec becomes an SVG, and resvg turns it into a PNG with the bundled fonts in assets/fonts.
// PNGs are cached in .cache/og by a hash of the SVG, so unchanged pages are not rendered again.

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { ROOT } = require('./lib');
const { SHIELD, CHECK } = require('./icons');

const W = 1200;
const H = 630;
const CACHE = path.join(ROOT, '.cache', 'og');
const FONTS = path.join(ROOT, 'assets', 'fonts');
const VERSION = 'og-3';
const BATCH = 80;

const C = {
  bg: '#0b0d10',
  panel: '#14181d',
  line: '#262c33',
  ink: '#f2f4f5',
  muted: '#9aa4ad',
  accent: '#3fd4c1',
  accentInk: '#06201d'
};
// Brighter than the site's grade colors, for contrast on a dark card.
const GRADE = { A: '#1f9d55', B: '#5f9e2a', C: '#c98200', D: '#dc5b1c', F: '#d8402f' };
const NONE = '#4b5563';

// Also drops characters that are not allowed in XML, which would stop the image from rendering.
const esc = (s) => String(s ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffe\uffff]/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Rough advance widths for Inter, in ems. Close enough to wrap and fit text.
function em(ch, bold) {
  let w;
  if (' '.includes(ch)) w = 0.26;
  else if ('iljI|.,:;!\'’'.includes(ch)) w = 0.27;
  else if ('ftr()[]-/'.includes(ch)) w = 0.38;
  else if ('mwMW@%'.includes(ch)) w = 0.88;
  else if (/[A-Z]/.test(ch)) w = 0.68;
  else if (/[0-9]/.test(ch)) w = 0.6;
  else if (/[a-z]/.test(ch)) w = 0.56;
  else if (ch.charCodeAt(0) > 0x2e80) w = 1;
  else w = 0.6;
  return bold ? w * 1.06 : w;
}
const measure = (text, size, bold = true) => [...String(text)].reduce((s, ch) => s + em(ch, bold), 0) * size;

// Greedy word wrap. Returns null when the text needs more than maxLines at this size.
function wrap(text, size, width, maxLines, bold = true) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (measure(next, size, bold) <= width || !line) line = next;
    else {
      lines.push(line);
      line = w;
    }
  }
  if (line) lines.push(line);
  return lines.length <= maxLines && lines.every((l) => measure(l, size, bold) <= width) ? lines : null;
}

// Largest size from `sizes` that fits; the smallest size is truncated with an ellipsis.
function fit(text, sizes, width, maxLines, bold = true) {
  for (const size of sizes) {
    const lines = wrap(text, size, width, maxLines, bold);
    if (lines) return { size, lines };
  }
  const size = sizes[sizes.length - 1];
  const words = String(text).split(/\s+/);
  let lines = null;
  for (let n = words.length - 1; n > 0 && !lines; n--) lines = wrap(`${words.slice(0, n).join(' ')}…`, size, width, maxLines, bold);
  return { size, lines: lines || [String(text).slice(0, 40)] };
}

function textBlock(lines, x, y, size, { weight = 800, fill = C.ink, lh = 1.12, family = 'Inter' } = {}) {
  return lines.map((l, i) => `<text x="${x}" y="${y + i * size * lh}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}">${esc(l)}</text>`).join('');
}

function brand() {
  return `<g transform="translate(64 52) scale(1.5)"><rect width="32" height="32" rx="8" fill="${C.accent}"/><g fill="none" stroke="${C.accentInk}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="${SHIELD}"/><path d="${CHECK}"/></g></g>
<text x="130" y="89" font-family="Inter" font-size="30" font-weight="800" fill="${C.ink}">Privacy Ratings</text>`;
}

function kicker(text) {
  if (!text) return '';
  const t = String(text).toUpperCase();
  const size = 20;
  const w = [...t].length * (size * 0.6 + 1) + 40;
  return `<g transform="translate(${W - 64 - w} 50)"><rect width="${w}" height="44" rx="22" fill="none" stroke="${C.line}" stroke-width="2"/><text x="${w / 2}" y="29" text-anchor="middle" font-family="JetBrains Mono" font-size="${size}" font-weight="700" fill="${C.accent}" letter-spacing="1">${esc(t)}</text></g>`;
}

function footer(left) {
  return `<line x1="64" y1="552" x2="${W - 64}" y2="552" stroke="${C.line}" stroke-width="2"/>
<text x="64" y="592" font-family="JetBrains Mono" font-size="22" font-weight="700" fill="${C.accent}">privacyratings.com</text>
<text x="${W - 64}" y="592" text-anchor="end" font-family="Inter" font-size="22" font-weight="400" fill="${C.muted}">${esc(left || 'Public criteria · Evidence · Security tests')}</text>`;
}

function frame(inner, { kick, foot } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>
<radialGradient id="glow" cx="1" cy="0" r="1"><stop offset="0" stop-color="${C.accent}" stop-opacity="0.22"/><stop offset="0.6" stop-color="${C.accent}" stop-opacity="0"/></radialGradient>
<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity="0.035" stroke-width="1"/></pattern>
</defs>
<rect width="${W}" height="${H}" fill="${C.bg}"/>
<rect width="${W}" height="${H}" fill="url(#grid)"/>
<rect width="${W}" height="${H}" fill="url(#glow)"/>
${brand()}
${kicker(kick)}
${inner}
${footer(foot)}
</svg>`;
}

const gradeColor = (e) => (e.rating.grade ? GRADE[e.rating.grade] : NONE);

function gradeTile(e, x, y, size) {
  const g = e.rating.grade;
  const r = Math.round(size * 0.16);
  const letter = g || '–';
  return `<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="${r}" fill="${gradeColor(e)}"/>
<text x="${x + size / 2}" y="${y + size * 0.72}" text-anchor="middle" font-family="Inter" font-size="${Math.round(size * 0.62)}" font-weight="800" fill="#ffffff">${letter}</text>`;
}

function chips(items, x, y) {
  let cx = x;
  return items
    .filter(Boolean)
    .map(([text, strong]) => {
      const size = 22;
      const w = measure(text, size, true) + 36;
      const out = `<rect x="${cx}" y="${y}" width="${w}" height="44" rx="22" fill="${strong ? C.accent : C.panel}" stroke="${strong ? C.accent : C.line}" stroke-width="2"/><text x="${cx + 18}" y="${y + 30}" font-family="Inter" font-size="${size}" font-weight="600" fill="${strong ? C.accentInk : C.ink}">${esc(text)}</text>`;
      cx += w + 12;
      return cx > W - 64 ? '' : out;
    })
    .join('');
}

// ---------- page kinds ----------

function entrySvg({ entry: e, category, country }) {
  const r = e.rating;
  const tile = 300;
  const tx = W - 64 - tile;
  const ty = 150;
  const width = tx - 64 - 48;
  const name = fit(e.name, [84, 72, 62, 54], width, 2);
  let y = 150 + name.size;
  let out = textBlock(name.lines, 64, y, name.size);
  y += (name.lines.length - 1) * name.size * 1.12 + 22;
  const desc = fit(e.description || '', [30, 28, 26], width, name.lines.length > 1 ? 2 : 3, false);
  out += textBlock(desc.lines, 64, y + desc.size, desc.size, { weight: 400, fill: C.muted, lh: 1.3 });
  out += chips(
    [
      e.pick ? ['Our pick', true] : null,
      country ? [country, false] : null,
      e.affiliated ? ['Affiliated', false] : null
    ],
    64,
    468
  );
  out += gradeTile(e, tx, ty, tile);
  out += `<text x="${tx + 22}" y="${ty + 40}" font-family="JetBrains Mono" font-size="18" font-weight="700" fill="#ffffff" fill-opacity="0.8" letter-spacing="1">GRADE</text>`;
  out += r.grade
    ? `<text x="${tx + tile / 2}" y="${ty + tile + 56}" text-anchor="middle" font-family="Inter" font-size="40" font-weight="800" fill="${C.ink}">${r.score}<tspan font-size="26" font-weight="600" fill="${C.muted}" dx="8">/ 100</tspan></text>`
    : `<text x="${tx + tile / 2}" y="${ty + tile + 50}" text-anchor="middle" font-family="Inter" font-size="28" font-weight="600" fill="${C.muted}">Not graded yet</text>`;
  return frame(out, { kick: category, foot: 'Privacy grade from public criteria and evidence' });
}

function listSvg({ title, kicker: kick, entries = [], foot }) {
  const t = fit(title, [68, 60, 52, 46], W - 128, 2);
  let out = textBlock(t.lines, 64, 150 + t.size, t.size);
  const top = entries.slice(0, t.lines.length > 1 ? 3 : 4);
  const y = 150 + t.size + (t.lines.length - 1) * t.size * 1.12 + 44;
  const rowH = 72;
  const colW = (W - 128 - 24) / 2;
  top.forEach((e, i) => {
    const col = top.length > 2 ? i % 2 : 0;
    const row = top.length > 2 ? Math.floor(i / 2) : i;
    const x = 64 + col * (colW + 24);
    const yy = y + row * (rowH + 18);
    const w = top.length > 2 ? colW : W - 128;
    const nm = fit(e.name, [30, 26, 22], w - 150, 1);
    out += `<rect x="${x}" y="${yy}" width="${w}" height="${rowH}" rx="14" fill="${C.panel}" stroke="${C.line}" stroke-width="2"/>
<text x="${x + 22}" y="${yy + 46}" font-family="JetBrains Mono" font-size="22" font-weight="700" fill="${C.muted}">${i + 1}</text>
${textBlock(nm.lines, x + 56, yy + 46, nm.size, { weight: 600 })}
<rect x="${x + w - 84}" y="${yy + 14}" width="64" height="44" rx="10" fill="${gradeColor(e)}"/>
<text x="${x + w - 52}" y="${yy + 46}" text-anchor="middle" font-family="Inter" font-size="30" font-weight="800" fill="#ffffff">${e.rating.grade || '–'}</text>`;
  });
  return frame(out, { kick, foot });
}

function compareSvg({ a, b, category }) {
  const colW = 470;
  const side = (e, x) => {
    const nm = fit(e.name, [52, 44, 38, 32], colW - 20, 2);
    const tile = 190;
    const tx = x + (colW - tile) / 2;
    let s = gradeTile(e, tx, 140, tile);
    const ny = 140 + tile + 24 + nm.size;
    s += nm.lines.map((l, i) => `<text x="${x + colW / 2}" y="${ny + i * nm.size * 1.1}" text-anchor="middle" font-family="Inter" font-size="${nm.size}" font-weight="800" fill="${C.ink}">${esc(l)}</text>`).join('');
    const sy = ny + (nm.lines.length - 1) * nm.size * 1.1 + 44;
    s += `<text x="${x + colW / 2}" y="${Math.min(sy, 536)}" text-anchor="middle" font-family="Inter" font-size="28" font-weight="600" fill="${C.muted}">${e.rating.grade ? `${e.rating.score} / 100` : 'Not graded yet'}</text>`;
    return s;
  };
  const out = `${side(a, 64)}${side(b, W - 64 - colW)}
<circle cx="${W / 2}" cy="235" r="46" fill="${C.panel}" stroke="${C.line}" stroke-width="2"/>
<text x="${W / 2}" y="247" text-anchor="middle" font-family="JetBrains Mono" font-size="32" font-weight="700" fill="${C.accent}">VS</text>`;
  return frame(out, { kick: category, foot: 'Side by side: criteria, evidence and tests' });
}

function pageSvg({ title, text, kicker: kick, stats, foot }) {
  const t = fit(title, stats ? [76, 68, 60, 52] : [80, 72, 64, 56, 48], W - 128, stats ? 2 : 3);
  let y = 150 + t.size;
  let out = textBlock(t.lines, 64, y, t.size);
  y += (t.lines.length - 1) * t.size * 1.12 + 34;
  const room = stats ? (t.lines.length > 1 ? 1 : 2) : t.lines.length >= 3 ? 1 : 3;
  if (text) {
    const d = fit(text, [32, 30, 28], W - 128, room, false);
    out += textBlock(d.lines, 64, y + d.size, d.size, { weight: 400, fill: C.muted, lh: 1.3 });
  }
  if (stats) {
    let x = 64;
    for (const [label, value] of stats) {
      const vw = Math.max(measure(value, 48), measure(label, 20, false) * 1.1) + 56;
      out += `<text x="${x}" y="496" font-family="Inter" font-size="48" font-weight="800" fill="${C.ink}">${esc(value)}</text><text x="${x}" y="528" font-family="JetBrains Mono" font-size="18" font-weight="700" fill="${C.muted}" letter-spacing="1">${esc(label.toUpperCase())}</text>`;
      x += vw;
    }
  }
  return frame(out, { kick, foot });
}

function svgFor(spec) {
  if (spec.kind === 'entry') return entrySvg(spec);
  if (spec.kind === 'list') return listSvg(spec);
  if (spec.kind === 'compare') return compareSvg(spec);
  return pageSvg(spec);
}

// ---------- rendering ----------

let fontFiles = null;
function render(svg) {
  const { Resvg } = require('@resvg/resvg-js');
  const UPNG = require('upng-js');
  fontFiles ||= fs.readdirSync(FONTS).filter((f) => f.endsWith('.ttf')).map((f) => path.join(FONTS, f));
  const img = new Resvg(svg, { fitTo: { mode: 'width', value: W }, font: { fontFiles, loadSystemFonts: false, defaultFontFamily: 'Inter' } }).render();
  const px = img.pixels;
  // A 256-color palette keeps each image around 40 KB with no visible loss.
  return Buffer.from(UPNG.encode([px.buffer.slice(px.byteOffset, px.byteOffset + px.byteLength)], img.width, img.height, 256));
}

const keyFor = (svg) => crypto.createHash('sha256').update(VERSION).update(svg).digest('hex').slice(0, 32);

// Renders every job into outDir, using the cache and one worker per CPU for new images.
async function renderAll(jobs, outDir) {
  fs.mkdirSync(CACHE, { recursive: true });
  const todo = new Map();
  const planned = jobs.map(({ file, spec }) => {
    const svg = svgFor(spec);
    const key = keyFor(svg);
    if (!fs.existsSync(path.join(CACHE, `${key}.png`))) todo.set(key, svg);
    return { file, key };
  });

  if (todo.size) {
    // resvg-js holds on to native memory after each render, so each worker renders a
    // batch and exits, which returns the memory. Workers run in parallel, one per CPU.
    const { Worker } = require('node:worker_threads');
    const items = [...todo];
    const batches = [];
    for (let i = 0; i < items.length; i += BATCH) batches.push(items.slice(i, i + BATCH));
    const run = (part) =>
      new Promise((resolve, reject) => {
        const w = new Worker(__filename, { workerData: { part, cache: CACHE } });
        w.on('error', reject);
        w.on('exit', (code) => (code ? reject(new Error(`OG worker exited with code ${code}`)) : resolve()));
      });
    const lanes = Math.max(1, Math.min(require('node:os').cpus().length, batches.length));
    let next = 0;
    await Promise.all(
      Array.from({ length: lanes }, async () => {
        while (next < batches.length) await run(batches[next++]);
      })
    );
  }

  for (const { file, key } of planned) {
    const out = path.join(outDir, file);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.copyFileSync(path.join(CACHE, `${key}.png`), out);
  }

  // Drop cached images no page uses any more.
  const used = new Set(planned.map((p) => `${p.key}.png`));
  for (const f of fs.readdirSync(CACHE)) if (!used.has(f)) fs.rmSync(path.join(CACHE, f));
  return { total: jobs.length, rendered: todo.size };
}

const { isMainThread, workerData } = require('node:worker_threads');
if (!isMainThread && workerData?.part) {
  for (const [key, svg] of workerData.part) fs.writeFileSync(path.join(workerData.cache, `${key}.png`), render(svg));
}

module.exports = { svgFor, render, renderAll, W, H };
