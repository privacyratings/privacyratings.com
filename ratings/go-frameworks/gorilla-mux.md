---
name: Gorilla Mux
description: HTTP request router for Go from the Gorilla web toolkit that matches routes by path, host, method, headers and query values, built on net/http.
website: https://gorilla.github.io
source: https://github.com/gorilla/mux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/gorilla/mux/blob/main/LICENSE
    note: BSD 3-Clause licensed.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_trackers:
    answer: yes
    evidence: https://github.com/gorilla/mux
    note: No telemetry in the source code, and gorilla.github.io loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/gorilla/mux
    note: Volunteer-maintained open-source project with no ads.
platforms:
  - linux
  - macos
  - windows
---
