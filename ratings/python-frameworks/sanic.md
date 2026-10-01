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
    answer: yes
    evidence: https://sanic.dev/en/
    note: No third-party trackers, and the framework has no telemetry. The website's self-hosted Umami analytics are cookieless and aggregate-only.
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
