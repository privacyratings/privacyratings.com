---
name: Hoppscotch
description: API development tool for REST, GraphQL, WebSocket and other requests, available as a web app, desktop app and self-hostable server.
website: https://hoppscotch.com
source: https://github.com/hoppscotch/hoppscotch
platforms:
  - windows
  - macos
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/hoppscotch/hoppscotch/blob/main/LICENSE
    note: MIT, including the self-hostable backend.
  no_trackers:
    answer: no
    evidence: https://docs.hoppscotch.io/support/privacy
    note: The privacy policy lists Google Analytics and PostHog, and the hosted app loads them.
  no_ads:
    answer: partial
    evidence: https://hoppscotch.com/pricing
    note: Funded by paid plans, with no ads in the app. The privacy policy allows third-party advertising partners to use cookies to market Hoppscotch.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
