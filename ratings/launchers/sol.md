---
name: Sol
description: An open source launcher for macOS with app search, custom shortcuts, calendar, clipboard history, window management and scripted commands.
website: https://sol.ospfranco.com
source: https://github.com/ospfranco/sol
platforms:
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ospfranco/sol/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: no
    evidence: https://github.com/ospfranco/sol/blob/main/src/config.ts
    note: Release builds send crash and error reports to Sentry, with no setting to turn this off.
  no_ads:
    answer: yes
    evidence: https://github.com/sponsors/ospfranco
    note: Free and open source app with no ads, supported by GitHub Sponsors.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
