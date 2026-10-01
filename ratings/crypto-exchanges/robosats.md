---
name: RoboSats
description: Peer-to-peer exchange for trading bitcoin against national currencies over Tor, using Lightning hold invoices as escrow and a new robot identity for each trade with no registration.
website: https://learn.robosats.org
source: https://github.com/RoboSats/robosats
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/RoboSats/robosats/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://learn.robosats.org/docs/private/
    note: No registration is needed and all access goes over Tor. No telemetry or analytics in the source code, and the website loads no known trackers.
  no_ads:
    answer: yes
    evidence: https://learn.robosats.org/docs/fees/
    note: Funded by a small platform fee on each trade, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
