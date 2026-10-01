---
name: Google Maps
description: Google's mapping and navigation service with traffic, public transit, Street View, business listings and reviews, available on the web and as mobile apps.
website: https://www.google.com/maps
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.google.android.apps.maps/latest/
    note: The Exodus report finds Google Firebase Analytics in the Android app, and Google's privacy policy covers collection of location and activity data.
  no_ads:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Funded by advertising. The privacy policy says Google uses collected data to show personalized ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
