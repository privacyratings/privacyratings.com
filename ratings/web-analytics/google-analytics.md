---
name: Google Analytics
description: Google's web and app analytics service (GA4) that measures traffic, events and conversions, and connects with Google Ads for audiences and ad measurement.
website: https://marketingplatform.google.com/about/analytics/
aliases:
  - GA4
mainstream: true
domain: analytics.google.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Google's websites and the Analytics site use Google's own advertising and analytics cookies.
  no_ads:
    answer: no
    evidence: https://support.google.com/analytics/answer/1011397
    note: Part of Google's advertising business. Analytics data can be shared with Google for its products and used with Google Ads for audiences and ad personalization.
  independent_audit:
    answer: partial
    evidence: https://support.google.com/analytics/answer/6004245
    note: Google Analytics is covered by Google's ISO 27001 certification, but no full audit report is public.
  transparency_report:
    answer: yes
    evidence: https://transparencyreport.google.com/user-data/overview
    note: Publishes counts of government requests for user data and how often data is disclosed, updated twice a year.
  user_notice:
    answer: yes
    evidence: https://policies.google.com/terms/information-requests
    note: Google emails the user before disclosing information unless legally prohibited or in emergencies.
  no_cookies:
    answer: no
    evidence: https://support.google.com/analytics/answer/6004245
    note: Uses first-party cookies on websites and app instance IDs in apps to identify users.
  no_personal_data:
    answer: no
    evidence: https://support.google.com/analytics/answer/6004245
    note: IP addresses are not stored, but cookie and user identifiers are kept, and data can be used for advertising personalization.
  self_hostable:
    answer: no
    note: Hosted only.
---
