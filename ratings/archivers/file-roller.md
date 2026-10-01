---
name: File Roller
description: Open source archive manager for the GNOME desktop, also called Archive Manager, that creates, browses and extracts archives using tools such as tar, zip and 7z.
website: https://gitlab.gnome.org/GNOME/file-roller
source: https://gitlab.gnome.org/GNOME/file-roller
aliases:
  - Archive Manager
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.gnome.org/GNOME/file-roller/-/raw/master/COPYING
    note: GPL-2.0-or-later.
  no_trackers:
    answer: yes
    evidence: https://gitlab.gnome.org/GNOME/file-roller
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://donate.gnome.org/en/
    note: Developed by the GNOME project and funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
