---
name: LibreTube
description: Open source YouTube client for Android that fetches content through Piped instances or locally, without Google services. It supports subscriptions, playlists, downloads and SponsorBlock without a Google account.
website: https://libretube.dev
source: https://github.com/libre-tube/LibreTube
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/libre-tube/LibreTube/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.github.libretube/latest/
    note: Exodus Privacy finds no trackers in the app, and the website states it uses no trackers.
  no_ads:
    answer: yes
    evidence: https://libretube.dev/
    note: Volunteer project funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
