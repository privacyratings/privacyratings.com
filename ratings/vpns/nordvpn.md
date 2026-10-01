---
name: NordVPN
description: Commercial VPN service from Nord Security, operated by a company in Panama. Apps use the WireGuard-based NordLynx protocol, OpenVPN or the NordWhisper protocol.
website: https://nordvpn.com
mainstream: true
jurisdiction: PA
domain: nordvpn.com
source: https://github.com/NordSecurity/nordvpn-linux
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/NordSecurity/nordvpn-linux/blob/main/LICENSE.md
    note: Only the Linux app is open source, under GPL-3.0. The other apps and the servers are closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.nordvpn.android/latest/
    note: The Android app includes AppsFlyer, Google Firebase Analytics and Crashlytics.
  no_ads:
    answer: yes
    evidence: https://nordvpn.com/pricing/
    note: Funded by paid subscriptions. No ads in the apps.
  independent_audit:
    answer: partial
    evidence: https://nordvpn.com/blog/nordvpn-no-logs-assurance-engagement-2025/
    note: Deloitte performed a no-logs assurance engagement. The full report is only available to logged-in customers.
  no_logs_audited:
    answer: partial
    evidence: https://nordvpn.com/blog/nordvpn-no-logs-assurance-engagement-2025/
    note: Deloitte assessed the no-logs policy repeatedly, but the full report is only available to logged-in customers, not publicly.
  anonymous_payment:
    answer: partial
    evidence: https://nordvpn.com/pricing/
    note: Several cryptocurrencies are accepted, but an email address is needed for the account.
  open_source_clients:
    answer: partial
    evidence: https://github.com/NordSecurity/nordvpn-linux
    note: Only the Linux app is open source.
  modern_protocols:
    answer: yes
    evidence: https://nordvpn.com/blog/nordlynx-protocol-wireguard/
    note: NordLynx, built on WireGuard, is the default protocol.
  transparency_report:
    answer: yes
    evidence: https://nordvpn.com/blog/nordvpn-introduces-transparency-reports/
    note: Quarterly counts of government inquiries and DMCA requests are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
