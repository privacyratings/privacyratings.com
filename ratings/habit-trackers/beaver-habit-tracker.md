---
name: Beaver Habit Tracker
description: Open source web app for tracking daily habits without goals or streak targets, available as a paid hosted service or self-hosted with Docker.
website: https://beaverhabits.com
source: https://github.com/daya0576/beaverhabits
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/daya0576/beaverhabits/blob/main/LICENSE
    note: BSD-3-Clause.
  no_trackers:
    answer: yes
    evidence: https://github.com/daya0576/beaverhabits/blob/main/beaverhabits/frontend/layout.py
    note: No third-party trackers. The hosted service's Umami analytics are cookieless and aggregate-only, and self-hosted instances have none unless the operator adds them.
  no_ads:
    answer: yes
    evidence: https://github.com/daya0576/beaverhabits
    note: Funded by paid plans for the hosted service, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
