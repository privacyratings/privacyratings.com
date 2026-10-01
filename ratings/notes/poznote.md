---
name: Poznote
description: Self-hosted notes and tasks web app with rich-text, Markdown and drawing editors, tags, multiple users, OIDC login and a REST API. Runs in Docker with PHP and SQLite.
website: https://poznote.com
source: https://github.com/timothepoznanski/poznote
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/timothepoznanski/poznote/blob/main/LICENCE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/timothepoznanski/poznote/blob/main/README.md
    note: The documentation states the only default outbound connection is a daily update check, with no analytics.
  no_ads:
    answer: yes
    evidence: https://github.com/timothepoznanski/poznote/blob/main/.github/FUNDING.yml
    note: Free self-hosted software funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
