---
name: Lokinet
description: Onion-routed anonymity network that runs over a decentralized set of staked service nodes, tunneling any IP traffic and hosting private .loki services.
website: https://lokinet.org
source: https://github.com/oxen-io/lokinet
jurisdiction: AU
platforms:
  - windows
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/oxen-io/lokinet/blob/dev/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://lokinet.org/privacy-policy
    note: The privacy policy states the app stores no identifying information and the website uses no tracking cookies; the site loads no trackers.
  no_ads:
    answer: yes
    evidence: https://lokinet.org/privacy-policy
    note: Free software from a non-profit foundation, with no ads and a policy of not sharing user information.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
