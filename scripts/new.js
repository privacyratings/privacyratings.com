'use strict';

// Creates a new rating file with every criterion listed as "unknown".
//
// Usage: npm run new -- <category> "<Name>" <https://website>
// Example: npm run new -- vpns "Example VPN" https://example.com

const fs = require('node:fs');
const path = require('node:path');
const { ROOT, loadCategories, loadCriteria, criteriaFor } = require('./lib');

const [categoryId, name, website] = process.argv.slice(2);
const categories = loadCategories();
const cat = categories.find((c) => c.id === categoryId);

if (!cat || !name || !website) {
  console.error('Usage: npm run new -- <category> "<Name>" <https://website>');
  console.error(`Categories: ${categories.map((c) => c.id).join(', ')}`);
  process.exit(1);
}

let url;
try {
  url = new URL(website);
} catch {}
if (!url || url.protocol !== 'https:' || /\s/.test(website)) {
  console.error(`The website must be an https:// URL, got ${JSON.stringify(website)}`);
  process.exit(1);
}

const slug = name.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
if (!slug) {
  console.error(`Cannot make a file name from ${JSON.stringify(name)}. Use a name with Latin letters or digits.`);
  process.exit(1);
}
const file = path.join(ROOT, 'ratings', cat.id, `${slug}.md`);
if (fs.existsSync(file)) {
  console.error(`${path.relative(ROOT, file)} already exists`);
  process.exit(1);
}

const criteria = criteriaFor(loadCriteria(categories), cat).filter((c) => !c.auto);
const host = url.hostname;
const lines = [
  '---',
  `name: ${JSON.stringify(name)}`,
  'description: >-',
  '  One or two plain sentences about what it is.',
  `website: ${JSON.stringify(website)}`,
  '# source: https://github.com/owner/repo',
  '# platforms: [windows, macos, linux, android, ios, web]',
  '# jurisdiction: US   # country code from jurisdictions.yml, where the company is based'
];
if (cat.type === 'service') lines.push(`domain: ${host}`);
if (cat.scans.includes('internetnl-mail')) lines.push(`mail_domain: ${host.replace(/^(www|mail|app)\./, '')}`);
lines.push('criteria:');
for (const c of criteria) {
  lines.push(`  # ${c.question}`);
  lines.push(`  ${c.id}:`);
  lines.push('    answer: unknown');
  lines.push('    # evidence: https://');
  lines.push('    # note: ');
}

lines.push('---', '');
fs.mkdirSync(path.dirname(file), { recursive: true });
fs.writeFileSync(file, lines.join('\n'));
console.log(`Created ${path.relative(ROOT, file)}. Fill in the answers with evidence, then run npm test.`);
