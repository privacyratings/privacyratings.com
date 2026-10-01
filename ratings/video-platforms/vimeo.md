---
name: Vimeo
description: Video hosting platform for creators and businesses, with ad-free playback, privacy controls, live streaming and video tools sold by subscription.
website: https://vimeo.com
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.vimeo.android.videoapp/latest/
    note: The Android app includes AppsFlyer, Firebase Analytics, Pendo and Swrve.
  no_ads:
    answer: partial
    evidence: https://vimeo.com/legal/privacy/us-state-notice
    note: Funded by subscriptions with no ads on videos, but the privacy notice discloses sale or sharing of data with third parties for targeted advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
