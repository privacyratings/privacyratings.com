---
name: ownCloud Infinite Scale
description: Self-hosted file sync and sharing platform from ownCloud, written in Go without a database. Offers web access, desktop and mobile sync clients, and spaces for team folders.
website: https://owncloud.com/infinite-scale/
aliases:
  - ownCloud
source: https://github.com/owncloud/ocis
jurisdiction: DE
platforms:
  - web
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/owncloud/ocis/blob/master/LICENSE
    note: The server is Apache-2.0 and the desktop and mobile clients are GPL.
  no_trackers:
    answer: no
    evidence: https://owncloud.com/privacy-statement/
    note: The website uses Google Analytics, Google Ads remarketing, HubSpot and social media pixels. The Android app does not collect personal data.
  no_ads:
    answer: partial
    evidence: https://owncloud.com/privacy-statement/
    note: Funded by enterprise subscriptions with no ads in the product, but the website uses data for interest-based advertising through Google remarketing.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
