'use strict';

// Fair-use limits for the Internet.nl batch API, from its terms of use:
// https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md
//
//   - at most 2 batch requests per week (a website test and an email test are separate requests)
//   - at most 5000 domain names per batch request
//   - no requests that test a single domain
//
// Every request is recorded in scans/internetnl-requests.json, which the Scan workflow commits
// with the results, so the limits hold across runs. The ledger fails closed: an unreadable file
// or an unparsable date counts against the limit instead of allowing a new request.

const fs = require('node:fs');
const path = require('node:path');

const TERMS = 'https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md';
const MAX_REQUESTS_PER_WEEK = 2;
const MAX_DOMAINS = 5000;
const MIN_DOMAINS = 2;
const WEEK = 7 * 24 * 60 * 60_000;

function readLedger(file) {
  if (!fs.existsSync(file)) return { requests: [] };
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!Array.isArray(data.requests)) throw new Error(`${path.basename(file)} has no "requests" list`);
  return data;
}

function writeLedger(file, ledger) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const out = {
    terms: TERMS,
    max_requests_per_week: MAX_REQUESTS_PER_WEEK,
    max_domains_per_request: MAX_DOMAINS,
    requests: ledger.requests
  };
  // Atomic: a run killed mid-write must not leave a ledger that blocks every later request.
  const tmp = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(out, null, 2) + '\n');
  fs.renameSync(tmp, file);
}

// Requests submitted in the 7 days before `at` (milliseconds).
function inWindow(ledger, at) {
  return ledger.requests.filter((r) => !(Date.parse(r.submitted_at) <= at - WEEK));
}

// How many requests may still be made now, and when the next one frees up.
function budget(ledger, at) {
  const recent = inWindow(ledger, at);
  const left = Math.max(0, MAX_REQUESTS_PER_WEEK - recent.length);
  const times = recent.map((r) => Date.parse(r.submitted_at)).filter((t) => !Number.isNaN(t)).sort((a, b) => a - b);
  const next = left ? at : times.length ? times[0] + WEEK : null;
  return { used: recent.length, left, next: next === null ? null : new Date(next).toISOString() };
}

// Pick up to `max` domains, missing and oldest results first, then by name, so the choice is
// the same on every run. `candidates` is a list of { domain, tested_at }; duplicates keep the
// oldest date.
function pickDomains(candidates, max = MAX_DOMAINS) {
  const oldest = new Map();
  for (const { domain, tested_at } of candidates) {
    if (!domain) continue;
    const t = tested_at || '';
    if (!oldest.has(domain) || t < oldest.get(domain)) oldest.set(domain, t);
  }

  const sorted = [...oldest]
    .sort(([da, ta], [db, tb]) => ta.localeCompare(tb) || da.localeCompare(db))
    .map(([domain]) => domain);
  return { batch: sorted.slice(0, max), deferred: sorted.slice(max) };
}

module.exports = { TERMS, MAX_REQUESTS_PER_WEEK, MAX_DOMAINS, MIN_DOMAINS, WEEK, readLedger, writeLedger, inWindow, budget, pickDomains };
