---
name: WinDirStat
description: Disk usage analyzer for Windows that shows a sortable folder tree, file type statistics and a treemap, with duplicate file search and cleanup actions.
website: https://windirstat.net
source: https://github.com/windirstat/windirstat
platforms:
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/windirstat/windirstat/blob/master/LICENSE.md
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/windirstat/windirstat
    note: No telemetry or analytics in the source code, and no third-party trackers were found on the website.
  no_ads:
    answer: yes
    evidence: https://windirstat.net
    note: Free open-source volunteer project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://github.com/windirstat/windirstat
    note: The source code contains no network or update check code.
  no_account_needed:
    answer: yes
    evidence: https://windirstat.net
    note: No account needed. A portable build is available.
---
