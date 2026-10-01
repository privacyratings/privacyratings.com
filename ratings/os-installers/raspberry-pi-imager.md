---
name: Raspberry Pi Imager
description: Raspberry Pi's official tool for downloading operating system images and writing them to SD cards and USB drives, with options to preconfigure hostname, Wi-Fi, users and SSH.
website: https://www.raspberrypi.com/software/
source: https://github.com/raspberrypi/rpi-imager
jurisdiction: GB
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/raspberrypi/rpi-imager/blob/main/license.txt
    note: Apache-2.0.
  no_trackers:
    answer: partial
    evidence: https://github.com/raspberrypi/rpi-imager#anonymous-metrics-telemetry
    note: Anonymous download statistics are sent to a Raspberry Pi server by default and can be turned off in App Options. Analytics cookies on the website are optional.
  no_ads:
    answer: yes
    evidence: https://www.raspberrypi.com/privacy/
    note: No ads in the app. Raspberry Pi states it does not share data with other companies for their marketing.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
