---
name: Frigate
description: Open source network video recorder for IP cameras with local real-time object detection, running in Docker and integrating with Home Assistant.
website: https://frigate.video
source: https://github.com/blakeblackshear/frigate
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/blakeblackshear/frigate/blob/dev/LICENSE
    note: MIT.
  no_trackers:
    answer: no
    evidence: https://frigate.video
    note: The software has no analytics, but the frigate.video website loads Microsoft Clarity.
  no_ads:
    answer: yes
    evidence: https://frigate.video/plus/
    note: Free software with no ads, funded by optional Frigate+ model subscriptions.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
