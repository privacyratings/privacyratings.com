---
name: Memos
description: Open source, self-hosted note-taking service for quick Markdown notes in a timeline, with tags, file attachments and an API. Runs as a single lightweight server with a web interface and stores data in SQLite, MySQL or PostgreSQL.
website: https://usememos.com
source: https://github.com/usememos/memos
platforms:
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/usememos/memos/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/usememos/memos
    note: No telemetry or analytics in the source code, and no third-party trackers were found on the website.
  no_ads:
    answer: yes
    evidence: https://github.com/usememos/memos
    note: Free self-hosted software funded by sponsors, with no ads in the app.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
