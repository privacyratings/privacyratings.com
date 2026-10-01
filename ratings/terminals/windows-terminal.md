---
name: Windows Terminal
description: Microsoft's terminal application for Windows, with tabs, panes, profiles for PowerShell, Command Prompt and WSL, and GPU-accelerated text rendering.
website: https://learn.microsoft.com/en-us/windows/terminal/
family: microsoft
source: https://github.com/microsoft/terminal
jurisdiction: US
platforms:
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/microsoft/terminal/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: partial
    evidence: https://github.com/microsoft/terminal/blob/main/src/cascadia/TerminalApp/AppLogic.cpp
    note: Sends usage events to Microsoft through the Windows diagnostic data pipeline, controlled by the Windows optional diagnostic data setting.
  no_ads:
    answer: yes
    evidence: https://github.com/microsoft/terminal/blob/main/LICENSE
    note: Free MIT-licensed app from Microsoft, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
