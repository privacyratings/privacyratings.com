---
name: Yggdrasil
description: Experimental decentralized mesh network that gives each node an IPv6 address and routes end-to-end encrypted traffic between peers; the project states it does not aim to provide anonymity.
website: https://yggdrasil-network.github.io
source: https://github.com/yggdrasil-network/yggdrasil-go
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/yggdrasil-network/yggdrasil-go/blob/develop/LICENSE
    note: LGPL-3.0 with a linking exception.
  no_trackers:
    answer: yes
    evidence: https://github.com/yggdrasil-network/yggdrasil-go
    note: No telemetry or analytics in the source code, and the website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/yggdrasil-network/yggdrasil-go
    note: Free volunteer project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
also_in:
  - mesh-vpns
---
