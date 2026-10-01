---
name: Duc
description: Tools for indexing disk usage into a database and browsing it from the command line, an ncurses interface, a graphical viewer or a CGI web page. Built for large file systems.
website: https://duc.zevv.nl
source: https://github.com/zevv/duc
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/zevv/duc/blob/master/LICENSE
    note: LGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/zevv/duc
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/zevv/duc
    note: Free open-source volunteer project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://github.com/zevv/duc
    note: The source code contains no network code. The optional CGI interface is served only by the user's own web server.
  no_account_needed:
    answer: yes
    evidence: https://github.com/zevv/duc
    note: No account needed.
---
