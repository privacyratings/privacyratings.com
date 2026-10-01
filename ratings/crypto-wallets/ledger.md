---
name: Ledger
description: Hardware wallets that keep private keys in a secure element chip, managed through the Ledger Wallet app. The optional paid Ledger Recover service can back up an encrypted, split copy of the recovery phrase with third-party companies.
website: https://www.ledger.com
mainstream: true
source: https://github.com/LedgerHQ/ledger-live
jurisdiction: FR
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://www.ledger.com/academy/topics/ledgersolutions/is-ledger-open-source
    note: The Ledger Wallet app, SDK and device apps are open source (Ledger Wallet under MIT), but the low-level secure element operating system code is closed.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.ledger.live/latest/
    note: The Exodus report finds Google AdMob and Google Firebase Analytics in the Android app, and the website uses Contentsquare, Hotjar and advertising cookies.
  no_ads:
    answer: no
    evidence: https://shop.ledger.com/pages/cookie-policy
    note: Funded by hardware sales, but the cookie policy lists targeting cookies from Facebook, Google, LinkedIn, Twitter and Snapchat that build interest profiles for ads.
  independent_audit:
    answer: partial
    evidence: https://www.ledger.com/academy/topics/ledgersolutions/is-ledger-open-source
    note: Ledger states a third-party security laboratory audits the operating system before each release, but the reports are not public.
---
