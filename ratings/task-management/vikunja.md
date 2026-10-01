---
name: Vikunja
description: Open source, self-hostable to-do and project management app with list, Gantt, table and Kanban views. Also available as a hosted service through Vikunja Cloud.
website: https://vikunja.io
source: https://github.com/go-vikunja/vikunja
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/go-vikunja/vikunja/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://vikunja.io/docs/config-options/
    note: The server and web app send no telemetry, and Sentry error reporting is off by default. The beta Android app includes Sentry.
  no_ads:
    answer: yes
    evidence: https://vikunja.io/support/
    note: Funded by Vikunja Cloud subscriptions, sponsors and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
