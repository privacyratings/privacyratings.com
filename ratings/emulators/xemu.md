---
name: xemu
description: Open source emulator for the original Microsoft Xbox, based on QEMU.
website: https://xemu.app
source: https://github.com/xemu-project/xemu
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/xemu-project/xemu/blob/master/LICENSE
    note: GPL-2.0.
  no_trackers:
    answer: no
    note: The website loads Google Analytics.
  no_ads:
    answer: yes
    evidence: https://www.patreon.com/mborgerson
    note: Funded by donations through Patreon, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
