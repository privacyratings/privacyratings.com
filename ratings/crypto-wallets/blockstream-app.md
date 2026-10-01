---
name: Blockstream App
description: Bitcoin and Liquid wallet from Blockstream, formerly Blockstream Green, with single-signature and two-factor multisig accounts, hardware wallet support and the option to connect to a personal Electrum server.
website: https://blockstream.com/app/
aliases:
  - Blockstream Green
source: https://github.com/Blockstream/green_android
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Blockstream/green_android/blob/master/LICENSE
    note: The Android, iOS and desktop apps are GPL-3.0, but the server that co-signs two-factor multisig accounts is closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.greenaddress.greenbits_android_wallet/latest/
    note: Exodus finds Countly analytics in the Android app, and the blockstream.com website loads Google Analytics and Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://blockstream.com/privacy/
    note: Free app with no ads. The privacy policy states collected personal information is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
