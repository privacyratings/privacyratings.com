---
name: Miniflux
description: Minimalist self-hosted feed reader for RSS, Atom and JSON Feed, written in Go with PostgreSQL. Removes tracking pixels and parameters. Also offered as a paid hosted service.
website: https://miniflux.app
source: https://github.com/miniflux/v2
platforms:
  - web
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/miniflux/v2/blob/main/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://miniflux.app/hosting.html
    note: States there is no telemetry and no analytics software, and usage is not tracked.
  no_ads:
    answer: yes
    evidence: https://miniflux.app/hosting.html
    note: Funded by paid hosting and donations, with no advertising, and data is not shared or sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
