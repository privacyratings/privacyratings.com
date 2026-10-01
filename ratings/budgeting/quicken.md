---
name: Quicken
description: Personal finance software from Quicken Inc., including the Quicken Classic desktop app and the Quicken Simplifi web and mobile app, for budgeting, bill tracking and investment tracking.
website: https://www.quicken.com
mainstream: true
jurisdiction: US
platforms:
  - windows
  - macos
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.quicken.qm2014/latest/
    note: The Exodus report finds 7 trackers in the Android app, including AppsFlyer, Google AdMob, Google Firebase Analytics, Mixpanel and Pendo.
  no_ads:
    answer: no
    evidence: https://www.quicken.com/privacy-us/us/
    note: Funded by subscriptions, but the privacy statement allows third-party advertising companies to collect information on its website through cookies.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
