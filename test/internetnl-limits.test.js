'use strict';

const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { MAX_REQUESTS_PER_WEEK, MAX_DOMAINS, WEEK, readLedger, writeLedger, budget, pickDomains } = require('../scripts/internetnl-limits');

const at = Date.parse('2026-01-15T12:00:00Z');
const ago = (ms) => new Date(at - ms).toISOString();
const req = (kind, submitted_at) => ({ kind, submitted_at, domains: 10, request_id: 'x', status: 'done' });

test('the terms allow 2 requests per week and 5000 domains each', () => {
  assert.strictEqual(MAX_REQUESTS_PER_WEEK, 2);
  assert.strictEqual(MAX_DOMAINS, 5000);
});

test('requests in the last 7 days use up the budget', () => {
  assert.deepStrictEqual(budget({ requests: [] }, at).left, 2);
  assert.strictEqual(budget({ requests: [req('web', ago(60_000))] }, at).left, 1);
  const full = budget({ requests: [req('web', ago(3 * 86_400_000)), req('mail', ago(60_000))] }, at);
  assert.strictEqual(full.left, 0);
  assert.strictEqual(full.next, new Date(at - 3 * 86_400_000 + WEEK).toISOString());
});

test('requests older than 7 days no longer count', () => {
  const ledger = { requests: [req('web', ago(WEEK + 1000)), req('mail', ago(WEEK + 1000))] };
  assert.strictEqual(budget(ledger, at).left, 2);
  assert.strictEqual(budget({ requests: [req('web', ago(WEEK - 1000)), req('mail', ago(WEEK + 1000))] }, at).left, 1);
});

test('failed and unreadable entries still count', () => {
  const ledger = { requests: [{ ...req('web', ago(1000)), status: 'failed' }, req('mail', 'not a date')] };
  assert.strictEqual(budget(ledger, at).left, 0);
});

test('domains are capped, missing and oldest results first, ties by name', () => {
  const { batch, deferred } = pickDomains([
    { domain: 'c.example', tested_at: '2026-01-02T00:00:00Z' },
    { domain: 'b.example', tested_at: '2026-01-01T00:00:00Z' },
    { domain: 'z.example' },
    { domain: 'a.example' },
    { domain: 'b.example', tested_at: '2026-01-03T00:00:00Z' }
  ], 3);
  assert.deepStrictEqual(batch, ['a.example', 'z.example', 'b.example']);
  assert.deepStrictEqual(deferred, ['c.example']);
  const many = Array.from({ length: 5003 }, (_, i) => ({ domain: `d${i}.example` }));
  assert.strictEqual(pickDomains(many).batch.length, 5000);
  assert.strictEqual(pickDomains(many).deferred.length, 3);
});

test('the ledger round-trips and a broken file is an error', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'internetnl-'));
  const file = path.join(dir, 'internetnl-requests.json');
  assert.deepStrictEqual(readLedger(file), { requests: [] });
  writeLedger(file, { requests: [req('web', ago(0))] });
  assert.strictEqual(readLedger(file).requests.length, 1);
  fs.writeFileSync(file, '{');
  assert.throws(() => readLedger(file));
  fs.writeFileSync(file, '{}');
  assert.throws(() => readLedger(file));
  fs.rmSync(dir, { recursive: true });
});
