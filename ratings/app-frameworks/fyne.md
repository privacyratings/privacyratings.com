---
name: Fyne
description: GUI toolkit for Go that builds desktop, mobile and web apps from a single codebase.
website: https://fyne.io
source: https://github.com/fyne-io/fyne
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/fyne-io/fyne/blob/develop/LICENSE
    note: BSD 3-Clause licensed.
  no_trackers:
    answer: no
    evidence: https://fyne.io/
    note: The fyne.io website loads Google Analytics through Google Tag Manager. The toolkit itself has no telemetry.
  no_ads:
    answer: yes
    evidence: https://fyne.io/sponsor/
    note: Funded by sponsors and donations through GitHub Sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - android
  - ios
  - web
---
