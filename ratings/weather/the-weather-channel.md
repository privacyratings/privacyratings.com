---
name: The Weather Channel
description: Weather forecast website and app from The Weather Company, with radar, severe weather alerts and news.
website: https://weather.com
aliases:
  - Weather.com
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.weather.Weather/latest/
    note: The Exodus report finds 16 trackers in the Android app, including Google AdMob, AppsFlyer, Amplitude, Facebook Ads and Taboola.
  no_ads:
    answer: no
    evidence: https://trust.weather.com/en-US/privacy/privacy-policy
    note: Funded by advertising. The privacy policy describes targeted advertising cookies and trackers used by advertising partners.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
