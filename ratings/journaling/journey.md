---
name: Journey
description: Closed-source journal and diary app for Android, iOS, macOS, Windows and the web, with photos, location tagging, cloud sync and optional end-to-end encryption.
website: https://journey.cloud
jurisdiction: SG
platforms:
  - android
  - ios
  - macos
  - windows
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.journey.app/latest/
    note: Exodus finds Crashlytics and Firebase Analytics in the Android app, and the website uses Google Analytics.
  no_ads:
    answer: yes
    evidence: https://journey.cloud/policy
    note: Funded by Journey Membership subscriptions. The privacy policy states personal data is not sold or shared for advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
