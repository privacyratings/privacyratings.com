---
name: Tornado
description: Python web framework and asynchronous networking library, suited to long polling, WebSockets and other long-lived connections.
website: https://www.tornadoweb.org
source: https://github.com/tornadoweb/tornado
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/tornadoweb/tornado/blob/master/LICENSE
    note: Apache-2.0 licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/tornadoweb/tornado
    note: No telemetry in the source code, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://www.tornadoweb.org/en/stable/
    note: A volunteer project with ad-free documentation.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---
