---
name: Docmost
description: Self-hostable collaborative wiki and documentation tool with real-time editing, spaces, permissions, comments and diagram support. Also offered as a paid cloud service.
website: https://docmost.com
source: https://github.com/docmost/docmost
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/docmost/docmost/blob/main/LICENSE
    note: Open core. The core is AGPL-3.0, while enterprise features are under a separate proprietary license.
  no_trackers:
    answer: no
    evidence: https://github.com/docmost/docmost/blob/main/.env.example
    note: The docmost.com website loads a Google Ads tag, and self-hosted servers send daily anonymous usage statistics unless DISABLE_TELEMETRY is set.
  no_ads:
    answer: yes
    evidence: https://docmost.com/pricing
    note: Funded by paid cloud and enterprise plans, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
