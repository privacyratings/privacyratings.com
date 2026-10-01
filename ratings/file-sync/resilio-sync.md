---
name: Resilio Sync
description: Peer-to-peer file synchronization app that syncs folders directly between devices without storing files on a central server. Made by Resilio, now part of Nasuni.
website: https://www.resilio.com/sync/
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.resilio.sync/latest/
    note: Exodus finds Amplitude, Google Crashlytics and Firebase Analytics in the Android app, and the website uses Google Tag Manager.
  no_ads:
    answer: partial
    evidence: https://www.nasuni.com/wp-content/uploads/2026/07/Nasuni_Privacy_Notice.pdf
    note: Free app with no ads, but Nasuni's privacy notice allows sharing personal information with advertising partners for targeted advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
