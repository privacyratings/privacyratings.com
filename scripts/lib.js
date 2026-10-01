'use strict';

// Shared loading and scoring logic. Used by build, validate and scan.

const fs = require('node:fs');
const path = require('node:path');
const YAML = require('yaml');

const ROOT = path.join(__dirname, '..');
const ANSWERS = ['yes', 'partial', 'no', 'unknown', 'n/a'];
const POINTS = { yes: 1, partial: 0.5, no: 0, unknown: 0 };

// Minimum share of criteria (by weight) that must be answered before a grade is shown.
const MIN_COVERAGE = 0.6;

function readYaml(file) {
  return YAML.parse(fs.readFileSync(file, 'utf8'));
}

// Split a Markdown file into YAML front matter and body.
function parseEntryFile(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`${rel(file)}: missing front matter`);
  let data;
  try {
    data = YAML.parse(match[1]) || {};
  } catch (err) {
    throw new Error(`${rel(file)}: invalid YAML: ${err.message}`);
  }

  return { data, body: match[2].trim() };
}

function rel(file) {
  return path.relative(ROOT, file);
}

// Ids, slugs and file names become URL paths and output folders, so they are limited to
// lowercase letters, digits and single hyphens: no "..", slashes or empty names.
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const isSlug = (s) => typeof s === 'string' && s.length <= 100 && SLUG.test(s);

// Platform ids allowed in a rating's `platforms` list, with the names shown on pages.
const PLATFORMS = {
  windows: 'Windows',
  macos: 'macOS',
  linux: 'Linux',
  android: 'Android',
  ios: 'iOS',
  web: 'Web',
  browser: 'Browser extension',
  firefox: 'Firefox',
  chromium: 'Chromium',
  docker: 'Docker',
  github: 'GitHub'
};
const platformName = (id) => (Object.prototype.hasOwnProperty.call(PLATFORMS, id) ? PLATFORMS[id] : String(id));

// Flatten grouped categories into one list. Each category keeps its group name.
function loadCategories() {
  const groups = readYaml(path.join(ROOT, 'categories.yml'));
  if (!Array.isArray(groups)) throw new Error('categories.yml must be a list of groups');
  const list = [];
  for (const g of groups) {
    if (!g || !Array.isArray(g.categories)) throw new Error(`categories.yml: group "${g && g.group}" needs a list of categories`);
    for (const c of g.categories) {
      // Checked here, before the id is used in file paths (criteria/<id>.yml, ratings/<id>/).
      if (!c || !isSlug(c.id)) throw new Error(`categories.yml: category id ${JSON.stringify(c && c.id)} must be kebab-case, like email-providers`);
      list.push({ scans: [], awesome: [], ...c, group: g.group });
    }
  }

  return list;
}

// Returns { common: [...], byCategory: { id: [...] } }
function loadCriteria(categories) {
  const common = readYaml(path.join(ROOT, 'criteria', '_common.yml'));
  const byCategory = {};
  for (const cat of categories) {
    const file = path.join(ROOT, 'criteria', `${cat.id}.yml`);
    byCategory[cat.id] = fs.existsSync(file) ? readYaml(file) || [] : [];
  }

  return { common, byCategory };
}

// Categories with `common: false` (for example security audit firms) use only their own criteria.
function criteriaFor(criteria, category) {
  return [...(category.common === false ? [] : criteria.common), ...(criteria.byCategory[category.id] || [])];
}

function loadScans() {
  const dir = path.join(ROOT, 'scans');
  // No prototype, and only <category>--<slug>.json files: a file named __proto__.json (or any
  // other odd name) must not attach scan results to every entry.
  const scans = Object.create(null);
  if (!fs.existsSync(dir)) return scans;
  for (const file of fs.readdirSync(dir)) {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*--[a-z0-9]+(-[a-z0-9]+)*\.json$/.test(file)) continue;
    scans[file.replace(/\.json$/, '')] = JSON.parse(
      fs.readFileSync(path.join(dir, file), 'utf8')
    );
  }

  return scans;
}

function loadEntries(categories) {
  const entries = [];
  for (const cat of categories) {
    const dir = path.join(ROOT, 'ratings', cat.id);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).sort()) {
      if (!file.endsWith('.md')) continue;
      // The file name becomes the page path, so a name like "...md" must never reach the build.
      if (!isSlug(file.replace(/\.md$/, ''))) throw new Error(`${rel(path.join(dir, file))}: file name must be kebab-case, like proton-mail.md`);
      const { data, body } = parseEntryFile(path.join(dir, file));
      if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error(`${rel(path.join(dir, file))}: front matter must be YAML fields`);
      entries.push({
        ...data,
        slug: file.replace(/\.md$/, ''),
        category: cat.id,
        file: rel(path.join(dir, file)),
        body
      });
    }
  }

  return entries;
}

// Scan results are keyed by "<category>--<slug>".
function scanKey(entry) {
  return `${entry.category}--${entry.slug}`;
}

// Normalize an answer written as a string or as { answer, evidence, note }.
function normalizeAnswer(value) {
  if (value === undefined || value === null) return { answer: 'unknown' };
  if (typeof value === 'boolean') return { answer: value ? 'yes' : 'no' };
  if (typeof value === 'string') return { answer: value };
  const answer =
    typeof value.answer === 'boolean'
      ? value.answer
        ? 'yes'
        : 'no'
      : value.answer || 'unknown';
  return { ...value, answer };
}

const SSL_ORDER = ['A+', 'A', 'A-', 'B', 'C', 'D', 'E', 'F', 'T', 'M'];

// Turn automated test results into criterion answers.
function autoAnswer(criterion, entry, scan) {
  if (criterion.auto === 'internetnl-mail' && !entry.mail_domain) {
    return { answer: 'n/a', note: 'No mail domain to test.' };
  }

  if (!scan) return { answer: 'pending', note: 'Not tested yet.' };

  if (criterion.auto === 'ssllabs') {
    const r = scan.ssllabs;
    if (!r || r.error || !r.grade) return { answer: 'pending', note: r?.error ? `Could not test: ${r.error}` : 'Not tested yet.' };
    const i = SSL_ORDER.indexOf(r.grade);
    const answer = i >= 0 && i <= 1 ? 'yes' : i >= 2 && i <= 3 ? 'partial' : 'no';
    return { answer, evidence: r.report, note: `Grade ${r.grade}` };
  }

  if (criterion.auto === 'observatory') {
    const r = scan.observatory;
    if (!r || r.error || !r.grade) return { answer: 'pending', note: r?.error ? `Could not test: ${r.error}` : 'Not tested yet.' };
    const answer = ['A+', 'A'].includes(r.grade)
      ? 'yes'
      : ['A-', 'B+', 'B'].includes(r.grade)
        ? 'partial'
        : 'no';
    return { answer, evidence: r.report, note: `Grade ${r.grade} (${r.score}/100+)` };
  }

  if (criterion.auto === 'internetnl-web' || criterion.auto === 'internetnl-mail') {
    const kind = criterion.auto === 'internetnl-web' ? 'web' : 'mail';
    const r = scan.internetnl?.[kind];
    if (kind === 'mail' && !entry.mail_domain) return { answer: 'n/a', note: 'No mail domain to test.' };
    if (!r || typeof r.score !== 'number') return { answer: 'pending', note: 'Not tested yet.' };
    const answer = r.score >= 90 ? 'yes' : r.score >= 70 ? 'partial' : 'no';
    return { answer, evidence: r.report, note: `Score ${r.score}%` };
  }

  if (['imap', 'pop3', 'smtp', 'mail-dns'].includes(criterion.auto)) {
    const m = scan.mail;
    if (!m) return { answer: 'pending', note: 'Not tested yet.' };
    if (criterion.auto === 'mail-dns') return mailDnsAnswer(m.dns);
    const r = m[criterion.auto];
    if (!r) return { answer: 'pending', note: 'Not tested yet.' };
    if (r.offered === false) return { answer: 'no', note: 'Not offered.' };
    if (r.error) return { answer: 'pending', note: `Could not test: ${r.error}` };
    return protocolAnswer(criterion.auto, r);
  }

  return { answer: 'unknown' };
}

function protocolAnswer(proto, r) {
  const where = `${r.host}:${r.port} (${r.tls === 'implicit' ? 'implicit TLS' : 'STARTTLS'})`;
  if (proto === 'imap') {
    const caps = r.capabilities || [];
    const rev = caps.includes('IMAP4REV2') ? 'IMAP4rev2' : caps.includes('IMAP4REV1') ? 'IMAP4rev1' : null;
    const ok = r.tls === 'implicit' && rev && caps.includes('IDLE');
    return { answer: ok ? 'yes' : 'partial', note: `${where}. ${rev || 'No IMAP version'} advertised${caps.includes('IDLE') ? ' with IDLE' : ', no IDLE before login'}.` };
  }

  if (proto === 'pop3') {
    const caps = r.capabilities || [];
    const ok = r.tls === 'implicit' && r.capa && caps.includes('UIDL');
    return { answer: ok ? 'yes' : 'partial', note: `${where}. ${r.capa ? `CAPA: ${caps.join(', ') || 'empty'}` : 'CAPA not supported'}.` };
  }

  const ext = r.extensions || [];
  const need = ['SMTPUTF8', '8BITMIME', 'PIPELINING', 'AUTH'];
  const missing = need.filter((x) => !ext.includes(x));
  const ok = r.tls === 'implicit' && !missing.length;
  return { answer: ok ? 'yes' : 'partial', note: `${where}.${missing.length ? ` Missing: ${missing.join(', ')}.` : ' SMTPUTF8, 8BITMIME, PIPELINING and AUTH advertised.'}` };
}

function mailDnsAnswer(d) {
  if (!d) return { answer: 'pending', note: 'Not tested yet.' };
  const dmarcOk = ['quarantine', 'reject'].includes(d.dmarc);
  const checks = {
    SPF: d.spf,
    [`DMARC ${d.dmarc || 'missing'}`]: dmarcOk,
    [`MTA-STS ${d.mta_sts || 'missing'}`]: d.mta_sts === 'enforce',
    'TLS-RPT': d.tls_rpt,
    DNSSEC: d.dnssec,
    [`DANE ${d.dane || 'none'}`]: d.dane === 'all'
  };
  const passed = Object.entries(checks).filter(([, v]) => v).map(([k]) => k);
  const failed = Object.entries(checks).filter(([, v]) => !v).map(([k]) => k);
  const answer = !failed.length ? 'yes' : dmarcOk && (d.mta_sts === 'enforce' || ['all', 'some'].includes(d.dane)) ? 'partial' : 'no';
  return { answer, note: `Passes: ${passed.join(', ') || 'none'}.${failed.length ? ` Missing: ${failed.join(', ')}.` : ''}` };
}

// Compute answers, score, coverage and grade for one entry.
function rate(entry, category, criteria, scans) {
  const list = criteriaFor(criteria, category);
  const scan = scans[scanKey(entry)];
  const answers = [];
  let earned = 0;
  let possible = 0;
  let answered = 0;

  for (const c of list) {
    let a;
    if (c.services && (category.type !== 'service' || !entry.domain)) {
      a = { answer: 'n/a', note: 'Only applies to hosted services with a website to test.' };
    } else if (c.auto) {
      a = autoAnswer(c, entry, scan);
    } else {
      a = normalizeAnswer(entry.criteria?.[c.id]);
    }

    // The tracker test overrides a manual answer when the home page loads third-party trackers.
    if (c.id === 'no_trackers') {
      const hard = trackersFound(scan);
      const light = analyticsFound(scan);
      if (hard.length && a.answer !== 'no') {
        a = { answer: 'no', note: `The home page loads ${joinNames(hard)} (automated test).`, auto: true };
      } else if (light.length && a.answer === 'yes') {
        a = { answer: 'partial', note: `No third-party trackers, but the home page loads ${joinNames(light)} (automated test).`, auto: true };
      }
    }

    answers.push({ criterion: c, ...a });
    // Not applicable, and automated tests that have not run yet, are left out of the score.
    if (a.answer === 'n/a' || a.answer === 'pending') continue;
    possible += c.weight;
    earned += c.weight * POINTS[a.answer];
    if (a.answer !== 'unknown') answered += c.weight;
  }

  const score = possible ? Math.round((earned / possible) * 100) : 0;
  const coverage = possible ? answered / possible : 0;
  const grade = coverage < MIN_COVERAGE ? null : gradeFor(score);
  return { answers, score, coverage: Math.round(coverage * 100), grade, scan };
}

// Names of third-party trackers (not privacy-friendly analytics or embeds) found by the tracker test.
function trackersFound(scan) {
  const t = scan && scan.trackers;
  if (!t || t.skipped || !Array.isArray(t.found)) return [];
  return [...new Set(t.found.filter((x) => !x.soft).map((x) => x.name))];
}

// Names of cookieless analytics services found by the tracker test.
function analyticsFound(scan) {
  const t = scan && scan.trackers;
  if (!t || t.skipped || !Array.isArray(t.found)) return [];
  return [...new Set(t.found.filter((x) => x.analytics).map((x) => x.name))];
}

function joinNames(list) {
  return list.length < 2 ? list.join('') : `${list.slice(0, -1).join(', ')} and ${list[list.length - 1]}`;
}

function gradeFor(score) {
  if (score >= 90) return 'A';
  if (score >= 75) return 'B';
  if (score >= 60) return 'C';
  if (score >= 40) return 'D';
  return 'F';
}

// Picks first, then graded entries by score, then entries that need data, then by name.
// `pick: 1` and `pick: 2` set the order of picks; `pick: true` counts as 1.
const pickRank = (e) => (e.pick === true ? 1 : Number(e.pick) || 0);

function sortEntries(a, b) {
  if (Boolean(a.pick) !== Boolean(b.pick)) return a.pick ? -1 : 1;
  if (a.pick && b.pick && pickRank(a) !== pickRank(b)) return pickRank(a) - pickRank(b);
  if (Boolean(a.rating.grade) !== Boolean(b.rating.grade)) return a.rating.grade ? -1 : 1;
  if (b.rating.score !== a.rating.score) return b.rating.score - a.rating.score;
  return a.name.localeCompare(b.name);
}

function loadJurisdictions() {
  return readYaml(path.join(ROOT, 'jurisdictions.yml'));
}

// Facts about a country code: alliance, EU/GDPR and CLOUD Act status.
function jurisdictionInfo(code, j) {
  const c = j.countries[code];
  if (!c) return null;
  const eyes = c.eyes ? j.alliances[c.eyes].name : null;
  return {
    code,
    name: c.name,
    inName: c.the ? `the ${c.name}` : c.name,
    eyes: c.eyes || null,
    eyesName: eyes,
    eu: Boolean(c.eu),
    eea: Boolean(c.eea),
    gdpr: Boolean(c.eu || c.eea || c.gdpr_like),
    cloudAct: c.cloud_act || null,
    notes: c.notes || [],
    // Accents are dropped before the slug is made ("Türkiye" becomes "turkiye", not "tu-rkiye").
    slug: String(c.name).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  };
}

function loadAll() {
  const categories = loadCategories();
  const criteria = loadCriteria(categories);
  const scans = loadScans();
  const entries = loadEntries(categories);
  const jurisdictions = loadJurisdictions();
  const byId = Object.fromEntries(categories.map((c) => [c.id, c]));
  for (const e of entries) {
    e.rating = rate(e, byId[e.category], criteria, scans);
    e.juris = e.jurisdiction ? jurisdictionInfo(e.jurisdiction, jurisdictions) : null;
  }

  return { categories, criteria, scans, entries, byId, jurisdictions };
}

module.exports = {
  ROOT,
  ANSWERS,
  SLUG,
  isSlug,
  PLATFORMS,
  platformName,
  MIN_COVERAGE,
  readYaml,
  parseEntryFile,
  loadCategories,
  loadCriteria,
  criteriaFor,
  loadEntries,
  loadScans,
  loadAll,
  loadJurisdictions,
  jurisdictionInfo,
  scanKey,
  trackersFound,
  normalizeAnswer,
  sortEntries,
  rel
};
