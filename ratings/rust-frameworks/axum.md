---
name: Axum
description: Web application framework for Rust from the Tokio project, built on hyper and Tower middleware, with macro-free routing and request extractors.
website: https://github.com/tokio-rs/axum
source: https://github.com/tokio-rs/axum
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/tokio-rs/axum/blob/main/axum/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/tokio-rs/axum
    note: The framework has no telemetry, and the project has no website beyond its repository and API documentation.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/tokio
    note: Part of the Tokio project, funded by donations and sponsors through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---
