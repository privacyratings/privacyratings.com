---
name: Shlink
description: Self-hosted URL shortener with a REST API, command line tools, custom domains, QR codes and visit tracking. Managed through a separate web client or the API.
website: https://shlink.io
source: https://github.com/shlinkio/shlink
platforms:
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/shlinkio/shlink/blob/develop/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/shlinkio/shlink
    note: No telemetry or analytics in the source code. Forwarding visits to a Matomo instance is an optional integration.
  no_ads:
    answer: yes
    evidence: https://github.com/shlinkio/shlink/blob/develop/README.md
    note: Free software funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
