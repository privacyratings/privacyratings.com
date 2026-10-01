---
name: Garmin Connect
description: Garmin's app and web service for syncing, analyzing and sharing activity, health and sleep data from Garmin watches and fitness devices.
website: https://connect.garmin.com
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
    evidence: https://www.garmin.com/en-US/privacy/connect/policy/
    note: The privacy policy lists Google Analytics and Firebase Crashlytics, which the Exodus report also finds in the Android app.
  no_ads:
    answer: yes
    evidence: https://play.google.com/store/apps/datasafety?id=com.garmin.android.apps.connectmobile
    note: Funded by device sales and subscriptions, with no ads. The Play data safety listing declares no sharing and no advertising use.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
