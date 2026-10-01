---
name: Monarch
description: Subscription personal finance app that syncs bank and investment accounts to track spending, budgets, net worth and goals, with shared access for households.
website: https://www.monarch.com
mainstream: true
aliases:
  - Monarch Money
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.monarchmoney.mobile/latest/
    note: The Exodus report finds 10 trackers in the Android app, including Amplitude, Facebook Analytics, FullStory, Segment and Singular.
  no_ads:
    answer: partial
    evidence: https://www.monarch.com/privacy
    note: Funded by subscriptions and says financial data is never sold, but the privacy policy says advertising partners receive device, IP and web analytics data for targeted advertising.
  independent_audit:
    answer: partial
    evidence: https://www.monarch.com/security
    note: States independent auditors verified its SOC 2 compliance, but the report is not public.
---
