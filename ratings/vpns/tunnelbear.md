---
name: TunnelBear
description: VPN service from TunnelBear, based in Canada, with a free plan limited by data and paid unlimited plans. Apps support WireGuard, OpenVPN and IKEv2.
website: https://www.tunnelbear.com
jurisdiction: CA
domain: www.tunnelbear.com
platforms:
  - windows
  - macos
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.tunnelbear.com/privacy-policy
    note: The privacy policy lists Google Analytics and Hotjar, and the Android app includes AppsFlyer and Google Firebase Analytics.
  no_ads:
    answer: yes
    evidence: https://www.tunnelbear.com/privacy-policy
    note: Funded by paid plans, and the free plan has no ads. The policy states personal data is not sold.
  independent_audit:
    answer: yes
    evidence: https://cure53.de/pentest-report_tunnelbear_2023.pdf
    note: Cure53 audits the apps and servers every year, and the full audit report is public.
  no_logs_audited:
    answer: partial
    evidence: https://www.tunnelbear.com/privacy-policy
    note: The policy states IP addresses, DNS queries and activity are not logged. The Cure53 audits are security tests, not a no-logs assessment.
  anonymous_payment:
    answer: no
    evidence: https://help.tunnelbear.com/hc/en-us/articles/360059783972-What-payment-platforms-do-you-offer
    note: An email address and payment by card or app store are required. Cryptocurrency is not accepted.
  open_source_clients:
    answer: no
    note: The apps are closed source.
  modern_protocols:
    answer: yes
    evidence: https://www.tunnelbear.com/features/
    note: WireGuard is supported alongside OpenVPN and IKEv2.
  transparency_report:
    answer: partial
    evidence: https://www.tunnelbear.com/privacy-policy
    note: The privacy policy describes what data is disclosed in response to a valid subpoena or warrant. No current request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
