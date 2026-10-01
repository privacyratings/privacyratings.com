---
name: Silk Guardian
description: Linux kernel module that, when any USB device is added or removed, can securely delete chosen files and then powers off the computer. It is an anti-forensic kill switch inspired by usbkill.
website: https://github.com/NateBrune/silk-guardian
source: https://github.com/NateBrune/silk-guardian
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/NateBrune/silk-guardian/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/NateBrune/silk-guardian
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/NateBrune/silk-guardian
    note: Free volunteer project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
