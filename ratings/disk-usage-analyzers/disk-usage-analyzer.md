---
name: Disk Usage Analyzer
description: GNOME's disk usage app, also known as Baobab. It scans folders, drives and remote locations and shows sizes as a tree with a ring or treemap chart.
website: https://apps.gnome.org/Baobab/
source: https://gitlab.gnome.org/GNOME/baobab
aliases:
  - Baobab
  - GNOME Disk Usage Analyzer
jurisdiction: US
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.gnome.org/GNOME/baobab/-/blob/main/COPYING
    note: GPL-2.0-or-later.
  no_trackers:
    answer: yes
    evidence: https://apps.gnome.org/Baobab/
    note: No telemetry or analytics in the source code, and no third-party trackers were found on the website.
  no_ads:
    answer: yes
    evidence: https://apps.gnome.org/Baobab/
    note: Free GNOME project supported by donations to the GNOME Foundation, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://gitlab.gnome.org/GNOME/baobab
    note: The app makes no network requests of its own. Remote locations are scanned only when the user opens them.
  no_account_needed:
    answer: yes
    evidence: https://apps.gnome.org/Baobab/
    note: No account needed.
---
