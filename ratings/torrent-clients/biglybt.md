---
name: BiglyBT
description: Java-based BitTorrent client descended from Vuze, with swarm merging, a built-in media player, I2P and Tor support through plugins, and an Android app.
website: https://www.biglybt.com
source: https://github.com/BiglySoftware/BiglyBT
platforms:
  - windows
  - macos
  - linux
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/BiglySoftware/BiglyBT/blob/master/LICENSE
    note: GPL-2.0.
  no_trackers:
    answer: no
    evidence: https://www.biglybt.com/privacy.php
    note: The website uses Google Analytics and Google Tag Manager (automated test). The client contacts BiglyBT servers for update checks.
  no_ads:
    answer: yes
    evidence: https://www.biglybt.com/donation/donate.php
    note: Funded by donations, with no ads in the client and no third-party offers in the installer.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
