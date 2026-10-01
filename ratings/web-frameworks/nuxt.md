---
name: Nuxt
description: Vue-based framework for building web applications with server-side rendering, static generation and file-based routing.
website: https://nuxt.com
source: https://github.com/nuxt/nuxt
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/nuxt/nuxt/blob/main/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/nuxt/nuxt.com/blob/main/nuxt.config.ts
    note: No third-party trackers, and CLI telemetry asks for consent first. Vercel Web Analytics and Speed Insights on nuxt.com are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/nuxtjs
    note: Funded by sponsors and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - web
---
