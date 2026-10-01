---
name: Postfix
description: Mail transfer agent that routes and delivers email over SMTP, used on many Linux and Unix servers as the default mail server.
website: https://www.postfix.org
source: https://github.com/vdukhovni/postfix
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/vdukhovni/postfix/blob/master/postfix/LICENSE
    note: Dual-licensed under EPL-2.0 and IPL-1.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/vdukhovni/postfix
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://www.postfix.org/
    note: Free open-source software maintained by its authors. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
