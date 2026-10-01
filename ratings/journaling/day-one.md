---
name: Day One
description: Closed-source journaling app from Automattic for iOS, Android, macOS, Windows and the web, with photos, audio, templates, cloud sync and end-to-end encrypted journals.
website: https://dayoneapp.com
mainstream: true
jurisdiction: US
platforms:
  - ios
  - android
  - macos
  - windows
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.dayoneapp.dayone/latest/
    note: The website uses Google Analytics, and Exodus finds Sentry and OpenTelemetry in the Android app.
  no_ads:
    answer: yes
    evidence: https://dayoneapp.com/privacy-policy/
    note: Funded by Day One Gold subscriptions. The privacy policy states personal data is not sold or shared for advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
