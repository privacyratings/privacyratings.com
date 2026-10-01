---
name: Pika Backup
description: Backup app for the GNOME desktop built on BorgBackup, with scheduled, deduplicated and encrypted backups to local drives or remote repositories.
website: https://apps.gnome.org/PikaBackup/
source: https://gitlab.gnome.org/World/pika-backup
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.gnome.org/World/pika-backup/-/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://gitlab.gnome.org/World/pika-backup
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://apps.gnome.org/PikaBackup/
    note: Free GNOME Circle app with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
