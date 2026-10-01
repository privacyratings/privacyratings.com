---
name: AsteroidOS
description: Open source Linux distribution for smartwatches that replaces Wear OS on supported watches, with the AsteroidOS Sync companion app for Android.
website: https://asteroidos.org
source: https://github.com/AsteroidOS
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/AsteroidOS/asteroid/blob/2.0/LICENSE
    note: GPL-2.0 for the core, and the AsteroidOS Sync app is GPL-3.0. Some watches rely on proprietary hardware drivers from the original Android firmware.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/org.asteroidos.sync/latest/
    note: The Exodus report finds no trackers in the AsteroidOS Sync app, and the website loads no known trackers.
  no_ads:
    answer: yes
    evidence: https://asteroidos.org/
    note: Free open source project developed by volunteers, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
