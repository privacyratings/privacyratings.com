---
name: Electron
description: Framework for building cross-platform desktop applications with JavaScript, HTML and CSS by bundling Chromium and Node.js.
website: https://www.electronjs.org
mainstream: true
source: https://github.com/electron/electron
jurisdiction: US
platforms:
  - linux
  - macos
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/electron/electron/blob/main/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: no
    evidence: https://www.electronjs.org/
    note: The electronjs.org website loads Google Analytics; the framework itself has no built-in telemetry.
  no_ads:
    answer: yes
    evidence: https://www.electronjs.org/governance
    note: A project of the OpenJS Foundation, funded by member organizations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
