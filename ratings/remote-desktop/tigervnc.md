---
name: TigerVNC
description: VNC server and viewer implementation focused on performance, with TLS encryption and extensions for advanced authentication, used for remote access to graphical desktops.
website: https://tigervnc.org
source: https://github.com/TigerVNC/tigervnc
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/TigerVNC/tigervnc/blob/master/LICENCE.TXT
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/TigerVNC/tigervnc
    note: No telemetry or analytics in the source code, and the website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/TigerVNC/tigervnc
    note: Free community project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
