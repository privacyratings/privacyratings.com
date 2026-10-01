---
name: croc
description: Open source command-line tool for sending files and folders between two computers using a short code phrase, with end-to-end encryption and a relay server.
website: https://github.com/schollz/croc
source: https://github.com/schollz/croc
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/schollz/croc/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: partial
    evidence: https://github.com/schollz/croc/blob/main/src/publicrelay/umami.go
    note: The client sends no telemetry, but relay servers can report aggregate session events to an Umami analytics instance.
  no_ads:
    answer: yes
    evidence: https://github.com/sponsors/schollz
    note: Free software funded by GitHub Sponsors donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
