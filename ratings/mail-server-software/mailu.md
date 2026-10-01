---
name: Mailu
description: Self-hosted mail server built from Docker containers, with SMTP, IMAP, webmail, spam and virus filtering and a web admin interface.
website: https://mailu.io
source: https://github.com/Mailu/Mailu
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Mailu/Mailu/blob/master/LICENSE.md
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/Mailu/Mailu
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/Mailu/Mailu
    note: Free open-source software maintained by volunteers. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
