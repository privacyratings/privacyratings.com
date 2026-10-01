---
name: Ghostty
description: GPU-accelerated terminal emulator written in Zig, using native UI toolkits on each platform.
website: https://ghostty.org
source: https://github.com/ghostty-org/ghostty
platforms:
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ghostty-org/ghostty/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/ghostty-org/ghostty
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/ghostty-org/ghostty/blob/main/LICENSE
    note: Free MIT-licensed project with no ads or paid features.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
