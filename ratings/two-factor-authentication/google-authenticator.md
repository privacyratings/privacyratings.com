---
name: Google Authenticator
description: Two-factor authentication app from Google that generates time-based and counter-based one-time codes. Codes can optionally be backed up and synced to a Google Account.
website: https://support.google.com/accounts/answer/1066447
mainstream: true
jurisdiction: US
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source. The old open source version on GitHub is no longer maintained.
  no_trackers:
    answer: no
    evidence: https://play.google.com/store/apps/datasafety?id=com.google.android.apps.authenticator2
    note: Exodus finds no third-party trackers, but the Play data safety listing declares required collection of app interactions, crash logs and device IDs for analytics.
  no_ads:
    answer: yes
    evidence: https://play.google.com/store/apps/datasafety?id=com.google.android.apps.authenticator2
    note: Free app with no ads. The Play data safety listing declares no sharing with third parties and no data use for advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
