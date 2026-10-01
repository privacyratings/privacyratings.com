---
name: Kamal
description: Open-source command-line tool from 37signals that deploys containerized web apps to your own servers over SSH, with zero-downtime deploys through kamal-proxy.
website: https://kamal-deploy.org
source: https://github.com/basecamp/kamal
platforms:
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/basecamp/kamal/blob/main/MIT-LICENSE
    note: MIT.
  no_trackers:
    answer: partial
    evidence: https://github.com/basecamp/kamal
    note: No telemetry in the source code, but the kamal-deploy.org website uses Plausible analytics.
  no_ads:
    answer: yes
    evidence: https://kamal-deploy.org
    note: Free MIT-licensed tool developed by 37signals, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
