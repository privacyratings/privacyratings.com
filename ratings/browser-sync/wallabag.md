---
name: wallabag
description: Self-hostable read-it-later application that saves the text of web articles for distraction-free reading, with browser extensions, mobile apps, e-reader support and an official hosted service, wallabag.it.
website: https://wallabag.org
source: https://github.com/wallabag/wallabag
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/wallabag/wallabag/blob/master/COPYING.md
    note: MIT.
  no_trackers:
    answer: partial
    evidence: https://wallabag.org/
    note: The software and Android app contain no trackers, but the project website uses a self-hosted Matomo analytics instance.
  no_ads:
    answer: yes
    evidence: https://wallabag.org/
    note: Free open-source software funded by donations and the paid wallabag.it hosting, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
