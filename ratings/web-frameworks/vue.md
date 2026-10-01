---
name: Vue
description: Progressive JavaScript framework for building user interfaces with reactive, component-based templates.
website: https://vuejs.org
source: https://github.com/vuejs/core
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/vuejs/core/blob/main/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: no
    evidence: https://github.com/vuejs/docs/blob/main/.vitepress/config.ts
    note: The vuejs.org website loads Fathom analytics, a third-party promotional banner script and Carbon Ads.
  no_ads:
    answer: partial
    evidence: https://github.com/vuejs/docs/blob/main/.vitepress/config.ts
    note: The framework has no ads, but the documentation website shows contextual Carbon Ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - web
---
