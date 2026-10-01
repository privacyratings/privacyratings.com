'use strict';

// Badge images for embedding on other sites, generated from the real scores at build time.
//
//   /badge/<category>/<entry>.svg              flat (20px), the default
//   /badge/<category>/<entry>-flat-square.svg  flat with square corners
//   /badge/<category>/<entry>-large.svg        28px, uppercase
//   /badge/<category>/<entry>-card.svg         64px card with name and score, light
//   /badge/<category>/<entry>-card-dark.svg    the same card, dark
//   /badge/<category>/<entry>.json             Shields.io endpoint format
//
// Badges only show what the ratings say. There is no way to request a custom grade or text.

const STYLES = [
  { id: 'flat', suffix: '', name: 'Flat', height: 20 },
  { id: 'flat-square', suffix: '-flat-square', name: 'Flat square', height: 20 },
  { id: 'large', suffix: '-large', name: 'Large', height: 28 },
  { id: 'card', suffix: '-card', name: 'Card', height: 64 },
  { id: 'card-dark', suffix: '-card-dark', name: 'Card, dark', height: 64 }
];

const GRADE_COLORS = { A: '#15703c', B: '#3f6e1c', C: '#875500', D: '#a63f0b', F: '#a8221a' };
const NONE_COLOR = '#6b7280';
const BRAND = '#0b6e66';
const LABEL = 'Privacy Ratings';

// Approximate advance widths of Verdana at 11px. Text is also drawn with textLength, so the
// badge renders at exactly the computed width whatever font the viewer has.
const WIDTHS = {
  ' ': 3.9, '!': 4.3, '"': 5.1, '#': 9.1, $: 7, '%': 11.9, '&': 8, "'": 3, '(': 5, ')': 5, '*': 7, '+': 9.1, ',': 4, '-': 5, '.': 4, '/': 5,
  0: 7, 1: 7, 2: 7, 3: 7, 4: 7, 5: 7, 6: 7, 7: 7, 8: 7, 9: 7, ':': 5, ';': 5, '<': 9.1, '=': 9.1, '>': 9.1, '?': 6, '@': 11,
  A: 7.5, B: 7.6, C: 7.7, D: 8.5, E: 7, F: 6.3, G: 8.5, H: 8.3, I: 4.6, J: 5, K: 7.6, L: 6.1, M: 9.3, N: 8.2, O: 8.7, P: 6.6, Q: 8.7, R: 7.7,
  S: 7.5, T: 6.8, U: 8, V: 7.5, W: 10.9, X: 7.5, Y: 6.8, Z: 7.5, '[': 5, '\\': 5, ']': 5, _: 7, '`': 7,
  a: 6.6, b: 6.9, c: 5.7, d: 6.9, e: 6.6, f: 3.9, g: 6.9, h: 7, i: 3, j: 3.8, k: 6.5, l: 3, m: 10.7, n: 7, o: 6.7, p: 6.9, q: 6.9, r: 4.7,
  s: 5.7, t: 4.3, u: 7, v: 6.5, w: 9, x: 6.5, y: 6.5, z: 5.8, '{': 7, '|': 5, '}': 7, '~': 9.1, '·': 4, '…': 10
};

function textWidth(text, size = 11, bold = false) {
  let w = 0;
  for (const ch of String(text)) w += WIDTHS[ch] ?? 7;
  return w * (size / 11) * (bold ? 1.08 : 1);
}

// Also drops characters that are not allowed in XML, which would break the SVG.
const esc = (s) => String(s ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffe\uffff]/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// The facts a badge shows, taken only from the entry's rating.
function badgeData(e) {
  const r = e.rating;
  const graded = Boolean(r.grade);
  return {
    name: e.name,
    grade: r.grade || null,
    score: graded ? r.score : null,
    color: graded ? GRADE_COLORS[r.grade] : NONE_COLOR,
    message: graded ? `${r.grade} · ${r.score}/100` : 'not graded',
    title: graded ? `${LABEL}: ${e.name} is graded ${r.grade}, ${r.score} out of 100` : `${LABEL}: ${e.name} is not graded yet`
  };
}

// Small shield icon, the same shape as the site logo.
function icon(x, y, s, color = '#fff') {
  const k = s / 32;
  return `<g transform="translate(${x} ${y}) scale(${k})" fill="none" stroke="${color}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"><path d="M16 6l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V9z"/><path d="M12.2 16.2l2.6 2.6 5-5.2"/></g>`;
}

// Shields-style two-part badge: logo and label on the left, grade on the right.
function flat(d, { square = false, large = false } = {}) {
  const h = large ? 28 : 20;
  const size = large ? 10 : 11;
  const label = large ? LABEL.toUpperCase() : LABEL;
  const msg = large ? d.message.toUpperCase() : d.message;
  const pad = large ? 12 : 6;
  const spacing = large ? 1 : 0;
  const iconSize = large ? 16 : 14;
  const lw = Math.round(textWidth(label, size, large) + spacing * label.length);
  const mw = Math.round(textWidth(msg, size, true) + spacing * msg.length);
  const left = pad + iconSize + 4 + lw + pad;
  const right = pad + mw + pad;
  const w = left + right;
  const rx = square ? 0 : large ? 4 : 3;
  const ty = large ? 18 : 14;
  const font = `font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="${size}"${large ? ` letter-spacing="${spacing}"` : ''}`;
  const lx = pad + iconSize + 4;
  const shine = square || large ? '' : `<linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(d.title)}">
<title>${esc(d.title)}</title>
${shine}<clipPath id="r"><rect width="${w}" height="${h}" rx="${rx}"/></clipPath>
<g clip-path="url(#r)"><rect width="${left}" height="${h}" fill="${BRAND}"/><rect x="${left}" width="${right}" height="${h}" fill="${d.color}"/>${shine ? `<rect width="${w}" height="${h}" fill="url(#s)"/>` : ''}</g>
${icon(pad - 1, (h - iconSize) / 2, iconSize)}
<g fill="#fff" ${font}>
${large ? '' : `<text x="${lx}" y="${ty + 1}" fill="#010101" fill-opacity=".3" textLength="${lw}" lengthAdjust="spacingAndGlyphs">${esc(label)}</text>`}
<text x="${lx}" y="${ty}" textLength="${lw}" lengthAdjust="spacingAndGlyphs">${esc(label)}</text>
${large ? '' : `<text x="${left + pad}" y="${ty + 1}" fill="#010101" fill-opacity=".3" font-weight="bold" textLength="${mw}" lengthAdjust="spacingAndGlyphs">${esc(msg)}</text>`}
<text x="${left + pad}" y="${ty}" font-weight="bold" textLength="${mw}" lengthAdjust="spacingAndGlyphs">${esc(msg)}</text>
</g>
</svg>
`;
}

function truncate(text, max, size, bold) {
  if (textWidth(text, size, bold) <= max) return text;
  let t = text;
  while (t.length > 1 && textWidth(`${t}…`, size, bold) > max) t = t.slice(0, -1);
  return `${t.trimEnd()}…`;
}

// A larger card: grade tile, name, score and category.
function card(d, category, dark = false) {
  const c = dark
    ? { bg: '#111418', line: '#2a3038', ink: '#eef1f4', muted: '#a0a8b3', brand: '#3fd4c1' }
    : { bg: '#ffffff', line: '#d9d9d2', ink: '#16181b', muted: '#5a616b', brand: BRAND };
  const w = 280;
  const h = 64;
  const x = 64;
  const name = truncate(d.name, w - x - 14, 15, true);
  const sub = d.grade ? `${d.score}/100 · ${category}` : `Not graded yet · ${category}`;
  const subText = truncate(sub, w - x - 14, 11.5, false);
  const font = 'font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif"';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(d.title)}">
<title>${esc(d.title)}</title>
<rect x=".5" y=".5" width="${w - 1}" height="${h - 1}" rx="11.5" fill="${c.bg}" stroke="${c.line}"/>
<rect x="10" y="10" width="44" height="44" rx="9" fill="${d.color}"/>
<text x="32" y="${d.grade ? 42 : 41}" text-anchor="middle" fill="#fff" font-family="ui-monospace,SFMono-Regular,Menlo,Consolas,monospace" font-size="${d.grade ? 26 : 22}" font-weight="800">${d.grade || '?'}</text>
${icon(x - 1, 9, 13, c.brand)}
<text x="${x + 15}" y="19" fill="${c.brand}" font-family="ui-monospace,SFMono-Regular,Menlo,Consolas,monospace" font-size="9.5" font-weight="700" letter-spacing=".9">PRIVACY RATINGS</text>
<text x="${x}" y="38" fill="${c.ink}" ${font} font-size="15" font-weight="700">${esc(name)}</text>
<text x="${x}" y="54" fill="${c.muted}" ${font} font-size="11.5">${esc(subText)}</text>
</svg>
`;
}

function badgeSvg(e, style, categoryName) {
  const d = badgeData(e);
  if (style === 'flat-square') return flat(d, { square: true });
  if (style === 'large') return flat(d, { large: true });
  if (style === 'card') return card(d, categoryName, false);
  if (style === 'card-dark') return card(d, categoryName, true);
  return flat(d);
}

// Shields.io endpoint format: https://shields.io/badges/endpoint-badge
function badgeJson(e) {
  const d = badgeData(e);
  return { schemaVersion: 1, label: LABEL, message: d.message, color: d.color.replace('#', ''), labelColor: BRAND.replace('#', ''), cacheSeconds: 3600 };
}

const badgePath = (e, suffix = '', ext = 'svg') => `/badge/${e.category}/${e.slug}${suffix}.${ext}`;

module.exports = { STYLES, badgeSvg, badgeJson, badgeData, badgePath, textWidth };
