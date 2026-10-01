---
name: Scrambled Exif
description: Android app that removes Exif metadata from pictures before they are shared, by acting as an intermediate step in the share menu.
website: https://gitlab.com/juanitobananas/scrambled-exif
source: https://gitlab.com/juanitobananas/scrambled-exif
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/juanitobananas/scrambled-exif/-/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.jarsilio.android.scrambledeggsif/latest/
    note: Exodus finds no trackers, and the privacy policy states the developer collects no personal data; crash reports are only sent by email if the user chooses.
  no_ads:
    answer: yes
    evidence: https://gitlab.com/juanitobananas/scrambled-exif#donating
    note: Free software with no ads, supported by donations.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
