---
name: Blocky
description: Self-hosted DNS proxy and ad blocker for local networks, with per-client blocklists, conditional forwarding, caching and support for encrypted upstream DNS such as DoH and DoT.
website: https://0xerr0r.github.io/blocky/
source: https://github.com/0xERR0R/blocky
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/0xERR0R/blocky/blob/main/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://0xerr0r.github.io/blocky/latest/
    note: The documentation states Blocky collects no user data, telemetry or statistics, and the website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://0xerr0r.github.io/blocky/latest/
    note: Free volunteer project supported by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
