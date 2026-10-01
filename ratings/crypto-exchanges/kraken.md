---
name: Kraken
description: Centralized cryptocurrency exchange from Payward for buying, selling and trading crypto, with custodial accounts that require identity verification.
website: https://www.kraken.com
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.kraken.invest.app/latest/
    note: The Exodus report finds AppsFlyer, FullStory, Google Firebase Analytics and Sentry in the Android app.
  no_ads:
    answer: partial
    evidence: https://www.kraken.com/legal/privacy
    note: Funded by trading fees. The privacy policy says data is not sold for money, but identifiers are shared with advertising partners and ad networks.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
