---
name: Yaak
description: Offline-first desktop API client for REST, GraphQL, gRPC, WebSocket and server-sent events, storing data locally with optional Git sync. Free for personal use, with a license required for commercial use.
website: https://yaak.app
source: https://github.com/mountain-loop/yaak
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mountain-loop/yaak/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: partial
    evidence: https://yaak.app/privacy
    note: The app has no telemetry beyond update and license checks, but the website uses first-party analytics stored by Yaak.
  no_ads:
    answer: yes
    evidence: https://yaak.app/pricing
    note: Funded by license sales and sponsors. The privacy policy states data is not sold or shared with third parties.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
