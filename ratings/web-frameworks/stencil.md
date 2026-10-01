---
name: Stencil
description: Compiler from Ionic for building reusable web components with TypeScript and JSX that work with any front-end framework or none.
website: https://stenciljs.com
source: https://github.com/stenciljs/core
platforms:
  - linux
  - macos
  - windows
  - web
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/stenciljs/core/blob/main/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: no
    evidence: https://stenciljs.com/docs/telemetry
    note: The CLI sends anonymous usage telemetry by default until disabled, and stenciljs.com loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://ionic.io/
    note: Developed by Ionic, an OutSystems company, and funded by its commercial products, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
