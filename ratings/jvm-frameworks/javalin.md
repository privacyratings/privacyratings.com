---
name: Javalin
description: Lightweight web framework for Java and Kotlin built on the Jetty server, with a small handler-based API for REST APIs and WebSockets.
website: https://javalin.io
source: https://github.com/javalin/javalin
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/javalin/javalin/blob/master/LICENSE
    note: Apache 2.0-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/javalin/javalin
    note: No telemetry in the source code, and javalin.io loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/sponsors/tipsy
    note: Funded by donations through GitHub Sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---
