---
name: Google Photos
description: Google's photo and video backup and sharing service, with automatic phone upload, face grouping, search and editing tools.
website: https://www.google.com/photos/about/
mainstream: true
jurisdiction: US
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Google collects activity, device and usage data across its services, the Android app includes Google Firebase Analytics per Exodus Privacy, and the website loads Google Analytics (automated test).
  no_ads:
    answer: yes
    evidence: https://safety.google/products/photos/
    note: No ads in Google Photos, and Google states photos and videos are not sold or used for advertising. Extra storage is sold as a subscription.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
