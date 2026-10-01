---
name: BorgBackup
description: Deduplicating command-line backup program with compression and authenticated encryption. Backs up to local disks or remote servers over SSH.
website: https://www.borgbackup.org
source: https://github.com/borgbackup/borg
platforms:
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/borgbackup/borg/blob/master/LICENSE
    note: BSD-3-Clause.
  no_trackers:
    answer: yes
    evidence: https://github.com/borgbackup/borg
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://www.borgbackup.org/support/fund.html
    note: Funded by donations and bounties, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
