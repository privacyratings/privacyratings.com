---
name: LibreOffice
description: Office suite from The Document Foundation with Writer, Calc, Impress, Draw, Base and Math, using OpenDocument as its native file format.
website: https://www.libreoffice.org
source: https://git.libreoffice.org/core
jurisdiction: DE
platforms:
  - windows
  - macos
  - linux
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://git.libreoffice.org/core/+/refs/heads/master/COPYING.MPL
    note: MPL-2.0.
  no_trackers:
    answer: partial
    evidence: https://www.libreoffice.org/privacy-policy/
    note: No telemetry in the apps, and crash reports are sent only with the user's confirmation. The website uses self-hosted Matomo analytics.
  no_ads:
    answer: yes
    evidence: https://www.libreoffice.org/donate/
    note: Funded by donations to The Document Foundation, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
