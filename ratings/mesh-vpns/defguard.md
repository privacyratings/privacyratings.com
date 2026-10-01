---
name: Defguard
description: Self-hosted WireGuard VPN platform with multi-factor authentication on every connection, identity management and access rules, from a company in Poland.
website: https://defguard.net
source: https://github.com/DefGuard/defguard
jurisdiction: PL
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/DefGuard/defguard/blob/main/LICENSE.md
    note: All code is public. The core is AGPL-3.0, and enterprise features in the same repository use the source-available Defguard Enterprise License.
  no_trackers:
    answer: no
    evidence: https://defguard.net
    note: The website loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://defguard.net/pricing/
    note: Funded by paid enterprise licenses, with no ads.
  independent_audit:
    answer: yes
    evidence: https://defguard.net/pentesting/
    note: Findings from periodic penetration tests by ISEC are published in full, with links to the fixes.
  device_keys:
    answer: yes
    evidence: https://docs.defguard.net/features/network-devices
    note: The server does not store WireGuard private keys. Traffic ends at gateways on your own infrastructure.
  self_hosted_control:
    answer: yes
    evidence: https://github.com/DefGuard/defguard
    note: The core server is open source and self-hosted only.
  no_connection_logs:
    answer: yes
    evidence: https://defguard.net
    note: Defguard is self-hosted only, so connection logs stay on your own servers.
---
