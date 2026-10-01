---
name: NymVPN
description: VPN from Nym Technologies SA in Switzerland that runs on a decentralized network of independent nodes. It offers a fast two-hop WireGuard mode and an anonymous mode routed through the Nym mixnet.
website: https://nym.com
jurisdiction: CH
domain: nym.com
source: https://github.com/nymtech/nym-vpn-client
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/nymtech/nym-vpn-client/blob/develop/LICENSE
    note: The apps and the Nym network node software are open source under GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://nym.com/vpn-privacy-statement
    note: App error reports via Sentry and usage statistics are off by default. The website uses self-hosted Matomo analytics.
  no_ads:
    answer: yes
    evidence: https://nym.com/pricing
    note: Funded by paid subscriptions. The privacy statement rules out selling data to advertisers.
  independent_audit:
    answer: yes
    evidence: https://cure53.de/audit-report_nym.pdf
    note: Full Cure53 report on the apps, VPN, infrastructure and cryptography is public.
  no_logs_audited:
    answer: partial
    evidence: https://nym.com/vpn-privacy-statement
    note: The privacy statement describes a no-logs design with anonymous credentials. The Cure53 audit is a security audit, not a no-logs assessment.
  anonymous_payment:
    answer: yes
    evidence: https://nym.com/vpn-privacy-statement
    note: Cash, Monero and Zcash are accepted, and no email is needed with these payment methods.
  open_source_clients:
    answer: yes
    evidence: https://github.com/nymtech/nym-vpn-client
    note: Apps for Windows, macOS, Linux, Android and iOS are open source.
  modern_protocols:
    answer: yes
    evidence: https://nym.com/blog/building-decentralized-wireguard-vpn
    note: The fast mode uses WireGuard across two hops.
  transparency_report:
    answer: partial
    evidence: https://nym.com/vpn-privacy-statement
    note: The privacy statement says requests will be challenged and made public. No request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
