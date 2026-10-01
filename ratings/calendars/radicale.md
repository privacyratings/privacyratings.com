---
name: Radicale
description: Lightweight self-hosted CalDAV and CardDAV server written in Python, for syncing calendars, contacts and task lists across devices. Stores data as plain files.
website: https://radicale.org
source: https://github.com/Kozea/Radicale
platforms:
  - linux
  - windows
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Kozea/Radicale/blob/master/COPYING.md
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/Kozea/Radicale
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/Kozea/Radicale
    note: Free, volunteer-maintained software with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
