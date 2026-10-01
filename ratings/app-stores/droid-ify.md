---
name: Droid-ify
description: Open source Android client for F-Droid repositories with background updates, several install methods and one-tap repository adding.
website: https://codeberg.org/droidify/client
source: https://codeberg.org/droidify/client
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/droidify/client/src/branch/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.looker.droidify/latest/
    note: Exodus Privacy finds no trackers in the app.
  no_ads:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.looker.droidify/latest/
    note: Free volunteer project with no ads or ad libraries.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_account_needed:
    answer: yes
    evidence: https://codeberg.org/droidify/client
    note: Apps are installed from F-Droid repositories with no account.
  tracker_info:
    answer: yes
    evidence: https://codeberg.org/droidify/client/src/branch/main/app/src/main/kotlin/com/looker/droidify/ui/appDetail/AppDetailAdapter.kt
    note: App pages show the anti-features declared in the repository metadata.
---
