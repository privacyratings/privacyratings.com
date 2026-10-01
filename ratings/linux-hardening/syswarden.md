---
name: SysWarden
description: Open-source, host-local Linux security orchestrator combining nftables enforcement, system telemetry, threat-intelligence feeds, out-of-band WAAP log analysis and a terminal dashboard.
website: https://syswarden.io
source: https://github.com/duggytuxy/syswarden
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/duggytuxy/syswarden/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/duggytuxy/syswarden
    note: Telemetry is collected and analyzed only on the local host. No analytics are sent to the developer.
  no_ads:
    answer: yes
    evidence: https://github.com/duggytuxy/syswarden/blob/main/.github/FUNDING.yml
    note: Funded through Ko-fi donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
