---
name: Rootkit Hunter
description: A shell-script scanner that checks Unix-like systems for rootkits, backdoors and local exploits by comparing file hashes and looking for suspicious files and settings. It has had no new release since version 1.4.6.
website: https://rkhunter.sourceforge.net
aliases:
  - rkhunter
source: https://sourceforge.net/p/rkhunter/rkh_code/ci/master/tree/
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://sourceforge.net/projects/rkhunter/
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://rkhunter.sourceforge.net
    note: No telemetry or analytics in the source code. It only contacts the network when the user asks it to check for updates.
  no_ads:
    answer: yes
    evidence: https://rkhunter.sourceforge.net
    note: Free volunteer project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
