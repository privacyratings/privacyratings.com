---
name: Neo Store
description: Open source Android client for F-Droid repositories with around a hundred built-in repositories, reproducible build labels and a privacy panel that lists trackers and permissions.
website: https://github.com/NeoApplications/Neo-Store
source: https://github.com/NeoApplications/Neo-Store
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/NeoApplications/Neo-Store/src/branch/master/COPYING
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.machiav3lli.fdroid/latest/
    note: Exodus Privacy finds no trackers in the app.
  no_ads:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.machiav3lli.fdroid/latest/
    note: Free volunteer project with no ads or ad libraries.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_account_needed:
    answer: yes
    evidence: https://codeberg.org/NeoApplications/Neo-Store
    note: Apps are installed from F-Droid repositories with no account.
  tracker_info:
    answer: yes
    evidence: https://codeberg.org/NeoApplications/Neo-Store/src/branch/master/src/main/res/values/strings.xml
    note: App pages show anti-features and a privacy panel with trackers by category.
---
