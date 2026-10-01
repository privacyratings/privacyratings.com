---
name: Notesnook
description: End-to-end encrypted note-taking app with rich text notes, notebooks, tags, app lock and private vault. Open source clients and sync server; paid plans add storage and features.
website: https://notesnook.com
source: https://github.com/streetwriters/notesnook
jurisdiction: PK
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
    evidence: https://github.com/streetwriters/notesnook/blob/master/LICENSE
    note: GPL-3.0 for the apps. The sync server is AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://notesnook.com/privacy
    note: First-party usage telemetry is on by default and can be turned off in settings, and the website uses self-hosted Umami analytics. Exodus finds no trackers in the Android app.
  no_ads:
    answer: yes
    evidence: https://notesnook.com/pricing
    note: Funded by paid subscriptions. The privacy policy states user data is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
