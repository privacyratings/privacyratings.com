---
name: BlockBlock
description: A free macOS tool from Objective-See that monitors common persistence locations and alerts when software tries to install itself to run at startup.
website: https://objective-see.org/products/blockblock.html
source: https://github.com/objective-see/BlockBlock
jurisdiction: US
platforms:
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/objective-see/BlockBlock/blob/master/LICENSE.md
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/objective-see/BlockBlock
    note: No telemetry or analytics in the source code, and no trackers on the website.
  no_ads:
    answer: yes
    evidence: https://objective-see.org/about.html
    note: Free tool from the non-profit Objective-See Foundation, funded by donations and sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
