---
name: Domoticz
description: Open source home automation system written in C++ that runs locally on Linux, Windows, Raspberry Pi or Docker, with a web interface, scripting and support for many devices and protocols.
website: https://www.domoticz.com
source: https://github.com/domoticz/domoticz
platforms:
  - windows
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/domoticz/domoticz/blob/development/License.txt
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/domoticz/domoticz
    note: No telemetry or analytics in the source code, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://www.domoticz.com
    note: Free software funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
