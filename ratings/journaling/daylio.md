---
name: Daylio
description: Closed-source mood tracker and micro-diary for Android and iOS where entries are made by picking moods and activities, with statistics and optional backups to Google Drive or iCloud. Entries are stored on the device.
website: https://daylio.net
mainstream: true
jurisdiction: SK
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/net.daylio/latest/
    note: Exodus finds Google Analytics, Firebase Analytics and Crashlytics in the Android app, and the privacy policy lists Firebase Analytics on iOS too.
  no_ads:
    answer: partial
    evidence: https://daylio.net/faq/privacy-policy/
    note: Funded by Premium subscriptions with no ads in the app, but the Google Advertising ID is used, with permission, to measure Daylio's own ad campaigns.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
