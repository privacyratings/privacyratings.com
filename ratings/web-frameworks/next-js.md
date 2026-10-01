---
name: Next.js
description: React framework from Vercel for building web applications with server-side rendering, static generation and API routes.
website: https://nextjs.org
mainstream: true
source: https://github.com/vercel/next.js
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/vercel/next.js/blob/canary/license.md
    note: MIT-licensed.
  no_trackers:
    answer: no
    evidence: https://nextjs.org/telemetry
    note: The CLI sends anonymous telemetry by default until disabled, and nextjs.org loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://vercel.com/pricing
    note: Developed by Vercel and funded by its paid hosting platform, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - web
jurisdiction: US
---
