---
name: Buffalo
description: Web development toolkit for Go that generates projects with routing, templates, the Pop database layer, migrations and a front-end asset pipeline.
website: https://gobuffalo.io
source: https://github.com/gobuffalo/buffalo
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/gobuffalo/buffalo/blob/main/LICENSE.txt
    note: MIT-licensed.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_trackers:
    answer: yes
    evidence: https://github.com/gobuffalo/cli
    note: No telemetry in the framework or CLI source code, and gobuffalo.io loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://gobuffalo.io/
    note: Funded by sponsors and Patreon, with no ads.
platforms:
  - linux
  - macos
  - windows
---
