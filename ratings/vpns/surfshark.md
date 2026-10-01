---
name: Surfshark
description: Commercial VPN service from Surfshark B.V. in the Netherlands. Apps support WireGuard, OpenVPN and IKEv2.
website: https://surfshark.com
mainstream: true
jurisdiction: NL
domain: surfshark.com
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://surfshark.com/privacy
    note: The privacy policy lists Firebase Analytics and AppsFlyer for app analytics and marketing attribution.
  no_ads:
    answer: yes
    evidence: https://surfshark.com/privacy
    note: Funded by paid subscriptions. The policy states personal data is not sold, rented or traded.
  independent_audit:
    answer: yes
    evidence: https://surfshark.com/media/SurfShark-InfrastructureTestReport_20251217_Public.pdf
    note: Full SecuRing penetration test report on the server infrastructure is public.
  no_logs_audited:
    answer: partial
    evidence: https://surfshark.com/blog/deloitte-nologs-policy-verified-again
    note: Deloitte assessed the no-logs policy, but the full report is only available to logged-in users, not publicly.
  anonymous_payment:
    answer: partial
    evidence: https://support.surfshark.com/hc/en-us/articles/360003069034-What-payment-options-do-you-offer
    note: Cryptocurrency is accepted, but an email address is needed for the account.
  open_source_clients:
    answer: no
    note: The apps are closed source.
  modern_protocols:
    answer: yes
    evidence: https://surfshark.com/blog/wireguard-protocol-is-now-live-on-surfshark
    note: WireGuard is supported alongside OpenVPN and IKEv2.
  transparency_report:
    answer: yes
    evidence: https://surfshark.com/transparency-report
    note: Quarterly counts of user data requests by type are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
