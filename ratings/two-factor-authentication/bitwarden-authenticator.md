---
name: Bitwarden Authenticator
description: Free, open source authenticator app for iOS and Android from Bitwarden that generates TOTP codes. It works without an account and can optionally sync codes with a Bitwarden password manager vault.
website: https://bitwarden.com/products/authenticator
source: https://github.com/bitwarden/ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/bitwarden/ios/blob/main/LICENSE.txt
    note: GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.bitwarden.authenticator/latest/
    note: Exodus finds Google Crashlytics in the Android app, and the website loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://bitwarden.com/pricing/
    note: Free app from Bitwarden, which is funded by paid plans.
  independent_audit:
    answer: yes
    evidence: https://bitwarden.com/assets/718YF2IWeVNARWs6nBgYzS/796a7e97eedc6d569773a1892284d034/2025_Mobile_App_Security_Assessment.pdf
    note: Full report from Unit 42 covering the Bitwarden mobile and authenticator apps.
imported_from: awesome-privacy
jurisdiction: US
---
