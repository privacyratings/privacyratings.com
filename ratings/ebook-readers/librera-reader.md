---
name: Librera Reader
description: Open-source Android reader for EPUB, PDF, DjVu, MOBI, FB2 and other formats. A free ad-supported version, a paid PRO version and an F-Droid build are available.
website: https://librera.mobi
source: https://github.com/foobnix/LibreraReader
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://raw.githubusercontent.com/foobnix/LibreraReader/master/LICENSE.txt
    note: Licensed under GPL-3.0 or later.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.foobnix.pdf.reader/latest/
    note: The free Google Play version contains Google AdMob and Firebase Analytics. The F-Droid build has no trackers.
  no_ads:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.foobnix.pdf.reader/latest/
    note: The free Google Play version shows ads through Google AdMob. The paid PRO and F-Droid versions have no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
