---
name: ExpressVPN
description: Commercial VPN service run by Express Technologies Ltd. in the British Virgin Islands, a subsidiary of Kape Technologies. It uses its own open-source Lightway protocol.
website: https://www.expressvpn.com
mainstream: true
jurisdiction: VG
domain: www.expressvpn.com
source: https://github.com/expressvpn/lightway
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: no
    evidence: https://raw.githubusercontent.com/expressvpn/lightway/main/LICENSE
    note: The apps and servers are closed source. Only the Lightway protocol implementation is published under AGPL-3.0.
  no_trackers:
    answer: no
    evidence: https://www.expressvpn.com/privacy-policy
    note: The privacy policy lists Google Analytics and AppsFlyer, and the Android app includes AppsFlyer and Google Firebase Analytics.
  no_ads:
    answer: yes
    evidence: https://www.expressvpn.com/privacy-policy
    note: Funded by paid subscriptions. The policy states personal data is not sold.
  independent_audit:
    answer: yes
    evidence: https://cure53.de/pentest-report_expressvpn-lightway_2024.pdf
    note: Full reports are published, including Cure53 on the Lightway protocol and KPMG on the no-logs policy.
  no_logs_audited:
    answer: yes
    evidence: https://www.expressvpn.com/security-audit-reports/kpmg-privacy-policy-2025
    note: KPMG assessed that the TrustedServer design prevents activity and connection logging. The full report is public after accepting KPMG terms.
  anonymous_payment:
    answer: partial
    evidence: https://www.expressvpn.com/privacy-policy
    note: Bitcoin is accepted, but an email address is needed for the account.
  open_source_clients:
    answer: no
    note: The apps are closed source.
  modern_protocols:
    answer: yes
    evidence: https://www.expressvpn.com/lightway
    note: The Lightway protocol, audited by Cure53 and Praetorian, is the default.
  transparency_report:
    answer: yes
    evidence: https://www.expressvpn.com/trust
    note: Twice-yearly counts of government requests, warrants and DMCA requests are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
