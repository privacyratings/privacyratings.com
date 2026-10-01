---
name: Pop!_OS
description: An Ubuntu-based Linux distribution from the hardware maker System76, with its own COSMIC desktop environment.
website: https://system76.com/pop
source: https://github.com/pop-os
jurisdiction: US
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://raw.githubusercontent.com/pop-os/cosmic-comp/master/LICENSE
    note: System76's own components, including the COSMIC desktop, are open source under the GPL-3.0, on top of Ubuntu packages.
  no_trackers:
    answer: no
    evidence: https://system76.com/privacy/
    note: Pop!_OS sends no telemetry or error reports, but the website loads Google Analytics and HubSpot.
  no_ads:
    answer: yes
    evidence: https://system76.com/privacy/
    note: Funded by System76 hardware sales. System76 states it does not sell user data.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
