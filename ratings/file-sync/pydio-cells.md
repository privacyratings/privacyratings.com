---
name: Pydio Cells
description: Self-hosted file sharing and collaboration platform written in Go, with web access, sync clients and fine-grained access rules. Developed by Pydio, now part of Wire.
website: https://www.pydio.com
source: https://github.com/pydio/cells
jurisdiction: FR
platforms:
  - web
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/pydio/cells/blob/v5-dev/LICENSE
    note: Cells Home is AGPL-3.0. The Enterprise edition is proprietary.
  no_trackers:
    answer: no
    evidence: https://www.pydio.com/en/privacy-policy
    note: The website uses Google Analytics and HubSpot. The server checks for updates and licenses, which can be turned off.
  no_ads:
    answer: yes
    evidence: https://www.pydio.com/en/privacy-policy
    note: Funded by Enterprise licenses. The privacy policy says data is not sold or used for targeted advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
