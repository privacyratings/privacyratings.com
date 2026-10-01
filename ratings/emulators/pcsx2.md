---
name: PCSX2
description: Open source emulator for the Sony PlayStation 2.
website: https://pcsx2.net
source: https://github.com/PCSX2/pcsx2
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/PCSX2/pcsx2/blob/master/COPYING.GPLv3
    note: GPL-3.0, with some components under compatible licenses.
  no_trackers:
    answer: yes
    evidence: https://github.com/PCSX2/pcsx2
    note: No telemetry or analytics in the source code, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/PCSX2/pcsx2
    note: Volunteer project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
