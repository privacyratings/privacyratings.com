---
name: GTK
description: Toolkit for building graphical user interfaces, written in C with bindings for many languages. It is developed by the GNOME project.
website: https://www.gtk.org
source: https://gitlab.gnome.org/GNOME/gtk
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.gnome.org/GNOME/gtk/-/blob/main/COPYING
    note: Licensed under the LGPL-2.1-or-later.
  no_trackers:
    answer: yes
    evidence: https://gitlab.gnome.org/GNOME/gtk
    note: No telemetry or analytics in the source code, and the gtk.org website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://donate.gnome.org/en/
    note: Supported by the GNOME Foundation through donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---
