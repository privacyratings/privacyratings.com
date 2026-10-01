---
name: gocryptfs
description: Open source encrypted overlay filesystem that runs as a FUSE mount and stores each file as a separate encrypted file, suited to cloud-synced folders. Also has a reverse mode for encrypted backups.
website: https://nuetzlich.net/gocryptfs/
source: https://github.com/rfjakob/gocryptfs
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/rfjakob/gocryptfs/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/rfjakob/gocryptfs
    note: No telemetry or analytics in the source code. The website loads no third-party scripts.
  no_ads:
    answer: yes
    evidence: https://github.com/rfjakob/gocryptfs
    note: Free volunteer project with no ads or paid tiers.
  independent_audit:
    answer: partial
    evidence: https://defuse.ca/audits/gocryptfs.htm
    note: A full audit by Taylor Hornby of Defuse Security is published, but it is older than three years.
---
