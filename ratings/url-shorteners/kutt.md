---
name: Kutt
description: Open source URL shortener with custom domains, password-protected and expiring links, and link statistics. Can be self-hosted, and the developers run a hosted instance at kutt.to.
website: https://kutt.to
source: https://github.com/thedevs-network/kutt
domain: kutt.to
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/thedevs-network/kutt/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/thedevs-network/kutt
    note: No telemetry or analytics in the source code, and kutt.to loads no third-party scripts.
  no_ads:
    answer: yes
    evidence: https://kutt.to/premium
    note: Funded by premium plans and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
