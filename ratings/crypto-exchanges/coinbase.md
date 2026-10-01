---
name: Coinbase
description: Centralized cryptocurrency exchange and custodial platform for buying, selling, storing and staking crypto. Accounts require identity verification.
website: https://www.coinbase.com
family: coinbase
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.coinbase.android/latest/
    note: The Exodus report finds 7 trackers in the Android app, including Amplitude, AppsFlyer, Facebook SDKs and Google Firebase Analytics.
  no_ads:
    answer: no
    evidence: https://www.coinbase.com/legal/privacy
    note: Funded by trading fees, but the privacy policy says conversion data including IP addresses is shared with advertisers such as Meta and AppLovin to target ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
