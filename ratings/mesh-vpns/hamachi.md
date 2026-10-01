---
name: LogMeIn Hamachi
description: Hosted VPN service from LogMeIn that joins computers into virtual LAN networks, with a free plan for up to five computers per network.
website: https://vpn.net
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://vpn.net/
    note: The website loads Google Tag Manager.
  device_keys:
    answer: yes
    evidence: https://vpn.net/security
    note: Peers agree on session keys with each other through a Diffie-Hellman exchange, and relayed traffic stays encrypted between the endpoints.
  self_hosted_control:
    answer: no
    note: Only LogMeIn's hosted service can be used.
aliases:
  - Hamachi
---
