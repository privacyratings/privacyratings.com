---
name: Navidrome
description: Self-hosted music server and streamer with a web player, compatible with Subsonic and OpenSubsonic client apps, supporting multiple users, smart playlists and scrobbling.
website: https://www.navidrome.org
source: https://github.com/navidrome/navidrome
platforms:
  - windows
  - macos
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/navidrome/navidrome/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://www.navidrome.org/docs/usage/admin/insights/
    note: The website loads Google Analytics and Google Tag Manager (automated test). The server also sends anonymous usage statistics to the project by default, which can be turned off.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/navidrome
    note: Funded by donations through Open Collective and other platforms, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
