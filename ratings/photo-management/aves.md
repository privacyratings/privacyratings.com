---
name: Aves
description: Gallery and metadata explorer for Android that handles images, videos and formats such as multi-page TIFF, SVG, motion photos and panoramas, with albums, tags, maps and search.
website: https://github.com/deckerst/aves
source: https://github.com/deckerst/aves
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/deckerst/aves/blob/develop/LICENSE
    note: BSD-3-Clause.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/deckers.thibault.aves.libre/latest/
    note: The F-Droid build has no trackers. The Google Play build includes Firebase Crashlytics, which stays off unless error reporting is turned on.
  no_ads:
    answer: yes
    evidence: https://github.com/deckerst/aves
    note: Free app funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
