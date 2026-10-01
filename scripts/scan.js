'use strict';

// Runs automated tests and saves results to scans/<category>--<slug>.json.
//
// Usage:
//   node scripts/scan.js                         Test everything
//   node scripts/scan.js --limit 40              Test the 40 entries with the oldest results
//   node scripts/scan.js --only vpns/mullvad     Test one entry
//   node scripts/scan.js --tests observatory     Run only some tests (comma-separated)
//   node scripts/scan.js --tests mail-dns        Email DNS checks only, without connecting to IMAP, POP3 or SMTP
//   node scripts/scan.js --tests trackers        Third-party trackers on each website's home page
//   node scripts/scan.js --max-minutes 300       Stop starting new tests after 300 minutes and save
//
// The tests (GitHub, Observatory, SSL Labs, mail, trackers) run side by side, each with its own
// concurrency, and every result is saved as soon as it is in, so a cancelled or timed-out run
// keeps its work.
//
// Internet.nl ignores --limit and is skipped with --only: each batch request covers up to 5000
// domains, oldest results first, and at most 2 requests are made in any 7 days, as recorded in
// scans/internetnl-requests.json (see scripts/internetnl-limits.js).
//
// Environment (all optional):
//   SSLLABS_EMAIL        Registered email for the SSL Labs v4 API. Without it, the v3 API is used.
//   INTERNETNL_USERNAME  Internet.nl batch API account (https://internet.nl/faqs/batch-and-dashboard/)
//   INTERNETNL_PASSWORD
//   INTERNETNL_API       Batch API base URL. Defaults to https://batch.internet.nl/api/batch/v2
//   GITHUB_TOKEN         Used to read license data for GitHub repositories.

const fs = require('node:fs');
const path = require('node:path');
const { ROOT, loadCategories, loadEntries, scanKey } = require('./lib');
const { mailTests } = require('./mail-tests');
const { scanTrackers, assertPublicHost, readLimited } = require('./trackers');
const { MAX_REQUESTS_PER_WEEK, MAX_DOMAINS, MIN_DOMAINS, readLedger, writeLedger, budget, pickDomains } = require('./internetnl-limits');

const args = process.argv.slice(2);
const opt = (name) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? undefined : args[i + 1];
};

const ALL_TESTS = ['github', 'observatory', 'ssllabs', 'internetnl', 'mail', 'trackers'];
const KNOWN_TESTS = new Set([...ALL_TESTS, 'mail-dns']);
const tests = new Set((opt('tests') || ALL_TESTS.join(',')).split(',').map((t) => t.trim()).filter(Boolean));
const limit = opt('limit') ? Number(opt('limit')) : Infinity;
const only = opt('only');
// Stop starting new tests after this many minutes and save what is done, so a long run ends
// with its results committed instead of being cut off by the job timeout.
const maxMinutes = opt('max-minutes') ? Number(opt('max-minutes')) : Infinity;
const deadline = Date.now() + maxMinutes * 60_000;
const late = () => Date.now() > deadline;

// Fail loudly on typos, instead of silently testing nothing.
const unknownTests = [...tests].filter((t) => !KNOWN_TESTS.has(t));
if (unknownTests.length || !tests.size) {
  console.error(`Unknown test(s): ${unknownTests.join(', ') || '(none given)'}. Known: ${[...KNOWN_TESTS].join(', ')}`);
  process.exit(1);
}
if (limit !== Infinity && !(Number.isInteger(limit) && limit >= 0)) {
  console.error(`--limit must be a whole number, got ${JSON.stringify(opt('limit'))}`);
  process.exit(1);
}
if (maxMinutes !== Infinity && !(maxMinutes > 0)) {
  console.error(`--max-minutes must be a positive number, got ${JSON.stringify(opt('max-minutes'))}`);
  process.exit(1);
}
if (only !== undefined && !/^[a-z0-9-]+\/[a-z0-9-]+$/.test(only)) {
  console.error(`--only must look like category/slug, got ${JSON.stringify(only)}`);
  process.exit(1);
}

const PLATFORM_HOSTS = /(^|\.)(github\.com|gitlab\.com|codeberg\.org|sourceforge\.net|sr\.ht|launchpad\.net|gitlab\.gnome\.org|invent\.kde\.org|framagit\.org|0xacab\.org|addons\.mozilla\.org|chromewebstore\.google\.com|play\.google\.com|apps\.apple\.com|apps\.microsoft\.com|f-droid\.org|gumroad\.com)$/;
const UA = 'privacyratings-scanner (+https://github.com/privacyratings/privacyratings.com)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const now = () => new Date().toISOString();
const SCAN_DIR = path.join(ROOT, 'scans');
// Keys come from folder and file names. Anything else never becomes a path.
const KEY = /^[a-z0-9]+(-[a-z0-9]+)*--[a-z0-9]+(-[a-z0-9]+)*$/;

function scanFile(key) {
  if (!KEY.test(key)) throw new Error(`Invalid scan key ${JSON.stringify(key)}`);
  return path.join(SCAN_DIR, `${key}.json`);
}

function readScan(key) {
  const file = scanFile(key);
  if (!fs.existsSync(file)) return {};
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    return data && typeof data === 'object' && !Array.isArray(data) ? data : {};
  } catch (err) {
    console.warn(`  ${path.relative(ROOT, file)} is not valid JSON (${err.message}), starting it again`);
    return {};
  }
}

// Write to a temporary file and rename it, so an interrupted run never leaves broken JSON behind
// (the site build reads every file in scans/).
function writeAtomic(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(tmp, text);
  fs.renameSync(tmp, file);
}

function writeScan(key, data) {
  const sorted = Object.fromEntries(Object.entries(data).sort(([a], [b]) => a.localeCompare(b)));
  writeAtomic(scanFile(key), JSON.stringify(sorted, null, 2) + '\n');
}

// Report links from third-party APIs end up in pages: keep only https URLs.
const httpsUrl = (v) => (typeof v === 'string' && /^https:\/\/[^\s"'<>]+$/.test(v) ? v : undefined);

const FETCH_TIMEOUT = 120_000;
const MAX_JSON = 64 * 1024 * 1024; // Internet.nl results for 5000 domains are large.

async function getJson(url, init = {}, tries = 3) {
  let last;
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { ...init, signal: AbortSignal.timeout(FETCH_TIMEOUT), headers: { 'user-agent': UA, ...init.headers } });
      if (res.status === 429 || res.status === 503 || res.status === 529) {
        res.body?.cancel().catch(() => {});
        last = new Error(`HTTP ${res.status}`);
        await sleep(30_000 * (i + 1));
        continue;
      }

      const length = Number(res.headers.get('content-length'));
      if (length > MAX_JSON) throw new Error(`Response too large (${length} bytes)`);
      const body = await readLimited(res, MAX_JSON + 1);
      if (Buffer.byteLength(body) > MAX_JSON) throw new Error('Response too large');
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${body.slice(0, 200)}`);
      return body ? JSON.parse(body) : {};
    } catch (e) {
      last = e;
      await sleep(5000 * (i + 1));
    }
  }

  throw last;
}

// Run async work with limited concurrency.
async function pool(items, size, fn) {
  const queue = [...items];
  const workers = Array.from({ length: Math.min(size, queue.length) }, async () => {
    while (queue.length && !late()) await fn(queue.shift());
  });
  await Promise.all(workers);
}

// ---------- GitHub license ----------

async function github(entry) {
  const m = (entry.source || '').match(/^https:\/\/github\.com\/([A-Za-z0-9-]+)\/([A-Za-z0-9_.-]+?)(?:\.git)?(?:[/#?]|$)/);
  if (!m || m[2] === '.' || m[2] === '..') return null;
  const headers = { accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const repo = await getJson(`https://api.github.com/repos/${m[1]}/${m[2]}`, { headers }, 2);
  return {
    repo: repo.full_name,
    license: repo.license?.spdx_id && repo.license.spdx_id !== 'NOASSERTION' ? repo.license.spdx_id : null,
    archived: Boolean(repo.archived),
    checked_at: now()
  };
}

// ---------- Mozilla HTTP Observatory ----------

async function observatory(domain) {
  const r = await getJson(`https://observatory-api.mdn.mozilla.net/api/v2/scan?host=${encodeURIComponent(domain)}`, { method: 'POST' });
  if (r.error) return { error: String(r.error), tested_at: now() };
  return {
    grade: r.grade,
    score: r.score,
    tests_passed: r.tests_passed,
    tests_quantity: r.tests_quantity,
    report: httpsUrl(r.details_url) || `https://developer.mozilla.org/en-US/observatory/analyze?host=${encodeURIComponent(domain)}`,
    tested_at: r.scanned_at || now()
  };
}

// ---------- Qualys SSL Labs ----------

const SSL_ORDER = ['A+', 'A', 'A-', 'B', 'C', 'D', 'E', 'F', 'T', 'M'];

async function ssllabs(domain) {
  const email = process.env.SSLLABS_EMAIL;
  const base = email ? 'https://api.ssllabs.com/api/v4' : 'https://api.ssllabs.com/api/v3';
  const headers = email ? { email } : {};
  const q = (extra) =>
    `${base}/analyze?host=${encodeURIComponent(domain)}&publish=off&all=done&ignoreMismatch=on${extra}`;

  // Use a cached result up to one week old, otherwise start a new assessment.
  let r = await getJson(q('&fromCache=on&maxAge=168'), { headers });
  const started = Date.now();
  while (r.status !== 'READY' && r.status !== 'ERROR') {
    if (Date.now() - started > 20 * 60_000) return { error: 'Timed out', tested_at: now() };
    if (late()) return null;
    await sleep(r.status === 'IN_PROGRESS' ? 15_000 : 10_000);
    r = await getJson(q(''), { headers });
  }

  const report = `https://www.ssllabs.com/ssltest/analyze.html?d=${encodeURIComponent(domain)}&hideResults=on`;
  if (r.status === 'ERROR') return { error: r.statusMessage || 'Assessment failed', report, tested_at: now() };
  const grades = (r.endpoints || []).map((e) => e.grade).filter(Boolean);
  if (!grades.length) return { error: 'No endpoint could be graded', report, tested_at: now() };
  const worst = grades.sort((a, b) => SSL_ORDER.indexOf(b) - SSL_ORDER.indexOf(a))[0];
  return { grade: worst, endpoints: grades.length, report, tested_at: now() };
}

// How many assessments SSL Labs lets this client run at once (fewer than its maximum, to leave room).
async function ssllabsSlots() {
  const email = process.env.SSLLABS_EMAIL;
  try {
    const info = await getJson(email ? 'https://api.ssllabs.com/api/v4/info' : 'https://api.ssllabs.com/api/v3/info', { headers: email ? { email } : {} }, 1);
    const max = Number(info.maxAssessments) - Number(info.currentAssessments || 0);
    if (Number.isFinite(max) && max > 1) return Math.min(10, max - 1);
  } catch {}

  return 3;
}

// ---------- Internet.nl batch API ----------

// The terms of use allow 2 batch requests per week and 5000 domains per request. See
// scripts/internetnl-limits.js and SCANS.md. Batches take hours, so status is checked every
// 5 minutes, and a request still running when the wait ends is collected by a later run
// instead of being submitted again.
const INTERNETNL_LEDGER = path.join(SCAN_DIR, 'internetnl-requests.json');
const INTERNETNL_POLL = 5 * 60_000;
const INTERNETNL_WAIT = 3 * 60 * 60_000;
const INTERNETNL_EXPIRE = 14 * 24 * 60 * 60_000;

function internetnlClient() {
  const user = process.env.INTERNETNL_USERNAME;
  const pass = process.env.INTERNETNL_PASSWORD;
  if (!user || !pass) return null;
  const api = (process.env.INTERNETNL_API || 'https://batch.internet.nl/api/batch/v2').replace(/\/$/, '');
  const headers = {
    authorization: `Basic ${Buffer.from(`${user}:${pass}`).toString('base64')}`,
    'content-type': 'application/json'
  };

  return {
    // One try only: a retried POST could create a second batch request.
    async submit(kind, domains) {
      const created = await getJson(`${api}/requests`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ type: kind, domains, name: `privacyratings-${kind}` })
      }, 1);
      const id = created.request?.request_id;
      if (!id) throw new Error('Internet.nl did not return a request id');
      return id;
    },
    async status(id) {
      const s = await getJson(`${api}/requests/${encodeURIComponent(id)}`, { headers });
      return s.request?.status;
    },
    async results(id) {
      const results = await getJson(`${api}/requests/${encodeURIComponent(id)}/results`, { headers });
      const out = {};
      for (const [domain, d] of Object.entries(results.domains || {})) {
        if (typeof d.scoring?.percentage !== 'number') continue;
        out[domain] = { score: d.scoring.percentage, report: httpsUrl(d.report?.url), tested_at: now() };
      }

      return out;
    }
  };
}

// Submits at most one web and one mail request, within the weekly budget, then waits for them
// and for any request left running by an earlier run. `targets` lists every entry that has the
// test, whatever --limit says, so each request covers as many domains as the terms allow.
async function internetnlRun(client, targets) {
  let ledger;
  try {
    ledger = readLedger(INTERNETNL_LEDGER);
  } catch (err) {
    console.warn(`  internet.nl: skipped, cannot read ${path.relative(ROOT, INTERNETNL_LEDGER)} (${err.message}). Existing results are kept.`);
    return;
  }

  const save = () => writeLedger(INTERNETNL_LEDGER, ledger);
  const at = Date.now();

  for (const r of ledger.requests) {
    if (r.status === 'pending' && !(at - Date.parse(r.submitted_at) < INTERNETNL_EXPIRE)) {
      r.status = 'expired';
      console.warn(`  internet.nl ${r.kind}: request ${r.request_id} never finished, marked expired.`);
    }
  }

  const active = ledger.requests.filter((r) => r.status === 'pending' && r.request_id);
  // The kind requested least recently goes first, so web and mail take turns when only one
  // request is left in the week.
  const last = (kind) => ledger.requests.filter((r) => r.kind === kind).map((r) => r.submitted_at || '').sort().pop() || '';
  const kinds = ['web', 'mail'].sort((a, b) => last(a).localeCompare(last(b)));

  for (const kind of kinds) {
    if (active.some((r) => r.kind === kind)) {
      console.log(`  internet.nl ${kind}: request ${active.find((r) => r.kind === kind).request_id} from an earlier run is still running, no new request.`);
      continue;
    }

    const b = budget(ledger, Date.now());
    if (!b.left) {
      console.log(`  internet.nl ${kind}: skipped, ${b.used} of ${MAX_REQUESTS_PER_WEEK} batch requests already made in the last 7 days (next allowed after ${b.next}). Existing results are kept.`);
      continue;
    }

    const { batch, deferred } = pickDomains(targets[kind], MAX_DOMAINS);
    if (batch.length < MIN_DOMAINS) {
      console.log(`  internet.nl ${kind}: skipped, ${batch.length} domain(s) to test. The terms do not allow single-domain requests.`);
      continue;
    }

    if (deferred.length) {
      console.log(`  internet.nl ${kind}: ${deferred.length} domains deferred to a later request (limit ${MAX_DOMAINS} per request), starting with ${deferred.slice(0, 5).join(', ')}`);
    }

    // Record the attempt before sending it, so a crash or an unclear failure still counts.
    const r = { kind, submitted_at: new Date().toISOString(), domains: batch.length, request_id: null, status: 'submitting' };
    ledger.requests.push(r);
    save();
    try {
      r.request_id = await client.submit(kind, batch);
      r.status = 'pending';
      active.push(r);
      console.log(`  internet.nl ${kind}: request ${r.request_id} for ${batch.length} domains`);
    } catch (err) {
      r.status = 'failed';
      r.error = err.message;
      console.warn(`  internet.nl ${kind}: ${err.message}`);
    }

    save();
  }

  const started = Date.now();
  while (active.length) {
    for (const r of [...active]) {
      try {
        const status = await client.status(r.request_id);
        if (status === 'done') {
          const res = await client.results(r.request_id);
          applyInternetnl(r.kind, res, targets[r.kind]);
          r.status = 'done';
          r.finished_at = now();
          active.splice(active.indexOf(r), 1);
          console.log(`  internet.nl ${r.kind}: request ${r.request_id} done, ${Object.keys(res).length} scores`);
        } else if (status === 'error' || status === 'cancelled') {
          r.status = status;
          active.splice(active.indexOf(r), 1);
          console.warn(`  internet.nl ${r.kind}: request ${r.request_id} ${status}`);
        }
      } catch (err) {
        console.warn(`  internet.nl ${r.kind}: request ${r.request_id}: ${err.message}`);
      }
    }

    save();
    if (!active.length) break;
    if (Date.now() - started + INTERNETNL_POLL > INTERNETNL_WAIT || late()) {
      for (const r of active) console.log(`  internet.nl ${r.kind}: request ${r.request_id} still running, results are collected on a later run.`);
      break;
    }

    await sleep(INTERNETNL_POLL);
  }
}

// Save scores to every entry with a tested domain. Only the internetnl field changes, so
// scanned_at and the rotation of the other tests stay as they were.
function applyInternetnl(kind, res, targets) {
  for (const { domain, key } of targets) {
    if (!res[domain]) continue;
    const s = readScan(key);
    s.internetnl = { ...s.internetnl, [kind]: res[domain] };
    writeScan(key, s);
  }
}

// Keep the previous good result when a new test fails, and record the error.
function merge(prev, next) {
  if (next && next.error && prev && !prev.error && (prev.grade || typeof prev.score === 'number')) {
    return { ...prev, last_error: next.error, last_error_at: next.tested_at };
  }

  return next;
}

// ---------- main ----------

async function main() {
  const categories = loadCategories();
  const byId = Object.fromEntries(categories.map((c) => [c.id, c]));
  let entries = loadEntries(categories);

  if (only) {
    entries = entries.filter((e) => `${e.category}/${e.slug}` === only);
    if (!entries.length) {
      console.error(`No entry ${only}. Use category/slug, like vpns/mullvad-vpn.`);
      process.exit(1);
    }
  }

  // Domains and hosts come from contributor files. Each is checked once before anything
  // connects to it: it must be a public hostname that resolves only to public addresses.
  const hostChecks = new Map();
  const publicHost = (host) => {
    if (!hostChecks.has(host)) hostChecks.set(host, assertPublicHost(host).then(() => null, (err) => err.message));
    return hostChecks.get(host);
  };

  // Every entry with its saved results, before --limit, for the Internet.nl batch requests.
  const all = entries
    .filter((e) => KEY.test(scanKey(e)) || console.warn(`  ${e.file}: skipped, the file or folder name is not kebab-case`))
    .map((e) => ({ e, key: scanKey(e), prev: readScan(scanKey(e)) }));

  // Each test keeps its own rotation: --limit picks the entries whose result for that test is
  // oldest (or missing). One shared queue let tests that apply to few entries, like mail, wait
  // for weeks behind entries that only have a tracker test.
  const isHosted = (e) => e.domain && byId[e.category].type === 'service';
  const eligible = {
    github: (e) => (e.source || '').startsWith('https://github.com/'),
    observatory: (e) => isHosted(e) && byId[e.category].scans.includes('observatory'),
    ssllabs: (e) => isHosted(e) && byId[e.category].scans.includes('ssllabs'),
    mail: (e) => isHosted(e) && byId[e.category].scans.includes('mail') && Boolean(e.mail_domain),
    trackers: (e) => /^https:\/\//.test(e.website || '')
  };
  const lastRun = (prev, test) => {
    const r = prev[test];
    return String((r && (r.tested_at || r.checked_at)) || '');
  };
  const chosen = {};
  for (const test of Object.keys(eligible)) {
    if (!(tests.has(test) || (test === 'mail' && tests.has('mail-dns')))) continue;
    chosen[test] = new Set(
      all
        .filter(({ e }) => eligible[test](e))
        .sort((a, b) => lastRun(a.prev, test).localeCompare(lastRun(b.prev, test)) || a.key.localeCompare(b.key))
        .slice(0, limit)
        .map(({ key }) => key)
    );
  }
  entries = all.filter(({ key }) => Object.values(chosen).some((set) => set.has(key)));
  for (const [test, set] of Object.entries(chosen)) console.log(`  ${test}: ${set.size} entries, oldest results first`);

  console.log(`Testing ${entries.length} entries: ${[...tests].join(', ')}`);
  const results = new Map(entries.map(({ key, prev }) => [key, { ...prev }]));
  const scanned = (e) => e.domain && byId[e.category].type === 'service';
  const has = (e, t) => byId[e.category].scans.includes(t);

  // Which tests each entry still needs. An entry gets a new scanned_at (and moves to the back of
  // the rotation) only when all of them ran, so a run cut short starts with the rest next time.
  const pending = new Map(entries.map(({ key }) => [key, new Set()]));
  const plan = (list, test) => {
    for (const { key } of list) pending.get(key).add(test);
    return list;
  };

  const meta = (e, r) => {
    if (e.domain) r.domain = e.domain;
    if (e.mail_domain) r.mail_domain = e.mail_domain;
    return r;
  };

  // Save after every test, so results survive a timeout or a cancelled run.
  const byKey = new Map(entries.map((x) => [x.key, x]));
  const saved = new Set();
  const save = (key, test) => {
    const r = meta(byKey.get(key).e, results.get(key));
    const left = pending.get(key);
    if (test) left.delete(test);
    if (!left.size) {
      r.scanned_at = now();
      saved.add(key);
    }
    writeScan(key, r);
  };

  let stopping = false;
  for (const signal of ['SIGINT', 'SIGTERM']) {
    process.on(signal, () => {
      if (stopping) return;
      stopping = true;
      console.warn(`Received ${signal}, results so far are saved.`);
      process.exit(130);
    });
  }

  const picked = (test) => entries.filter(({ key }) => chosen[test]?.has(key));
  const githubList = plan(picked('github'), 'github');
  const observatoryList = plan(picked('observatory'), 'observatory');
  const ssllabsList = plan(picked('ssllabs'), 'ssllabs');
  const mailList = plan(picked('mail'), 'mail');
  const trackerList = plan(picked('trackers'), 'trackers');

  const runGithub = () =>
    pool(githubList, 4, async ({ e, key }) => {
      try {
        const g = await github(e);
        if (g) results.get(key).github = g;
      } catch (err) {
        console.warn(`  github ${e.slug}: ${err.message}`);
      }

      save(key, 'github');
    });

  // The Observatory API allows one scan per host per minute; every entry is a different host,
  // so a few run at once.
  const runObservatory = () =>
    pool(observatoryList, 4, async ({ e, key }) => {
      const bad = await publicHost(e.domain);
      if (bad) console.warn(`  observatory ${e.domain}: skipped, ${bad}`);
      else {
        try {
          results.get(key).observatory = merge(results.get(key).observatory, await observatory(e.domain));
          console.log(`  observatory ${e.domain}: ${results.get(key).observatory.grade || results.get(key).observatory.error}`);
        } catch (err) {
          console.warn(`  observatory ${e.domain}: ${err.message}`);
        }
      }

      save(key, 'observatory');
    });

  // SSL Labs is the slowest test (each new assessment takes minutes), so it runs as many
  // assessments at once as the API allows for this client.
  const runSsllabs = async () => {
    if (!ssllabsList.length) return;
    const slots = await ssllabsSlots();
    console.log(`  ssllabs: ${ssllabsList.length} domains, ${slots} at a time`);
    await pool(ssllabsList, slots, async ({ e, key }) => {
      const bad = await publicHost(e.domain);
      if (bad) console.warn(`  ssllabs ${e.domain}: skipped, ${bad}`);
      else {
        try {
          const r = await ssllabs(e.domain);
          if (!r) return; // Stopped at the time limit; the entry is retried first next run.
          results.get(key).ssllabs = merge(results.get(key).ssllabs, r);
          console.log(`  ssllabs ${e.domain}: ${results.get(key).ssllabs.grade || results.get(key).ssllabs.error}`);
        } catch (err) {
          console.warn(`  ssllabs ${e.domain}: ${err.message}`);
        }
      }

      save(key, 'ssllabs');
    });
  };

  // DNS, IMAP, POP3 and SMTP standards for email categories.
  const runMail = () =>
    pool(mailList, 3, async ({ e, key }) => {
      try {
        const hosts = { imap: e.imap_host, pop3: e.pop3_host, smtp: e.smtp_host };
        for (const h of [e.mail_domain, ...Object.values(hosts).filter((v) => typeof v === 'string')]) {
          const bad = await publicHost(h);
          if (bad) throw new Error(`skipped, ${bad}`);
        }
        const prev = results.get(key).mail || {};
        const m = await mailTests(e.mail_domain, hosts, { dnsOnly: !tests.has('mail') });
        // A DNS-only run keeps earlier protocol results.
        results.get(key).mail = { ...prev, ...m };
        console.log(`  mail ${e.mail_domain}: ${['imap', 'pop3', 'smtp'].map((p) => `${p} ${!m[p] ? 'skipped' : m[p].error ? 'error' : 'ok'}`).join(', ')}`);
      } catch (err) {
        console.warn(`  mail ${e.mail_domain}: ${err.message}`);
      }

      save(key, 'mail');
    });

  // Every entry with a website, apps included: the criterion covers the website too.
  const runTrackers = () =>
    pool(trackerList, 6, async ({ e, key }) => {
      const prev = results.get(key).trackers;
      try {
        // Code hosts and app stores are not the project's own website, so their trackers are not the project's.
        const host = new URL(e.website).hostname;
        const own = e.domain && (e.domain === host || e.domain.endsWith('.' + host) || host.endsWith('.' + e.domain));
        if (PLATFORM_HOSTS.test(host) && !own) {
          results.get(key).trackers = { url: e.website, skipped: 'The website is a code host or app store page, not a site run by the project.', tested_at: now() };
        } else {
          const t = await scanTrackers(e.website);
          results.get(key).trackers = {
            url: t.url,
            found: t.trackers.map(({ name, soft, analytics, seen }) => ({ name, host: seen, ...(soft ? { soft: true } : {}), ...(analytics ? { analytics: true } : {}) })),
            tested_at: now()
          };
          console.log(`  trackers ${e.website}: ${t.trackers.map((x) => x.name).join(', ') || 'none'}`);
        }
      } catch (err) {
        // Keep an earlier result when the site blocks or times out.
        results.get(key).trackers = prev && !prev.error ? { ...prev, last_error: err.message } : { error: err.message, tested_at: now() };
        console.warn(`  trackers ${e.website}: ${err.message}`);
      }

      save(key, 'trackers');
    });

  // Each test talks to a different service, so they run side by side.
  await Promise.all([runGithub(), runObservatory(), runSsllabs(), runMail(), runTrackers()]);

  // Entries whose only test is Internet.nl (run below, for all entries at once) still move on in the rotation.
  for (const { key } of entries) if (!pending.get(key).size && !saved.has(key)) save(key);

  const done = entries.filter(({ key }) => !pending.get(key).size).length;
  if (late()) console.log(`Reached the --max-minutes limit: ${entries.length - done} entries are left for the next run.`);
  console.log(`Saved ${done} complete results to scans/ (${entries.length} tested)`);

  // Runs after the other results are saved, because a batch takes hours.
  if (tests.has('internetnl')) {
    const client = internetnlClient();
    if (!client) {
      console.log('  internet.nl: skipped (no INTERNETNL_USERNAME or INTERNETNL_PASSWORD). Pages link to the public test instead.');
    } else if (only) {
      console.log('  internet.nl: skipped with --only. The terms do not allow single-domain batch requests.');
    } else {
      const targets = {};
      for (const kind of ['web', 'mail']) {
        const field = kind === 'web' ? 'domain' : 'mail_domain';
        targets[kind] = all
          .filter(({ e }) => scanned(e) && has(e, `internetnl-${kind}`) && e[field])
          .map(({ e, key, prev }) => ({ domain: e[field], key, tested_at: prev.internetnl?.[kind]?.tested_at }));
      }

      try {
        await internetnlRun(client, targets);
      } catch (err) {
        console.warn(`  internet.nl: ${err.message}`);
      }
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
