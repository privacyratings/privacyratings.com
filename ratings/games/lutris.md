---
name: Lutris
description: Open source game manager for Linux that installs and launches games from GOG, Steam, Epic and other stores, emulators and Windows games through Wine, using community install scripts from lutris.net.
website: https://lutris.net
source: https://github.com/lutris/lutris
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/lutris/lutris/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://lutris.net/
    note: No telemetry in the client, but the website loads Cloudflare Web Analytics (automated test).
  no_ads:
    answer: yes
    evidence: https://lutris.net/donate
    note: Not-for-profit project funded by donations and grants, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
