---
name: Scrypted
description: Self-hosted video integration platform that brings IP cameras into HomeKit, Google Home, Alexa and Home Assistant. The paid Scrypted NVR plugin adds recording, detection and mobile apps.
website: https://www.scrypted.app
source: https://github.com/koush/scrypted
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/koush/scrypted/blob/main/LICENSE.md
    note: The server and most plugins are open source, but the paid Scrypted NVR plugin and its apps are closed source.
  no_trackers:
    answer: yes
    evidence: https://github.com/koush/scrypted
    note: No telemetry or analytics in the open source server code, and the website loads no known trackers.
  no_ads:
    answer: yes
    evidence: https://docs.scrypted.app/scrypted-nvr/installation.html
    note: Funded by paid Scrypted NVR subscriptions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
