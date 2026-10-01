---
name: QDirStat
description: Qt-based disk usage analyzer for Linux, BSD and macOS by the author of the original KDirStat. It shows a folder tree and treemap, with cleanup actions and views by file type, age and installed package.
website: https://github.com/shundhammer/qdirstat
source: https://github.com/shundhammer/qdirstat
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/shundhammer/qdirstat/blob/master/LICENSE
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/shundhammer/qdirstat
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/shundhammer/qdirstat
    note: Free volunteer project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://github.com/shundhammer/qdirstat
    note: The source code does not use Qt's network module and makes no network requests.
  no_account_needed:
    answer: yes
    evidence: https://github.com/shundhammer/qdirstat
    note: No account needed.
---
