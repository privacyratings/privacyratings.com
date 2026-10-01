---
name: Forgejo
description: Self-hosted Git forge with issues, pull requests, package registries and CI through Forgejo Actions. A community fork of Gitea, with its domains held by the non-profit Codeberg e.V.
website: https://forgejo.org
source: https://codeberg.org/forgejo/forgejo
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://codeberg.org/forgejo/forgejo
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://forgejo.org/faq/
    note: Funded by volunteer contributions, grants and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
