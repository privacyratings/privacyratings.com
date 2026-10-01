---
name: Microsoft Visio
description: Microsoft's diagramming app for flowcharts, org charts, floor plans and network diagrams, available as a Windows desktop app and in the browser as part of Microsoft 365. Cloud files are stored in OneDrive or SharePoint.
website: https://www.microsoft.com/en-us/microsoft-365/visio
family: microsoft
aliases:
  - Visio
mainstream: true
domain: m365.cloud.microsoft
jurisdiction: US
platforms:
  - windows
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://learn.microsoft.com/en-us/microsoft-365-apps/privacy/required-diagnostic-data
    note: Visio, like other Microsoft 365 apps, always sends required diagnostic data to Microsoft, which cannot be turned off.
  no_ads:
    answer: yes
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement#mainadvertisingmodule
    note: Sold by subscription with no ads in Visio, and the privacy statement says personal files and documents are not used to target ads.
  independent_audit:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/compliance/regulatory/offering-soc-2
    note: Microsoft 365 services have SOC 2 audits by an independent CPA firm. The reports are only available to customers through the Service Trust Portal.
  transparency_report:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Publishes counts of government requests for consumer and enterprise data twice a year.
  user_notice:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Microsoft notifies users and enterprise customers of requests for their data unless legally prohibited.
---
