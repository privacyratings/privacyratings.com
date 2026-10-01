---
name: FreshRSS
description: Self-hosted feed reader and aggregator written in PHP, with multi-user support, extensions, WebSub and APIs compatible with Google Reader and Fever mobile clients.
website: https://freshrss.org
source: https://github.com/FreshRSS/FreshRSS
platforms:
  - web
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/FreshRSS/FreshRSS/blob/edge/LICENSE.txt
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/FreshRSS/FreshRSS
    note: No telemetry or analytics in the source code, and the project website loads no third-party scripts.
  no_ads:
    answer: yes
    evidence: https://liberapay.com/FreshRSS/
    note: Volunteer project funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
