---
name: AccuWeather
description: Weather forecast website and app from AccuWeather, with hourly and daily forecasts, radar and severe weather alerts.
website: https://www.accuweather.com
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.accuweather.android/latest/
    note: The Exodus report finds Google AdMob, Google Crashlytics, Google Firebase Analytics and Urban Airship in the Android app.
  no_ads:
    answer: no
    evidence: https://www.accuweather.com/en/privacy
    note: Funded by advertising. The privacy policy says data collected through cookies for targeted advertising may be considered a sale or sharing under California law.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
