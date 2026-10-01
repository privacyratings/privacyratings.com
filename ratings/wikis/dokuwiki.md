---
name: DokuWiki
description: Self-hosted wiki software written in PHP that stores pages in plain text files, so it needs no database. Includes access control, authentication connectors and a large plugin collection.
website: https://www.dokuwiki.org
source: https://github.com/dokuwiki/dokuwiki
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/dokuwiki/dokuwiki/blob/master/COPYING
    note: GPL-2.0.
  no_trackers:
    answer: no
    note: The dokuwiki.org website loads Google Analytics, as its privacy page states. The software's popularity feedback plugin only sends data when an administrator submits it.
  no_ads:
    answer: no
    note: The software has no ads, but the project shows Google AdSense ads on some of its websites, such as the forum.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
