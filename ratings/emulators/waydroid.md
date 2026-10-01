---
name: Waydroid
description: Open source tool that runs a full Android system in a container on Linux, using LXC and Wayland.
website: https://waydro.id
source: https://github.com/waydroid/waydroid
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/waydroid/waydroid/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/waydroid/waydroid
    note: No telemetry or analytics in the source code, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/waydroid
    note: Funded by donations through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
