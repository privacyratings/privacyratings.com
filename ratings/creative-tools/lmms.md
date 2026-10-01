---
name: LMMS
description: A digital audio workstation for making music, with a pattern and song editor, piano roll, built-in synthesizers and support for VST and LADSPA plugins.
website: https://lmms.io
source: https://github.com/LMMS/lmms
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/LMMS/lmms/blob/master/LICENSE.txt
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/LMMS/lmms
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://lmms.io/get-involved
    note: Volunteer project funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
