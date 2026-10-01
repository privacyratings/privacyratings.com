---
name: Ash Framework
description: Declarative application framework for Elixir that models resources, actions and policies, and derives APIs and data layers from them.
website: https://ash-hq.org
source: https://github.com/ash-project/ash
platforms:
  - linux
  - macos
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ash-project/ash/blob/main/LICENSES/MIT.txt
    note: MIT-licensed.
  no_trackers:
    answer: partial
    evidence: https://ash-hq.org/
    note: The framework has no telemetry, but ash-hq.org loads Plausible analytics.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/ash-framework
    note: Funded by donations through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
