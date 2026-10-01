---
name: KnockKnock
description: A free macOS tool from Objective-See that lists software installed to run persistently, such as launch agents, login items and extensions, to help find malware.
website: https://objective-see.org/products/knockknock.html
source: https://github.com/objective-see/KnockKnock
jurisdiction: US
platforms:
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/objective-see/KnockKnock/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/objective-see/KnockKnock
    note: No telemetry or analytics in the source code, and no trackers on the website. File hashes are only sent to VirusTotal when the user adds an API key.
  no_ads:
    answer: yes
    evidence: https://objective-see.org/about.html
    note: Free tool from the non-profit Objective-See Foundation, funded by donations and sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
