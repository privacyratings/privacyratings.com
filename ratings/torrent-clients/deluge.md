---
name: Deluge
description: BitTorrent client built on libtorrent with a client-server design, so a daemon can run on a headless machine and be controlled from GTK, web or console interfaces. Most features come as plugins.
website: https://deluge-torrent.org
source: https://github.com/deluge-torrent/deluge
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/deluge-torrent/deluge/blob/develop/LICENSE
    note: GPL-3.0 with an OpenSSL linking exception.
  no_trackers:
    answer: yes
    evidence: https://github.com/deluge-torrent/deluge/blob/develop/deluge/core/preferencesmanager.py
    note: No analytics in the apps or website. The option to send anonymous usage statistics is off by default.
  no_ads:
    answer: yes
    evidence: https://deluge-torrent.org/about/
    note: Volunteer-developed free software with no ads or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
