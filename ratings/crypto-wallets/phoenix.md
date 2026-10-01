---
name: Phoenix
description: Self-custodial Bitcoin Lightning wallet for Android and iOS from ACINQ, which manages channels and liquidity automatically through the ACINQ node.
website: https://phoenix.acinq.co
source: https://github.com/ACINQ/phoenix
jurisdiction: FR
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ACINQ/phoenix/blob/master/LICENSE
    note: Apache-2.0. The ACINQ node runs the open-source eclair Lightning implementation.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/fr.acinq.phoenix.mainnet/latest/
    note: The Exodus report finds no trackers in the Android app, and the website loads no third-party analytics.
  no_ads:
    answer: yes
    evidence: https://phoenix.acinq.co/content/faq-1-general.md
    note: Funded by fees on Lightning liquidity, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
