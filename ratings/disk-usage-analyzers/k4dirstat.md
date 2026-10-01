---
name: K4DirStat
description: KDE port of the original KDirStat disk usage analyzer for Linux, with a folder tree, a treemap and cleanup actions.
website: https://github.com/jeromerobert/k4dirstat
source: https://github.com/jeromerobert/k4dirstat
aliases:
  - KDirStat
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/jeromerobert/k4dirstat/blob/master/COPYING
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/jeromerobert/k4dirstat
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/jeromerobert/k4dirstat
    note: Free volunteer project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://github.com/jeromerobert/k4dirstat
    note: No network code of its own. Remote folders are read through KDE's KIO only when the user opens them.
  no_account_needed:
    answer: yes
    evidence: https://github.com/jeromerobert/k4dirstat
    note: No account needed.
---
