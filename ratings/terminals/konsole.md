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
    answer: yes
    evidence: https://kde.org/privacypolicy/
    note: No third-party trackers, and KDE app telemetry is opt-in. KDE websites use self-hosted Matomo with cookies disabled and IP addresses anonymized.
  no_ads:
    answer: yes
    evidence: https://kde.org/donate/
    note: KDE community project funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
