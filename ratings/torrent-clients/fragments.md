---
name: Fragments
description: BitTorrent client for the GNOME desktop, built on Transmission, with a torrent queue, magnet link detection from the clipboard and remote control of other Fragments or Transmission sessions.
website: https://apps.gnome.org/Fragments/
source: https://gitlab.gnome.org/World/Fragments
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.gnome.org/World/Fragments/-/blob/main/COPYING.md
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://gitlab.gnome.org/World/Fragments
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://apps.gnome.org/Fragments/
    note: Volunteer project funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
