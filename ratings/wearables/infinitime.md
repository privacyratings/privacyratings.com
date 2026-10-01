---
name: InfiniTime
description: Open source firmware for the PINE64 PineTime smartwatch, with notifications, step counting and heart rate over Bluetooth through companion apps such as Gadgetbridge.
website: https://infinitime.io
aliases:
  - PineTime
source: https://github.com/InfiniTimeOrg/InfiniTime
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/InfiniTimeOrg/InfiniTime/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/InfiniTimeOrg/InfiniTime
    note: No telemetry or analytics in the source code; the firmware only talks to paired companion apps over Bluetooth, and the website loads no known trackers.
  no_ads:
    answer: yes
    evidence: https://infinitime.io
    note: Free open source firmware developed by volunteers, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
