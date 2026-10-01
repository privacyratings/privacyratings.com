---
name: gPodder
description: Open source desktop podcast client for Linux, Windows and macOS that downloads and manages episodes from RSS feeds and YouTube channels, with optional sync through gpodder.net.
website: https://gpodder.github.io
source: https://github.com/gpodder/gpodder
platforms:
  - linux
  - windows
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/gpodder/gpodder/blob/master/COPYING
    note: GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://gpodder.github.io
    note: The app has no telemetry, but the gpodder.github.io website loads Google Analytics.
  no_ads:
    answer: yes
    evidence: https://github.com/gpodder/gpodder
    note: Volunteer-maintained free software with no ads or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
