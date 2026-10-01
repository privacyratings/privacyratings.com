---
name: TinyWall
description: Lightweight firewall for Windows that builds on Windows Filtering Platform, blocking all traffic by default and allowing apps through a whitelist without popups.
website: https://tinywall.pados.hu
source: https://github.com/pylorak/TinyWall
platforms:
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/pylorak/TinyWall/blob/master/LICENSE.txt
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://tinywall.pados.hu/
    note: The project states there is no data collection or telemetry, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://tinywall.pados.hu/
    note: Free software with no ads, supported by donations.
  independent_audit:
    answer: no
    note: No independent audit is published.
also_in:
  - windows-hardening
---
