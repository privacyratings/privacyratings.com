---
name: Audacious
description: Open source audio player for Linux, BSD, macOS and Windows with Qt and GTK interfaces, Winamp Classic skin support and plugins for effects, lyrics and visualizations.
website: https://audacious-media-player.org
source: https://github.com/audacious-media-player/audacious
platforms:
  - linux
  - windows
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/audacious-media-player/audacious/blob/master/COPYING
    note: BSD-2-Clause.
  no_trackers:
    answer: yes
    evidence: https://github.com/audacious-media-player/audacious
    note: No telemetry or analytics in the source code, and the project website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/audacious-media-player/audacious
    note: Volunteer-maintained free software with no ads or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
