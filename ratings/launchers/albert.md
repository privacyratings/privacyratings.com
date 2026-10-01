---
name: Albert
description: A plugin-based keyboard launcher for Linux and macOS, written in C++ and Qt, with plugins for apps, files, calculations, web searches and Python extensions.
website: https://albertlauncher.github.io
source: https://github.com/albertlauncher/albert
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/albertlauncher/albert/blob/main/LICENSE.md
    note: Source-available under the custom Albert license, which forbids redistributing modified versions and is not OSI-approved.
  no_trackers:
    answer: yes
    evidence: https://albertlauncher.github.io/privacy/
    note: Telemetry is sent only after the user agrees on first launch, and the privacy notice states no data is shared with third parties.
  no_ads:
    answer: yes
    evidence: https://albertlauncher.github.io/donation/
    note: Free app with no ads, supported by donations.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
