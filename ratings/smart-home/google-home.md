---
name: Google Home
description: Google's smart home platform and app for setting up and controlling Nest speakers, displays, cameras and thermostats and other compatible devices, with Google Assistant or Gemini voice control.
website: https://home.google.com/welcome/
aliases:
  - Google Nest
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
    note: The Android app includes Google Firebase Analytics.
  no_ads:
    answer: no
    evidence: https://safety.google/products/nest/
    note: Part of Google's advertising business. Voice interactions with the Assistant may be used for ad personalization, though recordings and sensor data are not.
  independent_audit:
    answer: partial
    evidence: https://support.google.com/product-documentation/answer/10231940
    note: Nest devices are assessed by third-party labs such as DEKRA, but only short validation summaries are published.
---
