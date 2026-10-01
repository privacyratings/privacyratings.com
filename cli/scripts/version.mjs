// Runs during `npm version` (and so during `np`): copies the package version into
// src/version.js, which is bundled into the standalone binaries.
import { readFileSync, writeFileSync } from 'node:fs';

const { version } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
if (!/^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/.test(version)) throw new Error(`Unexpected version ${version}`);
writeFileSync(new URL('../src/version.js', import.meta.url), `// Written by scripts/version.mjs when the version changes. Do not edit.\nexport const VERSION = '${version}';\n`);
console.log(`src/version.js set to ${version}`);
