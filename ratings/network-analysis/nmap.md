---
name: Nmap
description: Network scanner for host discovery, port scanning, service and operating system detection, with a scripting engine for further checks and the Zenmap graphical interface.
website: https://nmap.org
source: https://github.com/nmap/nmap
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: partial
    evidence: https://nmap.org/npsl/
    note: Source is public under the Nmap Public Source License, which is not OSI-approved.
  no_trackers:
    answer: no
    evidence: https://nmap.org/
    note: The scanner has no telemetry, but the website loads Google Analytics.
  no_ads:
    answer: yes
    evidence: https://nmap.org/oem/
    note: Funded by selling commercial OEM redistribution licenses, with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
