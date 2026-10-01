---
name: Okular
description: KDE document viewer for PDF, EPUB, DjVu, comic books and other formats, with annotations, form filling and digital signatures.
website: https://okular.kde.org
source: https://invent.kde.org/graphics/okular
jurisdiction: DE
platforms:
  - windows
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://invent.kde.org/graphics/okular/-/blob/master/LICENSES/GPL-2.0-or-later.txt
    note: GPL-2.0-or-later.
  no_trackers:
    answer: yes
    evidence: https://kde.org/privacypolicy-apps/
    note: No third-party trackers, and KDE app telemetry is opt-in. KDE websites use self-hosted Matomo with cookies disabled and IP addresses anonymized.
  no_ads:
    answer: yes
    evidence: https://kde.org/donate/
    note: Developed by the KDE community, which is funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
