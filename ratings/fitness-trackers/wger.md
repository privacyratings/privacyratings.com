---
name: wger
description: Open source workout and nutrition manager for planning routines, logging workouts, weight and meals, available as a self-hosted server, a free public instance at wger.de and mobile apps.
website: https://wger.de
source: https://github.com/wger-project/wger
platforms:
  - web
  - android
  - ios
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/wger-project/wger/blob/master/LICENSE.txt
    note: AGPL-3.0 for the server and the mobile app.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/de.wger.flutter/latest/
    note: The Exodus report finds no trackers in the Android app.
  no_ads:
    answer: yes
    evidence: https://liberapay.com/wger/
    note: Free open source project funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
