---
name: Scribus
description: A desktop publishing application for page layout, with CMYK color, spot colors, ICC color management and PDF/X export for print.
website: https://www.scribus.net
source: https://github.com/scribusproject/scribus
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/scribusproject/scribus/blob/master/COPYING
    note: GPL-2.0 or later.
  no_trackers:
    answer: yes
    evidence: https://github.com/scribusproject/scribus
    note: No telemetry or analytics in the source code. The update check only runs when requested.
  no_ads:
    answer: yes
    evidence: https://github.com/scribusproject/scribus
    note: Free volunteer project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
