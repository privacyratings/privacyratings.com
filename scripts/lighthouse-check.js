'use strict';

// Fails when a tested page does not score 100 in every Lighthouse category.
// Usage: node scripts/lighthouse-check.js reports/*.json
//
// Scores vary a little from run to run, so the workflow runs a page twice more when its first
// report is below 100. Reports for the same page on the same device are judged together: the
// page passes when more than half of its runs score 100 in every category. A page with one
// report must score 100 in it.

const fs = require('node:fs');

function read(file) {
  try {
    return { report: JSON.parse(fs.readFileSync(file, 'utf8')) };
  } catch (err) {
    return { error: `not a readable report (${err.message})` };
  }
}

// Whether one report scores 100 everywhere, and the lines to print for it.
function judge(file, report) {
  // A run that failed to load the page has no categories, only a runtimeError.
  if (!report || !report.categories) {
    return { clean: false, lines: [`${file}: Lighthouse did not finish${report?.runtimeError ? ` (${report.runtimeError.code}: ${report.runtimeError.message})` : ''}`] };
  }
  const scores = Object.values(report.categories).map((c) => [c.id, Math.round(c.score * 100)]);
  const lines = [`${report.finalDisplayedUrl}  ${scores.map(([id, s]) => `${id}=${s}`).join(' ')}`];
  let clean = true;
  for (const cat of Object.values(report.categories)) {
    if (cat.score === 1) continue;
    clean = false;
    for (const ref of cat.auditRefs) {
      const audit = report.audits[ref.id];
      if (ref.weight > 0 && audit.score !== null && audit.score < 1) lines.push(`  ${cat.id}: ${audit.id} ${audit.displayValue || ''}`);
      // An audit that crashed has no score, which counts as 0 for its category.
      else if (ref.weight > 0 && audit.scoreDisplayMode === 'error') lines.push(`  ${cat.id}: ${audit.id} did not run (${audit.errorMessage || 'error'})`);
    }
  }
  return { clean, lines };
}

// Reports for the same page on the same device belong together. A report without a URL stands alone.
function pageKey(file, report) {
  const url = report?.finalDisplayedUrl || report?.requestedUrl;
  if (!url) return `file:${file}`;
  return `${url} (${report.configSettings?.formFactor || 'mobile'})`;
}

const pages = new Map();
for (const file of process.argv.slice(2)) {
  const { report, error } = read(file);
  const run = error ? { clean: false, lines: [`${file}: ${error}`] } : judge(file, report);
  const key = error ? `file:${file}` : pageKey(file, report);
  if (!pages.has(key)) pages.set(key, []);
  pages.get(key).push(run);
}

let failed = false;
for (const [key, runs] of pages) {
  for (const run of runs) for (const line of run.lines) console.log(line);
  const clean = runs.filter((r) => r.clean).length;
  const passed = clean * 2 > runs.length;
  if (!passed) failed = true;
  if (runs.length > 1) console.log(`  ${passed ? 'passed' : 'FAILED'}: ${clean} of ${runs.length} runs scored 100 for ${key}`);
}

process.exit(failed ? 1 : 0);
