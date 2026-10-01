---
name: Haveno
description: Open-source, peer-to-peer exchange software for trading Monero with fiat and other cryptocurrencies over Tor, using non-custodial multisig escrow. Trading happens on third-party networks that run Haveno.
website: https://haveno.exchange
source: https://github.com/haveno-dex/haveno
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/haveno-dex/haveno/blob/master/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/haveno-dex/haveno
    note: No telemetry or analytics in the source code, and the website loads no third-party scripts.
  no_ads:
    answer: yes
    evidence: https://github.com/haveno-dex/haveno
    note: Community project funded by donations and development bounties, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
