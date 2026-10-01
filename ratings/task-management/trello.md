---
name: Trello
description: Kanban-style project management tool from Atlassian that organizes work into boards, lists and cards. Data is hosted by Atlassian.
website: https://trello.com
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.trello/latest/
    note: Exodus finds Google Crashlytics, Firebase Analytics, Segment and Sentry in the Android app, and the website loads third-party analytics.
  no_ads:
    answer: partial
    evidence: https://www.atlassian.com/legal/privacy-policy
    note: Funded by subscriptions with no ads in the product, but the policy allows targeted advertising and sharing identifiers with third-party advertising providers.
  independent_audit:
    answer: partial
    evidence: https://www.atlassian.com/trust/compliance/resources/soc2
    note: Trello is covered by SOC 2 audits, but reports are only available under NDA.
---
