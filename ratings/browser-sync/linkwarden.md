---
name: Linkwarden
description: Bookmark manager that saves full copies of pages as HTML, screenshots and PDF, with collections, tags, reader view and highlights; it can be self-hosted or used as a paid cloud service.
website: https://linkwarden.app
source: https://github.com/linkwarden/linkwarden
jurisdiction: CA
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/linkwarden/linkwarden/blob/main/LICENSE.md
    note: AGPL-3.0.
  no_trackers:
    answer: no
    evidence: https://github.com/linkwarden/linkwarden/blob/main/apps/mobile/app/_layout.tsx
    note: The mobile app sends error reports to Sentry with no setting to turn it off, and the privacy policy lists third-party tracking cookies on the website.
  no_ads:
    answer: yes
    evidence: https://linkwarden.app/pricing
    note: Funded by paid cloud subscriptions; the self-hosted version is free, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
