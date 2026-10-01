---
name: BitBox02
description: Swiss hardware wallet for Bitcoin and other cryptocurrencies with open source firmware and companion app, a secure chip, multisig support and microSD card backups.
website: https://bitbox.swiss
source: https://github.com/BitBoxSwiss/bitbox02-firmware
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/BitBoxSwiss/bitbox02-firmware/blob/master/LICENSE
    note: Apache-2.0 for the firmware. The BitBoxApp is also Apache-2.0.
  no_trackers:
    answer: no
    evidence: https://bitbox.swiss/policies/privacy-policy/
    note: The privacy policy says the website uses Google Analytics. The BitBoxApp has no third-party trackers or analytics.
  no_ads:
    answer: yes
    evidence: https://bitbox.swiss/policies/privacy-policy/
    note: Funded by hardware sales. The privacy policy states user information is never sold, rented or leased.
  independent_audit:
    answer: partial
    evidence: https://bitbox.swiss/bitbox02/security-features/
    note: The vendor states Census Labs audited the firmware, but the report is not published.
jurisdiction: CH
---
