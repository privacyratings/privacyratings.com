'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { badgeSvg, badgeJson, STYLES, badgePath } = require('../scripts/badges');

const entry = (grade, score, name = 'Example Mail') => ({ name, category: 'email-providers', slug: 'example', rating: { grade, score } });

test('every style shows the real grade and score', () => {
  for (const s of STYLES) {
    const svg = badgeSvg(entry('B', 81), s.id, 'Email providers');
    assert.match(svg, /^<svg xmlns="http:\/\/www.w3.org\/2000\/svg"/);
    assert.match(svg, /graded B, 81 out of 100/);
    assert.match(svg, new RegExp(`height="${s.height}"`));
    assert.doesNotMatch(svg, /<script/);
  }
});

test('ungraded entries say so', () => {
  assert.match(badgeSvg(entry(null, 40), 'flat'), /not graded/);
  assert.strictEqual(badgeJson(entry(null, 40)).message, 'not graded');
});

test('names are escaped and long names are shortened on cards', () => {
  const svg = badgeSvg(entry('A', 95, 'A <very> long & unusual product name that keeps going'), 'card', 'Email providers');
  assert.match(svg, /&lt;very&gt;/);
  assert.match(svg, /…/);
});

test('Shields.io endpoint format', () => {
  assert.deepStrictEqual(badgeJson(entry('A', 92)), { schemaVersion: 1, label: 'Privacy Ratings', message: 'A · 92/100', color: '15703c', labelColor: '0b6e66', cacheSeconds: 3600 });
  assert.strictEqual(badgePath(entry('A', 92), '-card'), '/badge/email-providers/example-card.svg');
});
