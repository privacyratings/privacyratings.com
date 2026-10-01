---
name: NetBird
description: WireGuard-based mesh VPN and zero-trust access platform with open-source clients and a management server that can be self-hosted or used as NetBird's hosted service.
website: https://netbird.io
source: https://github.com/netbirdio/netbird
jurisdiction: DE
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/netbirdio/netbird/blob/main/LICENSE
    note: BSD-3-Clause for the clients and AGPL-3.0 for the management, signal and relay servers.
  no_trackers:
    answer: no
    evidence: https://netbird.io/privacy
    note: The website uses Google Analytics, Microsoft Clarity, Hotjar, HubSpot and Reddit tracking.
  no_ads:
    answer: yes
    evidence: https://netbird.io/pricing
    note: Funded by paid cloud plans, with no ads in the product.
  independent_audit:
    answer: no
    note: No independent audit is published.
  device_keys:
    answer: yes
    evidence: https://docs.netbird.io/about-netbird/how-netbird-works
    note: The client creates the WireGuard private key, which never leaves the device. The management service only distributes public keys, and relays cannot decrypt traffic.
  self_hosted_control:
    answer: yes
    evidence: https://docs.netbird.io/selfhosted/selfhosted-guide
    note: The management, signal and relay servers are open source under AGPL-3.0 and can be self-hosted.
  no_connection_logs:
    answer: yes
    evidence: https://docs.netbird.io/manage/activity/traffic-events-logging
    note: Traffic event logging is off by default. Client debug bundles are only uploaded when a user runs the upload command.
---
