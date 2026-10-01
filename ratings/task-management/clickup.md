---
name: ClickUp
description: Work management platform with tasks, docs, whiteboards, chat, goals and AI features. Data is hosted by ClickUp on AWS.
website: https://clickup.com
mainstream: true
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/co.mangotechnologies.clickup/latest/
    note: Exodus finds Amplitude, Sentry, Singular and Split in the Android app, and the privacy policy describes advertising and analytics partners that use cookies and pixels.
  no_ads:
    answer: partial
    evidence: https://clickup.com/privacy
    note: Funded by subscriptions, and the privacy policy states that data is not sold. Advertising partners use cookies and tracking technologies, and data is used to deliver ClickUp advertising.
  independent_audit:
    answer: partial
    evidence: https://clickup.com/security
    note: States SOC 1 Type 2, SOC 2 Type 2, SOC 3 and ISO 27001 certifications, but the reports are only available from sales.
---
