---
name: Fedora Media Writer
description: The Fedora Project's tool for downloading Fedora images and writing them, or other ISO files, to USB drives, with a restore option to reformat the drive afterwards.
website: https://github.com/FedoraQt/MediaWriter
family: fedora
source: https://github.com/FedoraQt/MediaWriter
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/FedoraQt/MediaWriter/blob/main/LICENSE.GPL-2
    note: GPL-2.0, with some parts under LGPL-2.0.
  no_trackers:
    answer: partial
    evidence: https://github.com/FedoraQt/MediaWriter/blob/main/PRIVACY.md
    note: No third-party analytics. A custom User-Agent with version, OS and locale is sent to Fedora servers for download statistics by default and can be disabled with --no-user-agent.
  no_ads:
    answer: yes
    evidence: https://github.com/FedoraQt/MediaWriter
    note: Free and open source app from the Fedora Project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
