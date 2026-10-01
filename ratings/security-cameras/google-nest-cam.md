---
name: Google Nest Cam
description: Google's indoor and outdoor security cameras and video doorbells, managed in the Google Home app, with optional cloud video history through a Google subscription.
website: https://store.google.com/category/nest_cams
aliases:
  - Nest Cam
mainstream: true
jurisdiction: US
platforms:
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.google.android.apps.chromecast.app/latest/
    note: The Exodus report finds Google Firebase Analytics in the Google Home app, and the Play data safety listing declares collection of app interactions and diagnostics for analytics.
  no_ads:
    answer: no
    evidence: https://safety.google/products/nest/
    note: Google keeps camera video, audio and sensor readings out of ad personalization, but other Google Home and Assistant interactions may be used for personalized ads.
  independent_audit:
    answer: partial
    evidence: https://support.google.com/product-documentation/answer/10231940
    note: Google publishes short summaries of third-party security validations for each Nest camera, not full audit reports.
---
