---
name: Money Manager Ex
description: Open-source personal finance app for Windows, macOS, Linux and Android for tracking accounts, budgets, investments and scheduled transactions, with data stored in a local database.
website: https://moneymanagerex.org
source: https://github.com/moneymanagerex/moneymanagerex
platforms:
  - windows
  - macos
  - linux
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/moneymanagerex/moneymanagerex/blob/master/LICENSE
    note: GPL-2.0.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.money.manager.ex/latest/
    note: The Exodus report finds Amplitude in the Android app, and the website loads Google Analytics.
  no_ads:
    answer: partial
    evidence: https://moneymanagerex.org/
    note: The desktop program is funded by donations with no ads, but the website shows Google AdSense ads, with ad personalization only after cookie consent.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
