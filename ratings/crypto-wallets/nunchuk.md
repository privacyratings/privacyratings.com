---
name: Nunchuk
description: Bitcoin wallet built around multisig, with collaborative shared wallets, support for many hardware signers, and paid plans that add assisted key recovery and inheritance.
website: https://nunchuk.io
source: https://github.com/nunchuk-io/nunchuk-android
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/nunchuk-io/nunchuk-android/blob/master/LICENSE
    note: The Android and desktop apps are GPL-3.0, but the iOS app and the server for shared wallets and paid plans are not public.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/io.nunchuk.android/latest/
    note: Exodus finds Branch and Google Crashlytics in the Android app.
  no_ads:
    answer: partial
    evidence: https://nunchuk.io/privacy
    note: Funded by subscriptions with no ads and no sale of personal information, but the privacy policy allows sharing aggregated demographic data with advertisers.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
