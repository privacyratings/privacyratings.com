---
name: Nextcloud Talk
description: Chat, audio and video call app for Nextcloud servers, with group conversations, screen sharing, desktop and mobile clients, and optional federation between servers.
website: https://nextcloud.com/talk/
family: nextcloud
source: https://github.com/nextcloud/spreed
jurisdiction: DE
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
    evidence: https://github.com/nextcloud/spreed/blob/main/LICENSES/AGPL-3.0-or-later.txt
    note: Server app and clients are AGPL-3.0 or GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://nextcloud.com/privacy/
    note: The app contains no analytics; the website loads Matomo analytics only after consent.
  no_ads:
    answer: yes
    evidence: https://nextcloud.com/pricing/
    note: Funded by enterprise support subscriptions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
