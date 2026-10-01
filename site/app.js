// Progressive enhancement only. Every page works without JavaScript.
(function () {
  'use strict';

  var root = document.documentElement;

  // Interface text in the page's language. /i18n/<lang>.js sets window.PR_T on translated pages.
  var DICT = window.PR_T || {};
  function T(s, vars) {
    var r = DICT[s] || s;
    if (vars) for (var k in vars) r = r.split('{' + k + '}').join(vars[k]);
    return r;
  }
  var LANG = document.body.getAttribute('data-lang') || '';
  function escHtml(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  // Only same-site paths and http(s) links from the JSON data become links. "//x" and "/\x" are
  // other sites to a browser, so they are not same-site paths.
  function safeHref(u) { u = String(u == null ? '' : u).trim(); return /^\/(?![\/\\])/.test(u) || /^https?:\/\//i.test(u) ? u : null; }

  // ---------- language menu ----------
  // Built from the page's hreflang links, so it always offers the same page in each language.
  var NAMES = { en: 'English', ar: 'العربية', cs: 'Čeština', da: 'Dansk', de: 'Deutsch', es: 'Español', fi: 'Suomi', fr: 'Français', he: 'עברית', hu: 'Magyar', id: 'Bahasa Indonesia', it: 'Italiano', ja: '日本語', ko: '한국어', nl: 'Nederlands', no: 'Norsk', pl: 'Polski', pt: 'Português', ru: 'Русский', sv: 'Svenska', th: 'ไทย', tr: 'Türkçe', uk: 'Українська', vi: 'Tiếng Việt', zh: '中文' };
  var langList = document.querySelector('[data-lang-list]');
  if (langList) {
    var alts = {};
    Array.prototype.forEach.call(document.querySelectorAll('link[rel=alternate][hreflang]'), function (l) { alts[l.hreflang === 'nb' ? 'no' : l.hreflang] = new URL(l.href).pathname.replace(/^\/+/, '/'); });
    var cur = langList.getAttribute('data-current');
    Object.keys(NAMES).forEach(function (code) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.textContent = NAMES[code];
      a.lang = code === 'no' ? 'nb' : code;
      a.hreflang = a.lang;
      a.href = alts[code] || (document.body.getAttribute('data-base') || '') + (code === 'en' ? '' : '/' + code) + '/';
      if (code === cur) a.setAttribute('aria-current', 'true');
      a.addEventListener('click', function () { try { localStorage.setItem('lang', code); } catch (e) {} });
      li.appendChild(a);
      langList.appendChild(li);
    });
  }

  // ---------- theme: system, light or dark ----------

  var toggle = document.querySelector('[data-theme-toggle]');
  var MODES = ['system', 'light', 'dark'];
  var LABELS = { system: T('follows your system'), light: T('light'), dark: T('dark') };

  function storedMode() {
    try {
      var t = localStorage.getItem('theme');
      return t === 'light' || t === 'dark' ? t : 'system';
    } catch (e) {
      return 'system';
    }
  }

  function applyMode(mode) {
    if (mode === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', mode);
    try {
      if (mode === 'system') localStorage.removeItem('theme');
      else localStorage.setItem('theme', mode);
    } catch (e) {}
    if (toggle) {
      toggle.setAttribute('data-mode', mode);
      toggle.setAttribute('aria-label', T('Color theme: {mode}. Change theme', { mode: LABELS[mode] }));
      toggle.setAttribute('data-tip', T('Theme: {mode}. Click to change.', { mode: LABELS[mode] }));
    }
  }

  if (toggle) {
    applyMode(storedMode());
    toggle.addEventListener('click', function () {
      var next = MODES[(MODES.indexOf(toggle.getAttribute('data-mode')) + 1) % MODES.length];
      applyMode(next);
      showTip(toggle);
    });
  }

  // ---------- tooltips for any element with data-tip ----------

  // The tooltip element only exists in the page while it is visible.
  var tip = document.createElement('div');
  tip.className = 'tooltip';
  tip.setAttribute('role', 'tooltip');
  tip.id = 'tooltip';
  var current = null;

  function showTip(el) {
    var text = el.getAttribute('data-tip');
    if (!text) return;
    current = el;
    tip.textContent = text;
    if (!tip.parentNode) document.body.appendChild(tip);
    tip.classList.add('show');
    var r = el.getBoundingClientRect();
    var t = tip.getBoundingClientRect();
    var left = Math.min(Math.max(8, r.left + r.width / 2 - t.width / 2), window.innerWidth - t.width - 8);
    var top = r.top - t.height - 8;
    if (top < 8) top = r.bottom + 8;
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
    el.setAttribute('aria-describedby', 'tooltip');
  }

  function hideTip() {
    if (current) current.removeAttribute('aria-describedby');
    current = null;
    tip.classList.remove('show');
    if (tip.parentNode) tip.parentNode.removeChild(tip);
  }

  function target(e) {
    return e.target && e.target.closest ? e.target.closest('[data-tip]') : null;
  }

  document.addEventListener('mouseover', function (e) {
    var el = target(e);
    if (el && el !== current) showTip(el);
    else if (!el && current) hideTip();
  });
  document.addEventListener('focusin', function (e) {
    var el = target(e);
    if (el) showTip(el);
  });
  document.addEventListener('focusout', hideTip);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') hideTip();
  });
  window.addEventListener('scroll', hideTip, { passive: true });
  // Touch: tap a badge to show its tooltip, tap elsewhere to hide it.
  document.addEventListener('touchstart', function (e) {
    var el = target(e);
    if (el && el.tagName !== 'A' && el.tagName !== 'BUTTON') showTip(el);
    else hideTip();
  }, { passive: true });

  // ---------- header fit ----------
  // If the header links do not fit (long translations, large text settings), use the menu instead.
  var top = document.querySelector('.top');
  var topInner = top && top.querySelector('.top-inner');
  if (topInner) {
    var fit = function () {
      top.classList.remove('tight');
      if (topInner.scrollWidth > topInner.clientWidth + 1) top.classList.add('tight');
    };
    fit();
    window.addEventListener('resize', fit, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  }

  // ---------- close the mobile menu after choosing a link ----------

  var menu = document.querySelector('.menu');
  if (menu) {
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) menu.removeAttribute('open');
    });
    document.addEventListener('click', function (e) {
      if (menu.hasAttribute('open') && !menu.contains(e.target)) menu.removeAttribute('open');
    });
    // Esc closes the menu and returns focus to its button; tabbing out of it closes it too.
    menu.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.hasAttribute('open')) {
        menu.removeAttribute('open');
        menu.querySelector('summary').focus();
      }
    });
    menu.addEventListener('focusout', function (e) {
      if (menu.hasAttribute('open') && e.relatedTarget && !menu.contains(e.relatedTarget)) menu.removeAttribute('open');
    });
  }

  // ---------- popovers (share, language, embed) ----------
  // Native popovers do not move focus. These are dialogs, so focus goes to the current language,
  // the first option or the first field; closing returns focus to the button (browser behaviour).
  Array.prototype.forEach.call(document.querySelectorAll('[popover][role="dialog"]'), function (pop) {
    pop.addEventListener('toggle', function (e) {
      if (e.newState !== 'open') return;
      hideTip();
      var visible = function (n) { return n && n.offsetParent !== null; };
      var f = pop.querySelector('[aria-current], input:checked');
      if (!visible(f)) f = Array.prototype.filter.call(pop.querySelectorAll('a[href], button:not([popovertargetaction="hide"]), input, textarea'), visible)[0];
      if (!f) f = pop.querySelector('button');
      if (f) f.focus();
    });
  });

  // ---------- filter rows on category pages ----------

  var filter = document.querySelector('[data-filter]');
  var count = document.querySelector('[data-count]');
  if (filter) {
    filter.addEventListener('input', function () {
      var q = filter.value.trim().toLowerCase();
      var shown = 0;
      document.querySelectorAll('tbody tr[data-name]').forEach(function (row) {
        var match = q === '' || row.getAttribute('data-name').indexOf(q) !== -1;
        row.hidden = !match;
        if (match) shown++;
      });
      if (count) count.textContent = T('{n} shown', { n: shown });
    });
  }

  var base = document.body.getAttribute('data-base') || '';

  // ---------- launch video ----------
  // The Watch link opens the video popover where popovers are supported, and the MP4 itself
  // everywhere else. Closing the popover pauses the video.
  var videoPop = document.querySelector('[data-video-pop]');
  var videoOpen = document.querySelector('[data-video-open]');
  if (videoPop && videoOpen && typeof videoPop.showPopover === 'function') {
    var video = videoPop.querySelector('[data-video]');
    videoOpen.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      // The poster loads only once someone opens the video, not on every homepage visit.
      if (video && !video.poster && video.getAttribute('data-poster')) video.poster = video.getAttribute('data-poster');
      videoPop.showPopover();
      if (video) video.focus();
    });
    videoPop.addEventListener('toggle', function (e) {
      if (e.newState === 'closed' && video) video.pause();
      if (e.newState === 'closed') videoOpen.focus();
    });
  }

  // ---------- sharing ----------

  var sharePop = document.querySelector('[data-share-pop]');
  if (sharePop) {
    var shareData = { title: document.title, text: sharePop.getAttribute('data-text'), url: sharePop.getAttribute('data-url') };
    var canNative = typeof navigator.share === 'function' && (!navigator.canShare || navigator.canShare(shareData));
    var touch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    var status = sharePop.querySelector('[data-share-status]');
    var statusText = status.textContent;
    var nativeBtn = sharePop.querySelector('[data-share-native]');
    var nativeShare = function () {
      navigator.share(shareData).catch(function () {});
    };

    if (canNative && nativeBtn) {
      nativeBtn.hidden = false;
      nativeBtn.addEventListener('click', nativeShare);
    }

    // On phones and tablets, share buttons open the system share sheet directly.
    document.querySelectorAll('[data-share]').forEach(function (b) {
      b.addEventListener('click', function (e) {
        if (canNative && touch) {
          e.preventDefault();
          nativeShare();
        }
      });
    });

    var urlField = sharePop.querySelector('[data-share-url]');
    urlField.addEventListener('focus', function () { urlField.select(); });
    sharePop.querySelector('[data-share-copy]').addEventListener('click', function () {
      var done = function () { status.textContent = T('Link copied.'); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(shareData.url).then(done, function () { urlField.select(); document.execCommand('copy'); done(); });
      else { urlField.select(); document.execCommand('copy'); done(); }
    });

    // Email and Messages links need an app registered for mailto: or sms:. Without one the
    // browser silently does nothing, so if the page keeps focus, copy the text and link instead.
    Array.prototype.forEach.call(sharePop.querySelectorAll('a.share-to[href^="mailto:"], a.share-to[href^="sms:"]'), function (a) {
      a.addEventListener('click', function () {
        var left = false;
        var away = function () { left = true; };
        window.addEventListener('blur', away, { once: true });
        document.addEventListener('visibilitychange', away, { once: true });
        setTimeout(function () {
          window.removeEventListener('blur', away);
          document.removeEventListener('visibilitychange', away);
          if (left || document.visibilityState !== 'visible') return;
          var text = shareData.text + ' ' + shareData.url;
          var done = function () { status.textContent = T('No app opened, so the text and link were copied.'); };
          if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () {});
        }, 1500);
      });
    });

    // Mastodon has no central share page, so ask for the server once and remember it.
    var mLink = sharePop.querySelector('[data-mastodon]');
    var mForm = sharePop.querySelector('[data-mastodon-form]');
    if (mLink && mForm) {
      var mInput = mForm.querySelector('input');
      try { mInput.value = localStorage.getItem('mastodon') || ''; } catch (e2) {}
      mLink.addEventListener('click', function (e) {
        e.preventDefault();
        mForm.hidden = false;
        mInput.focus();
      });
      mForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var host = (mInput.value || 'mastodon.social').trim().toLowerCase().replace(/^https?:\/\//, '').replace(/[/?#].*$/, '');
        if (!/^([a-z0-9]([a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/.test(host)) { status.textContent = T('Enter a server name such as mastodon.social.'); return; }
        status.textContent = statusText;
        try { localStorage.setItem('mastodon', host); } catch (e3) {}
        window.open('https://' + host + '/share?text=' + encodeURIComponent(shareData.text + ' ' + shareData.url), '_blank', 'noopener');
      });
    }
  }

  // ---------- embed badge popovers ----------

  document.querySelectorAll('[data-embed]').forEach(function (pop) {
    var styles = JSON.parse(pop.getAttribute('data-styles'));
    var page = pop.getAttribute('data-page');
    var alt = pop.getAttribute('data-alt');
    var json = pop.getAttribute('data-json');
    var code = pop.querySelector('[data-code]');
    var img = pop.querySelector('[data-preview] img');
    var copied = pop.querySelector('[data-copied]');
    var escAttr = function (v) { return String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); };

    function value(kind) {
      var r = pop.querySelector('input[name$="-' + kind + '"]:checked');
      return r ? r.value : null;
    }

    function update() {
      var s = styles.filter(function (x) { return x.id === value('style'); })[0] || styles[0];
      var fmt = value('fmt');
      var shields = 'https://img.shields.io/endpoint?url=' + encodeURIComponent(json);
      var out = {
        html: '<a href="' + escAttr(page) + '"><img src="' + escAttr(s.img) + '" alt="' + escAttr(alt) + '" width="' + s.w + '" height="' + s.h + '"></a>',
        md: '[![' + alt + '](' + s.img + ')](' + page + ')',
        rst: '.. image:: ' + s.img + '\n   :alt: ' + alt + '\n   :target: ' + page,
        url: s.img,
        shields: '[![' + alt + '](' + shields + ')](' + page + ')'
      }[fmt];
      code.value = out;
      // The preview uses the same-origin path of the chosen image.
      img.src = s.img.replace(/^https?:\/\/[^/]+/, base);
      img.width = s.w;
      img.height = s.h;
      if (copied) copied.textContent = '';
      // Shields.io styles only apply to the small badge, so the style choice is ignored there.
      pop.classList.toggle('embed-shields', fmt === 'shields');
    }

    pop.addEventListener('change', update);
    code.addEventListener('focus', function () { code.select(); });
    var btn = pop.querySelector('[data-copy]');
    if (btn) {
      btn.addEventListener('click', function () {
        var done = function () { if (copied) copied.textContent = T('Copied'); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code.value).then(done, function () { code.select(); document.execCommand('copy'); done(); });
        else { code.select(); document.execCommand('copy'); done(); }
      });
    }
  });

  // ---------- search: shared index and ranking ----------
  var index = null;
  var loading = null;
  var TYPES = { e: T('Rating'), c: T('Category'), a: T('Alternatives'), o: T('Open source'), g: T('Guide'), j: T('Jurisdiction'), p: T('Page') };

  // `fail` runs when the index cannot be loaded (offline and not cached, or a server error).
  function load(cb, fail) {
    if (index) return cb();
    if (!loading) {
      loading = fetch(base + (LANG ? '/' + LANG : '') + '/api/search.json')
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (data) {
          index = data.map(function (x) {
            x._n = fold(x.n);
            x._k = fold(x.k || '');
            x._c = fold(x.c || '');
            x._d = fold(x.d || '');
            return x;
          });
        })
        .catch(function () { loading = null; });
    }
    loading.then(function () { if (index) cb(); else if (fail) fail(); });
  }

  var LOAD_FAILED = T('Search could not be loaded. Check your connection and try again.');

  // Lowercase and strip accents, so "deja dup" finds "Déjà Dup".
  function fold(s) {
    return String(s).toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '');
  }

  var GRADE = { A: 5, B: 4, C: 3, D: 2, F: 1 };

  // Every word must match somewhere. Name matches beat other names, which beat category and description.
  function search(q, limit) {
    q = fold(q.trim());
    if (!q) return [];
    var alt = /\balternatives?\b|\binstead of\b|\breplace\b/.test(q);
    var oss = /\bopen[ -]?source\b|\bfoss\b|\boss\b/.test(q);
    var words = q.replace(/\balternatives?( to)?\b|\binstead of\b|\bopen[ -]?source\b|\bprivate\b|\bprivacy\b|\bbest\b/g, ' ').split(/\s+/).filter(Boolean);
    if (!words.length) words = q.split(/\s+/);
    var hits = [];
    for (var i = 0; i < index.length; i++) {
      var x = index[i];
      var score = 0;
      var ok = true;
      for (var w = 0; w < words.length; w++) {
        var t = words[w];
        var s = 0;
        if (x._n === t) s = 100;
        else if (x._n.indexOf(t) === 0) s = 60;
        else if (x._n.indexOf(' ' + t) !== -1 || x._n.indexOf('-' + t) !== -1) s = 40;
        else if (x._n.indexOf(t) !== -1) s = 25;
        else if (x._k.indexOf(t) !== -1) s = 30;
        else if (x._c.indexOf(t) !== -1) s = 12;
        else if (x._d.indexOf(t) !== -1) s = 5;
        if (!s) { ok = false; break; }
        score += s;
      }
      if (!ok) continue;
      if (x._n === q) score += 200;
      if (x.t === 'c') score += 15;
      if (x.t === 'g') score += 18;
      if (x.t === 'a') score += alt ? 80 : -10;
      if (x.t === 'o') score += oss ? 80 : -10;
      if (x.t === 'j' || x.t === 'p') score -= 5;
      if (x.p) score += 8;
      if (x.g) score += GRADE[x.g];
      hits.push([score, x]);
    }
    hits.sort(function (a, b) { return b[0] - a[0] || a[1].n.localeCompare(b[1].n); });
    return hits.slice(0, limit || 30).map(function (h) { return h[1]; });
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function metaLine(x, short) {
    var parts = [TYPES[x.t] || ''];
    if (x.t === 'e') {
      parts.push(x.c);
      if (x.g) parts.push(T('Grade {grade}', { grade: x.g }));
      if (x.p && !short) parts.push(T('Our pick'));
    } else if (x.c && x.t !== 'p' && x.t !== 'j') parts.push(x.c);
    if (x.d && x.t !== 'e') parts.push(x.d);
    return parts.filter(Boolean).join(' · ');
  }

  // ---------- inline search on the home and search pages ----------

  var input = document.querySelector('[data-search]');
  var results = document.querySelector('[data-results]');

  function renderInline() {
    results.textContent = '';
    if (!input.value.trim()) { results.hidden = true; return; }
    var hits = search(input.value, 25);
    hits.forEach(function (x) {
      var li = el('li');
      var a = el('a', null, x.n);
      if (safeHref(x.u)) a.href = safeHref(x.u);
      li.appendChild(a);
      li.appendChild(el('div', 'meta', metaLine(x)));
      results.appendChild(li);
    });
    if (!hits.length) results.appendChild(el('li', 'meta', T('No matches.')));
    results.hidden = false;
  }

  if (input && results) {
    var inlineFailed = function () {
      results.textContent = '';
      if (!input.value.trim()) { results.hidden = true; return; }
      results.appendChild(el('li', 'meta', LOAD_FAILED));
      results.hidden = false;
    };
    input.addEventListener('input', function () { load(renderInline, inlineFailed); });
    if (input.hasAttribute('data-autofill')) {
      var q0 = new URLSearchParams(location.search).get('q');
      if (q0) { input.value = q0; load(renderInline, inlineFailed); }
    }
  }

  // ---------- command palette: Cmd+K, Ctrl+K or the search button ----------

  var trigger = document.querySelector('[data-palette]');
  var dlg = null;
  var pin, plist, pstatus;
  var active = -1;
  var items = [];
  var lastFocus = null;

  function buildPalette() {
    dlg = el('dialog', 'palette');
    dlg.setAttribute('aria-label', T('Search ratings'));
    var form = el('form', 'palette-form');
    form.setAttribute('role', 'search');
    form.method = 'get';
    form.action = base + '/search/';
    var label = el('label', 'sr', T('Search ratings, categories and alternatives'));
    label.htmlFor = 'palette-q';
    pin = el('input', 'palette-input');
    pin.id = 'palette-q';
    pin.name = 'q';
    pin.type = 'search';
    pin.autocomplete = 'off';
    pin.spellcheck = false;
    pin.placeholder = T('Search apps, services, categories…');
    pin.setAttribute('role', 'combobox');
    pin.setAttribute('aria-expanded', 'false');
    pin.setAttribute('aria-controls', 'palette-list');
    pin.setAttribute('aria-autocomplete', 'list');
    var esc = el('kbd', 'kbd palette-esc', 'Esc');
    esc.setAttribute('aria-hidden', 'true');
    form.appendChild(label);
    form.appendChild(pin);
    form.appendChild(esc);
    plist = el('ul', 'palette-list');
    plist.id = 'palette-list';
    plist.setAttribute('role', 'listbox');
    plist.setAttribute('aria-label', T('Results'));
    // Keep Tab on the search field: the list is driven by the arrow keys through aria-activedescendant.
    plist.tabIndex = -1;
    pstatus = el('p', 'palette-status sr');
    pstatus.setAttribute('role', 'status');
    var foot = el('p', 'palette-foot');
    foot.innerHTML = '<span><kbd class="kbd">↑</kbd><kbd class="kbd">↓</kbd> ' + escHtml(T('to move')) + '</span><span><kbd class="kbd">Enter</kbd> ' + escHtml(T('to open')) + '</span><span><kbd class="kbd">Esc</kbd> ' + escHtml(T('to close')) + '</span>';
    dlg.appendChild(form);
    dlg.appendChild(plist);
    dlg.appendChild(pstatus);
    dlg.appendChild(foot);
    document.body.appendChild(dlg);

    pin.addEventListener('input', function () { load(renderPalette, paletteFailed); });
    pin.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Enter' && active >= 0 && items[active]) { e.preventDefault(); go(items[active]); }
      // The field is the only stop in the dialog, so Tab stays here rather than leaving for the browser's toolbar.
      else if (e.key === 'Tab') e.preventDefault();
    });
    plist.addEventListener('mousemove', function (e) {
      var li = e.target.closest('[role="option"]');
      if (li) setActive(Number(li.getAttribute('data-i')), false);
    });
    plist.addEventListener('click', function (e) {
      var li = e.target.closest('[role="option"]');
      if (li) { e.preventDefault(); go(items[Number(li.getAttribute('data-i'))]); }
    });
    // Click on the backdrop closes the palette.
    dlg.addEventListener('click', function (e) { if (e.target === dlg) closePalette(); });
    dlg.addEventListener('close', function () {
      document.documentElement.classList.remove('palette-open');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    });
  }

  function go(x) {
    if (x && safeHref(x.u)) location.href = safeHref(x.u);
  }

  function setActive(i, scroll) {
    var opts = plist.querySelectorAll('[role="option"]');
    if (!opts.length) { active = -1; pin.removeAttribute('aria-activedescendant'); return; }
    active = (i + opts.length) % opts.length;
    for (var k = 0; k < opts.length; k++) opts[k].setAttribute('aria-selected', k === active ? 'true' : 'false');
    pin.setAttribute('aria-activedescendant', opts[active].id);
    if (scroll !== false) opts[active].scrollIntoView({ block: 'nearest' });
  }

  function move(d) { setActive(active + d); }

  // With no query, suggest the picks and the main categories.
  function suggestions() {
    var picks = index.filter(function (x) { return x.t === 'e' && x.p; });
    var cats = index.filter(function (x) { return x.t === 'c'; }).slice(0, 8);
    return picks.concat(cats);
  }

  function renderPalette() {
    var q = pin.value.trim();
    items = q ? search(q, 40) : suggestions();
    plist.textContent = '';
    if (!q) {
      var h = el('li', 'palette-group', T('Our picks and categories'));
      h.setAttribute('role', 'presentation');
      plist.appendChild(h);
    }
    items.forEach(function (x, i) {
      // The link itself is the option, so the listbox has no interactive content nested in options.
      var li = el('li', 'palette-item');
      li.setAttribute('role', 'none');
      var a = el('a', 'palette-link');
      a.id = 'po-' + i;
      a.setAttribute('role', 'option');
      a.setAttribute('aria-selected', 'false');
      a.setAttribute('data-i', i);
      if (safeHref(x.u)) a.href = safeHref(x.u);
      a.tabIndex = -1;
      var top = el('span', 'palette-name', x.n);
      a.appendChild(top);
      if (x.g) a.appendChild(el('span', 'grade grade-' + String(x.g).replace(/[^A-Z]/g, ''), x.g));
      if (x.p) a.appendChild(el('span', 'pill', T('Pick')));
      a.appendChild(el('span', 'palette-meta', metaLine(x, true)));
      li.appendChild(a);
      plist.appendChild(li);
    });
    if (q && !items.length) {
      var none = el('li', 'palette-empty', T('No matches for "{q}".', { q: q }));
      none.setAttribute('role', 'presentation');
      plist.appendChild(none);
    }
    pin.setAttribute('aria-expanded', items.length ? 'true' : 'false');
    pstatus.textContent = q ? (items.length === 1 ? T('{n} result', { n: 1 }) : T('{n} results', { n: items.length })) : '';
    setActive(0, false);
  }

  function paletteFailed() {
    items = [];
    plist.textContent = '';
    var li = el('li', 'palette-empty', LOAD_FAILED);
    li.setAttribute('role', 'presentation');
    plist.appendChild(li);
    pin.setAttribute('aria-expanded', 'false');
    pstatus.textContent = LOAD_FAILED;
    setActive(0, false);
  }

  function openPalette() {
    if (!dlg) buildPalette();
    if (dlg.open) return;
    lastFocus = document.activeElement;
    hideTip();
    document.documentElement.classList.add('palette-open');
    if (dlg.showModal) dlg.showModal();
    else dlg.setAttribute('open', '');
    pin.value = '';
    pin.focus();
    plist.textContent = '';
    load(renderPalette, paletteFailed);
  }

  function closePalette() {
    if (!dlg || !dlg.open) return;
    if (dlg.close) dlg.close();
    else { dlg.removeAttribute('open'); document.documentElement.classList.remove('palette-open'); }
  }

  if (trigger) {
    trigger.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      openPalette();
    });
    // Start loading the index when someone is about to search.
    ['pointerenter', 'focus', 'touchstart'].forEach(function (ev) {
      trigger.addEventListener(ev, function () { load(function () {}); }, { passive: true, once: true });
    });
    var mac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
    var k = trigger.querySelector('.st-kbd');
    if (k && !mac) k.setAttribute('data-k', 'Ctrl K');
  }

  document.addEventListener('keydown', function (e) {
    var typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) || document.activeElement.isContentEditable;
    if ((e.metaKey || e.ctrlKey) && !e.altKey && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (dlg && dlg.open) closePalette();
      else openPalette();
      return;
    }
    if (e.key === '/' && !typing && !(dlg && dlg.open)) {
      e.preventDefault();
      // On pages with their own search or filter box, "/" focuses it. Elsewhere it opens the palette.
      var field = input || filter;
      if (field) field.focus();
      else openPalette();
    }
  });

  // "Try again" on the offline page. Inline handlers are blocked by the Content Security Policy.
  document.addEventListener('click', function (ev) {
    if (ev.target.closest && ev.target.closest('[data-reload]')) location.reload();
  });

  // Copy buttons for install commands.
  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest && ev.target.closest('[data-copy-text]');
    if (!btn) return;
    var text = btn.getAttribute('data-copy-text');
    var done = function () { var t = btn.textContent; btn.textContent = T('Copied'); setTimeout(function () { btn.textContent = t; }, 1500); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () {});
  });

  // Terminal preview of the command-line tool: the same search and keys as the real thing.
  function termDemo(root) {
    var input = root.querySelector('[data-term-input]');
    var list = root.querySelector('[data-term-list]');
    var detail = root.querySelector('[data-term-detail]');
    var status = root.querySelector('[data-term-status]');
    var data = null;
    var loading = null;
    var results = [];
    var sel = 0;
    var cache = {};
    var live = false;
    var MARK = { yes: '✔', partial: '◐', no: '✖', unknown: '?', 'n/a': '–', pending: '…' };
    var GRADE = { A: 5, B: 4, C: 3, D: 2, F: 1 };
    var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

    function load() {
      if (!loading) {
        loading = fetch(root.getAttribute('data-src')).then(function (r) { return r.json(); }).then(function (d) {
          d.byCat = {};
          d.byId = {};
          d.categories.forEach(function (c) { d.byCat[c.id] = c; });
          d.entries.forEach(function (e) {
            e._n = fold(e.n); e._k = fold(e.k || ''); e._c = fold((d.byCat[e.c] ? d.byCat[e.c].n : '') + ' ' + e.c.replace(/-/g, ' ')); e._d = fold(e.d);
            d.byId[e.c + '/' + e.s] = e;
          });
          data = d;
        });
      }
      return loading;
    }

    function rank(a, b) { return (b.p ? 3 - b.p : 0) - (a.p ? 3 - a.p : 0) || (GRADE[b.g] || 0) - (GRADE[a.g] || 0) || (b.sc || 0) - (a.sc || 0) || a.n.localeCompare(b.n); }

    function find(q, limit) {
      q = fold(q).trim();
      if (!q) return data.entries.filter(function (e) { return e.p; }).sort(rank).slice(0, limit);
      var oss = /\bopen[ -]?source\b|\bfoss\b|\boss\b/.test(q);
      var alt = /\balternatives?\b|\binstead of\b|\breplace(ment)?s?\b/.test(q);
      var words = q.replace(/\balternatives?( to)?\b|\binstead of\b|\bopen[ -]?source\b|\bfoss\b|\bprivate\b|\bprivacy\b|\bbest\b|\bsecure\b/g, ' ').split(/\s+/).filter(Boolean);
      if (!words.length && !oss) words = q.split(/\s+/);
      if (alt && data.alternatives) {
        var rest = words.filter(function (w) { return !/^(to|for|of|replace(ment)?s?)$/.test(w); }).join(' ');
        var exact = function (e) { return e._n === rest || e._n.split(' ').indexOf(rest) !== -1 ? 1 : 0; };
        var target = rest && find(rest, 12).filter(function (e) { return data.alternatives[e.c + '/' + e.s]; }).sort(function (a, b) { return exact(b) - exact(a) || a.n.length - b.n.length; })[0];
        if (target) {
          var alts = data.alternatives[target.c + '/' + target.s].map(function (id) { return data.byId[id]; }).filter(function (e) { return e && (!oss || e.o); });
          alts.to = target;
          return alts;
        }
      }
      var hits = [];
      data.entries.forEach(function (e) {
        if (oss && !e.o) return;
        var score = 0;
        for (var i = 0; i < words.length; i++) {
          var w = words[i];
          var s = e._n === w ? 100 : e._n.indexOf(w) === 0 ? 60 : e._n.indexOf(' ' + w) !== -1 || e._n.indexOf('-' + w) !== -1 ? 40 : e._n.indexOf(w) !== -1 ? 25 : e._k.indexOf(w) !== -1 ? 30 : e._c.indexOf(w) !== -1 ? 12 : e._d.indexOf(w) !== -1 ? 5 : 0;
          if (!s) return;
          score += s;
        }
        if (e._n === q) score += 200;
        if (e.p) score += 8 - e.p;
        score += (GRADE[e.g] || 0) * 1.5;
        hits.push([score, e]);
      });
      hits.sort(function (a, b) { return b[0] - a[0] || rank(a[1], b[1]); });
      return hits.slice(0, limit).map(function (h) { return h[1]; });
    }

    function tile(g, cls) { return '<span class="' + cls + ' t-g-' + esc(g || 'none') + '">' + esc(g || '–') + '</span>'; }

    function renderList() {
      results = find(input.value, 100);
      sel = 0;
      list.innerHTML = results.length ? results.map(function (e, i) {
        return '<li role="option" id="' + list.id + '-' + i + '" aria-selected="' + (i === 0) + '"' + (i === 0 ? ' class="on"' : '') + ' data-i="' + i + '">' + tile(e.g, 't-g') + '<span class="t-sc">' + (e.g ? esc(e.sc) : '') + '</span><span class="t-nm">' + esc(e.n) + '</span><span class="t-pk">' + (e.p ? '★' : '') + '</span><span class="t-ct">' + esc(data.byCat[e.c].n) + '</span></li>';
      }).join('') : '<li class="t-muted">No matches. Try fewer or different words.</li>';
      status.textContent = results.to ? results.length + ' rated alternatives to ' + results.to.n + '. ★ marks our picks.' : input.value.trim() ? results.length + (results.length === 100 ? '+' : '') + ' matches. ★ marks our picks.' : 'Our picks. Type to search ' + data.entries.length + ' ratings.';
      if (results.length) input.setAttribute('aria-activedescendant', list.id + '-0');
      else input.removeAttribute('aria-activedescendant');
      input.setAttribute('aria-expanded', results.length ? 'true' : 'false');
      renderDetail();
    }

    function renderDetail() {
      var e = results[sel];
      if (!e) { detail.innerHTML = ''; return; }
      var full = root.classList.contains('full');
      var d = cache[e.c + '/' + e.s];
      var html = '<p class="t-d-name">' + esc(e.n) + '</p><p class="t-muted">' + esc(data.byCat[e.c].n) + (e.j && data.countries[e.j] ? ' · ' + esc(data.countries[e.j]) : '') + '</p>' +
        '<p class="t-h">' + tile(e.g, 't-tile') + ' <b>' + (e.g ? esc(e.sc) + '/100' : 'Not graded yet') + '</b></p>' +
        (e.p ? '<p class="t-pick">★ Our pick' + (d && d.pick_reason && full ? ': ' + esc(d.pick_reason) : '') + '</p>' : '') +
        '<p class="t-desc">' + esc(e.d) + '</p>';
      if (!d) html += '<p class="t-note">Loading criteria…</p>';
      else if (d.answers) {
        var order = { yes: 0, partial: 1, no: 2, unknown: 3, pending: 4, 'n/a': 5 };
        var answers = Object.keys(d.answers).map(function (k) { return d.answers[k]; }).sort(function (a, b) { return order[a.answer] - order[b.answer]; });
        html += '<p class="t-h">Criteria</p><ul class="t-ans">' + answers.map(function (a) {
          return '<li><span class="t-m t-m-' + esc(a.answer) + '">' + (MARK[a.answer] || '?') + '</span>' + esc(a.title) +
            (full && a.note ? '<div class="t-note">' + esc(a.note) + '</div>' : '') +
            (full && /^https?:\/\//i.test(a.evidence || '') ? '<div class="t-note"><a href="' + esc(a.evidence) + '" rel="nofollow ugc noopener noreferrer" target="_blank">' + esc(a.evidence) + '</a></div>' : '') + '</li>';
        }).join('') + '</ul>';
      }
      html += '<p class="t-h"><a class="t-open" href="' + esc(base + '/' + encodeURIComponent(e.c) + '/' + encodeURIComponent(e.s) + '/') + '">Open the full rating ›</a></p>';
      detail.innerHTML = html;
      if (!d) {
        var key = e.c + '/' + e.s;
        fetch(base + '/api/entries/' + encodeURIComponent(e.c) + '/' + encodeURIComponent(e.s) + '.json').then(function (r) { return r.json(); }).then(function (json) {
          cache[key] = json;
          if (results[sel] === e) renderDetail();
        }, function () { cache[key] = {}; });
      }
    }

    function move(delta) {
      if (!results.length) return;
      var next = Math.max(0, Math.min(results.length - 1, sel + delta));
      if (next === sel) return;
      var rows = list.children;
      rows[sel].classList.remove('on'); rows[sel].setAttribute('aria-selected', 'false');
      rows[next].classList.add('on'); rows[next].setAttribute('aria-selected', 'true');
      sel = next;
      input.setAttribute('aria-activedescendant', rows[sel].id);
      var r = rows[sel];
      if (r.offsetTop < list.scrollTop) list.scrollTop = r.offsetTop;
      else if (r.offsetTop + r.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = r.offsetTop + r.offsetHeight - list.clientHeight;
      renderDetail();
    }

    // Data loads on first use, so the page itself stays light. The server-rendered results
    // are swapped for live ones at that moment.
    function ready(fn) {
      // `live` rather than `data`: focusing the field preloads the data without rendering, and the
      // keys only work on live results.
      return function (ev) {
        if (live) return fn(ev);
        if (ev.type === 'keydown' && /^(Arrow|Page|Enter|Escape)/.test(ev.key)) ev.preventDefault();
        load().then(function () { if (!live) { live = true; renderList(); } fn(ev); });
      };
    }

    input.addEventListener('focus', function () { load(); }, { once: true });
    // Esc on the results list quits, like the real tool. Enter or typing starts it again.
    function quit() {
      root.classList.remove('full');
      root.classList.add('quit');
      results = [];
      list.innerHTML = '<li class="t-muted">Exited. Press Enter or type to run privacyratings again.</li>';
      detail.innerHTML = '';
      status.textContent = '';
      input.removeAttribute('aria-activedescendant');
      input.setAttribute('aria-expanded', 'false');
    }
    function restart() { root.classList.remove('quit'); renderList(); }

    input.addEventListener('input', ready(function () { root.classList.remove('full'); root.classList.remove('quit'); renderList(); }));
    // Keys work anywhere in the terminal, not only while the text field has focus.
    root.addEventListener('keydown', ready(function (ev) {
      var k = ev.key;
      // The details pane scrolls with the arrow keys when it has focus.
      if (ev.target !== input && (k === 'Enter' || ev.target.closest('a') || ev.target === detail)) return;
      if (root.classList.contains('quit')) {
        if (k === 'Enter') { restart(); ev.preventDefault(); }
        return;
      }
      if (k === 'ArrowDown') move(1);
      else if (k === 'ArrowUp') move(-1);
      else if (k === 'PageDown') move(8);
      else if (k === 'PageUp') move(-8);
      else if (k === 'Enter') { root.classList.add('full'); renderDetail(); }
      else if (k === 'Escape') { if (root.classList.contains('full')) { root.classList.remove('full'); renderDetail(); } else quit(); input.focus(); }
      else return;
      ev.preventDefault();
    }));
    list.addEventListener('click', ready(function (ev) {
      if (root.classList.contains('quit')) { restart(); input.focus(); return; }
      var li = ev.target.closest('li[data-i]') || ev.target.closest('li[role="option"]');
      if (!li) return;
      var i = li.getAttribute('data-i') ? Number(li.getAttribute('data-i')) : Array.prototype.indexOf.call(list.children, li);
      move(i - sel);
      root.classList.add('full');
      renderDetail();
      input.focus();
    }));
    // A click anywhere else in the terminal puts the cursor back in the text field.
    root.addEventListener('click', function (ev) {
      if (ev.target.closest('a, input') || String(window.getSelection && window.getSelection())) return;
      input.focus({ preventScroll: true });
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-term]'), termDemo);

  // Offline support and "Install app". Only on secure origins, never on file:// previews.
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register(base + '/sw.js', { scope: base + '/' }).catch(function () {});
    });
  }
})();
