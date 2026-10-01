---
name: Google Calendar
description: Google's calendar service for web, Android and iOS, with shared calendars, event invitations and integration with Gmail and Google Meet.
website: https://calendar.google.com
mainstream: true
jurisdiction: US
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Google collects activity data across its services and uses it for analytics and personalized ads.
  no_ads:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Free for personal accounts and funded by Google's advertising business, which uses activity data across services.
  independent_audit:
    answer: partial
    evidence: https://cloud.google.com/security/compliance/soc-3
    note: Google Workspace, which includes Calendar, has third-party SOC 2 audits. Only the SOC 3 summary report is public.
---
