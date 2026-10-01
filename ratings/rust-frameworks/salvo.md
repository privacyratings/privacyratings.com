---
name: Salvo
description: Web framework for Rust built on Tokio and hyper, with a tree-based router, handlers that double as middleware, HTTP/3 support and OpenAPI generation.
website: https://salvo.rs
source: https://github.com/salvo-rs/salvo
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/salvo-rs/salvo/blob/main/LICENSE
    note: Apache 2.0-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/salvo-rs/website
    note: The framework has no telemetry, and the website source loads no analytics or trackers.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/salvo
    note: Funded by donations and sponsors through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---
