---
name: Karakeep
description: Bookmark manager, formerly called Hoarder, for saving links, notes, images and PDFs with full-text search, page archiving and optional AI tagging; it can be self-hosted or used as the paid Karakeep Cloud.
website: https://karakeep.app
aliases:
  - Hoarder
source: https://github.com/karakeep-app/karakeep
jurisdiction: GB
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/karakeep-app/karakeep/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://karakeep.app/privacy/
    note: The apps have no telemetry by default and no third-party tracking cookies, but the website uses Cloudflare Web Analytics, a cookieless analytics service.
  no_ads:
    answer: yes
    evidence: https://karakeep.app/pricing/
    note: Funded by Karakeep Cloud subscriptions; the self-hosted version is free, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
