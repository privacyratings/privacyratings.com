---
name: PPSSPP
description: Open source emulator for the Sony PlayStation Portable (PSP).
website: https://www.ppsspp.org
source: https://github.com/hrydgard/ppsspp
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/hrydgard/ppsspp/blob/master/LICENSE.TXT
    note: GPL-2.0-or-later.
  no_trackers:
    answer: no
    evidence: https://www.ppsspp.org/privacy/
    note: The website loads Google Analytics and Google AdSense. The apps only send compatibility reports when enabled.
  no_ads:
    answer: no
    evidence: https://www.ppsspp.org/privacy/
    note: The website shows Google AdSense ads. The apps have no ads and are funded by PPSSPP Gold sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
