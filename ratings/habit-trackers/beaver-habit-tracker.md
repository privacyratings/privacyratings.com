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
    answer: partial
    evidence: https://github.com/daya0576/beaverhabits/blob/main/beaverhabits/frontend/layout.py
    note: The hosted service loads Umami, a cookieless analytics tool. Self-hosted instances have no analytics unless the operator configures it.
  no_ads:
    answer: yes
    evidence: https://github.com/daya0576/beaverhabits
    note: Funded by paid plans for the hosted service, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
