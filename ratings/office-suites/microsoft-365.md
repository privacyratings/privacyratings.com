---
name: Microsoft 365
description: Microsoft's office suite with Word, Excel, PowerPoint, Outlook and OneDrive, available as desktop and mobile apps and in the browser. Cloud files are stored on Microsoft's servers.
website: https://www.microsoft.com/en-us/microsoft-365
family: microsoft
aliases:
  - Microsoft Office
  - Word
  - Excel
  - PowerPoint
mainstream: true
domain: m365.cloud.microsoft
jurisdiction: US
platforms:
  - windows
  - macos
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://learn.microsoft.com/en-us/microsoft-365-apps/privacy/required-diagnostic-data
    note: The apps always send required diagnostic data to Microsoft, which cannot be turned off.
  no_ads:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: Microsoft uses data from its services, including Copilot prompts, for advertising. Documents are not used to target ads.
  independent_audit:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/compliance/regulatory/offering-soc-2
    note: Office 365 has SOC 2 audits by an independent CPA firm. The reports are only available to customers through the Service Trust Portal.
  transparency_report:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Publishes counts of government requests for consumer and enterprise data twice a year.
  user_notice:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Microsoft notifies users and enterprise customers of requests for their data unless legally prohibited.
---
