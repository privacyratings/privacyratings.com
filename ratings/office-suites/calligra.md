---
name: Calligra
description: Office and graphics suite from KDE with Words, Sheets, Stage, Karbon and other apps, using OpenDocument as its native file format.
website: https://calligra.org
source: https://invent.kde.org/office/calligra
jurisdiction: DE
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://invent.kde.org/office/calligra/-/blob/master/COPYING
    note: GPL-2.0-or-later.
  no_trackers:
    answer: yes
    evidence: https://kde.org/privacypolicy-apps/
    note: KDE apps only send telemetry if the user opts in, and the Calligra website has no analytics.
  no_ads:
    answer: yes
    evidence: https://kde.org/donate/
    note: Developed by the KDE community, which is funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
