---
name: Kasts
description: Open source podcast app from KDE for Linux, Windows and Android, built with Kirigami for desktop and mobile, with episode downloads, streaming and optional sync through gpodder.net or Nextcloud.
website: https://apps.kde.org/kasts/
source: https://invent.kde.org/multimedia/kasts
platforms:
  - linux
  - windows
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/KDE/kasts/tree/master/LICENSES
    note: GPL-2.0-or-later and GPL-3.0-or-later, with some files under other OSI-approved licenses.
  no_trackers:
    answer: partial
    evidence: https://kde.org/privacypolicy/
    note: The app has no telemetry, but KDE websites use self-hosted Matomo analytics that respects Do Not Track.
  no_ads:
    answer: yes
    evidence: https://kde.org/donate/
    note: Developed by the KDE community, funded by donations to the non-profit KDE e.V., with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
