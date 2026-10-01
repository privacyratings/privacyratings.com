---
name: Transmission
description: Lightweight BitTorrent client with native apps for macOS, Windows and Linux, plus a daemon with a web interface for headless servers and NAS devices.
website: https://transmissionbt.com
source: https://github.com/transmission/transmission
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/transmission/transmission/blob/main/COPYING
    note: GPL-2.0 or GPL-3.0, with some files under more permissive licenses.
  no_trackers:
    answer: yes
    evidence: https://transmissionbt.com/
    note: No third-party trackers, and the apps have no telemetry. The website's Cloudflare Web Analytics are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://transmissionbt.com/donate
    note: Volunteer project funded by donations, with no ads or bundled software.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
