---
name: Bittensor
description: Decentralized network where subnets compete to produce machine learning and other digital work, rewarded in its TAO token. All transactions and balances are recorded on a public blockchain.
website: https://www.bittensor.com
aliases:
  - TAO
source: https://github.com/opentensor/subtensor
platforms:
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/opentensor/subtensor/blob/main/LICENSE
    note: The Subtensor blockchain node is Apache-2.0, and the Python SDK and btcli are MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/opentensor/btcli
    note: No third-party trackers, and the SDK and btcli have no telemetry. Vercel Web Analytics on bittensor.com are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://www.bittensor.com/whitepaper
    note: Open protocol where participants are paid through TAO emissions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
