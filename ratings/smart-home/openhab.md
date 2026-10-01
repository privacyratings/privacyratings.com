---
name: openHAB
description: Open source, vendor-neutral home automation platform written in Java that runs locally and connects devices and services through add-ons, with rules, a web interface and mobile apps.
website: https://www.openhab.org
source: https://github.com/openhab/openhab-core
jurisdiction: DE
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/openhab/openhab-core/blob/main/LICENSE
    note: EPL-2.0.
  no_trackers:
    answer: no
    evidence: https://www.openhab.org/privacy.html
    note: The website uses Google Analytics.
  no_ads:
    answer: yes
    evidence: https://www.openhab.org/about/donate.html
    note: Developed by volunteers and the non-profit openHAB Foundation, funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
