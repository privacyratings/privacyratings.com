---
name: IronVest
description: Privacy service formerly called Abine Blur that provides masked virtual payment cards, masked email addresses and masked phone numbers, along with password management.
website: https://ironvest.com
domain: ironvest.com
jurisdiction: US
aliases:
  - Blur
  - Abine Blur
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.abine.dnt/latest/
    note: The Exodus report finds AppsFlyer, Google Crashlytics, Google Firebase Analytics and Segment in the Android app. The website loads Google Analytics after consent.
  no_ads:
    answer: yes
    evidence: https://ironvest.com/legal/privacy
    note: Funded by subscriptions. The privacy policy states personal data is never sold or shared for cross-context behavioral advertising.
  independent_audit:
    answer: partial
    evidence: https://ironvest.com/legal/security
    note: States it holds SOC 2 Type II, but the report is not public.
  transparency_report:
    answer: partial
    evidence: https://ironvest.com/legal/privacy
    note: The privacy policy says information is provided only under valid court orders, but no request counts are published.
  user_notice:
    answer: yes
    evidence: https://ironvest.com/legal/privacy
    note: The privacy policy promises to notify users of law enforcement requests when legally permitted.
---
