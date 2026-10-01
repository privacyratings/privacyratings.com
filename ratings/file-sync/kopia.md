---
name: Kopia
description: Backup tool with a command-line interface and a desktop app, offering deduplication, compression and end-to-end encryption. Stores snapshots on local disks, SFTP, WebDAV and cloud storage.
website: https://kopia.io
source: https://github.com/kopia/kopia
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/kopia/kopia/blob/master/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: no
    evidence: https://kopia.io/
    note: The app has no telemetry, but the website loads Google Analytics after cookie consent.
  no_ads:
    answer: yes
    evidence: https://kopia.io/
    note: Free open source project with no ads or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
