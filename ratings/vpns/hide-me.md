---
name: hide.me
description: VPN service from eVenture Ltd. in Malaysia with a free plan that needs no sign-up and paid plans. Apps support WireGuard, OpenVPN, IKEv2 and SoftEther.
website: https://hide.me
jurisdiction: MY
domain: hide.me
source: https://github.com/eventure/hide.client.linux
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/eventure/hide.client.linux/blob/master/LICENSE.md
    note: Only the Linux command-line client is open source, under GPL-2.0. The other apps and the servers are closed source.
  no_trackers:
    answer: no
    evidence: https://hide.me/en/privacy
    note: The privacy policy allows third-party analytics cookies, and the Android app includes Sentry.
  no_ads:
    answer: yes
    evidence: https://hide.me/en/free-vpn
    note: Funded by paid plans. The free plan has no ads.
  independent_audit:
    answer: yes
    evidence: https://hide.me/downloads/Securitum_Hide.me_no-log-policy_20240607.pdf
    note: Securitum's no-logs audit report is public.
  no_logs_audited:
    answer: yes
    evidence: https://hide.me/downloads/Securitum_Hide.me_no-log-policy_20240607.pdf
    note: Securitum verified that no user activity or DNS logs are stored on the VPN servers.
  anonymous_payment:
    answer: partial
    evidence: https://hide.me/en/pricing
    note: Monero and other cryptocurrencies are accepted, but an email address is needed for paid plans.
  open_source_clients:
    answer: partial
    evidence: https://github.com/eventure/hide.client.linux
    note: Only the Linux command-line client is open source.
  modern_protocols:
    answer: yes
    evidence: https://hide.me/en/wireguard-vpn
    note: WireGuard is supported.
  transparency_report:
    answer: yes
    evidence: https://hide.me/downloads/hide.me-transparency-report-2025.pdf
    note: Yearly report with counts of legal requests and DMCA complaints.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
