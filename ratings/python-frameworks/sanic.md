---
name: Sanic
description: Asynchronous Python web server and framework built on asyncio.
website: https://sanic.dev
source: https://github.com/sanic-org/sanic
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/sanic-org/sanic/blob/main/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: partial
    evidence: https://sanic.dev/en/
    note: No telemetry in the framework, but sanic.dev loads self-hosted Umami analytics.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/sanic-org
    note: Funded by donations through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---
