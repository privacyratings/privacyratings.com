---
name: IVPN
description: "VPN service from Gibraltar with random account IDs, no email at sign-up, cash and Monero payment, and open-source apps."
website: https://www.ivpn.net
jurisdiction: GI
source: https://github.com/ivpn/desktop-app
domain: www.ivpn.net
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/ivpn/desktop-app/blob/master/LICENSE.md
    note: Apps are open source under GPL-3.0. The server side is not.
  no_trackers:
    answer: partial
    evidence: https://www.ivpn.net/en/privacy/
    note: Website analytics use self-hosted Matomo, and mobile crash reports go to IVPN servers and can be turned off. No third-party trackers.
  no_ads:
    answer: yes
    evidence: https://www.ivpn.net/en/pricing/
    note: Funded by paid plans. No ads.
  independent_audit:
    answer: yes
    evidence: https://cure53.de/pentest-report_IVPN_2024.pdf
    note: Full public Cure53 report on the customer website and servers. Audits are repeated yearly.
  transparency_report:
    answer: yes
    evidence: https://www.ivpn.net/en/transparency-report/
    note: Yearly counts of requests received, valid requests and requests where data was provided.
  user_notice:
    answer: yes
    evidence: https://www.ivpn.net/en/legal-process-guidelines/
    note: The legal process guidelines promise to notify users unless notice is prohibited.
  no_logs_audited:
    answer: partial
    evidence: https://cure53.de/audit-report_ivpn.pdf
    note: The Cure53 no-logs audit is older than three years. Later audits focus on security.
  anonymous_payment:
    answer: yes
    evidence: https://www.ivpn.net/en/pricing/
    note: No email is needed. Cash, Monero and Bitcoin are accepted.
  open_source_clients:
    answer: yes
    evidence: https://github.com/ivpn
    note: Android, iOS and desktop apps are open source under GPL-3.0.
  modern_protocols:
    answer: yes
    evidence: https://www.ivpn.net/en/wireguard/
    note: WireGuard is supported, with post-quantum key exchange in the apps.
imported_from: awesome-privacy
---
