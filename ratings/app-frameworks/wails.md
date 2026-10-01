---
name: Wails
description: Framework for building desktop apps with Go and web technologies, using the operating system's native webview for the frontend.
website: https://wails.io
source: https://github.com/wailsapp/wails
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/wailsapp/wails/blob/master/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/wailsapp/wails/blob/master/website/docusaurus.config.js
    note: No telemetry in the source code, and the wails.io website configuration loads no analytics.
  no_ads:
    answer: yes
    evidence: https://github.com/sponsors/leaanthony
    note: Funded by donations through GitHub Sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---
