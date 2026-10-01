---
name: Dolphin
description: Open source emulator for the Nintendo GameCube and Wii consoles.
website: https://dolphin-emu.org
source: https://github.com/dolphin-emu/dolphin
platforms:
  - windows
  - macos
  - linux
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/dolphin-emu/dolphin/blob/master/COPYING
    note: GPL-2.0-or-later, with some files under compatible licenses.
  no_trackers:
    answer: no
    evidence: https://dolphin-emu.org/docs/privacy/
    note: The website loads Google AdSense. The emulator's anonymous usage statistics are opt-in.
  no_ads:
    answer: partial
    evidence: https://dolphin-emu.org/docs/privacy/
    note: The website shows non-targeted ads to cover hosting costs. The emulator has no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
