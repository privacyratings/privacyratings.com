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
    answer: partial
    evidence: https://readeck.org/en/privacy
    note: The server, browser extension and mobile apps have no telemetry or analytics, but the project website uses a self-hosted Umami analytics instance.
  no_ads:
    answer: yes
    evidence: https://readeck.org/en/privacy
    note: Free open-source software that uses no advertising services.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
