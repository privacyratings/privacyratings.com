---
name: Quart
description: Asynchronous Python web framework with the Flask API, built on ASGI.
website: https://quart.palletsprojects.com
source: https://github.com/pallets/quart
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/pallets/quart/blob/main/LICENSE.txt
    note: MIT-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/pallets/quart
    note: No telemetry in the source code, and the website loads no third-party trackers.
  no_ads:
    answer: partial
    evidence: https://quart.palletsprojects.com/en/latest/
    note: Funded by donations to Pallets, but the documentation hosted on Read the Docs shows EthicalAds.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
---
