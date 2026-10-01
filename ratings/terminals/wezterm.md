---
name: WezTerm
description: GPU-accelerated terminal emulator and multiplexer written in Rust, configured in Lua, with tabs, panes and SSH and serial connections.
website: https://wezterm.org
source: https://github.com/wezterm/wezterm
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/wezterm/wezterm/blob/main/LICENSE.md
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/wezterm/wezterm
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://wezterm.org/sponsor.html
    note: Funded by sponsorships, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
