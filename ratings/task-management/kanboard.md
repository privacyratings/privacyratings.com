---
name: Kanboard
description: Minimalist, self-hosted Kanban project management software written in PHP, with plugins, automatic actions and an API. The project is in maintenance mode, receiving small fixes and community contributions.
website: https://kanboard.org
source: https://github.com/kanboard/kanboard
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/kanboard/kanboard/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/kanboard/kanboard
    note: No telemetry or analytics in the source code, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://kanboard.org/
    note: Free software with no ads or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
