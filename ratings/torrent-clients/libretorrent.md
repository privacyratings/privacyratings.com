---
name: LibreTorrent
description: BitTorrent client for Android with sequential downloading, streaming, RSS auto-downloading, scheduling, WebTorrent support and Android TV support.
website: https://github.com/proninyaroslav/libretorrent
source: https://github.com/proninyaroslav/libretorrent
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/proninyaroslav/libretorrent/blob/master/LICENSE.md
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/proninyaroslav/libretorrent/blob/master/app/src/main/java/org/proninyaroslav/libretorrent/MainApplication.java
    note: No analytics. Crash reports use ACRA and are only sent by email after the user confirms a dialog.
  no_ads:
    answer: yes
    evidence: https://github.com/proninyaroslav/libretorrent#-donations
    note: Funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
