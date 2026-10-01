---
name: innernet
description: Open-source private network system built on WireGuard, with a self-hosted server that manages peers, CIDR-based groups and access rules.
website: https://github.com/tonarino/innernet
source: https://github.com/tonarino/innernet
jurisdiction: JP
platforms:
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/tonarino/innernet/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/tonarino/innernet
    note: The project has no website beyond its repository and no hosted service.
  no_ads:
    answer: yes
    evidence: https://github.com/tonarino/innernet
    note: Free open-source software from tonari, with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
  device_keys:
    answer: yes
    evidence: https://github.com/tonarino/innernet#readme
    note: When a peer redeems its invitation, it creates a new key pair and registers only the public key with the server. The key in the invitation file stops working.
  self_hosted_control:
    answer: yes
    evidence: https://github.com/tonarino/innernet#readme
    note: The coordination server is open source and self-hosted. There is no hosted version.
  no_connection_logs:
    answer: yes
    evidence: https://github.com/tonarino/innernet
    note: There is no vendor service. Logs stay on your own devices and server.
---
