---
name: Disk Inventory X
description: Disk usage utility for macOS that shows files and folders as a treemap, with a layout algorithm based on KDirStat.
website: https://www.derlien.com
source: https://gitlab.com/tderlien/disk-inventory-x
platforms:
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/tderlien/disk-inventory-x/-/blob/master/COPYING
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://gitlab.com/tderlien/disk-inventory-x
    note: No telemetry or analytics in the source code, and no third-party trackers were found on the website.
  no_ads:
    answer: yes
    evidence: https://www.derlien.com
    note: Free app funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://gitlab.com/tderlien/disk-inventory-x
    note: The source code contains no network or update check code.
  no_account_needed:
    answer: yes
    evidence: https://www.derlien.com
    note: No account needed.
---
