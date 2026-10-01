---
name: OfflineIMAP
description: Command-line tool that synchronizes IMAP mailboxes with local Maildir folders in both directions, so mail can be read offline and kept as a local copy.
website: https://www.offlineimap.org
source: https://github.com/OfflineIMAP/offlineimap3
platforms:
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/OfflineIMAP/offlineimap3/blob/master/COPYING
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/OfflineIMAP/offlineimap3
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://www.offlineimap.org/
    note: Free open-source software maintained by volunteers. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
