---
name: MAME
description: Open source emulator for arcade machines and many vintage computers and consoles, aimed at preserving and documenting hardware.
website: https://www.mamedev.org
source: https://github.com/mamedev/mame
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mamedev/mame/blob/master/COPYING
    note: GPL-2.0, with some files under less restrictive licenses.
  no_trackers:
    answer: yes
    evidence: https://github.com/mamedev/mame
    note: No telemetry or analytics in the source code, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://www.mamedev.org/
    note: Volunteer project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
