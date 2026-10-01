---
name: kitty
description: GPU-accelerated terminal emulator with tabs, split layouts, a graphics protocol for images in the terminal and extensions called kittens.
website: https://sw.kovidgoyal.net/kitty/
source: https://github.com/kovidgoyal/kitty
platforms:
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/kovidgoyal/kitty/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://sw.kovidgoyal.net/kitty/
    note: The website loads Google Analytics through Google Tag Manager. The terminal itself has no telemetry.
  no_ads:
    answer: yes
    evidence: https://sw.kovidgoyal.net/kitty/support/
    note: Funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
