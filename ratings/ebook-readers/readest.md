---
name: Readest
description: Open-source e-book reader for desktop, mobile and web, with optional cloud sync of books, progress and notes.
website: https://readest.com
source: https://github.com/readest/readest
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
    evidence: https://raw.githubusercontent.com/readest/readest/main/LICENSE
    note: Licensed under AGPL-3.0.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.bilingify.readest/latest/
    note: The Android app includes Sentry crash reporting, usage analytics are on until turned off, and the website loads Google Analytics.
  no_ads:
    answer: yes
    evidence: https://readest.com/privacy-policy
    note: No ads. The privacy policy states data is not sold to third parties.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
