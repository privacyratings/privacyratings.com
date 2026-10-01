---
name: F-Droid
description: F-Droid is an installable catalogue of FOSS applications for Android. The client enables you to browse, install, and keep track of updates on your device.
website: https://f-droid.org
source: https://gitlab.com/fdroid/fdroidclient
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/fdroid/fdroidclient/-/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://gitlab.com/fdroid/fdroidclient/-/blob/master/app/src/main/kotlin/org/fdroid/App.kt
    note: The only library Exodus flags is ACRA, which the client uses to let users send crash reports by email after confirming a dialog.
  no_ads:
    answer: yes
    evidence: https://f-droid.org/donate/
    note: Funded by donations, with no ads.
  independent_audit:
    answer: partial
    evidence: https://f-droid.org/docs/Second_Audit_Report/
    note: Radically Open Security audited the client, server and website; the full report is public but older than three years.
  no_account_needed:
    answer: yes
    evidence: https://f-droid.org/en/about/
    note: No account is needed to download apps.
  tracker_info:
    answer: yes
    evidence: https://f-droid.org/docs/Anti-Features/
    note: Apps are marked with anti-features such as tracking, ads and non-free network services.
imported_from: awesome-privacy
---
