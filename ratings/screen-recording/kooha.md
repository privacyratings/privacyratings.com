---
name: Kooha
description: Open-source screen recorder for Linux built with GTK and GStreamer. It records the screen or a region with audio to WebM, MP4, GIF or Matroska files.
website: https://github.com/SeaDve/Kooha
source: https://github.com/SeaDve/Kooha
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/SeaDve/Kooha/blob/main/COPYING
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/SeaDve/Kooha
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://seadve.github.io/donate/
    note: Free open-source app with no ads, supported by donations.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_by_default:
    answer: yes
    evidence: https://github.com/SeaDve/Kooha
    note: Recordings are saved to a local folder.
  no_account_needed:
    answer: yes
    evidence: https://github.com/SeaDve/Kooha
    note: No account is needed.
---
