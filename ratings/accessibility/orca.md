---
name: Orca
description: Free, open source screen reader for Linux desktops that gives access to applications through speech and braille, using the AT-SPI accessibility framework. Part of the GNOME project.
website: https://orca.gnome.org
source: https://gitlab.gnome.org/GNOME/orca
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/GNOME/orca/blob/main/COPYING
    note: LGPL-2.1.
  no_trackers:
    answer: yes
    evidence: https://github.com/GNOME/orca
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://donate.gnome.org/en/
    note: Part of the GNOME project, supported by donations to the non-profit GNOME Foundation, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
