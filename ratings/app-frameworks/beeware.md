---
name: BeeWare
description: Collection of Python tools for building native apps, including the Toga GUI toolkit that uses each platform's native widgets and the Briefcase packaging tool.
website: https://beeware.org
source: https://github.com/beeware/toga
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/beeware/toga/blob/main/LICENSE
    note: BSD-3-Clause-licensed, as is the Briefcase packaging tool.
  no_trackers:
    answer: yes
    evidence: https://github.com/beeware/briefcase
    note: No telemetry or analytics in the Toga or Briefcase source code, and beeware.org loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://beeware.org/membership/
    note: Funded by memberships and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - android
  - ios
  - web
---
