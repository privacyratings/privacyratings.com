---
name: MEGA
description: End-to-end encrypted cloud storage and file sharing service with desktop, mobile and web apps and source-available clients.
website: https://mega.io
domain: mega.nz
jurisdiction: HU
platforms:
  - web
  - windows
  - macos
  - linux
  - android
  - ios
source: https://github.com/meganz/android
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/meganz/android/blob/master/LICENCE.md
    note: Client source is published under the MEGA Limited Code Review Licence, which is not OSI-approved. The server is closed.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/mega.privacy.android.app/latest/
    note: The Android app includes Google AdMob, Firebase Analytics and Crashlytics.
  no_ads:
    answer: no
    evidence: https://mega.io/privacy
    note: MEGA may serve ads in its services through third-party advertising companies and uses usage data for marketing.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://mega.io/transparency
    note: Publishes a yearly transparency report with counts of legal orders and other requests.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
