---
name: OpenTracks
description: Open source Android sport tracker that records runs, rides and hikes with GPS and Bluetooth sensors, with no analytics and no cloud account.
website: https://opentracksapp.com
source: https://codeberg.org/OpenTracksApp/OpenTracks
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/OpenTracksApp/OpenTracks/src/branch/main/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/de.dennisguse.opentracks/latest/
    note: The Exodus report finds no trackers, and the website states the app contains no in-app analytics.
  no_ads:
    answer: yes
    evidence: https://liberapay.com/OpenTracks/
    note: Free app funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
