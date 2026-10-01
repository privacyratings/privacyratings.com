---
name: Ethereum
description: Decentralized blockchain platform for smart contracts and applications, with Ether as its native currency. All transactions and contract activity are recorded on a public blockchain.
website: https://ethereum.org
source: https://github.com/ethereum/go-ethereum
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ethereum/go-ethereum/blob/master/COPYING
    note: The go-ethereum client is LGPL-3.0 and GPL-3.0, and the other major clients and the protocol specifications are also open source.
  no_trackers:
    answer: partial
    evidence: https://ethereum.org/privacy-policy/
    note: The ethereum.org website uses Matomo analytics and Sentry error reporting. Client software such as go-ethereum sends no telemetry by default.
  no_ads:
    answer: yes
    evidence: https://ethereum.foundation/ef
    note: Protocol development is funded by the non-profit Ethereum Foundation and other community organizations, with no ads.
  independent_audit:
    answer: partial
    evidence: https://github.com/ethereum/go-ethereum/tree/master/docs/audits
    note: Audits of the go-ethereum client and its peer discovery protocol are published, but they are older than three years.
---
