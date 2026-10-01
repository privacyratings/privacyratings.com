---
name: Win11Debloat
description: An open source PowerShell script that removes preinstalled apps, disables telemetry and changes other settings on Windows 10 and 11, with options to undo changes.
website: https://github.com/Raphire/Win11Debloat
source: https://github.com/Raphire/Win11Debloat
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Raphire/Win11Debloat/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/Raphire/Win11Debloat
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/Raphire/Win11Debloat/blob/master/.github/FUNDING.yml
    note: Funded through GitHub Sponsors and Ko-fi, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
