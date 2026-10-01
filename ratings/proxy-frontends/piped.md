---
name: Piped
description: Open source alternative front end for YouTube that proxies videos through the instance, so Google does not see the viewer. It supports subscriptions, playlists and SponsorBlock without a Google account.
website: https://piped.video
source: https://github.com/TeamPiped/Piped
domain: piped.video
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/TeamPiped/Piped/blob/master/LICENSE
    note: AGPL-3.0, for both the frontend and the backend.
  no_trackers:
    answer: yes
    evidence: https://github.com/TeamPiped/Piped/blob/master/README.md
    note: The project states it has no tracking, and the frontend contains no analytics.
  no_ads:
    answer: yes
    evidence: https://github.com/TeamPiped/Piped/blob/master/README.md
    note: Volunteer project funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
