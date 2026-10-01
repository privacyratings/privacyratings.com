---
name: Bottles
description: Linux app for running Windows software and games through Wine, with isolated environments called bottles, preset configurations for gaming or software, dependency installers and runner management.
website: https://usebottles.com
source: https://github.com/bottlesdevs/Bottles
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/bottlesdevs/Bottles/blob/main/COPYING.md
    note: GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://usebottles.com/
    note: No telemetry in the app, but the website loads Cloudflare Web Analytics (automated test).
  no_ads:
    answer: yes
    evidence: https://github.com/bottlesdevs/Bottles#sponsors
    note: Funded by donations through Liberapay and GitHub Sponsors and by infrastructure sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
