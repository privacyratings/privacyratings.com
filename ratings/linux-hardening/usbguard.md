---
name: USBGuard
description: A Linux daemon that blocks or allows USB devices based on a policy of device attributes, protecting against rogue USB devices such as BadUSB.
website: https://usbguard.github.io
source: https://github.com/USBGuard/usbguard
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/USBGuard/usbguard/blob/main/LICENSE
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/USBGuard/usbguard
    note: No telemetry or analytics in the source code, and no trackers on the website.
  no_ads:
    answer: yes
    evidence: https://github.com/USBGuard/usbguard
    note: Free volunteer project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
