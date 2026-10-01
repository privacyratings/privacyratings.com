---
name: Déjà Dup
description: Backup app for the GNOME desktop that schedules encrypted, incremental backups to local drives, network servers or cloud storage, using restic or duplicity.
website: https://apps.gnome.org/DejaDup/
source: https://gitlab.gnome.org/World/deja-dup
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.gnome.org/World/deja-dup/-/blob/main/LICENSES/GPL-3.0-or-later.md
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://gitlab.gnome.org/World/deja-dup
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://apps.gnome.org/DejaDup/
    note: Free GNOME app with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
