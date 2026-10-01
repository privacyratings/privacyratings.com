---
name: YouTube
description: Video sharing platform owned by Google for uploading, watching and live streaming videos, with an optional paid Premium plan.
website: https://www.youtube.com
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.google.android.youtube/latest/
    note: The Android app includes Firebase Analytics, and watch and search history is used for recommendations and ads unless turned off.
  no_ads:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Funded mainly by targeted advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
