---
name: Thumb-Key
description: Open source Android keyboard with a compact 3x3 key grid and swipe gestures designed for typing with the thumbs, with layouts for many languages.
website: https://github.com/dessalines/thumb-key
platforms:
  - android
source: https://github.com/dessalines/thumb-key
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/dessalines/thumb-key/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.dessalines.thumbkey/latest/
    note: Exodus found no trackers, and the app has no network permission.
  no_ads:
    answer: yes
    evidence: https://github.com/dessalines/thumb-key
    note: Funded by donations through Liberapay and other platforms, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://github.com/dessalines/thumb-key/blob/main/app/src/main/AndroidManifest.xml
    note: The app does not request the internet permission.
---
