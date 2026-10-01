---
name: Spiral
description: PHP framework from Spiral Scout for long-running applications on the RoadRunner application server, with dependency injection, queues and gRPC support.
website: https://spiral.dev
source: https://github.com/spiral/framework
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/spiral/framework/blob/master/LICENSE
    note: MIT-licensed.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_trackers:
    answer: no
    evidence: https://spiral.dev/
    note: The framework has no telemetry, but spiral.dev loads Google Tag Manager and the LinkedIn Insight Tag.
  no_ads:
    answer: partial
    evidence: https://github.com/sponsors/spiral
    note: Developed by Spiral Scout and funded by its services and sponsorships, with no ads; spiral.dev shares visit data with LinkedIn for advertising.
platforms:
  - linux
  - macos
  - windows
jurisdiction: US
---
