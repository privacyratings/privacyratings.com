---
name: Kivy
description: Python framework for cross-platform apps with multi-touch support, drawing its own GPU-accelerated widgets and using the KV design language.
website: https://kivy.org
source: https://github.com/kivy/kivy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/kivy/kivy/blob/master/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/kivy/kivy
    note: No telemetry or analytics in the source code, and kivy.org loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/kivy
    note: Funded by donations through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - android
  - ios
---
