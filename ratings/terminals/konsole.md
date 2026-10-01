---
name: Konsole
description: Terminal emulator from KDE with tabs, split views, profiles, bookmarks and search.
website: https://apps.kde.org/konsole/
source: https://invent.kde.org/utilities/konsole
jurisdiction: DE
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://apps.kde.org/konsole/
    note: GPL-2.0-or-later.
  no_trackers:
    answer: partial
    evidence: https://kde.org/privacypolicy/
    note: KDE websites use a self-hosted, cookieless Matomo instance. KDE apps only send usage data after opt-in.
  no_ads:
    answer: yes
    evidence: https://kde.org/donate/
    note: KDE community project funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
