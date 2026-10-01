---
name: LibreCAD
description: Free, open source 2D CAD application for Windows, macOS and Linux that reads and writes DXF files and reads DWG files, used for technical drawings and floor plans.
website: https://librecad.org
source: https://github.com/LibreCAD/LibreCAD
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/LibreCAD/LibreCAD/blob/master/LICENSE
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/LibreCAD/LibreCAD
    note: No telemetry or analytics in the source code. An update check that queries GitHub releases can be turned off.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/librecad
    note: Funded by donations and sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
