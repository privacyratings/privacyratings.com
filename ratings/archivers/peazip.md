---
name: PeaZip
description: Free, open source file archiver and file manager for Windows, macOS and Linux that handles over 200 archive formats, with strong encryption and two-factor authentication for archives.
website: https://peazip.github.io
source: https://github.com/giorgiotani/PeaZip
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/giorgiotani/PeaZip/blob/sources/LICENSE
    note: LGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://peazip.github.io/peazip-tos-privacy.html
    note: The project states that neither the software nor the website collects user data.
  no_ads:
    answer: yes
    evidence: https://peazip.github.io/donations.html
    note: Funded by donations. Installers contain no advertising modules.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
