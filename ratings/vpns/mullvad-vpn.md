---
name: Mullvad VPN
description: >-
  Flat-priced VPN from Sweden. Accounts are a random number with no email, and payment in cash or Monero is accepted.
website: https://mullvad.net
jurisdiction: SE
source: https://github.com/mullvad/mullvadvpn-app
license: GPL-3.0
platforms: [windows, macos, linux, android, ios]
domain: mullvad.net
pick: true
pick_reason: >-
  No email, no name and no card needed. A stable, flat price, WireGuard on every platform, fully open-source apps, and repeated public audits of both the apps and the server infrastructure.
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/mullvad/mullvadvpn-app/blob/main/LICENSE.md
    note: All apps are open source under GPL-3.0. Server infrastructure is not fully published.
  no_ads:
    answer: yes
    evidence: https://mullvad.net/en/pricing
    note: One flat monthly price. No ads.
  independent_audit:
    answer: yes
    evidence: https://www.x41-dsec.de/static/reports/X41-Mullvad-Audit-Public-Report-2026-01-20.pdf
    note: Full public reports are published, including X41 D-Sec on account and payment services and Cure53 on the relay infrastructure.
  no_logs_audited:
    answer: partial
    evidence: https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf
    note: The relay audits that checked for logging are older than three years. The no-logging policy is published.
  anonymous_payment:
    answer: yes
    evidence: https://mullvad.net/en/pricing
    note: Accounts are a generated number. Cash, Monero and Bitcoin are accepted.
  open_source_clients:
    answer: yes
    evidence: https://github.com/mullvad/mullvadvpn-app
    note: Apps for every platform are open source under GPL-3.0.
  modern_protocols:
    answer: yes
    evidence: https://mullvad.net/en/help/wireguard-and-mullvad-vpn
    note: WireGuard is the default protocol.
  no_trackers:
    answer: yes
    evidence: https://mullvad.net/en/help/no-logging-data-policy
    note: The policy states no usage data is sent to external analytics. The Android app has no known trackers on Exodus.
  transparency_report:
    answer: partial
    evidence: https://mullvad.net/en/help/swedish-legislation
    note: Explains which Swedish laws allow authorities to request data and what can be disclosed. No request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
