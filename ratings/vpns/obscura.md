---
name: Obscura
description: VPN from Sovereign Engineering Inc. in the United States that sends WireGuard traffic over QUIC through its own relay to Mullvad exit servers, so neither party sees both the user and the traffic. Accounts are a random number.
website: https://obscura.com
jurisdiction: US
domain: obscura.com
source: https://github.com/Sovereign-Engineering/obscuravpn-client
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Sovereign-Engineering/obscuravpn-client/blob/main/LICENSE
    note: The client apps are open source under GPL-3.0. The relay servers are not.
  no_trackers:
    answer: yes
    evidence: https://obscura.com/legal/
    note: No third-party trackers. Plausible analytics are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://obscura.com/pricing/
    note: Funded by paid subscriptions. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_logs_audited:
    answer: partial
    evidence: https://obscura.com/legal/
    note: The policy states IP addresses are not logged or stored, and the two-party relay design limits what each party sees. Not audited.
  anonymous_payment:
    answer: yes
    evidence: https://obscura.com/
    note: Accounts are a random number with no email, and Monero and Bitcoin over Lightning are accepted.
  open_source_clients:
    answer: yes
    evidence: https://github.com/Sovereign-Engineering/obscuravpn-client
    note: The repository holds the apps for macOS, iOS, Android, Windows and Linux under GPL-3.0.
  modern_protocols:
    answer: yes
    evidence: https://obscura.com/
    note: WireGuard is used, carried over QUIC.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
