---
name: Google Forms
description: Google's online form and survey builder, part of Google Workspace. Responses are stored in the creator's Google account and can be exported to Google Sheets.
website: https://workspace.google.com/products/forms/
mainstream: true
jurisdiction: US
domain: docs.google.com
platforms:
  - web
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
    note: Google Workspace, which includes Forms, has third-party SOC 2 audits. Only the SOC 3 summary report is public.
  transparency_report:
    answer: yes
    evidence: https://transparencyreport.google.com/user-data/overview
    note: Publishes counts of government requests for user data and how often data is disclosed, updated twice a year.
  user_notice:
    answer: yes
    evidence: https://policies.google.com/terms/information-requests
    note: Google emails the user before disclosing information unless legally prohibited or in emergencies.
---
