---
name: Actix Web
description: Web framework for Rust built on Tokio, with routing, request extractors, middleware and support for HTTP/2 and WebSockets.
website: https://actix.rs
source: https://github.com/actix/actix-web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/actix/actix-web/blob/main/LICENSE-MIT
    note: Dual-licensed under MIT and Apache 2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/actix/actix-website
    note: The framework has no telemetry, and the website source loads no analytics or trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/sponsors/robjtede
    note: Funded by sponsors of its maintainer through GitHub Sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---
