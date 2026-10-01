---
name: iTerm2
description: Terminal emulator for macOS with split panes, search, autocomplete, tmux integration and a Python scripting API.
website: https://iterm2.com
source: https://github.com/gnachman/iTerm2
platforms:
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/gnachman/iTerm2/blob/master/LICENSE
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/gnachman/iTerm2
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://iterm2.com/donate.html
    note: Funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
