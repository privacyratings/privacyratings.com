---
name: Mapy.com
description: Map and navigation service from the Czech company Seznam.cz, formerly Mapy.cz, with offline maps, tourist and cycling routes, and a web version. Coverage is most detailed in Central Europe.
website: https://mapy.com/en/
jurisdiction: CZ
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/cz.seznam.mapy/latest/
    note: The Exodus report finds AppsFlyer, Google Firebase Analytics, Google Crashlytics, Huawei Mobile Services and OneSignal in the Android app.
  no_ads:
    answer: no
    evidence: https://o-seznam.cz/pravni-informace/ochrana-udaju/
    note: Seznam's privacy policy covers personalized advertising, and the website loads Seznam's ad platform scripts.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
