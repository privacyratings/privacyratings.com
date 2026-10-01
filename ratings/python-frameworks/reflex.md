---
name: Reflex
description: Framework for building full-stack web apps in pure Python, which compiles the frontend to a React app.
website: https://reflex.dev
source: https://github.com/reflex-dev/reflex
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/reflex-dev/reflex/blob/main/LICENSE
    note: Apache-2.0 licensed.
  no_trackers:
    answer: no
    evidence: https://reflex.dev/docs/api-reference/telemetry/
    note: The CLI sends anonymous usage data to PostHog by default until disabled, and reflex.dev loads Google Analytics, the Meta Pixel, PostHog, HubSpot and Ahrefs analytics.
  no_ads:
    answer: partial
    evidence: https://reflex.dev/pricing/
    note: Funded by paid Reflex Cloud and enterprise plans, but reflex.dev shares visitor data with Meta and Google for advertising its own product.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - web
---
