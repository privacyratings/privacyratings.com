---
name: GPaste
description: Open-source clipboard manager for GNOME, made of a daemon, a GTK interface, a GNOME Shell extension and a command-line client, with optional encrypted history.
website: https://github.com/Keruspe/GPaste
source: https://github.com/Keruspe/GPaste
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Keruspe/GPaste/blob/master/COPYING
    note: BSD-2-Clause.
  no_trackers:
    answer: yes
    evidence: https://github.com/Keruspe/GPaste
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/Keruspe/GPaste
    note: Free open-source app with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
