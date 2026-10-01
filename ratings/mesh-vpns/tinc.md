---
name: tinc
description: Long-running open-source VPN daemon that builds an encrypted mesh between nodes, sending traffic directly to its destination where possible, with no central server.
website: https://www.tinc-vpn.org
source: https://github.com/gsliepen/tinc
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/gsliepen/tinc/blob/1.1/COPYING
    note: GPL-2.0 or later.
  no_trackers:
    answer: yes
    evidence: https://www.tinc-vpn.org/
    note: The website loads no trackers, and there is no hosted service.
  no_ads:
    answer: yes
    evidence: https://www.tinc-vpn.org/
    note: Free volunteer project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
  device_keys:
    answer: yes
    evidence: https://www.tinc-vpn.org/documentation/Generating-keypairs.html
    note: Each node creates its own key pair. Nodes exchange public keys directly, with no coordination server.
  self_hosted_control:
    answer: yes
    evidence: https://www.tinc-vpn.org/
    note: There is no central server. Every node is configured and run by its owner.
  no_connection_logs:
    answer: yes
    evidence: https://www.tinc-vpn.org/
    note: There is no vendor service. Logs stay on each node.
---
