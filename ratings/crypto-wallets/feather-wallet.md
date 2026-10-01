---
name: Feather Wallet
description: Open-source desktop Monero wallet for Linux, Tails, Windows and macOS, with Tor support, hardware wallet support and coin control.
website: https://featherwallet.org
source: https://github.com/feather-wallet/feather
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/feather-wallet/feather/blob/master/LICENSE
    note: BSD-3-Clause.
  no_trackers:
    answer: yes
    evidence: https://github.com/feather-wallet/feather
    note: No telemetry or analytics in the source code, and the website loads no third-party scripts.
  no_ads:
    answer: yes
    evidence: https://featherwallet.org/donate
    note: Free software funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
