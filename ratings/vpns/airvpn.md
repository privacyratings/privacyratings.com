---
name: AirVPN
description: VPN service run by Air di Paolo Brini in Italy. Accounts need no email address, and the open-source Eddie client supports WireGuard and OpenVPN.
website: https://airvpn.org
jurisdiction: IT
domain: airvpn.org
source: https://github.com/AirVPN/Eddie
platforms:
  - windows
  - macos
  - linux
  - android
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/AirVPN/Eddie/blob/master/LICENSE
    note: The Eddie client is open source under GPL-3.0. The server side is closed source.
  no_trackers:
    answer: yes
    evidence: https://airvpn.org/privacy/
    note: The privacy notice states no third-party add-ons or tracking cookies are used on the website. The Android app has no known trackers on Exodus.
  no_ads:
    answer: yes
    evidence: https://airvpn.org/privacy/
    note: Funded by paid plans. The privacy notice states data is not passed to third parties.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_logs_audited:
    answer: partial
    evidence: https://airvpn.org/privacy/
    note: The privacy notice states traffic and IP addresses are not logged. Not audited.
  anonymous_payment:
    answer: yes
    evidence: https://airvpn.org/buy/
    note: No email address is required, and Monero and other cryptocurrencies are accepted directly.
  open_source_clients:
    answer: yes
    evidence: https://eddie.website/
    note: The Eddie apps for Windows, macOS, Linux and Android are open source under GPL-3.0. There is no iOS app.
  modern_protocols:
    answer: yes
    evidence: https://airvpn.org/faq/wireguard/
    note: WireGuard is supported alongside OpenVPN.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
