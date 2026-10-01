---
name: Celluloid
description: Open source GTK front end for the mpv video player on Linux, with a GNOME-style interface, playlists and mpv configuration and script support.
website: https://celluloid-player.github.io
source: https://github.com/celluloid-player/celluloid
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/celluloid-player/celluloid/blob/master/COPYING
    note: GPL-3.0-or-later.
  no_trackers:
    answer: yes
    evidence: https://github.com/celluloid-player/celluloid
    note: No telemetry or analytics in the source code, and the project website loads no scripts.
  no_ads:
    answer: yes
    evidence: https://github.com/celluloid-player/celluloid
    note: Volunteer-maintained free software with no ads or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
