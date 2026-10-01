---
name: Azahar
description: Open source Nintendo 3DS emulator based on Citra, for desktop and Android.
website: https://azahar-emu.org
source: https://github.com/azahar-emu/azahar
platforms:
  - windows
  - macos
  - linux
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/azahar-emu/azahar/blob/master/license.txt
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/io.github.lime3ds.android/latest/
    note: The Android app has 0 trackers in its Exodus report, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/azahar-emu/azahar
    note: Community project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
