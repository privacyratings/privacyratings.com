---
name: Bitcoin
description: Decentralized cryptocurrency and payment network. Every transaction, address and amount is recorded on a public blockchain, so payments are pseudonymous rather than private.
website: https://bitcoin.org
mainstream: true
source: https://github.com/bitcoin/bitcoin
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/bitcoin/bitcoin/blob/master/COPYING
    note: The reference implementation, Bitcoin Core, is MIT licensed.
  no_trackers:
    answer: yes
    evidence: https://bitcoin.org/en/privacy
    note: The bitcoin.org privacy policy describes only server logs with shortened IP addresses and a consent cookie, and Bitcoin Core contains no telemetry.
  no_ads:
    answer: yes
    evidence: https://bitcoincore.org/en/about/
    note: Open protocol and software maintained by an open source developer community, with no ads.
  independent_audit:
    answer: yes
    evidence: https://ostif.org/wp-content/uploads/2025/11/25-05-2133-REP-bitcoincore-security-assessment-V1.3.pdf
    note: Quarkslab published a full security audit of Bitcoin Core, arranged by OSTIF.
---
