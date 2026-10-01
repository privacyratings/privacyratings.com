---
name: Kindle
description: Amazon's e-book store, reading apps and E Ink e-readers. Books bought from Amazon use DRM and sync reading progress and notes through the user's Amazon account.
website: https://www.amazon.com/kindle-dbs/fd/kcp
aliases:
  - Amazon Kindle
mainstream: true
jurisdiction: US
platforms:
  - windows
  - macos
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.amazon.kindle/latest/
    note: The Android app contains Amazon Advertisement, Amazon Analytics, Bugsnag and Google Crashlytics.
  no_ads:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.amazon.kindle/latest/
    note: The Android app includes Amazon's advertising SDK, and Kindle e-readers sold with Special Offers show ads on the lock screen.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
