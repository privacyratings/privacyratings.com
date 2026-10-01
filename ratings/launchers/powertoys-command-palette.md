---
name: PowerToys Command Palette
description: A keyboard launcher in Microsoft PowerToys for Windows that searches apps, files and settings and runs commands and extensions. It replaces PowerToys Run.
website: https://learn.microsoft.com/en-us/windows/powertoys/command-palette/overview
family: microsoft
aliases:
  - PowerToys Run
source: https://github.com/microsoft/PowerToys
jurisdiction: US
platforms:
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/microsoft/PowerToys/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: partial
    evidence: https://github.com/microsoft/PowerToys/blob/main/DATA_AND_PRIVACY.md
    note: Diagnostic data in PowerToys is off by default. The documentation site on learn.microsoft.com loads Microsoft's own analytics.
  no_ads:
    answer: yes
    evidence: https://github.com/microsoft/PowerToys
    note: Free and open source with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
