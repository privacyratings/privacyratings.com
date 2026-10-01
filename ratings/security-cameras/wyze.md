---
name: Wyze
description: Low-cost smart home cameras, video doorbells and sensors with an app for live view, motion alerts and optional cloud recording through a Cam Plus subscription.
website: https://www.wyze.com
jurisdiction: US
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.hualai/latest/
    note: The Exodus report finds Amplitude, Google CrashLytics and Google Firebase Analytics in the Android app.
  no_ads:
    answer: partial
    evidence: https://www.wyze.com/policies/privacy-policy
    note: The privacy statement describes targeted advertising through ad partners, which may count as selling or sharing data under some state laws.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
