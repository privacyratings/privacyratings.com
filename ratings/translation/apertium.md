---
name: Apertium
description: Free and open-source rule-based machine translation platform, focused on related and lesser-resourced languages. Usable on apertium.org or installed locally for offline translation.
website: https://www.apertium.org
source: https://github.com/apertium/apertium
platforms:
  - web
  - linux
  - windows
  - macos
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://raw.githubusercontent.com/apertium/apertium/main/COPYING
    note: Licensed under GPL-2.0.
  no_trackers:
    answer: partial
    evidence: https://raw.githubusercontent.com/apertium/apertium-html-tools/master/src/App.tsx
    note: No third-party trackers. The apertium.org web interface records page views with a self-hosted Matomo instance.
  no_ads:
    answer: yes
    evidence: https://wiki.apertium.org/wiki/Main_Page
    note: Volunteer-run open-source project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://wiki.apertium.org/wiki/Installation
    note: Can be installed on desktop, Android or your own server to translate offline.
  no_retention:
    answer: yes
    evidence: https://wiki.apertium.org/wiki/Installation
    note: Rule-based translation with no model training on user text. Local installs keep text on the device.
---
