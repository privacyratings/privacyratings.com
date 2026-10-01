---
name: DuckStation
description: Emulator for the Sony PlayStation (PS1) for desktop and Android, with source code published under a non-commercial Creative Commons license.
website: https://www.duckstation.org
source: https://github.com/stenzek/duckstation
platforms:
  - windows
  - macos
  - linux
  - android
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/stenzek/duckstation/blob/master/LICENSE
    note: All code is public under CC BY-NC-ND 4.0, a source-available license that is not OSI-approved.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.github.stenzek.duckstation/latest/
    note: The Android app has 0 trackers in its Exodus report, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/stenzek/duckstation/blob/master/README.md
    note: Free project with no ads and no revenue.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
