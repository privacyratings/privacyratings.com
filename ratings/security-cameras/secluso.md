---
name: Secluso
description: Open source, end-to-end encrypted home security camera system for the Raspberry Pi Zero 2 W, with mobile apps for live video, alerts and recordings through a relay that cannot decrypt footage.
website: https://secluso.com
source: https://github.com/secluso/secluso
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/secluso/secluso/blob/main/LICENSE
    note: GPL-3.0. The mobile app is also GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.secluso.mobile/latest/
    note: The Exodus report finds no trackers in the Android app, and the website loads no known trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/secluso/secluso
    note: Free open source software with no ads. Users run their own relay server or a beta relay offered by the developer.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
