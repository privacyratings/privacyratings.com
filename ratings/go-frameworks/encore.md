---
name: Encore
description: Backend framework for Go and TypeScript that declares APIs and infrastructure such as databases, queues and cron jobs in code, with a local development dashboard.
website: https://encore.dev
source: https://github.com/encoredev/encore
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/encoredev/encore/blob/main/LICENSE
    note: Mozilla Public License 2.0.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_trackers:
    answer: no
    evidence: https://encore.dev/docs/cli/telemetry
    note: The CLI sends anonymous telemetry by default until disabled, and encore.dev loads Google Tag Manager, Microsoft Clarity, Ahrefs analytics and the LinkedIn Insight Tag.
  no_ads:
    answer: partial
    evidence: https://encore.dev/pricing
    note: Funded by the paid Encore Cloud platform, with no ads in the framework; encore.dev shares visit data with Google Ads and LinkedIn for advertising.
platforms:
  - linux
  - macos
  - windows
jurisdiction: SE
---
