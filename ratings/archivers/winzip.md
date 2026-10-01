---
name: WinZip
description: Commercial file archiver for Windows and macOS, with mobile apps, that creates and extracts ZIP and other archive formats, with encryption, cloud storage integration and PDF tools. Sold by Corel Corporation.
website: https://www.winzip.com
mainstream: true
jurisdiction: CA
platforms:
  - windows
  - macos
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.corel.com/en/privacy/
    note: The website loads Google Tag Manager and Optimizely, and the apps collect product usage data such as feature use, a hardware fingerprint and installed software.
  no_ads:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.winzip.android/latest/
    note: The Android app includes the Google AdMob ad SDK, and the privacy statement uses website data for interest-based advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
