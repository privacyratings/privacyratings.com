---
name: Readeck
description: Self-hosted read-it-later and bookmark application that saves articles, pictures and video transcripts, with labels, highlights, collections, e-book export and a browser extension.
website: https://readeck.org
source: https://codeberg.org/readeck/readeck
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/readeck/readeck/src/branch/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://readeck.org/en/privacy
    note: No third-party trackers, and the server, extension and apps have no telemetry. The website's self-hosted Umami analytics are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://readeck.org/en/privacy
    note: Free open-source software that uses no advertising services.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
