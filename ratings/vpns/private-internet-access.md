---
name: Private Internet Access
description: Commercial VPN service from Private Internet Access, Inc. in the United States, a subsidiary of Kape Technologies. The apps are open source and support WireGuard and OpenVPN.
website: https://www.privateinternetaccess.com
aliases:
  - PIA
jurisdiction: US
domain: www.privateinternetaccess.com
source: https://github.com/pia-foss/desktop
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://raw.githubusercontent.com/pia-foss/desktop/master/LICENSE.txt
    note: The desktop app is GPL-3.0 and the mobile apps are MIT-licensed. The server side is closed source.
  no_trackers:
    answer: no
    evidence: https://www.privateinternetaccess.com/privacy-policy
    note: The website uses Google Analytics. The Android app has no known trackers on Exodus.
  no_ads:
    answer: yes
    evidence: https://www.privateinternetaccess.com/buy-vpn-online
    note: Funded by paid subscriptions. The privacy policy states user data is not shared or sold.
  independent_audit:
    answer: yes
    evidence: https://www.privateinternetaccess.com/deloitte-privacy-policy
    note: Full Deloitte ISAE 3000 assurance report on the VPN infrastructure is downloadable after accepting terms.
  no_logs_audited:
    answer: yes
    evidence: https://www.privateinternetaccess.com/deloitte-privacy-policy
    note: Deloitte Audit Romania examined the server configuration and found no data that identifies users or their activity. The full report is public.
  anonymous_payment:
    answer: partial
    evidence: https://www.privateinternetaccess.com/privacy-policy
    note: Cryptocurrency is accepted through BitPay, but an email address is needed for the account.
  open_source_clients:
    answer: yes
    evidence: https://github.com/pia-foss
    note: Apps for Windows, macOS, Linux, Android and iOS are open source.
  modern_protocols:
    answer: yes
    evidence: https://www.privateinternetaccess.com/vpn-features/wireguard
    note: WireGuard is supported alongside OpenVPN.
  transparency_report:
    answer: yes
    evidence: https://www.privateinternetaccess.com/transparency-report
    note: Counts of government, civil and foreign requests are published regularly.
  user_notice:
    answer: partial
    evidence: https://www.privateinternetaccess.com/privacy-policy
    note: The policy says users are given a chance to object to disclosures when possible, without a firm notice promise.
---
