// Plain terminal output for commands and pipes. Colors follow NO_COLOR and FORCE_COLOR.
// Every string that comes from the ratings data goes through clean() (see sanitize.js).

import { clean } from './sanitize.js';
import { entryUrl } from './data.js';

const useColor = () => (process.env.NO_COLOR ? false : process.env.FORCE_COLOR ? process.env.FORCE_COLOR !== '0' && process.env.FORCE_COLOR !== 'false' : Boolean(process.stdout.isTTY));
const paint = (open, close) => (s) => (useColor() ? `\x1b[${open}m${s}\x1b[${close}m` : String(s));

export const c = {
  bold: paint(1, 22),
  dim: paint(2, 22),
  teal: paint(36, 39),
  yellow: paint(33, 39),
  green: paint(32, 39),
  red: paint(31, 39),
  blue: paint(34, 39),
  gray: paint(90, 39)
};

const own = (obj, key) => (typeof key === 'string' && Object.hasOwn(obj, key) ? obj[key] : undefined);
const GRADE = { A: '42;97', B: '42;97', C: '43;30', D: '41;97', F: '41;97' };
export const gradeTag = (g) => {
  const grade = own(GRADE, g) ? g : null;
  return useColor() ? `\x1b[${GRADE[grade] || '100;97'};1m ${grade || '–'} \x1b[0m` : `[${grade || '-'}]`;
};
export const MARK = { yes: () => c.green('✔'), partial: () => c.yellow('◐'), no: () => c.red('✖'), unknown: () => c.gray('?'), 'n/a': () => c.gray('–'), pending: () => c.gray('…') };
const mark = (answer) => (own(MARK, answer) || MARK.unknown)();

const width = () => Math.max(40, Math.min(process.stdout.columns || 100, 120));
// Clips by code point so emoji and other astral characters are never cut in half.
export const clip = (s, n) => {
  const chars = Array.from(s);
  return chars.length > n ? `${chars.slice(0, Math.max(0, n - 1)).join('')}…` : s;
};

const catName = (index, id) => clean(index.byCategory[id]?.n || id);

export function resultLine(e, index, n) {
  const cat = catName(index, e.c);
  const score = e.g && e.sc !== null && e.sc !== undefined ? String(e.sc).padStart(3) : '   ';
  const room = width() - 16 - cat.length;
  const name = clip(clean(e.n), Math.max(12, room));
  return `${String(n).padStart(3)}  ${gradeTag(e.g)} ${c.gray(score)}  ${c.bold(name)}${e.p ? c.yellow(' ★') : ''}  ${c.gray(cat)}`;
}

export function entryText(e, data, index) {
  const lines = [];
  const cat = catName(index, e.c);
  const j = data.jurisdiction && typeof data.jurisdiction === 'object' ? data.jurisdiction : null;
  lines.push(`${c.bold(clean(e.n))}  ${gradeTag(e.g)} ${e.g ? c.bold(`${clean(e.sc)}/100`) : c.gray('not graded yet')}`);
  lines.push(c.gray([cat, j ? `${clean(j.name)}${j.eyes ? ` (${clean(j.eyes)})` : ''}` : null].filter(Boolean).join(' · ')));
  lines.push('');
  lines.push(clean(data.description || e.d));
  if (data.pick) lines.push('', c.yellow(`★ Our pick. ${clean(data.pick_reason)}`.trim()));
  if (data.disclosure) lines.push('', c.gray(`Disclosure: ${clean(data.disclosure)}`));
  lines.push('', c.teal(c.bold('Criteria')));
  const answers = data.answers && typeof data.answers === 'object' ? Object.entries(data.answers) : [];
  for (const [id, a] of answers) {
    if (!a || typeof a !== 'object') continue;
    lines.push(`  ${mark(a.answer)} ${clean(a.title) || clean(id.replace(/_/g, ' '))}${a.note ? c.gray(`  ${clean(a.note)}`) : ''}`);
    if (a.evidence) lines.push(`    ${c.blue(clean(a.evidence))}`);
  }
  const t = data.tests && typeof data.tests === 'object' ? data.tests : {};
  const tests = [
    t.ssllabs && `SSL Labs ${clean(t.ssllabs)}`,
    t.observatory && `Observatory ${clean(t.observatory)}`,
    t.internetnl_web != null && `Internet.nl web ${clean(t.internetnl_web)}%`,
    t.internetnl_mail != null && `Internet.nl mail ${clean(t.internetnl_mail)}%`
  ].filter(Boolean);
  if (tests.length) lines.push('', c.teal(c.bold('Automated tests')), `  ${tests.join(' · ')}`);
  if (data.website) lines.push('', `${c.gray('Website')}  ${clean(data.website)}`);
  else lines.push('');
  if (data.source) lines.push(`${c.gray('Source')}   ${clean(data.source)}`);
  lines.push(`${c.gray('Rating')}   ${entryUrl(e)}`);
  return lines.join('\n');
}
