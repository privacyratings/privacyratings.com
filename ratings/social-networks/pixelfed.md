---
name: Pixelfed
description: Federated, self-hostable photo sharing platform built on ActivityPub, with chronological feeds, albums, stories and no ads.
website: https://pixelfed.org
source: https://github.com/pixelfed/pixelfed
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/pixelfed/pixelfed/blob/dev/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.pixelfed/latest/
    note: The Android app has no trackers, and the server software has no telemetry.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/pixelfed
    note: Funded by donations and grants, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
