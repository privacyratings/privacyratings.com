---
name: FreeTube
description: Open source desktop YouTube client for Windows, macOS and Linux. It fetches videos with a built-in extractor or an Invidious instance and stores subscriptions and history locally.
website: https://freetubeapp.io
imported_from: awesome-privacy
source: https://github.com/FreeTubeApp/FreeTube
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/FreeTubeApp/FreeTube/blob/development/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://freetubeapp.io/privacy.php
    note: The app sends no data to FreeTube, but the website runs self-hosted Matomo analytics that can be avoided with Do Not Track.
  no_ads:
    answer: yes
    evidence: https://github.com/FreeTubeApp/FreeTube#donate
    note: Volunteer project funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
