---
name: Wasabi Wallet
description: Open source desktop Bitcoin wallet that routes traffic through Tor and supports WabiSabi coinjoins. The original zkSNACKs coordinator has shut down, so coinjoin requires configuring a third-party or self-hosted coordinator.
website: https://www.wasabiwallet.io
source: https://github.com/WalletWasabi/WalletWasabi
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/WalletWasabi/WalletWasabi/blob/master/LICENSE.md
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/WalletWasabi/WalletWasabi
    note: No telemetry or analytics in the source code. Network traffic goes through Tor by default.
  no_ads:
    answer: yes
    evidence: https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html
    note: Free open source software with no ads. The client skips coinjoin rounds that charge a coordination fee.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
