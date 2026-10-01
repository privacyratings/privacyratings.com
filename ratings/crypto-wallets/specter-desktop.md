---
name: Specter Desktop
description: Desktop app and web interface for managing Bitcoin multisig and single-key wallets with hardware signers, using a personal Bitcoin Core node or an Electrum server.
website: https://specter.solutions/desktop/
source: https://github.com/cryptoadvance/specter-desktop
jurisdiction: CH
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/cryptoadvance/specter-desktop/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/cryptoadvance/specter-desktop
    note: No telemetry or analytics in the source code, and the website loads no known trackers.
  no_ads:
    answer: yes
    evidence: https://specter.solutions/donate/
    note: Free software maintained by the non-profit Specter Association and funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
