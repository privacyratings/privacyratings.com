---
name: Dropbox
description: Cloud storage and file sync service with desktop, mobile and web apps. Files are encrypted at rest with keys Dropbox holds, not end-to-end.
website: https://www.dropbox.com
mainstream: true
domain: www.dropbox.com
jurisdiction: US
platforms:
  - web
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.dropbox.android/latest/
    note: The Android app includes Adjust, Amplitude, Google Firebase Analytics and Sentry.
  no_ads:
    answer: yes
    evidence: https://www.dropbox.com/privacy
    note: Funded by paid plans, with no ads in the service. Dropbox states it does not sell user information to advertisers.
  independent_audit:
    answer: partial
    evidence: https://www.dropbox.com/business/trust/compliance/certifications-compliance
    note: Dropbox has third-party SOC 2 audits and ISO certifications. Only the SOC 3 summary report is public.
  transparency_report:
    answer: yes
    evidence: https://help.dropbox.com/transparency
    note: Publishes counts of government requests for user data and its responses twice a year.
  user_notice:
    answer: yes
    evidence: https://help.dropbox.com/transparency
    note: Dropbox's principles commit to notifying users of government requests unless a non-disclosure order prohibits it.
---
