---
name: HeliBoard
description: Open source keyboard for Android based on AOSP LatinIME, with themes, clipboard history, multilingual typing and optional glide typing through a user-supplied library, without network access.
website: https://github.com/Helium314/HeliBoard
platforms:
  - android
source: https://github.com/Helium314/HeliBoard
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Helium314/HeliBoard/blob/main/LICENSE
    note: GPL-3.0, with parts inherited from AOSP under Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/helium314.keyboard/latest/
    note: Exodus found no trackers, and the app has no network permission.
  no_ads:
    answer: yes
    evidence: https://github.com/Helium314/HeliBoard/blob/main/.github/FUNDING.yml
    note: Volunteer project supported by Liberapay donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://github.com/Helium314/HeliBoard/blob/main/app/src/main/AndroidManifest.xml
    note: The app does not request the internet permission.
---
