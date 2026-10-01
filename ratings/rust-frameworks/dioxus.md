---
name: Dioxus
description: Rust framework for building user interfaces for web, desktop and mobile apps from one codebase, with components, signals and the dx command-line tool.
website: https://dioxuslabs.com
source: https://github.com/DioxusLabs/dioxus
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/DioxusLabs/dioxus/blob/main/LICENSE-MIT
    note: Dual-licensed under MIT and Apache 2.0.
  no_trackers:
    answer: no
    evidence: https://github.com/DioxusLabs/dioxus/blob/main/packages/cli-telemetry/src/lib.rs
    note: The dx CLI sends anonymous telemetry by default until disabled, and the dioxuslabs.com website loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/dioxus-labs
    note: Funded by Dioxus Labs and by donations through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - android
  - ios
  - web
---
