---
name: RiseupVPN
description: Free, donation-funded VPN run by the Riseup collective in the United States. It needs no account and uses the open-source LEAP VPN client with OpenVPN.
website: https://riseup.net/en/vpn
jurisdiction: US
domain: riseup.net
source: https://0xacab.org/leap/bitmask-vpn
platforms:
  - windows
  - macos
  - linux
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://0xacab.org/leap/bitmask-vpn/-/raw/main/LICENSE
    note: The LEAP VPN client and provider software are open source under GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://riseup.net/en/privacy-policy
    note: The privacy policy states no third-party cookies or tracking of any kind are used. The Android app has no known trackers on Exodus.
  no_ads:
    answer: yes
    evidence: https://riseup.net/en/vpn
    note: Entirely funded by user donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_logs_audited:
    answer: partial
    evidence: https://riseup.net/en/vpn
    note: Riseup states it does not log VPN users' IP addresses. Not audited.
  anonymous_payment:
    answer: n/a
    note: The service is free and needs no account or payment.
  open_source_clients:
    answer: yes
    evidence: https://0xacab.org/leap/bitmask-vpn
    note: The desktop and Android clients are open source under GPL-3.0.
  modern_protocols:
    answer: partial
    evidence: https://0xacab.org/leap/bitmask-vpn
    note: The client uses OpenVPN. WireGuard is not supported.
  transparency_report:
    answer: partial
    evidence: https://riseup.net/en/canary
    note: A signed warrant canary is updated regularly. No request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
