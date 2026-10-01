---
name: Galène
description: Lightweight self-hosted videoconference server with a web client, designed for lectures, conferences and meetings, with screen sharing, chat and recording.
website: https://galene.org
source: https://github.com/jech/galene
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/jech/galene/blob/master/LICENCE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/jech/galene
    note: No telemetry or analytics in the source code, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://galene.org/
    note: Free software with no ads, supported by NLnet grants.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee:
    answer: no
    evidence: https://galene.org/
    note: Traffic is encrypted to and from the server, but not end to end.
  no_account_needed:
    answer: yes
    evidence: https://github.com/jech/galene/blob/master/galene.md
    note: Invitation links allow password-less login, and groups can let anyone join with any name.
  self_hostable:
    answer: yes
    evidence: https://github.com/jech/galene/blob/master/galene-install.md
    note: Official installation guide; self-hosting is the only way to run it.
---
