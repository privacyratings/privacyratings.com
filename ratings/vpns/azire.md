---
name: Azire
description: WireGuard VPN service founded in Stockholm and owned by Malwarebytes, running on servers it owns and operates.
website: https://www.azirevpn.com
jurisdiction: US
domain: www.azirevpn.com
imported_from: awesome-privacy
criteria:
  open_source:
    answer: no
    note: Closed source. Only a small WireGuard configuration script is published.
  no_trackers:
    answer: no
    evidence: https://www.malwarebytes.com/legal/privacy-policy
    note: The Malwarebytes privacy policy that covers the service allows mobile analytics software and advertising cookies. The Android app has no known trackers on Exodus.
  no_ads:
    answer: yes
    evidence: https://www.azirevpn.com/support/faq
    note: Funded by paid plans. The FAQ states user data is not sold.
  independent_audit:
    answer: yes
    evidence: https://blog.azirevpn.com/content/files/2026/03/X41-DSec-Audit-AzireVPN-Public.pdf
    note: Full public report from X41 D-Sec covering source code, infrastructure and server hardware.
  transparency_report:
    answer: yes
    evidence: https://www.azirevpn.com/legal/transparency-report
    note: Yearly counts of data requests, valid requests and data provided, plus a warrant canary.
  user_notice:
    answer: no
    evidence: https://www.malwarebytes.com/legal/privacy-policy
    note: No published policy on notifying users about data requests.
  no_logs_audited:
    answer: yes
    evidence: https://blog.azirevpn.com/content/files/2026/03/X41-DSec-Audit-AzireVPN-Public.pdf
    note: The X41 D-Sec audit found production server images discard log messages. The FAQ states no logs are kept.
  anonymous_payment:
    answer: no
    evidence: https://www.azirevpn.com/support/faq
    note: Email is optional, but payment is only by card, PayPal or SEPA debit. Cash and cryptocurrency are not accepted.
  open_source_clients:
    answer: no
    note: The Windows, macOS, iOS and Android apps are closed source.
  modern_protocols:
    answer: yes
    evidence: https://www.azirevpn.com/support/faq
    note: WireGuard is the supported protocol.
---
