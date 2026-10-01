// Interactive search, drawn with TermDOM (HTML and CSS rendered in the terminal).
//
//   type        filter              ↑ ↓  PgUp PgDn   move
//   Enter       full rating         Tab              picks only
//   Ctrl+O      open in browser     Esc / Ctrl+C     back or quit

import { TermDOM } from '@b9g/termdom';
import { loadEntry, entryUrl } from './data.js';
import { search } from './search.js';
import { openUrl } from './open.js';
import { clean, safeUrl } from './sanitize.js';

const GRADE_BG = { A: '#15703c', B: '#3f6e1c', C: '#875500', D: '#a63f0b', F: '#a8221a' };
const MARK = { yes: ['✔', '#3fb950'], partial: ['◐', '#d29922'], no: ['✖', '#f85149'], unknown: ['?', '#8b949e'], 'n/a': ['–', '#8b949e'], pending: ['…', '#8b949e'] };
const LIMIT = 250;

const CSS = `
  .app { overflow-y: hidden; }
  .top { display: flex; flex-direction: row; justify-content: space-between; background-color: #0b6e66; color: #ffffff; padding: 0 1ch; }
  .brand { font-weight: bold; }
  .count { color: #c9f2ec; }
  .bar { display: flex; flex-direction: row; padding: 0 1ch; margin-top: 1px; }
  .sigil { color: #3fd4c1; font-weight: bold; }
  input { flex-grow: 1; }
  .filter { color: #3fd4c1; }
  .status { color: #8b949e; padding: 0 1ch; }
  .main { display: flex; flex-direction: row; margin-top: 1px; }
  .list { overflow-y: auto; flex-shrink: 0; }
  .row { display: flex; flex-direction: row; padding: 0 1ch; overflow: hidden; white-space: nowrap; }
  .row.on { background-color: #1d3b38; }
  .row .g { width: 3ch; flex-shrink: 0; text-align: center; color: #ffffff; font-weight: bold; }
  .row .sc { width: 4ch; flex-shrink: 0; text-align: right; color: #8b949e; margin-right: 1ch; }
  .row .nm { flex-grow: 1; flex-shrink: 1; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
  .row.on .nm { font-weight: bold; color: #ffffff; }
  .row .pk { color: #e3b341; width: 2ch; flex-shrink: 0; text-align: right; }
  .row .ct { color: #8b949e; flex-shrink: 0; width: 22ch; margin-left: 1ch; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
  .detail { flex-grow: 1; overflow-y: auto; border-left: 1px solid #30363d; padding: 0 2ch; }
  .detail.full { border-left: 0; }
  .d-name { font-weight: bold; color: #ffffff; }
  .d-meta { color: #8b949e; }
  .d-grade { margin-top: 1px; }
  .tile { color: #ffffff; font-weight: bold; }
  .d-score { font-weight: bold; }
  .d-pick { color: #e3b341; margin-top: 1px; }
  .d-desc { margin-top: 1px; }
  .d-note { color: #8b949e; margin-top: 1px; }
  .d-h { color: #3fd4c1; font-weight: bold; margin-top: 1px; }
  .ans { display: flex; flex-direction: row; }
  .ans .m { width: 2ch; flex-shrink: 0; }
  .ans .t { flex-grow: 1; }
  .ans-note { color: #8b949e; padding-left: 2ch; }
  .ans-ev { color: #58a6ff; padding-left: 2ch; }
  a { color: #58a6ff; }
  .empty { color: #8b949e; padding: 0 1ch; }
  .hint { position: fixed; bottom: 0; left: 0; width: 100%; background-color: #161b22; color: #8b949e; padding: 0 1ch; }
  .hint b { color: #c9d1d9; }
`;

const el = (doc, tag, cls, text) => {
  const n = doc.createElement(tag);
  if (cls) n.className = cls;
  // TermDOM drops control characters when it paints, but data strings are cleaned here too.
  if (text !== undefined) n.textContent = clean(text);
  return n;
};

export async function runTui(index, { query = '', category = null } = {}) {
  const term = new TermDOM();
  await term.attach();
  const { document, window } = term;

  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  const app = el(document, 'div', 'app');
  const top = el(document, 'div', 'top');
  top.append(el(document, 'span', 'brand', '◆ Privacy Ratings'), el(document, 'span', 'count', `${index.entries.length} rated · ${index.categories.length} categories`));
  const bar = el(document, 'div', 'bar');
  const input = el(document, 'input');
  input.setAttribute('placeholder', 'Search apps and services, like "email", "vpn" or "gmail alternatives"');
  input.value = query;
  input.autofocus = true;
  const filter = el(document, 'span', 'filter', '');
  bar.append(el(document, 'span', 'sigil', '›\u00a0'), input, filter);
  const status = el(document, 'div', 'status');
  const main = el(document, 'div', 'main');
  const list = el(document, 'div', 'list');
  const detail = el(document, 'div', 'detail');
  main.append(list, detail);
  const hint = el(document, 'div', 'hint');
  app.append(top, bar, status, main, hint);
  document.body.appendChild(app);
  void app.requestFullscreen();

  let results = [];
  let sel = 0;
  let picksOnly = false;
  let full = false;
  const details = new Map();
  let detailTimer = null;

  const wide = () => window.innerWidth >= 96;

  function layout() {
    const h = Math.max(3, window.innerHeight - 6);
    main.style.height = `${h}px`;
    list.style.height = `${h}px`;
    detail.style.height = `${h}px`;
    if (full) {
      list.style.display = 'none';
      detail.style.display = 'block';
      detail.classList.add('full');
    } else {
      list.style.display = 'block';
      detail.classList.remove('full');
      detail.style.display = wide() ? 'block' : 'none';
      list.style.width = wide() ? `${Math.floor(window.innerWidth * 0.52)}px` : '100%';
    }
    hint.innerHTML = full
      ? '<b>↑↓</b> scroll · <b>o</b> open in browser · <b>Esc</b> back · <b>Ctrl+C</b> quit'
      : `<b>↑↓</b> move · <b>Enter</b> full rating · <b>Tab</b> ${picksOnly ? 'all entries' : 'picks only'} · <b>Ctrl+O</b> open in browser · <b>Esc</b> quit`;
  }

  function row(e, on) {
    const r = el(document, 'div', `row${on ? ' on' : ''}`);
    const g = el(document, 'span', 'g', `\u00a0${e.g || '–'}\u00a0`);
    g.style.backgroundColor = GRADE_BG[e.g] || '#484f58';
    r.append(g, el(document, 'span', 'sc', e.g ? String(e.sc) : ''), el(document, 'span', 'nm', e.n), el(document, 'span', 'pk', e.p ? '★' : ''));
    if (wide() || window.innerWidth >= 60) r.append(el(document, 'span', 'ct', index.byCategory[e.c]?.n || e.c));
    return r;
  }

  function renderList() {
    results = search(index, input.value, { category, picks: picksOnly, limit: LIMIT });
    sel = Math.min(sel, Math.max(0, results.length - 1));
    list.textContent = '';
    if (!results.length) list.append(el(document, 'div', 'empty', 'No matches. Try fewer or different words.'));
    results.forEach((e, i) => list.append(row(e, i === sel)));
    const scope = [category ? index.byCategory[category]?.n : null, picksOnly ? 'picks only' : null].filter(Boolean).join(', ');
    const alt = results.alternativesTo;
    filter.textContent = scope ? ` [${scope}]` : '';
    const total = search(index, input.value, { category, picks: picksOnly }).length;
    status.textContent = alt
      ? `${total} rated alternatives to ${alt.n}. ★ marks our picks.`
      : `${total} ${total === 1 ? 'match' : 'matches'}${total > LIMIT ? `, showing ${LIMIT}` : ''}. ★ marks our picks. Grades from public criteria and evidence.`;
    queueDetail();
  }

  function answerRows(parent, data, withNotes) {
    const answers = data.answers && typeof data.answers === 'object' ? Object.entries(data.answers) : [];
    const order = { yes: 0, partial: 1, no: 2, unknown: 3, pending: 4, 'n/a': 5 };
    const rank = (a) => (typeof a?.answer === 'string' && Object.hasOwn(order, a.answer) ? order[a.answer] : 3);
    answers.sort((a, b) => rank(a[1]) - rank(b[1]));
    for (const [id, a] of answers) {
      if (!a || typeof a !== 'object') continue;
      const [m, color] = (typeof a.answer === 'string' && Object.hasOwn(MARK, a.answer) && MARK[a.answer]) || MARK.unknown;
      const line = el(document, 'div', 'ans');
      const mark = el(document, 'span', 'm', m);
      mark.style.color = color;
      line.append(mark, el(document, 'span', 't', a.title || id.replace(/_/g, ' ')));
      parent.append(line);
      if (withNotes && a.note) parent.append(el(document, 'div', 'ans-note', a.note));
      if (withNotes && a.evidence) {
        const wrap = el(document, 'div', 'ans-ev');
        const link = el(document, 'a', '', a.evidence);
        const href = safeUrl(a.evidence);
        if (href) link.setAttribute('href', href);
        wrap.append(link);
        parent.append(wrap);
      }
    }
  }

  function renderDetail() {
    const e = results[sel];
    detail.textContent = '';
    detail.scrollTop = 0;
    if (!e) return;
    const cat = index.byCategory[e.c];
    detail.append(el(document, 'div', 'd-name', e.n));
    detail.append(el(document, 'div', 'd-meta', [cat?.n, e.j ? index.countries[e.j] || e.j : null].filter(Boolean).join(' · ')));
    const grade = el(document, 'div', 'd-grade');
    const tile = el(document, 'span', 'tile', `\u00a0\u00a0${e.g || '–'}\u00a0\u00a0`);
    tile.style.backgroundColor = GRADE_BG[e.g] || '#484f58';
    grade.append(tile, el(document, 'span', 'd-score', e.g ? `  ${e.sc}/100` : '  Not graded yet: too little evidence'));
    detail.append(grade);
    const data = details.get(`${e.c}/${e.s}`);
    if (e.p) detail.append(el(document, 'div', 'd-pick', `★ Our pick${data?.pick_reason ? `: ${data.pick_reason}` : ''}`));
    detail.append(el(document, 'div', 'd-desc', e.d));
    if (data?.disclosure) detail.append(el(document, 'div', 'd-note', `Disclosure: ${data.disclosure}`));
    if (!data) {
      detail.append(el(document, 'div', 'd-note', 'Loading criteria…'));
    } else if (data.error) {
      detail.append(el(document, 'div', 'd-note', data.error));
    } else {
      detail.append(el(document, 'div', 'd-h', 'Criteria'));
      answerRows(detail, data, full);
      if (data.tests && typeof data.tests === 'object' && (data.tests.ssllabs || data.tests.observatory)) {
        detail.append(el(document, 'div', 'd-h', 'Automated tests'));
        if (data.tests.ssllabs) detail.append(el(document, 'div', '', `SSL Labs: ${data.tests.ssllabs}`));
        if (data.tests.observatory) detail.append(el(document, 'div', '', `Mozilla HTTP Observatory: ${data.tests.observatory}`));
      }
    }

    const link = el(document, 'a', 'd-note', entryUrl(e));
    link.setAttribute('href', entryUrl(e));
    detail.append(link);
  }

  function queueDetail() {
    if (!wide() && !full) return;
    renderDetail();
    clearTimeout(detailTimer);
    const e = results[sel];
    if (!e || details.has(`${e.c}/${e.s}`)) return;
    detailTimer = setTimeout(async () => {
      const key = `${e.c}/${e.s}`;
      if (quitting) return;
      try {
        details.set(key, await loadEntry(e.c, e.s));
      } catch (err) {
        details.set(key, { error: err.message });
      }
      if (!quitting && results[sel] === e) renderDetail();
    }, 120);
  }

  function move(delta) {
    if (!results.length) return;
    const next = Math.max(0, Math.min(results.length - 1, sel + delta));
    if (next === sel) return;
    const rows = list.children;
    rows[sel]?.classList.remove('on');
    rows[next]?.classList.add('on');
    sel = next;
    rows[sel]?.scrollIntoView({ block: 'nearest' });
    queueDetail();
  }

  function setFull(on) {
    full = on;
    layout();
    if (full) {
      input.blur();
      queueDetail();
    } else {
      input.focus();
      renderDetail();
    }
  }

  let done;
  const finished = new Promise((resolve) => (done = resolve));
  let quitting = false;
  async function quit() {
    if (quitting) return;
    quitting = true;
    clearTimeout(detailTimer);
    await term.dispose();
    done();
  }

  input.addEventListener('input', () => {
    sel = 0;
    renderList();
  });

  document.addEventListener('keydown', (event) => {
    const k = event.key;
    const ctrl = event.ctrlKey;
    const page = Math.max(1, window.innerHeight - 8);
    if (ctrl && k === 'c') void quit();
    else if (k === 'Escape') full ? setFull(false) : void quit();
    else if (ctrl && k === 'o') {
      if (results[sel]) openUrl(entryUrl(results[sel]));
    } else if (full) {
      if (k === 'ArrowDown' || k === 'j') detail.scrollBy(0, 1);
      else if (k === 'ArrowUp' || k === 'k') detail.scrollBy(0, -1);
      else if (k === 'PageDown' || k === ' ') detail.scrollBy(0, page);
      else if (k === 'PageUp' || k === 'b') detail.scrollBy(0, -page);
      else if (k === 'Backspace' || k === 'ArrowLeft' || k === 'q') setFull(false);
      else if (k === 'o') results[sel] && openUrl(entryUrl(results[sel]));
      else return;
    } else if (k === 'ArrowDown' || (ctrl && k === 'n')) move(1);
    else if (k === 'ArrowUp' || (ctrl && k === 'p')) move(-1);
    else if (k === 'PageDown') move(page);
    else if (k === 'PageUp') move(-page);
    else if (k === 'Enter') {
      if (results[sel]) setFull(true);
    } else if (k === 'Tab') {
      picksOnly = !picksOnly;
      sel = 0;
      layout();
      renderList();
    } else return;
    event.preventDefault();
  });

  window.addEventListener('resize', () => {
    layout();
    renderList();
  });

  layout();
  renderList();
  await finished;
}
