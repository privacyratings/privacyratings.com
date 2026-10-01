---
name: Encore.ts
description: TypeScript backend framework with a Rust-based runtime, where APIs and infrastructure such as databases, queues and cron jobs are declared in code.
website: https://encore.dev
source: https://github.com/encoredev/encore
jurisdiction: SE
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/encoredev/encore/blob/main/LICENSE
    note: MPL-2.0-licensed.
  no_trackers:
    answer: no
    evidence: https://encore.dev/docs/cli/telemetry
    note: The Encore CLI sends usage telemetry by default until disabled, and encore.dev loads Google Analytics and Microsoft Clarity.
  no_ads:
    answer: yes
    evidence: https://encore.dev/pricing
    note: Developed by Encoretivity AB and funded by its paid Encore Cloud platform, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---
