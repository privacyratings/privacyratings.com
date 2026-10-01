---
name: Cake Wallet
description: Open-source, self-custodial mobile and desktop wallet for Monero, Bitcoin, Litecoin, Ethereum and other cryptocurrencies, with built-in exchange and purchase integrations.
website: https://cakewallet.com
source: https://github.com/cake-tech/cake_wallet
jurisdiction: US
platforms:
  - android
  - ios
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/cake-tech/cake_wallet/blob/dev/LICENSE.md
    note: MIT.
  no_trackers:
    answer: partial
    evidence: https://cakewallet.com/privacy/
    note: The Exodus report finds no trackers in the Android app and the privacy policy says usage data is not collected, but the website uses Fathom analytics.
  no_ads:
    answer: yes
    evidence: https://cakewallet.com/privacy/
    note: No ads. Funded through integrated exchange and purchase services, and the privacy policy states usage data is not collected.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
