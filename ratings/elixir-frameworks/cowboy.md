---
name: Cowboy
description: Small HTTP server for Erlang/OTP with support for HTTP/1.1, HTTP/2, WebSocket and REST handlers.
website: https://ninenines.eu/
source: https://github.com/ninenines/cowboy
platforms:
  - linux
  - macos
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ninenines/cowboy/blob/master/LICENSE
    note: ISC-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/ninenines/cowboy
    note: No telemetry or analytics in the source code, and the website loads no third-party scripts.
  no_ads:
    answer: yes
    evidence: https://github.com/sponsors/essen
    note: Funded by sponsors and paid consulting from the maintainer, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
