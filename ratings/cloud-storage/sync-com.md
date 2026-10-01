---
name: Sync.com
description: End-to-end encrypted cloud storage and file sharing from Canada, with desktop, mobile and web apps.
website: https://www.sync.com
domain: cp.sync.com
jurisdiction: CA
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.sync.mobileapp/latest/
    note: The Android app includes Google Firebase Analytics, Crashlytics, Mixpanel and Sentry, and the website loads Google and Facebook advertising tags.
  no_ads:
    answer: yes
    evidence: https://www.sync.com/pricing-individual/
    note: Funded by paid plans, with no ads in the service.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://www.sync.com/privacy/
    note: The privacy policy explains how legal requests are verified and answered, but no request counts are published.
  user_notice:
    answer: yes
    evidence: https://www.sync.com/privacy/
    note: Sync commits to reasonable efforts to notify users before their information is disclosed, within the bounds of the law.
---
