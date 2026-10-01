'use strict';

// Fails when any Lighthouse category on any tested page scores below 100.
// Usage: node scripts/lighthouse-check.js reports/*.json

const fs = require('node:fs');

let failed = false;
for (const file of process.argv.slice(2)) {
  let report;
  try {
    report = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (err) {
    console.log(`${file}: not a readable report (${err.message})`);
    failed = true;
    continue;
  }
  // A run that failed to load the page has no categories, only a runtimeError.
  if (!report || !report.categories) {
    console.log(`${file}: Lighthouse did not finish${report?.runtimeError ? ` (${report.runtimeError.code}: ${report.runtimeError.message})` : ''}`);
    failed = true;
    continue;
  }
  const scores = Object.values(report.categories).map((c) => [c.id, Math.round(c.score * 100)]);
  console.log(`${report.finalDisplayedUrl}  ${scores.map(([id, s]) => `${id}=${s}`).join(' ')}`);
  for (const cat of Object.values(report.categories)) {
    if (cat.score === 1) continue;
    failed = true;
    for (const ref of cat.auditRefs) {
      const audit = report.audits[ref.id];
      if (ref.weight > 0 && audit.score !== null && audit.score < 1) console.log(`  ${cat.id}: ${audit.id} ${audit.displayValue || ''}`);
      // An audit that crashed has no score, which counts as 0 for its category.
      else if (ref.weight > 0 && audit.scoreDisplayMode === 'error') console.log(`  ${cat.id}: ${audit.id} did not run (${audit.errorMessage || 'error'})`);
    }
  }
}

process.exit(failed ? 1 : 0);
