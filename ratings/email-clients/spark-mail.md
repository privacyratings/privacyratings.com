---
name: Spark Mail
description: Email app for macOS, Windows, iOS and Android with a smart inbox, team sharing and AI features. Push notifications and several features run through its servers.
website: https://sparkmailapp.com
jurisdiction: IE
platforms:
  - macos
  - windows
  - ios
  - android
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.readdle.spark/latest/
    note: Exodus finds Amplitude, AppsFlyer, Firebase Analytics and Crashlytics in the Android app.
  no_ads:
    answer: yes
    evidence: https://sparkmailapp.com/legal/privacy-app
    note: Funded by paid plans. The privacy policy states that personal information is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: no
    note: Not supported.
  no_cloud_relay:
    answer: no
    evidence: https://sparkmailapp.com/help/privacy-data/spark-email-privacy-everything-you-need-to-know
    note: Login credentials or access tokens are stored on Spark servers to send notifications and run features such as send later and shared drafts.
  remote_content_blocked:
    answer: no
    note: No documented option to block remote images or tracking pixels.
  any_provider:
    answer: yes
    evidence: https://sparkmailapp.com/help/add-manage-accounts/connect-to-your-email-account-in-spark
    note: Works with Gmail, Outlook, iCloud, Yahoo, Exchange and custom IMAP accounts.
---
