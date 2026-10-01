---
name: Etherpad
description: Self-hosted, real-time collaborative text editor where several people edit the same document at once, with a plugin system and an HTTP API.
website: https://etherpad.org
source: https://github.com/ether/etherpad
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ether/etherpad/blob/develop/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/ether/etherpad
    note: No telemetry or analytics in the source code. The server only checks static.etherpad.org for new versions.
  no_ads:
    answer: yes
    evidence: https://github.com/ether/etherpad
    note: Free volunteer-run project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
