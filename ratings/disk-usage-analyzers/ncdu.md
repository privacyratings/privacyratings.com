---
name: ncdu
description: Disk usage analyzer with a text-mode interface, built to find large files on servers over SSH. Version 2 is written in Zig and version 1 in C.
website: https://dev.yorhel.nl/ncdu
source: https://code.blicky.net/yorhel/ncdu
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://code.blicky.net/yorhel/ncdu/src/branch/zig/LICENSES/MIT.txt
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://code.blicky.net/yorhel/ncdu
    note: No telemetry or analytics in the source code, and no third-party trackers were found on the website.
  no_ads:
    answer: yes
    evidence: https://code.blicky.net/yorhel/ncdu
    note: Free open-source volunteer project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://code.blicky.net/yorhel/ncdu
    note: The source code contains no network code.
  no_account_needed:
    answer: yes
    evidence: https://code.blicky.net/yorhel/ncdu
    note: No account needed.
---
