---
name: BlueWallet
description: Self-custodial Bitcoin wallet for Android, iOS and macOS with watch-only wallets, multisig vaults, coin control, hardware wallet support and the option to connect to a personal Electrum server.
website: https://bluewallet.io
source: https://github.com/BlueWallet/BlueWallet
platforms:
  - android
  - ios
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/BlueWallet/BlueWallet/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/io.bluewallet.bluewallet/latest/
    note: Exodus finds Bugsnag in the Android app, which sends crash reports with a device ID by default and can be turned off in the privacy settings.
  no_ads:
    answer: yes
    evidence: https://bluewallet.io/privacy/
    note: Free app with no ads, and the privacy policy says it collects as little user information as possible.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
