---
name: Google Drive
description: Cloud storage and file sharing from Google, integrated with Docs, Sheets and other Google services. Files are encrypted at rest with keys Google holds, not end-to-end.
website: https://workspace.google.com/products/drive/
mainstream: true
domain: drive.google.com
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
    evidence: https://policies.google.com/privacy
    note: Google collects activity, device and usage data across its services, including Drive, and this cannot be fully turned off.
  no_ads:
    answer: yes
    evidence: https://support.google.com/drive/answer/10375054
    note: No ads in Drive, and Google states Drive content is never used for advertising. Extra storage is sold as a subscription.
  independent_audit:
    answer: partial
    evidence: https://cloud.google.com/security/compliance/soc-3
    note: Google Workspace, which includes Drive, has third-party SOC 2 audits. Only the SOC 3 summary report is public.
  transparency_report:
    answer: yes
    evidence: https://transparencyreport.google.com/user-data/overview
    note: Google publishes counts of government requests for user data and how it responds, updated twice a year.
  user_notice:
    answer: yes
    evidence: https://policies.google.com/terms/information-requests
    note: Google emails the user before disclosing data in response to a government request, unless prohibited by law.
---
