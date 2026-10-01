---
name: KMyMoney
description: Open-source double-entry personal finance manager from KDE for Linux, Windows and macOS, with budgets, investments, scheduled transactions and bank statement import.
website: https://kmymoney.org
source: https://invent.kde.org/office/kmymoney
jurisdiction: DE
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://invent.kde.org/office/kmymoney/-/tree/master/LICENSES
    note: GPL-2.0-or-later, with some files under other GPL-compatible licenses.
  no_trackers:
    answer: yes
    evidence: https://kde.org/privacypolicy-apps/
    note: The KDE applications privacy policy says any telemetry is opt-in and off by default, and the kmymoney.org website loads no analytics.
  no_ads:
    answer: yes
    evidence: https://kde.org/donate/
    note: Free software from the KDE community, funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
