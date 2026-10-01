// Builds a standalone binary for the current platform with Node.js single executable
// applications: dist/privacyratings-<os>-<arch>[.exe]. Run on each platform in CI
// (see .github/workflows/cli-release.yml), or locally to try it.
import { execFileSync } from 'node:child_process';
import { copyFileSync, writeFileSync, chmodSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { assetName } from '../src/update.js';

const dist = (f) => fileURLToPath(new URL(`../dist/${f}`, import.meta.url));
// No shell: arguments are passed as they are, so paths with spaces work on Windows too.
const run = (cmd, args) => execFileSync(cmd, args, { stdio: 'inherit' });
const postject = join(dirname(createRequire(import.meta.url).resolve('postject/package.json')), 'dist', 'cli.js');

execFileSync(process.execPath, [fileURLToPath(new URL('bundle.mjs', import.meta.url))], { stdio: 'inherit' });
writeFileSync(dist('sea-config.json'), JSON.stringify({ main: dist('privacyratings.cjs'), output: dist('sea-prep.blob'), disableExperimentalSEAWarning: true, useSnapshot: false, useCodeCache: false }));
run(process.execPath, ['--experimental-sea-config', dist('sea-config.json')]);

const out = dist(assetName());
copyFileSync(process.execPath, out);
if (process.platform === 'darwin') run('codesign', ['--remove-signature', out]);
run(process.execPath, [postject, out, 'NODE_SEA_BLOB', dist('sea-prep.blob'), '--sentinel-fuse', 'NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2', ...(process.platform === 'darwin' ? ['--macho-segment-name', 'NODE_SEA'] : [])]);
if (process.platform === 'darwin') run('codesign', ['--sign', '-', out]);
if (process.platform !== 'win32') chmodSync(out, 0o755);
run(out, ['--version']);
console.log(`Built ${out}`);
