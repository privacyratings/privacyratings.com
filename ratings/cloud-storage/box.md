---
name: Box
description: Cloud content management and file sharing service for businesses and individuals, with desktop, mobile and web apps. Files are encrypted at rest with keys Box holds, not end-to-end.
website: https://www.box.com
mainstream: true
domain: app.box.com
jurisdiction: US
platforms:
  - web
  - windows
  - macos
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.box.android/latest/
    note: The Android app includes Amplitude, Google Firebase Analytics, Crashlytics and Pendo.
  no_ads:
    answer: yes
    evidence: https://www.box.com/legal/privacypolicy
    note: Funded by paid plans, with no ads in the service. Box states it does not share personal information or content with third parties without permission.
  independent_audit:
    answer: partial
    evidence: https://www.box.com/trust
    note: Box has SOC 1, SOC 2 and SOC 3 audits and ISO certifications. The ISO certificates are public, but the SOC reports are only shared under NDA.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
