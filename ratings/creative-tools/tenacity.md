---
name: Tenacity
description: A multi-track audio editor and recorder forked from Audacity, developed by volunteers, with no telemetry.
website: https://tenacityaudio.org
source: https://codeberg.org/tenacityteam/tenacity
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/tenacityteam/tenacity/src/branch/main/LICENSE.txt
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://codeberg.org/tenacityteam/tenacity
    note: No telemetry or analytics in the source code. Update checks only run in alpha builds.
  no_ads:
    answer: yes
    evidence: https://tenacityaudio.org
    note: Free volunteer project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
