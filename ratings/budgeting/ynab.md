---
name: YNAB
description: Subscription budgeting app based on zero-based budgeting, where every unit of income is assigned a job, with optional bank account syncing.
website: https://www.ynab.com
aliases:
  - You Need a Budget
mainstream: true
jurisdiction: US
platforms:
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.youneedabudget.evergreen.app/latest/
    note: The Exodus report finds Amplitude, Bugsnag and Google Firebase Analytics in the Android app, and the privacy policy names Google Analytics and session recording tools.
  no_ads:
    answer: no
    evidence: https://www.ynab.com/privacy-policy
    note: Funded by subscriptions and says user data is not sold, but the privacy policy describes ad-network cookies, pixels and hashed email addresses shared with platforms for ad targeting.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
