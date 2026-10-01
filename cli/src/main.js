// privacyratings: search open, testable privacy ratings from the terminal.

import { parseArgs } from 'node:util';
import { loadIndex, loadEntry, entryUrl, SITE } from './data.js';
import { prepare, search, find } from './search.js';
import { c, resultLine, entryText } from './format.js';
import { clean } from './sanitize.js';
import { openUrl } from './open.js';
import { autoUpdate, update } from './update.js';
import { VERSION } from './version.js';

const HELP = `${c.bold('privacyratings')} ${c.gray(VERSION)}
Open, testable privacy ratings for the apps and services people use every day.

${c.bold('Usage')}
  privacyratings                      Interactive search
  privacyratings <words>              Interactive search, starting with <words>
  privacyratings search <words>       Print matching ratings
  privacyratings show <name>          Print one rating with every criterion and its evidence
  privacyratings open <name>          Open a rating in your browser
  privacyratings picks [category]     Print our picks
  privacyratings categories           Print every category
  privacyratings update               Update now

${c.bold('Options')}
  -c, --category <id>   Only this category, like vpns or email-providers
  -p, --picks           Only our picks
  -n, --limit <n>       Number of results to print (default 20)
      --json            Print JSON
      --refresh         Download fresh data instead of using the cache
      --no-update       Skip the daily update check
  -v, --version         Print the version
  -h, --help            Print this help

${c.bold('Examples')}
  privacyratings "gmail alternatives"
  privacyratings search vpn --picks
  privacyratings show "Proton Mail"
  privacyratings picks password-managers

Data comes from ${SITE} and is cached for an hour. Ratings may be inaccurate or out of
date. Anyone can submit a correction: https://github.com/privacyratings/privacyratings.com
`;

const COMMANDS = new Set(['search', 'show', 'open', 'picks', 'categories', 'update', 'help', '__update', '__selftest']);

export async function main(argv) {
  const { values: o, positionals } = parseArgs({
    args: argv,
    allowPositionals: true,
    options: {
      category: { type: 'string', short: 'c' },
      picks: { type: 'boolean', short: 'p' },
      limit: { type: 'string', short: 'n' },
      json: { type: 'boolean' },
      refresh: { type: 'boolean' },
      'no-update': { type: 'boolean' },
      version: { type: 'boolean', short: 'v' },
      help: { type: 'boolean', short: 'h' }
    }
  });

  if (o.version) return console.log(VERSION);
  const cmd = COMMANDS.has(positionals[0]) ? positionals[0] : null;
  const words = (cmd ? positionals.slice(1) : positionals).join(' ');
  if (o.help || cmd === 'help') return process.stdout.write(HELP);

  // Background update process started by autoUpdate().
  if (cmd === '__update') return update({ quiet: true }).catch(() => {});
  if (cmd === 'update') return void (await update());

  // Used by CI to check that a build can draw the interface (TermDOM and its CSS data are bundled).
  if (cmd === '__selftest') {
    const { TermDOM } = await import('@b9g/termdom');
    const out = new TermDOM().renderANSI('<style>b { color: #3fd4c1 }</style><div style="display:flex"><b>privacyratings</b> <span>ok</span></div>');
    if (!out.includes('privacyratings')) throw new Error('Self-test failed');
    return console.log(out.trim());
  }

  const notice = await autoUpdate({ disabled: o['no-update'], quiet: o.json });
  const index = prepare(await loadIndex({ refresh: o.refresh }));
  const limit = o.limit ? Math.max(1, Number.parseInt(o.limit, 10) || 20) : 20;
  if (o.category && !index.byCategory[o.category]) throw new Error(`Unknown category "${o.category}". Run "privacyratings categories" for the list.`);

  const interactive = process.stdin.isTTY && process.stdout.isTTY && !o.json;
  if (!cmd && interactive) {
    const { runTui } = await import('./tui.js');
    await runTui(index, { query: words, category: o.category || null });
  } else if (!cmd || cmd === 'search') {
    const list = search(index, words, { category: o.category, picks: o.picks, limit });
    if (o.json) console.log(JSON.stringify(list.map(publicEntry(index)), null, 2));
    else if (!list.length) console.log('No matches. Try fewer or different words.');
    else list.forEach((e, i) => console.log(resultLine(e, index, i + 1)));
  } else if (cmd === 'picks') {
    const cat = words || o.category || null;
    if (cat && !index.byCategory[cat]) throw new Error(`Unknown category "${cat}". Run "privacyratings categories" for the list.`);
    const list = search(index, '', { category: cat, picks: true });
    if (o.json) console.log(JSON.stringify(list.map(publicEntry(index)), null, 2));
    else list.forEach((e, i) => console.log(resultLine(e, index, i + 1)));
  } else if (cmd === 'categories') {
    if (o.json) console.log(JSON.stringify(index.categories.map(({ id, n, g, count }) => ({ id, name: n, group: g, count })), null, 2));
    else {
      let group = null;
      for (const cat of index.categories) {
        if (cat.g !== group) console.log(`${group !== null ? '\n' : ''}${c.teal(c.bold(clean(cat.g) || 'Other'))}`);
        group = cat.g;
        console.log(`  ${clean(cat.n).padEnd(34)} ${c.gray(cat.id.padEnd(30))} ${c.gray(String(cat.count).padStart(4))}`);
      }
    }
  } else if (cmd === 'show' || cmd === 'open') {
    if (!words) throw new Error(`Usage: privacyratings ${cmd} <name>`);
    const e = find(index, words);
    if (!e) throw new Error(`Nothing found for "${words}".`);
    if (cmd === 'open') {
      openUrl(entryUrl(e));
      console.log(entryUrl(e));
    } else {
      const data = await loadEntry(e.c, e.s, { refresh: o.refresh });
      console.log(o.json ? JSON.stringify(data, null, 2) : entryText(e, data, index));
    }
  }

  if (notice && !o.json) console.error(c.gray(notice));
}

const publicEntry = (index) => (e) => ({
  name: e.n,
  category: e.c,
  category_name: index.byCategory[e.c]?.n,
  slug: e.s,
  grade: e.g,
  score: e.sc,
  pick: e.p || false,
  jurisdiction: e.j || null,
  description: e.d,
  url: entryUrl(e)
});
