---
name: Microsoft Defender for Office 365
description: Email and collaboration security add-on for Microsoft 365 that scans mail, links and attachments for phishing and malware on top of Exchange Online Protection spam filtering. It also covers Teams, SharePoint and OneDrive.
website: https://www.microsoft.com/en-us/security/business/siem-and-xdr/microsoft-defender-office-365
family: microsoft
mainstream: true
domain: security.microsoft.com
jurisdiction: US
platforms:
  - web
aliases:
  - Defender for Office 365
  - Office 365 Advanced Threat Protection
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: Microsoft collects required diagnostic data from its products that cannot be turned off, and its websites use analytics and advertising cookies.
  no_ads:
    answer: yes
    evidence: https://www.microsoft.com/en-us/trust-center/privacy
    note: Paid business service with no ads. Microsoft states it does not use customer data from its cloud services for advertising.
  independent_audit:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/compliance/regulatory/offering-soc-2
    note: Office 365 is covered by yearly SOC 2 Type 2 audits, but the full reports are only available through the Service Trust Portal after sign-in.
  transparency_report:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Publishes counts of government requests for consumer and enterprise customer data twice a year.
  user_notice:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Microsoft gives prior notice to enterprise customers of requests for their data, except where prohibited by law.
---
