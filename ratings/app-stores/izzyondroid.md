---
name: IzzyOnDroid
description: F-Droid compatible repository of free and open source Android apps, distributing APKs built and signed by their developers after security and library scans, with reproducible build checks.
website: https://izzyondroid.org
source: https://codeberg.org/IzzyOnDroid
platforms:
  - android
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://codeberg.org/IzzyOnDroid/repo
    note: The website and most repository scripts are public under GPL-2.0 and AGPL-3.0, but not all of the infrastructure is published.
  no_trackers:
    answer: yes
    evidence: https://izzyondroid.org/about/security/RepoBrowser/
    note: The repository browser loads no third-party resources or JavaScript.
  no_ads:
    answer: yes
    evidence: https://izzyondroid.org/
    note: Funded by donations and an NLnet NGI Mobifree grant.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_account_needed:
    answer: yes
    evidence: https://apt.izzysoft.de/fdroid/
    note: The repository is added to an F-Droid client by URL, and APKs can be downloaded directly, with no account.
  tracker_info:
    answer: yes
    evidence: https://apt.izzysoft.de/fdroid/index/apk/com.aurora.store
    note: Every app page lists its anti-features, permissions and library scan results.
---
