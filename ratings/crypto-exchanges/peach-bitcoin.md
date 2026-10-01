---
name: Peach Bitcoin
description: Swiss peer-to-peer Bitcoin exchange app where buyers and sellers trade directly, with bitcoin held in multisig escrow during each trade.
website: https://peachbitcoin.com
source: https://github.com/Peach2Peach/peach-app
jurisdiction: CH
platforms:
  - android
  - ios
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Peach2Peach/peach-app/blob/main/LICENSE.md
    note: The app source is public under the MIT license with the Commons Clause, which is not OSI-approved. The server is closed.
  no_trackers:
    answer: no
    evidence: https://peachbitcoin.com/privacy-policy/
    note: The website uses Google Analytics. The Android app includes Google Crashlytics, with crash data sharing described as opt-in.
  no_ads:
    answer: yes
    evidence: https://peachbitcoin.com/terms-and-conditions/
    note: Funded by a fee on each trade, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
