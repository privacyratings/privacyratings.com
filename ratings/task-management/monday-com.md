---
name: monday.com
description: Work management platform with boards, automations, dashboards and AI features, run by monday.com Ltd. in Israel. Data is hosted by monday.com.
website: https://monday.com
mainstream: true
jurisdiction: IL
platforms:
  - web
  - windows
  - macos
  - android
  - ios
aliases:
  - monday
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.monday.monday/latest/
    note: Exodus finds 5 trackers in the Android app, including AppsFlyer, Google Crashlytics and Google Firebase Analytics, and the website loads Google Tag Manager.
  no_ads:
    answer: partial
    evidence: https://monday.com/l/privacy/privacy-policy/
    note: Funded by subscriptions with no ads in the product, but the privacy policy describes behavioral and interest-based advertising for monday.com, using social and advertising networks.
  independent_audit:
    answer: partial
    evidence: https://monday.com/trustcenter
    note: The trust center lists SOC 1 Type II, SOC 2 Type II and SOC 3 reports and ISO 27001 certification, but the full audit reports are not public.
---
