'use strict';

// Generates every icon from one logo definition, so the favicon, app icons and header logo match.
// Usage: npm run icons   (writes files into site/, which are committed)
//
//   favicon.svg             Adapts to light and dark browser themes
//   favicon.ico             16, 32 and 48 px, for browsers and tools that ask for /favicon.ico
//   favicon-16.png, favicon-32.png
//   apple-touch-icon.png    180 px, full bleed (iOS rounds the corners itself)
//   icon-192.png, icon-512.png            Rounded, transparent corners ("any")
//   icon-maskable-192.png, icon-maskable-512.png  Full bleed with the logo inside the safe zone
//   safari-pinned-tab.svg   Single-color mask icon

const fs = require('node:fs');
const path = require('node:path');


const OUT = path.join(__dirname, '..', 'site');
const LIGHT = { bg: '#0b6e66', fg: '#ffffff' };
const DARK = { bg: '#3fd4c1', fg: '#06201d' };

// The shield and check, on a 32 x 32 grid.
const SHIELD = 'M16 6l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V9z';
const CHECK = 'M12.2 16.2l2.6 2.6 5-5.2';

// `scale` shrinks the mark inside the tile (maskable icons need a safe zone).
function mark({ bg, fg, rx = 8, scale = 1, strokeWidth = 2.2 }) {
  const t = 16 - 16 * scale;
  return `<rect width="32" height="32" rx="${rx}" fill="${bg}"/>
<g transform="translate(${t} ${t}) scale(${scale})" fill="none" stroke="${fg}" stroke-width="${strokeWidth}" stroke-linejoin="round" stroke-linecap="round"><path d="${SHIELD}"/><path d="${CHECK}"/></g>`;
}

const svg = (inner, size = 32) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}">${inner}</svg>`;

function favicon() {
  // Classes let the icon switch colors with the browser's color scheme.
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<style>.b{fill:${LIGHT.bg}}.f{stroke:${LIGHT.fg}}@media (prefers-color-scheme:dark){.b{fill:${DARK.bg}}.f{stroke:${DARK.fg}}}</style>
<rect class="b" width="32" height="32" rx="8"/>
<g class="f" fill="none" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="${SHIELD}"/><path d="${CHECK}"/></g>
</svg>
`;
}

function png(inner, size) {
  // Thicker strokes at tiny sizes keep the check readable.
  const { Resvg } = require('@resvg/resvg-js');
  return new Resvg(svg(inner, size), { fitTo: { mode: 'width', value: size } }).render().asPng();
}

// ICO container holding PNG images (supported by every browser since Internet Explorer 9).
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  const dir = Buffer.alloc(16 * images.length);
  let offset = 6 + dir.length;
  images.forEach(({ size, data }, i) => {
    const o = i * 16;
    dir.writeUInt8(size >= 256 ? 0 : size, o);
    dir.writeUInt8(size >= 256 ? 0 : size, o + 1);
    dir.writeUInt8(0, o + 2);
    dir.writeUInt8(0, o + 3);
    dir.writeUInt16LE(1, o + 4);
    dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(data.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += data.length;
  });
  return Buffer.concat([header, dir, ...images.map((x) => x.data)]);
}

function main() {
  const write = (name, data) => fs.writeFileSync(path.join(OUT, name), data);
  write('favicon.svg', favicon());
  write('safari-pinned-tab.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#000" fill-rule="evenodd" d="M8 0h16a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z"/></svg>\n`);
  const small = (s) => mark({ ...LIGHT, strokeWidth: s <= 16 ? 3 : s <= 32 ? 2.6 : 2.2 });
  const sizes = [16, 32, 48].map((size) => ({ size, data: png(small(size), size) }));
  write('favicon.ico', ico(sizes));
  write('favicon-16.png', sizes[0].data);
  write('favicon-32.png', sizes[1].data);
  write('apple-touch-icon.png', png(mark({ ...LIGHT, rx: 0, scale: 0.86 }), 180));
  for (const s of [192, 512]) {
    write(`icon-${s}.png`, png(mark(LIGHT), s));
    write(`icon-maskable-${s}.png`, png(mark({ ...LIGHT, rx: 0, scale: 0.72 }), s));
  }
  console.log('Icons written to site/');
}

if (require.main === module) main();

// Inline logo for pages. Colors come from CSS variables, so it follows the site's theme toggle.
const logo = (size) => `<svg class="logo" viewBox="0 0 32 32" width="${size}" height="${size}" aria-hidden="true" focusable="false"><rect class="logo-b" width="32" height="32" rx="8"/><g class="logo-f" fill="none" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="${SHIELD}"/><path d="${CHECK}"/></g></svg>`;

module.exports = { SHIELD, CHECK, LIGHT, DARK, mark, logo };
