---
name: FreeOTP
description: Open source two-factor authentication app sponsored by Red Hat that generates HOTP and TOTP codes. Tokens are added by scanning a QR code.
website: https://freeotp.github.io
source: https://github.com/freeotp/freeotp-android
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/freeotp/freeotp-android/blob/master/COPYING
    note: Apache-2.0. The iOS app is in a separate repository under the same license.
  no_trackers:
    answer: yes
    evidence: https://freeotp.github.io/privacy.html
    note: The privacy policy states the app collects no data, and the Exodus report finds no trackers. The website loads no scripts.
  no_ads:
    answer: yes
    evidence: https://freeotp.github.io/privacy.html
    note: Free open source app sponsored by Red Hat, with no ads and no data collection.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
