---
name: Coinbase Wallet
description: Self-custodial crypto wallet app from Coinbase for holding and trading tokens and using onchain apps, with optional smart contract accounts and messaging. Formerly branded as Base App.
website: https://wallet.coinbase.com
family: coinbase
aliases:
  - Base App
mainstream: true
jurisdiction: BM
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/org.toshi/latest/
    note: The Exodus report finds 7 trackers in the Android app, including Amplitude, AppsFlyer, Branch and Google Firebase Analytics.
  no_ads:
    answer: no
    evidence: https://wallet.coinbase.com/privacy-policy
    note: The privacy policy describes ads shown in the app and ad attribution data shared with third-party advertising partners.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
