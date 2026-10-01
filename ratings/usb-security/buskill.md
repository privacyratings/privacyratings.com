---
name: BusKill
description: Dead man's switch that locks the screen or shuts down a computer when a magnetic USB breakaway cable tethered to the user is pulled out. The open-source app runs on Linux, Windows and macOS, and the cables are sold by the project.
website: https://www.buskill.in
source: https://github.com/BusKill/buskill-app
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/BusKill/buskill-app/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://github.com/BusKill/buskill-app
    note: No telemetry or analytics in the app source code, and updates are only checked on request. The website runs a self-hosted heatmap analytics plugin.
  no_ads:
    answer: yes
    evidence: https://www.buskill.in/store/
    note: Funded by sales of BusKill cables and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
