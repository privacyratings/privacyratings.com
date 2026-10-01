---
name: Vorta
description: Desktop front end for BorgBackup that schedules backups, browses archives and restores files. Works with local drives, SSH servers and hosted Borg repositories.
website: https://vorta.borgbase.com
source: https://github.com/borgbase/vorta
platforms:
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/borgbase/vorta/blob/master/LICENSE.txt
    note: GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://vorta.borgbase.com/
    note: The app has no telemetry, but the website loads self-hosted Umami analytics.
  no_ads:
    answer: yes
    evidence: https://github.com/borgbase/vorta
    note: Free open source project with no ads, supported by BorgBase and contributors.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
