---
name: Bitcoin Core
description: "Reference implementation of Bitcoin: a full node that downloads and validates the entire blockchain, with a built-in wallet, a graphical interface and an RPC interface."
website: https://bitcoincore.org
source: https://github.com/bitcoin/bitcoin
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/bitcoin/bitcoin/blob/master/COPYING
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/bitcoin/bitcoin
    note: No telemetry or analytics in the source code, and the website loads no known trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/bitcoin/bitcoin/blob/master/COPYING
    note: Free MIT-licensed software developed by contributors, with no ads.
  independent_audit:
    answer: partial
    evidence: https://ostif.org/wp-content/uploads/2025/11/25-05-2133-REP-bitcoincore-security-assessment-V1.3.pdf
    note: Quarkslab published a full audit through OSTIF, but it covers the peer-to-peer and validation code and not the wallet.
---
