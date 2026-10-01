---
name: Invidious
description: Open source alternative front end to YouTube that proxies videos through the instance, so Google does not see the viewer. It works without JavaScript and supports audio-only playback and subscriptions without a Google account.
website: https://invidious.io
source: https://github.com/iv-org/invidious
domain: invidious.io
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/iv-org/invidious/blob/master/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://invidious.io/
    note: The project states it does not track users, and the software contains no analytics.
  no_ads:
    answer: yes
    evidence: https://invidious.io/donate/
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
