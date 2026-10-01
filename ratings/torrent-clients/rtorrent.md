---
name: rTorrent
description: Text-based BitTorrent client for the terminal, built on libtorrent, with an ncurses interface, scripting through its configuration file and an XML-RPC interface used by web front ends.
website: https://github.com/rakshasa/rtorrent
source: https://github.com/rakshasa/rtorrent
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/rakshasa/rtorrent/blob/master/COPYING
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/rakshasa/rtorrent
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/rakshasa/rtorrent#donate-to-rtorrent-development
    note: Funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
