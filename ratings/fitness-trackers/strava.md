---
name: Strava
description: Social fitness app and service for recording runs, rides and other workouts with GPS, sharing them with followers and comparing efforts on segments, with a paid subscription tier.
website: https://www.strava.com
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.strava/latest/
    note: The Exodus report finds Branch, Facebook Analytics, Google Firebase Analytics, Sentry and other trackers in the Android app.
  no_ads:
    answer: no
    evidence: https://www.strava.com/legal/privacy
    note: The privacy policy describes sponsored content and sharing personal information with third-party advertising networks for targeted advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
