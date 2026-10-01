---
name: RPCS3
description: Open source emulator for the Sony PlayStation 3.
website: https://rpcs3.net
source: https://github.com/RPCS3/rpcs3
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/RPCS3/rpcs3/blob/master/LICENSE
    note: GPL-2.0.
  no_trackers:
    answer: no
    note: The website loads Google AdSense and Cloudflare Web Analytics.
  no_ads:
    answer: no
    note: The website shows Google AdSense ads. The emulator has no ads and is funded mainly by Patreon.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
