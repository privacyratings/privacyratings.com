---
name: Yesod
description: Haskell web framework for type-safe web applications, with compile-time checked routes and templates and the Persistent database library.
website: https://www.yesodweb.com
source: https://github.com/yesodweb/yesod
platforms:
  - linux
  - macos
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/yesodweb/yesod/blob/master/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: no
    evidence: https://www.yesodweb.com/
    note: The yesodweb.com website loads Google Analytics; the framework itself has no telemetry.
  no_ads:
    answer: yes
    evidence: https://github.com/yesodweb/yesod
    note: Community-developed open-source project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
