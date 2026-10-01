---
name: Nym
description: Decentralized mixnet that routes packets through layers of mix nodes with timing delays and cover traffic to hide metadata, used mainly through the NymVPN app.
website: https://nym.com/mixnet
source: https://github.com/nymtech/nym
jurisdiction: CH
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/nymtech/nym/tree/develop/LICENSES
    note: Applications are GPL-3.0 and libraries Apache-2.0 or MIT.
  no_trackers:
    answer: partial
    evidence: https://nym.com/anonymous-stats
    note: No third-party trackers, but the website uses self-hosted Matomo and NymVPN sends optional anonymous usage statistics.
  no_ads:
    answer: yes
    evidence: https://nym.com/pricing
    note: Funded by NymVPN subscriptions, with no ads.
  independent_audit:
    answer: yes
    evidence: https://cure53.de/audit-report_nym.pdf
    note: Full Cure53 report covering the apps, backend, VPN infrastructure and cryptography.
---
