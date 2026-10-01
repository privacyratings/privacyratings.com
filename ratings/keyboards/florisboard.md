---
name: FlorisBoard
description: Open source keyboard for Android with glide typing, clipboard manager, emoji panel, themes and extension support, with no network access.
website: https://florisboard.org
platforms:
  - android
source: https://github.com/florisboard/florisboard
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/florisboard/florisboard/blob/main/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/dev.patrickgold.florisboard/latest/
    note: Exodus found no trackers, and the app has no network permission.
  no_ads:
    answer: yes
    evidence: https://github.com/florisboard/florisboard/blob/main/.github/FUNDING.yml
    note: Funded through GitHub Sponsors, Liberapay and PayPal donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://github.com/florisboard/florisboard/blob/main/app/src/main/AndroidManifest.xml
    note: The app does not request the internet permission.
---
