---
name: Mozilla VPN
description: VPN service from Mozilla that runs on Mullvad's WireGuard server network. The apps are open source under MPL-2.0 and require a Mozilla account.
website: https://www.mozilla.org/en-US/products/vpn/
family: mozilla
jurisdiction: US
domain: www.mozilla.org
source: https://github.com/mozilla-mobile/mozilla-vpn-client
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/mozilla-mobile/mozilla-vpn-client/blob/main/LICENSE.md
    note: The apps are open source under MPL-2.0. The server network, run by Mullvad, is not.
  no_trackers:
    answer: no
    evidence: https://www.mozilla.org/en-US/privacy/subscription-services/
    note: Campaign and device data is shared with the Adjust attribution service. App interaction data is off by default.
  no_ads:
    answer: yes
    evidence: https://www.mozilla.org/en-US/products/vpn/pricing/
    note: Funded by paid subscriptions. No ads.
  independent_audit:
    answer: partial
    evidence: https://blog.mozilla.org/security/files/2023/12/Cure53-Final-Audit-Report.pdf
    note: Full Cure53 report on the client apps is public, but the audit is more than three years old.
  no_logs_audited:
    answer: partial
    evidence: https://www.mozilla.org/en-US/privacy/subscription-services/
    note: The privacy notice states neither Mozilla nor Mullvad keeps logs of network traffic. Not audited for Mozilla VPN.
  anonymous_payment:
    answer: no
    note: A Mozilla account with an email address and payment by card, PayPal, Apple or Google Pay are required.
  open_source_clients:
    answer: yes
    evidence: https://github.com/mozilla-mobile/mozilla-vpn-client
    note: Apps for Windows, macOS, Linux, Android and iOS are open source.
  modern_protocols:
    answer: yes
    evidence: https://www.mozilla.org/en-US/products/vpn/features/
    note: WireGuard is the protocol used.
  transparency_report:
    answer: yes
    evidence: https://www.mozilla.org/en-US/about/policy/transparency/
    note: Mozilla publishes counts of government and legal requests, most recently each year.
  user_notice:
    answer: yes
    evidence: https://www.mozilla.org/en-US/about/policy/transparency/
    note: Mozilla states it notifies affected users of requests unless legally prohibited.
---
