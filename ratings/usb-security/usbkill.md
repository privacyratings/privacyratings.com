---
name: usbkill
description: Python script that shuts down the computer as soon as a USB device is plugged in or removed, as an anti-forensic kill switch. It runs on Linux, BSD and macOS and has not been updated in years.
website: https://github.com/hephaest0s/usbkill
source: https://github.com/hephaest0s/usbkill
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/hephaest0s/usbkill/blob/master/setup.py
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/hephaest0s/usbkill
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/hephaest0s/usbkill
    note: Free volunteer project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
