'use strict';

// Untrusted input (ratings, translations, Markdown, scan results) must never become markup or
// script on the site. These tests render real pages with hostile values and check the HTML.

const test = require('node:test');
const assert = require('node:assert');
const crypto = require('node:crypto');
const templates = require('../scripts/templates');
const ctx = require('../scripts/context');
const i18n = require('../scripts/i18n');
const validate = require('../scripts/validate');
const { jurisdictionInfo, isSlug } = require('../scripts/lib');

const XSS = '"><img src=x onerror=alert(1)><script>alert(1)</script>\'';
// True when the HTML has a real (unescaped) script, event handler, injected image or unsafe URL.
function unsafe(html) {
  for (const [, tag, attrs] of html.matchAll(/<([a-zA-Z][\w-]*)([^>]*)>/g)) {
    if (/^script$/i.test(tag) && /^\s*$/.test(attrs) && /<script>alert/.test(html)) return `script: ${attrs}`;
    for (const [, name, raw = ''] of attrs.matchAll(/([^\s="'>\/]+)(?:\s*=\s*("[^"]*"|'[^']*'|[^\s"'>]+))?/g)) {
      const value = raw.replace(/^["']|["']$/g, '').replace(/&#(x?)([0-9a-f]+);?/gi, (m, x, n) => String.fromCharCode(parseInt(n, x ? 16 : 10))).replace(/&colon;/gi, ':');
      if (/^on/i.test(name)) return `<${tag} ${name}=${value}>`;
      if (/^(href|src|action|formaction|xlink:href)$/i.test(name) && /^[\s\u0000-\u001f]*(javascript|data|vbscript):/i.test(value)) return `<${tag} ${name}=${value}>`;
      if (/^img$/i.test(tag) && name === 'src' && value === 'x') return '<img src=x>';
    }
  }
  return false;
}

test('the hostile-markup detector works', () => {
  assert.ok(unsafe('<a href="javascript:alert(1)">x</a>'));
  assert.ok(unsafe('<span onclick="x">'));
  assert.ok(unsafe('<img src=x onerror=alert(1)>'));
  assert.strictEqual(unsafe('<span data-tip="&quot;&gt;&lt;img src=x onerror=alert(1)&gt;">&lt;script&gt;</span>'), false);
});

test('Markdown shows raw HTML as text and drops unsafe links', () => {
  const html = templates.md([
    '<script>alert(1)</script>',
    '',
    'Text <img src=x onerror=alert(1)> and <b onclick="x">bold</b>.',
    '',
    '[a](javascript:alert(1)) [b](JaVaScRiPt:alert(1)) [c](data:text/html,<script>alert(1)</script>) [d](vbscript:x) [e](&#106;avascript:alert(1)) <javascript:alert(1)>',
    '',
    '[f][ref] ![g](javascript:alert(1)) [ok](https://example.com) [rel](/criteria/) [doc](CONTRIBUTING.md) [mail](mailto:a@example.com)',
    '',
    '[ref]: javascript:alert(1)'
  ].join('\n'));
  assert.strictEqual(unsafe(html), false);
  assert.doesNotMatch(html, /<(script|img|b)[\s>]/);
  assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
  assert.match(html, /<a rel="noopener" href="https:\/\/example.com">ok<\/a>/);
  assert.match(html, /href="\/criteria\/"/);
  assert.match(html, /href="mailto:a@example.com"/);
  // Link text stays when the link is dropped.
  assert.match(html, /<p>a b c d e /);
});

test('rating notes mark external links as user-generated', () => {
  assert.match(templates.md('[x](https://example.com)', { ugc: true }), /rel="nofollow ugc noopener"/);
});

test('only http(s) URLs from data become links', () => {
  assert.strictEqual(templates.httpUrl('https://example.com/a'), 'https://example.com/a');
  for (const bad of ['javascript:alert(1)', ' javascript:alert(1)', 'data:text/html,x', '//evil.example', 'https://a.com/"onmouseover=x', null, 42]) assert.strictEqual(templates.httpUrl(bad), null, String(bad));
});

test('an entry page escapes hostile rating fields', () => {
  const e = ctx.entries.find((x) => x.pick) || ctx.entries[0];
  const saved = { ...e };
  const answer = e.rating.answers.find((a) => !a.criterion.auto);
  const savedAnswer = { ...answer };
  try {
    Object.assign(e, { name: XSS, description: XSS, pick_reason: XSS, disclosure: XSS, caveat: XSS, website: 'javascript:alert(1)', source: 'data:text/html,x', aliases: [XSS], platforms: [XSS], license: XSS, body: `${XSS}\n\n[x](javascript:alert(1))` });
    Object.assign(answer, { answer: 'yes', evidence: 'javascript:alert(1)', note: XSS });
    const html = templates.entryPage(e);
    assert.strictEqual(unsafe(html), false);
    // The JSON-LD block cannot be closed early by a </script> in a name.
    const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1];
    assert.doesNotMatch(ld, /</);
    assert.doesNotThrow(() => JSON.parse(ld));
  } finally {
    Object.assign(e, saved);
    Object.assign(answer, savedAnswer);
  }
});

test('hostile scan results do not become links or markup', () => {
  const e = ctx.entries.find((x) => x.rating.scan && x.domain);
  if (!e) return;
  const saved = e.rating.scan;
  try {
    e.rating.scan = {
      ...saved,
      ssllabs: { grade: 'A', report: 'javascript:alert(1)' },
      trackers: { url: 'javascript:alert(1)', found: [{ name: XSS, host: XSS }] },
      mail: { dns: { mx: [XSS] }, imap: { host: XSS, port: XSS, tls: 'implicit', capabilities: [XSS] } }
    };
    assert.strictEqual(unsafe(templates.entryPage(e)), false);
  } finally {
    e.rating.scan = saved;
  }
});

test('translations cannot add markup', () => {
  const cat = i18n.load('de');
  const keys = ['{n} is', 'Share', 'Our pick is {names}.', 'Grade', '{name} privacy rating'];
  const saved = keys.map((k) => cat[k]);
  i18n.setLocale('de');
  try {
    cat['{n} is'] = { one: `{n} ${XSS}`, other: `{n} ${XSS}` };
    for (const k of keys.slice(1)) cat[k] = `${XSS} ${k.includes('{') ? k.match(/\{\w+\}/)[0] : ''}`;
    const c = ctx.categories.find((x) => ctx.inCategory[x.id].some((e) => e.pick && e.juris && e.juris.eyes === 5)) || ctx.categories[0];
    assert.strictEqual(unsafe(templates.categoryPage(c)), false);
    assert.strictEqual(unsafe(templates.entryPage(ctx.inCategory[c.id][0])), false);
  } finally {
    keys.forEach((k, i) => (saved[i] === undefined ? delete cat[k] : (cat[k] = saved[i])));
    i18n.setLocale('en');
  }
});

test('the Content Security Policy allows exactly the inline scripts on each page', () => {
  for (const html of [templates.homePage(), templates.searchPage()]) {
    const csp = html.match(/http-equiv="Content-Security-Policy" content="([^"]+)"/)[1];
    assert.match(csp, /default-src 'self'/);
    assert.doesNotMatch(csp, /unsafe-inline|unsafe-eval|frame-ancestors/);
    for (const [, js] of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) {
      const hash = crypto.createHash('sha256').update(js).digest('base64');
      assert.ok(csp.includes(`'sha256-${hash}'`), 'inline script without a matching hash');
    }
    assert.doesNotMatch(html, /\sstyle="/, 'inline styles are blocked by style-src');
    assert.match(html, /<meta name="referrer" content="strict-origin-when-cross-origin">/);
  }
});

test('external links open safely', () => {
  const html = templates.homePage() + templates.entryPage(ctx.entries[0]);
  for (const [a] of html.matchAll(/<a [^>]*target="_blank"[^>]*>/g)) assert.match(a, /rel="[^"]*noopener/, a);
});

test('validation rejects unsafe URLs, HTML and placeholders', () => {
  assert.strictEqual(validate.urlProblem('https://example.com/privacy'), null);
  for (const bad of ['http://example.com', 'javascript:alert(1)', 'https://example.com/"><x', 'https://u:p@example.com', 'https://localhost/']) assert.ok(validate.urlProblem(bad), bad);
  assert.ok(validate.urlProblem('https://example.com/?ref=abc'));
  assert.deepStrictEqual(validate.markdownProblems('Fine [link](https://example.com) and `<code>`.'), []);
  assert.strictEqual(validate.markdownProblems('<script>x</script>\n\nText <b>x</b> [a](javascript:x) ![b](data:image/png,x)').length, 5);
  assert.deepStrictEqual(validate.translationProblems('Hello {name}', 'Hallo {name}'), []);
  assert.ok(validate.translationProblems('Hello {name}', 'Hallo').length);
  assert.ok(validate.translationProblems('Hello {name}', 'Hallo <b>{name}</b>').length);
  assert.ok(validate.translationProblems('{n} is', { one: '{n} ist' }).length, 'plural without other');
  assert.deepStrictEqual(validate.translationProblems('{n} is', { one: 'eins', other: '{n} sind' }), []);
  assert.ok(validate.textProblem('bad\u0007'));
  assert.ok(!isSlug('..') && !isSlug('a/b') && !isSlug('') && isSlug('proton-mail'));
});

test('country slugs drop accents', () => {
  const j = { countries: { TR: { name: 'Türkiye' }, CW: { name: 'Curaçao' } }, alliances: {} };
  assert.strictEqual(jurisdictionInfo('TR', j).slug, 'turkiye');
  assert.strictEqual(jurisdictionInfo('CW', j).slug, 'curacao');
});

test('placeholders only take the values passed in', () => {
  assert.strictEqual(i18n.t('{constructor} {name}', { name: 'x' }), '{constructor} x');
  assert.strictEqual(i18n.th('{toString} <b>', {}), '{toString} &lt;b&gt;');
});

test('Markdown image alt text and titles cannot break out of their attributes', () => {
  const html = templates.md('![a"onerror=alert(1)//](/x.png "t\\" onclick=\'x\'") ![b<script>](/y.png)');
  assert.strictEqual(unsafe(html), false);
  assert.match(html, /alt="a&quot;onerror=alert\(1\)\/\/"/);
  assert.doesNotMatch(html, /<script/);
});

test('Markdown link schemes are matched without regard to case', () => {
  assert.match(templates.md('[a](HTTPS://example.com/)'), /<a rel="noopener" href="https:\/\/example.com\/">/);
  assert.match(templates.md('[a](MailTo:a@example.com)'), /href="mailto:a@example.com"/);
  for (const bad of ['[a](<java\tscript:alert(1)>)', '[a](<\u0001javascript:alert(1)>)', '[a](javascript&colon;alert(1))', '[a](%6Aavascript:alert(1))', '[a](http:\\\\evil.com)']) {
    assert.doesNotMatch(templates.md(bad), /<a /, bad);
  }
});

test('Markdown links stay in the repository or on the page they name', () => {
  assert.match(templates.md('[a](../../etc/passwd)'), /href="https:\/\/github.com\/[^"]+\/blob\/[^/"]+\/etc\/passwd"/);
  // Backslashes are percent-encoded, so /\evil.com is not read as //evil.com.
  assert.match(templates.md('[a](/\\evil.com)'), /href="\/%5Cevil.com"/);
  // Images load from this site only; others become links.
  assert.match(templates.md('![x](https://example.com/i.png)'), /^<p><a rel="noopener" href="https:\/\/example.com\/i.png">x<\/a><\/p>/);
  assert.doesNotMatch(templates.md('![x](//evil.example/i.png) ![y](data:image/png,x)'), /<img|<a /);
});

test('many equal headings get unique ids quickly', () => {
  const start = Date.now();
  const html = templates.md('## a\n'.repeat(5000));
  assert.ok(Date.now() - start < 2000);
  assert.strictEqual(new Set([...html.matchAll(/id="([^"]+)"/g)].map((m) => m[1])).size, 5000);
  assert.match(templates.md('## a\n## a\n## a 2\n## a'), /id="a".*id="a-2".*id="a-2-2".*id="a-3"/s);
});

test('validation accepts internationalized domains and rejects images from other sites', () => {
  assert.strictEqual(validate.urlProblem('https://example.xn--p1ai/'), null);
  assert.strictEqual(validate.urlProblem('https://élément.example.com/'), null);
  assert.strictEqual(validate.urlProblem('https://example.com:8443/a?b=c'), null);
  assert.ok(validate.markdownProblems('![x](https://example.com/i.png)').length);
  assert.deepStrictEqual(validate.markdownProblems('![x](/screenshots/x.png)'), []);
});
