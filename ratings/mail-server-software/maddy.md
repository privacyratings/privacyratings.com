---
name: Maddy
description: All-in-one mail server written in Go that replaces Postfix, Dovecot and OpenDKIM with a single daemon, handling SMTP, IMAP, DKIM, SPF, DMARC, DANE and MTA-STS.
website: https://maddy.email
source: https://github.com/foxcpp/maddy
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/foxcpp/maddy/blob/master/COPYING
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/foxcpp/maddy
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/foxcpp/maddy
    note: Free open-source software maintained by volunteers. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
