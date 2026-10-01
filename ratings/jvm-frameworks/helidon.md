---
name: Helidon
description: Java framework from Oracle for building microservices, offered as a lightweight functional API (Helidon SE) and a MicroProfile implementation (Helidon MP).
website: https://helidon.io
source: https://github.com/helidon-io/helidon
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/helidon-io/helidon/blob/main/LICENSE.txt
    note: Apache 2.0-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/helidon-io/helidon
    note: No telemetry in the framework or CLI source code, and helidon.io loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://www.oracle.com/a/ocom/docs/technical-brief--helidon-report.pdf
    note: Developed and funded by Oracle, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---
