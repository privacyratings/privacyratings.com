---
name: OverSight
description: A free macOS tool from Objective-See that alerts when the microphone or webcam is turned on and shows which process is using it.
website: https://objective-see.org/products/oversight.html
source: https://github.com/objective-see/OverSight
jurisdiction: US
platforms:
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/objective-see/OverSight/blob/main/LICENSE.md
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/objective-see/OverSight
    note: No telemetry or analytics in the source code, and no trackers on the website.
  no_ads:
    answer: yes
    evidence: https://objective-see.org/about.html
    note: Free tool from the non-profit Objective-See Foundation, funded by donations and sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
