---
name: gdu
description: Fast disk usage analyzer for the terminal written in Go, built for parallel scanning of SSDs, with an interactive interface, exports and an optional local web interface.
website: https://github.com/dundee/gdu
source: https://github.com/dundee/gdu
platforms:
  - linux
  - macos
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/dundee/gdu/blob/master/LICENSE.md
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/dundee/gdu
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/dundee/gdu
    note: Free open-source volunteer project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://github.com/dundee/gdu
    note: Makes no outbound network requests. The optional web interface and profiling server listen only on the local machine.
  no_account_needed:
    answer: yes
    evidence: https://github.com/dundee/gdu
    note: No account needed.
---
