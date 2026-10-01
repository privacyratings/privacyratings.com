---
name: Yubico Authenticator
description: Authenticator app from Yubico that stores OATH one-time password secrets on a YubiKey instead of the phone or computer, and generates codes when the key is connected or tapped.
website: https://www.yubico.com/products/yubico-authenticator/
source: https://github.com/Yubico/yubioath-flutter
jurisdiction: SE
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Yubico/yubioath-flutter/blob/main/LICENSE
    note: Apache-2.0. The iOS app is in a separate repository under the same license.
  no_trackers:
    answer: no
    evidence: https://www.yubico.com/products/yubico-authenticator/
    note: The Android app collects no data and Exodus finds no trackers, but the Yubico website loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://play.google.com/store/apps/datasafety?id=com.yubico.yubioath
    note: Free app funded by YubiKey hardware sales, with no ads. The Play data safety listing declares no data collected or shared.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
