---
name: Calibre
description: Free and open-source e-book manager for organizing, converting and reading e-books, with a built-in viewer, editor and device syncing.
website: https://calibre-ebook.com
source: https://github.com/kovidgoyal/calibre
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://raw.githubusercontent.com/kovidgoyal/calibre/master/LICENSE
    note: Licensed under GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://calibre-ebook.com
    note: The website loads Google Analytics. The desktop app has no analytics.
  no_ads:
    answer: yes
    evidence: https://calibre-ebook.com/donate
    note: Free software funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
