---
name: RetroArch
description: Open source frontend for the libretro API that runs emulators, game engines and media players (cores) through one interface.
website: https://www.retroarch.com
source: https://github.com/libretro/RetroArch
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/libretro/RetroArch/blob/master/COPYING
    note: GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://www.retroarch.com/?page=privacy
    note: The website uses Google Analytics and Google AdSense. The Android app has no known trackers in its Exodus report.
  no_ads:
    answer: no
    evidence: https://www.retroarch.com/?page=privacy
    note: The website shows Google AdSense ads based on visits to other sites. The apps have no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
