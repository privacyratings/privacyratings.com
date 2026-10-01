---
name: 2FAS
description: Open source authenticator app for Android and iOS with a browser extension for filling codes. Backups can be encrypted and synced through the user's Google Drive or iCloud without a 2FAS account.
website: https://2fas.com
source: https://github.com/twofas/2fas-android
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/twofas/2fas-android/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.twofasapp/latest/
    note: Exodus finds Google Crashlytics in the Android app, and the privacy policy says Google Analytics is used.
  no_ads:
    answer: yes
    evidence: https://2fas.com/privacy-policy/
    note: The apps are free and donation-supported, and the privacy policy says personal information is never sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
jurisdiction: US
---
