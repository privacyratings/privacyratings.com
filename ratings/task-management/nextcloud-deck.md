---
name: Nextcloud Deck
description: Kanban-style board app for Nextcloud, with boards, stacks, cards, labels, due dates and sharing with Nextcloud users and groups. Data stays on the Nextcloud server.
website: https://apps.nextcloud.com/apps/deck
family: nextcloud
source: https://github.com/nextcloud/deck
jurisdiction: DE
platforms:
  - web
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/nextcloud/deck/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/it.niedermann.nextcloud.deck/latest/
    note: The server app has no telemetry, and Exodus finds no trackers in the Android app.
  no_ads:
    answer: yes
    evidence: https://nextcloud.com/pricing/
    note: Free software funded by Nextcloud GmbH's enterprise subscriptions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
