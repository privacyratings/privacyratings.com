---
name: Zoiper
description: SIP softphone from Securax in Bulgaria for desktop and mobile, with a free version and a paid Pro licence that adds features.
website: https://www.zoiper.com
jurisdiction: BG
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.zoiper.android.app/latest/
    note: The Android app includes Google Firebase Analytics, and the website uses Google Analytics.
  no_ads:
    answer: yes
    evidence: https://www.zoiper.com/en/shop/buy/zoiper5
    note: Funded by paid licences. No ad SDKs are found in the Android app.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
