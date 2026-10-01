---
name: SumatraPDF
description: Lightweight reader for PDF, EPUB, MOBI, XPS, DjVu and comic book files on Windows, available as an installer or a portable app.
website: https://www.sumatrapdfreader.org
source: https://github.com/sumatrapdfreader/sumatrapdf
platforms:
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/sumatrapdfreader/sumatrapdf/blob/master/COPYING
    note: GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://github.com/sumatrapdfreader/sumatrapdf/blob/master/src/base/CrashHandler.cpp
    note: No third-party analytics. Official builds send crash reports and update checks to the SumatraPDF server, which a restriction policy file can block.
  no_ads:
    answer: yes
    evidence: https://www.sumatrapdfreader.org/free-pdf-reader
    note: Free with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
