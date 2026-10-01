---
name: Turbopack
description: Incremental bundler written in Rust and built into Next.js, used by the Next.js development server and production builds.
website: https://nextjs.org/docs/app/api-reference/turbopack
source: https://github.com/vercel/next.js
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/vercel/next.js/blob/canary/license.md
    note: MIT, developed in the Next.js repository.
  no_trackers:
    answer: no
    evidence: https://vercel.com/legal/privacy-notice
    note: Next.js sends anonymous usage telemetry by default with an opt-out, and the Vercel privacy notice says its sites use cookies for analytics and targeted advertising.
  no_ads:
    answer: partial
    evidence: https://vercel.com/legal/privacy-notice
    note: Free software with no ads, but Vercel shares site data with advertising networks to promote its own services.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
