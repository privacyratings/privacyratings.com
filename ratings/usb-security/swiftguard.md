---
name: swiftGuard
description: macOS menu bar app that watches USB ports and shuts down or hibernates the Mac when an unknown device is connected or a whitelisted one is removed, with an optional countdown to cancel.
website: https://github.com/Lennolium/swiftGuard
source: https://github.com/Lennolium/swiftGuard
platforms:
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Lennolium/swiftGuard/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/Lennolium/swiftGuard
    note: No telemetry or analytics in the source code. An update check against the GitHub API is on by default and can be turned off.
  no_ads:
    answer: yes
    evidence: https://github.com/Lennolium/swiftGuard
    note: Free volunteer project funded by donations, with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
