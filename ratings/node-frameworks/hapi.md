---
name: Hapi
description: Web framework for Node.js for building applications and services, with built-in input validation, caching and authentication support.
website: https://hapi.dev
source: https://github.com/hapijs/hapi
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/hapijs/hapi/blob/master/LICENSE.md
    note: BSD-3-Clause licensed.
  no_trackers:
    answer: no
    evidence: https://github.com/hapijs/hapi.dev/blob/master/components/CarbonAds.vue
    note: The hapi.dev website loads the Carbon Ads ad network script.
  no_ads:
    answer: partial
    evidence: https://github.com/hapijs/hapi.dev/blob/master/components/CarbonAds.vue
    note: The framework has no ads, but the documentation website shows contextual Carbon Ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---
