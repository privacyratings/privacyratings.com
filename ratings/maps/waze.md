---
name: Waze
description: Community-driven navigation app owned by Google, with live traffic, hazard and police reports shared by drivers, route suggestions and fuel prices.
website: https://www.waze.com
mainstream: true
jurisdiction: IL
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.waze/latest/
    note: The Exodus report finds Google Crashlytics in the Android app, and the privacy policy covers collection of location, device and ad interaction data.
  no_ads:
    answer: no
    evidence: https://support.google.com/waze/answer/12075406
    note: Funded by advertising. The privacy policy says data is collected to show relevant ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
