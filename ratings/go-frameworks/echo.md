---
name: Echo
description: Minimalist HTTP web framework for Go with an optimized router, middleware, data binding and rendering.
website: https://echo.labstack.com
source: https://github.com/labstack/echo
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/labstack/echo/blob/master/LICENSE
    note: MIT-licensed.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_trackers:
    answer: no
    evidence: https://echo.labstack.com/
    note: The framework has no telemetry, but echo.labstack.com loads Google Analytics through Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://github.com/sponsors/labstack
    note: Funded by GitHub Sponsors, with no ads.
platforms:
  - linux
  - macos
  - windows
---
