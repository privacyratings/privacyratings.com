---
name: Strawberry
description: Open source music player and collection organizer for audiophiles, forked from Clementine, with tag editing, lyrics, scrobbling and streaming from Subsonic, Tidal and Qobuz. Windows and macOS builds are for sponsors.
website: https://www.strawberrymusicplayer.org
source: https://github.com/strawberrymusicplayer/strawberry
platforms:
  - linux
  - windows
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/strawberrymusicplayer/strawberry/blob/master/COPYING
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/strawberrymusicplayer/strawberry
    note: No telemetry or analytics in the source code, and the project website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://www.strawberrymusicplayer.org
    note: Funded by sponsorships through Patreon, GitHub, Ko-fi and PayPal, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
