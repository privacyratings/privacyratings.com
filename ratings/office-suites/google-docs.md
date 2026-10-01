---
name: Google Docs
description: Google's browser-based word processor with real-time collaboration, part of Google Workspace alongside Sheets and Slides. Files are stored in Google Drive.
website: https://docs.google.com
aliases:
  - Google Workspace
  - Google Sheets
  - Google Slides
mainstream: true
domain: docs.google.com
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
    note: Docs shows no ads, but Google is funded mainly by advertising and uses account activity across its services for personalized ads.
  independent_audit:
    answer: partial
    evidence: https://cloud.google.com/security/compliance/soc-3
    note: Google Workspace, which includes Docs, has third-party SOC 2 audits. Only the SOC 3 summary report is public.
  transparency_report:
    answer: yes
    evidence: https://transparencyreport.google.com/user-data/overview
    note: Publishes counts of government requests for user data and how often data is disclosed, updated twice a year.
  user_notice:
    answer: yes
    evidence: https://policies.google.com/terms/information-requests
    note: Google emails the user before disclosing information unless legally prohibited or in emergencies.
---
