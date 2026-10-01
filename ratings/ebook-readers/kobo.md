---
name: Kobo
description: E-book and audiobook store, reading apps and E Ink e-readers from Rakuten Kobo Inc. in Toronto. Supports EPUB and syncs reading progress through a Kobo account.
website: https://www.kobo.com
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.kobobooks.android/latest/
    note: The Android app contains Google Firebase Analytics and Facebook SDKs.
  no_ads:
    answer: no
    evidence: https://authorize.kobo.com/terms/privacypolicy
    note: The privacy policy describes personalized advertising and sharing email addresses and site activity with third parties for advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
