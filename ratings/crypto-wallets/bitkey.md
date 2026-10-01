---
name: Bitkey
description: Bitcoin wallet from Block made of a phone app, a hardware key and a Block-run server key in a 2-of-3 multisig setup, with recovery without a seed phrase.
website: https://bitkey.world
source: https://github.com/proto-at-block/bitkey
jurisdiction: US
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/proto-at-block/bitkey/blob/main/LICENSE
    note: MIT for the app, firmware and server code, published as a copy of the internal repository.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/world.bitkey.app/latest/
    note: Exodus finds Bugsnag in the Android app, and the website loads Google Tag Manager and Amplitude.
  no_ads:
    answer: partial
    evidence: https://bitkey.world/legal/privacy-notice
    note: Funded by hardware sales with no ads in the app and no sale of personal information, but website data is shared with advertising platforms to market Bitkey.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
