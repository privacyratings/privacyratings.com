---
name: Microsoft OneDrive
description: Cloud storage from Microsoft, built into Windows and Microsoft 365, with desktop, mobile and web apps. Files are encrypted at rest with keys Microsoft holds, not end-to-end.
website: https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage
family: microsoft
aliases:
  - OneDrive
mainstream: true
domain: onedrive.live.com
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
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: Microsoft collects required diagnostic and usage data that cannot be turned off, and uses data about users for personalized advertising.
  no_ads:
    answer: yes
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: No ads in OneDrive, and Microsoft states it does not use files stored in cloud storage to target ads. Extra storage is sold as a subscription.
  independent_audit:
    answer: no
    note: No independent audit of consumer OneDrive is published.
  transparency_report:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Publishes counts of government requests for consumer data, including OneDrive, twice a year.
  user_notice:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Microsoft gives prior notice to consumers whose data is requested, except where prohibited by law or in emergencies.
---
