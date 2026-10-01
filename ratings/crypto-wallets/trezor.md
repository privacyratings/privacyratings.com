---
name: Trezor
description: Hardware wallet with open source firmware, used with the Trezor Suite desktop and mobile app to keep keys offline and sign transactions for Bitcoin and many other coins.
website: https://trezor.io
source: https://github.com/trezor/trezor-firmware
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/trezor/trezor-suite/blob/develop/LICENSE.md
    note: All code is public. The firmware is GPL-3.0 and the Trezor Suite app uses the source-available Trezor Reference Source License, which is not OSI-approved.
  no_ads:
    answer: no
    evidence: https://data.trezor.io/legal/privacy-policy.html
    note: Funded by hardware sales, but the privacy policy says website cookies are used to personalize ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
jurisdiction: CZ
---
