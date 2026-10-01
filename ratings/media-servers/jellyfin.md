---
name: Jellyfin
description: Self-hosted media server for movies, TV, music, books and live TV, with client apps for web, mobile and TV devices. All features are free, with no account on a central server.
website: https://jellyfin.org
source: https://github.com/jellyfin/jellyfin
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/jellyfin/jellyfin/blob/master/LICENSE
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/org.jellyfin.mobile/latest/
    note: The Android app has no trackers, the server has no telemetry, and the website loads no analytics.
  no_ads:
    answer: yes
    evidence: https://jellyfin.org/docs/general/faq/
    note: Volunteer project with no premium features or ads. Donations through Open Collective pay for infrastructure.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
