---
name: Mox
description: Mail server written in Go for low-maintenance self-hosting, combining SMTP, IMAP, webmail, SPF, DKIM, DMARC, MTA-STS, automatic TLS and spam filtering in one program.
website: https://www.xmox.nl
source: https://github.com/mjl-/mox
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mjl-/mox/blob/main/LICENSE.MIT
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/mjl-/mox
    note: No telemetry or analytics in the source code. The optional update check is a single DNS lookup.
  no_ads:
    answer: yes
    evidence: https://www.xmox.nl/#sponsors
    note: Funded by NLnet grants. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
