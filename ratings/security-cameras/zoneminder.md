---
name: ZoneMinder
description: Open source video surveillance software for Linux that records and analyzes IP, USB and analog cameras through a web interface.
website: https://zoneminder.com
source: https://github.com/ZoneMinder/zoneminder
platforms:
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ZoneMinder/zoneminder/blob/master/COPYING
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/ZoneMinder/zoneminder/blob/master/scripts/ZoneMinder/lib/ZoneMinder/ConfigData.pm.in
    note: Usage telemetry to the ZoneMinder team is off by default (ZM_TELEMETRY_DATA), and there are no third-party analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/ZoneMinder/zoneminder
    note: Free open source software with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
