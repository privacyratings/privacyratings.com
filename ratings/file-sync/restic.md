---
name: restic
description: Command-line backup program with deduplication and end-to-end encryption. Backs up to local disks, SFTP, REST servers and cloud storage such as S3, Backblaze B2 and Azure.
website: https://restic.net
source: https://github.com/restic/restic
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/restic/restic/blob/master/LICENSE
    note: BSD-2-Clause.
  no_trackers:
    answer: yes
    evidence: https://github.com/restic/restic
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://restic.net/
    note: Free volunteer project with no ads or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
