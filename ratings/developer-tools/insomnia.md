---
name: Insomnia
description: API client from Kong for REST, GraphQL, gRPC and WebSocket requests, with API design and testing tools. Data can be stored locally, in Git, or synced to Kong's cloud.
website: https://insomnia.rest
source: https://github.com/Kong/insomnia
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Kong/insomnia/blob/develop/LICENSE
    note: The desktop app is Apache 2.0, but the cloud sync service is closed source.
  no_trackers:
    answer: no
    evidence: https://insomnia.rest/privacy
    note: The privacy policy lists Segment, Sentry and Google Analytics for the website and apps.
  no_ads:
    answer: yes
    evidence: https://insomnia.rest/pricing
    note: Funded by paid plans, with no ads in the app.
  independent_audit:
    answer: partial
    evidence: https://insomnia.rest/pricing
    note: SOC 2 reports and security testing results are only shared with Enterprise customers.
---
