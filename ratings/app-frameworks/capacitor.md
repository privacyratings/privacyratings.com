---
name: Capacitor
description: Cross-platform native runtime for running web apps on Android and iOS and as progressive web apps, with a plugin API for native device features.
website: https://capacitorjs.com
source: https://github.com/ionic-team/capacitor
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ionic-team/capacitor/blob/main/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: no
    evidence: https://capacitorjs.com/docs/cli/telemetry
    note: The Capacitor CLI enrolls users in anonymous telemetry after its first command until turned off, and capacitorjs.com loads Google Tag Manager and HubSpot.
  no_ads:
    answer: yes
    evidence: https://ionic.io/blog/important-announcement-the-future-of-ionics-commercial-products
    note: Developed by Ionic, part of OutSystems, with no ads in the framework.
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
