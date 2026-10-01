---
name: Rocket
description: Web framework for Rust that uses code generation for type-safe routing, request guards and form handling, with templating and database support.
website: https://rocket.rs
source: https://github.com/rwf2/Rocket
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/rwf2/Rocket/blob/master/LICENSE-MIT
    note: Dual-licensed under MIT and Apache 2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/rwf2/Rocket
    note: The framework has no telemetry, and the rocket.rs website loads no analytics or trackers.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/rwf2
    note: Funded by donations and sponsors through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---
