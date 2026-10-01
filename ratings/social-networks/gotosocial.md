---
name: GoToSocial
description: Lightweight, self-hostable ActivityPub server written in Go, used with Mastodon-compatible client apps.
website: https://gotosocial.org
source: https://codeberg.org/superseriousbusiness/gotosocial
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/superseriousbusiness/gotosocial/src/branch/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://gotosocial.org
    note: The project states users are not tracked, and the software has no telemetry.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/gotosocial
    note: Funded by donations and grants, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
