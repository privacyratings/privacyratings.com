---
name: NoScript
description: Browser extension for Firefox and Chromium-based browsers that blocks JavaScript and other active content except on sites the user allows, with added protection against cross-site scripting and clickjacking.
website: https://noscript.net
source: https://github.com/hackademix/noscript
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/hackademix/noscript/blob/main/LICENSE
    note: GPL-3.0-or-later.
  no_trackers:
    answer: yes
    evidence: https://addons.mozilla.org/en-US/firefox/addon/noscript/privacy/
    note: The extension does not collect or share user data; the optional Site Info feature sends only the site domain when used.
  no_ads:
    answer: yes
    evidence: https://noscript.net/
    note: Free open-source software funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
