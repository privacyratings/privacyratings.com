---
name: Todoist
description: To-do list and task manager with projects, labels, filters, reminders and shared projects. Tasks sync through Doist's servers across web, desktop and mobile apps.
website: https://www.todoist.com
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.todoist/latest/
    note: Exodus finds Google Firebase Analytics, Sentry and Facebook SDKs in the Android app, and the website uses Google Analytics.
  no_ads:
    answer: yes
    evidence: https://www.todoist.com/pricing
    note: Funded by paid plans with no ads in the apps. The privacy policy does not describe selling user data.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
