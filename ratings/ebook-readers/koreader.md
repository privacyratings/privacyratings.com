---
name: KOReader
description: Open-source document and e-book reader for E Ink devices such as Kindle, Kobo and PocketBook, also available for Android and Linux. Supports EPUB, PDF, DjVu, CBZ and more.
website: https://koreader.rocks
source: https://github.com/koreader/koreader
platforms:
  - android
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://raw.githubusercontent.com/koreader/koreader/master/COPYING
    note: Licensed under AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/org.koreader.launcher/latest/
    note: The Exodus report finds no trackers in the Android app, and the source code contains no analytics.
  no_ads:
    answer: yes
    evidence: https://raw.githubusercontent.com/koreader/koreader/master/README.md
    note: Free volunteer-developed software funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
