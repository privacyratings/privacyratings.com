---
name: Newsboat
description: Terminal-based RSS and Atom feed reader for Linux, macOS and BSD, a maintained fork of Newsbeuter, with support for podcasts and sync services such as Miniflux and FreshRSS.
website: https://newsboat.org
source: https://github.com/newsboat/newsboat
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/newsboat/newsboat/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/newsboat/newsboat
    note: No telemetry or analytics in the source code, and the project website loads no scripts.
  no_ads:
    answer: yes
    evidence: https://github.com/newsboat/newsboat
    note: Free volunteer project with no ads or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
