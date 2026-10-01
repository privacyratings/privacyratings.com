---
name: Lynis
description: A command-line security auditing tool from CISOfy that scans Linux, macOS and other Unix-like systems and suggests hardening steps.
website: https://cisofy.com/lynis/
source: https://github.com/CISOfy/lynis
jurisdiction: NL
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/CISOfy/lynis/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://cisofy.com/privacy/
    note: The website avoids analytics tools and third-party cookies, and the tool has no telemetry in its source code.
  no_ads:
    answer: yes
    evidence: https://cisofy.com/pricing/
    note: Funded by the paid Lynis Enterprise product, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
