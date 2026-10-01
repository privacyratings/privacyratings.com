---
name: CyberGhost VPN
description: Commercial VPN service from CyberGhost S.R.L. in Romania, a subsidiary of Kape Technologies. Apps support WireGuard, OpenVPN and IKEv2.
website: https://www.cyberghostvpn.com
jurisdiction: RO
domain: www.cyberghostvpn.com
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
    evidence: https://www.cyberghostvpn.com/privacypolicy
    note: The privacy policy lists AppsFlyer, Mouseflow, Google Analytics and VWO, and the Android app includes AppsFlyer, Firebase Analytics and Sentry.
  no_ads:
    answer: yes
    evidence: https://www.cyberghostvpn.com/privacypolicy
    note: Funded by paid subscriptions. The policy states personal data is not sold, rented or traded.
  independent_audit:
    answer: yes
    evidence: https://www.cyberghostvpn.com/deloitte-privacy-policy
    note: Full Deloitte ISAE 3000 assurance report on the VPN infrastructure is downloadable.
  no_logs_audited:
    answer: yes
    evidence: https://www.cyberghostvpn.com/deloitte-privacy-policy
    note: Deloitte Audit Romania examined the server configuration and safeguards against activity logging. The full report is public.
  anonymous_payment:
    answer: partial
    evidence: https://www.cyberghostvpn.com/privacypolicy
    note: Bitcoin is accepted, but an email address is needed for the account.
  open_source_clients:
    answer: no
    note: The apps are closed source.
  modern_protocols:
    answer: yes
    evidence: https://support.cyberghostvpn.com/hc/en-us/articles/213983829-Which-VPN-Protocols-Do-You-Support
    note: WireGuard is supported alongside OpenVPN and IKEv2.
  transparency_report:
    answer: yes
    evidence: https://www.cyberghostvpn.com/transparency-report
    note: Quarterly counts of legal requests for user data are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
