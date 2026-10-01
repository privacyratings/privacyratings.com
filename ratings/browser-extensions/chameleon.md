---
name: Chameleon
description: Browser extension that spoofs the user agent, screen size, time zone, language and other browser properties, and can apply privacy-related Firefox settings to reduce fingerprinting.
website: https://sereneblue.github.io/chameleon/
source: https://github.com/sereneblue/chameleon
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/sereneblue/chameleon/blob/master/LICENSE.md
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://addons.mozilla.org/en-US/firefox/addon/chameleon-ext/privacy/
    note: The extension collects no data; the optional time zone IP check contacts ipapi.co.
  no_ads:
    answer: yes
    evidence: https://github.com/sereneblue/chameleon
    note: Free open-source extension with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
