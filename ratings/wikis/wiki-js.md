---
name: Wiki.js
description: Self-hosted wiki built on Node.js, with Markdown, visual and HTML editors, Git storage sync, full-text search and many authentication options.
website: https://js.wiki
source: https://github.com/requarks/wiki
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/requarks/wiki/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: no
    evidence: https://docs.requarks.io/telemetry
    note: The js.wiki website loads Google Analytics, and the software's anonymized telemetry is switched on by default in the setup wizard.
  no_ads:
    answer: yes
    evidence: https://js.wiki/donate
    note: Funded by donations and sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
