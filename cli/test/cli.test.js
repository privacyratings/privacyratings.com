import { test } from 'node:test';
import assert from 'node:assert/strict';
import { prepare, search, find } from '../src/search.js';
import { newer, assetName } from '../src/update.js';

const index = () =>
  prepare({
    categories: [
      { id: 'email-providers', n: 'Email providers', g: 'Email', count: 3 },
      { id: 'vpns', n: 'VPN providers', g: 'Networking', count: 2 }
    ],
    countries: { CH: 'Switzerland' },
    alternatives: { 'email-providers/gmail': ['email-providers/forward-email', 'email-providers/proton-mail'] },
    entries: [
      { c: 'email-providers', s: 'gmail', n: 'Gmail', g: 'F', sc: 30, p: 0, d: 'Free email from Google.', k: 'Google Mail' },
      { c: 'email-providers', s: 'forward-email', n: 'Forward Email', g: 'B', sc: 88, p: 1, d: 'Open-source email service.', o: 1 },
      { c: 'email-providers', s: 'proton-mail', n: 'Proton Mail', g: 'C', sc: 73, p: 0, j: 'CH', d: 'Encrypted email.' },
      { c: 'vpns', s: 'mullvad-vpn', n: 'Mullvad VPN', g: 'B', sc: 79, p: 1, d: 'Accounts need no email.', o: 1 },
      { c: 'vpns', s: 'nordvpn', n: 'NordVPN', g: 'D', sc: 45, p: 0, d: 'Popular VPN.' }
    ]
  });

test('name matches rank first and every word must match', () => {
  const r = search(index(), 'proton');
  assert.equal(r[0].s, 'proton-mail');
  assert.equal(search(index(), 'proton vpn').length, 0);
});

test('aliases and accents are matched', () => {
  assert.equal(search(index(), 'google mail')[0].s, 'gmail');
  assert.equal(search(index(), 'PRÓTON')[0].s, 'proton-mail');
});

test('an empty query lists picks first, then by grade', () => {
  const r = search(index(), '', { category: 'vpns' });
  assert.deepEqual(r.map((e) => e.s), ['mullvad-vpn', 'nordvpn']);
});

test('"alternatives" returns the rated alternatives list', () => {
  const r = search(index(), 'gmail alternatives');
  assert.deepEqual(r.map((e) => e.s), ['forward-email', 'proton-mail']);
  assert.equal(r.alternativesTo.s, 'gmail');
  assert.deepEqual(search(index(), 'alternatives to gmail', { picks: true }).map((e) => e.s), ['forward-email']);
});

test('"open source" keeps open-source entries only', () => {
  assert.deepEqual(search(index(), 'open source vpn').map((e) => e.s), ['mullvad-vpn']);
});

test('picks filter and limit', () => {
  assert.deepEqual(search(index(), '', { picks: true }).map((e) => e.s).sort(), ['forward-email', 'mullvad-vpn']);
  assert.equal(search(index(), 'email', { limit: 1 }).length, 1);
});

test('find accepts category/slug, slug or name', () => {
  assert.equal(find(index(), 'vpns/nordvpn').s, 'nordvpn');
  assert.equal(find(index(), 'proton-mail').s, 'proton-mail');
  assert.equal(find(index(), 'Forward Email').s, 'forward-email');
  assert.equal(find(index(), 'zzzz'), null);
});

test('version comparison', () => {
  assert.ok(newer('1.2.0', '1.1.9'));
  assert.ok(newer('v2.0.0', '1.9.9'));
  assert.ok(!newer('1.0.0', '1.0.0'));
  assert.ok(!newer('0.9.0', '1.0.0'));
});

test('release asset names', () => {
  assert.equal(assetName('linux', 'x64'), 'privacyratings-linux-x64');
  assert.equal(assetName('darwin', 'arm64'), 'privacyratings-darwin-arm64');
  assert.equal(assetName('win32', 'x64'), 'privacyratings-win-x64.exe');
});

test('the release workflow, installers and updater agree on asset names, and the version is in sync', async () => {
  const { readFile } = await import('node:fs/promises');
  const { existsSync } = await import('node:fs');
  const { VERSION } = await import('../src/version.js');
  const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
  assert.equal(VERSION, pkg.version, 'run "npm run version" (npm version does it for you)');

  const expected = [
    ['linux', 'x64'],
    ['linux', 'arm64'],
    ['darwin', 'x64'],
    ['darwin', 'arm64'],
    ['win32', 'x64'],
    ['win32', 'arm64']
  ].map(([p, a]) => assetName(p, a));
  const workflow = new URL('../../.github/workflows/cli-release.yml', import.meta.url);
  if (existsSync(workflow)) {
    const yml = await readFile(workflow, 'utf8');
    assert.deepEqual([...yml.matchAll(/^\s+asset: (\S+)$/gm)].map((m) => m[1]).sort(), [...expected].sort());
    assert.match(yml, /-ne 6 \]/);
    assert.match(yml, /sha256sum privacyratings-\* > SHA256SUMS/);
  }
  const sh = await readFile(new URL('../install.sh', import.meta.url), 'utf8');
  assert.match(sh, /ASSET="\$NAME-\$OS-\$ARCH"/);
  const ps = await readFile(new URL('../install.ps1', import.meta.url), 'utf8');
  assert.match(ps, /\$asset = "privacyratings-win-\$arch\.exe"/);
});
