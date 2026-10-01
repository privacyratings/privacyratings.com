---
name: Fiber
description: Express-inspired web framework for Go built on the Fasthttp HTTP engine, with routing, middleware and templating.
website: https://gofiber.io
source: https://github.com/gofiber/fiber
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/gofiber/fiber/blob/main/LICENSE
    note: MIT-licensed.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_trackers:
    answer: partial
    evidence: https://gofiber.io/
    note: The framework has no telemetry, and gofiber.io uses Simple Analytics cookieless analytics.
  no_ads:
    answer: yes
    evidence: https://github.com/sponsors/gofiber
    note: Funded by GitHub Sponsors, with no ads.
platforms:
  - linux
  - macos
  - windows
---
