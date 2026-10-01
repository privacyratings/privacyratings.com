---
name: Skrooge
description: Open-source personal finance manager from KDE for tracking accounts, budgets, investments and scheduled operations, with reports and import from many file formats.
website: https://skrooge.org
source: https://invent.kde.org/office/skrooge
jurisdiction: DE
platforms:
  - windows
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://invent.kde.org/office/skrooge/-/blob/master/LICENSES/GPL-3.0-or-later.txt
    note: GPL-3.0-or-later.
  no_trackers:
    answer: partial
    evidence: https://kde.org/privacypolicy/
    note: The skrooge.org website uses KDE's self-hosted Matomo analytics. The application has no telemetry by default.
  no_ads:
    answer: yes
    evidence: https://kde.org/donate/
    note: Free software from the KDE community, funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
