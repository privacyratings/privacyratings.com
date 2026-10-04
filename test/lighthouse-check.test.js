'use strict';

const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const SCRIPT = path.join(__dirname, '..', 'scripts', 'lighthouse-check.js');

// A minimal Lighthouse report: every category at 100 unless a score is given.
function report(url, { formFactor = 'mobile', performance = 1 } = {}) {
  return {
    finalDisplayedUrl: url,
    configSettings: { formFactor },
    categories: {
      performance: { id: 'performance', score: performance, auditRefs: [{ id: 'total-blocking-time', weight: 30 }] },
      accessibility: { id: 'accessibility', score: 1, auditRefs: [] }
    },
    audits: { 'total-blocking-time': { id: 'total-blocking-time', score: performance, displayValue: '180 ms' } }
  };
}

// Writes the reports to a new folder and runs the check on them.
function check(t, reports) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'lighthouse-check-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const files = reports.map((r, i) => {
    const file = path.join(dir, `${i + 1}.json`);
    fs.writeFileSync(file, typeof r === 'string' ? r : JSON.stringify(r));
    return file;
  });
  const res = spawnSync(process.execPath, [SCRIPT, ...files], { encoding: 'utf8' });
  return { code: res.status, out: res.stdout };
}

const HOME = 'http://localhost:8080/';

test('passes when every report scores 100', (t) => {
  const { code } = check(t, [report(HOME), report(HOME, { formFactor: 'desktop' })]);
  assert.strictEqual(code, 0);
});

test('fails a single report below 100 and names the audit', (t) => {
  const { code, out } = check(t, [report(HOME, { performance: 0.98 })]);
  assert.strictEqual(code, 1);
  assert.match(out, /performance: total-blocking-time 180 ms/);
});

test('passes a page when two of its three runs score 100', (t) => {
  const { code, out } = check(t, [report(HOME, { performance: 0.98 }), report(HOME), report(HOME)]);
  assert.strictEqual(code, 0);
  assert.match(out, /passed: 2 of 3 runs scored 100/);
});

test('fails a page when only one of its three runs scores 100', (t) => {
  const { code, out } = check(t, [report(HOME, { performance: 0.98 }), report(HOME), report(HOME, { performance: 0.99 })]);
  assert.strictEqual(code, 1);
  assert.match(out, /FAILED: 1 of 3 runs scored 100/);
});

test('judges mobile and desktop runs of a page separately', (t) => {
  // A clean desktop run does not make up for a mobile run below 100.
  const { code } = check(t, [report(HOME, { performance: 0.98 }), report(HOME, { formFactor: 'desktop' })]);
  assert.strictEqual(code, 1);
});

test('fails unreadable reports and runs that did not finish', (t) => {
  assert.strictEqual(check(t, ['not json']).code, 1);
  const crashed = { requestedUrl: HOME, configSettings: { formFactor: 'mobile' }, runtimeError: { code: 'NO_FCP', message: 'The page did not paint' } };
  const { code, out } = check(t, [crashed]);
  assert.strictEqual(code, 1);
  assert.match(out, /Lighthouse did not finish \(NO_FCP/);
});
