---
name: Asana
description: Work management platform for teams, with tasks, projects, timelines, boards and workflow automation. Data is hosted by Asana.
website: https://asana.com
mainstream: true
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.asana.app/latest/
    note: Exodus finds Google Analytics, Crashlytics, Firebase Analytics and Tag Manager in the Android app, and the website loads advertising trackers.
  no_ads:
    answer: partial
    evidence: https://asana.com/terms/privacy-statement
    note: Funded by subscriptions with no ads in the product, but the privacy statement describes targeting cookies and sharing data with partners for advertising.
  independent_audit:
    answer: partial
    evidence: https://asana.com/trust
    note: States SOC 2 Type 2 and ISO 27001 audits, but the reports are only available through its trust center on request.
---
