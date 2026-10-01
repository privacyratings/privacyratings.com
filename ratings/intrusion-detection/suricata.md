---
name: Suricata
description: Network intrusion detection and prevention engine and network security monitoring tool that inspects traffic against rule sets and logs protocol events and alerts.
website: https://suricata.io
source: https://github.com/OISF/suricata
jurisdiction: US
platforms:
  - linux
  - windows
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/OISF/suricata/blob/main/LICENSE
    note: GPL-2.0.
  no_trackers:
    answer: no
    evidence: https://suricata.io/privacy-policy/
    note: The engine has no telemetry, but the website privacy policy lists Google Analytics, Google AdWords and Facebook tracking.
  no_ads:
    answer: yes
    evidence: https://oisf.net/
    note: Developed by the non-profit Open Information Security Foundation, funded by consortium memberships and training, with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
