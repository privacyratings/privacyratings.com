---
name: QOwnNotes
description: Open source desktop notepad that stores notes as plain-text Markdown files, with optional Nextcloud or ownCloud sync, note versioning, per-note encryption, scripting and a to-do list integration.
website: https://www.qownnotes.org
source: https://github.com/pbek/QOwnNotes
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/pbek/QOwnNotes/blob/main/LICENSE
    note: GPL-2.0.
  no_trackers:
    answer: partial
    evidence: https://www.qownnotes.org/faq/metrics.html
    note: Usage metrics are sent to a self-hosted Matomo server by default and can be turned off at first start or in settings. No data is shared with third parties.
  no_ads:
    answer: yes
    evidence: https://www.qownnotes.org/contributing/donate.html
    note: Free app funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
