---
name: Binance
description: Centralized cryptocurrency exchange offering spot, futures and other trading products, with custodial accounts that require identity verification.
website: https://www.binance.com
mainstream: true
platforms:
  - android
  - ios
  - web
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.binance.dev/latest/
    note: The Exodus report finds 7 trackers in the Android app, including AppsFlyer, Google Firebase Analytics, Pangle and Sensors Analytics.
  no_ads:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.binance.dev/latest/
    note: Funded by trading fees, but the Android app includes the Pangle ad network and AppsFlyer ad attribution SDKs.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
