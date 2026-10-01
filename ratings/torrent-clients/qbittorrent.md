---
name: qBittorrent
description: Cross-platform BitTorrent client with a built-in search engine, RSS feed downloading and an optional web interface for remote control.
website: https://www.qbittorrent.org
source: https://github.com/qbittorrent/qBittorrent
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/qbittorrent/qBittorrent/blob/master/COPYING
    note: GPL-2.0 or later.
  no_trackers:
    answer: yes
    evidence: https://github.com/qbittorrent/qBittorrent
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://www.qbittorrent.org/donate
    note: Volunteer project funded by donations, with no ads or bundled software.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
