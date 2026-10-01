---
name: Remmina
description: Remote desktop client for Linux and other Unix-like systems that supports RDP, VNC, SPICE, SSH and other protocols through plugins, with a tabbed GTK interface.
website: https://remmina.org
source: https://gitlab.com/Remmina/Remmina
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/Remmina/Remmina/-/blob/master/COPYING
    note: GPL-2.0-or-later.
  no_trackers:
    answer: yes
    evidence: https://gitlab.com/Remmina/Remmina/-/blob/master/src/remmina_info.c
    note: The source states usage statistics collection was removed, news checks are off by default, and the website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://remmina.org/donations/
    note: Free volunteer project funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
