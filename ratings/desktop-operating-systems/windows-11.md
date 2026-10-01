---
name: Windows 11
description: Microsoft's proprietary desktop operating system for PCs, the successor to Windows 10.
website: https://www.microsoft.com/en-us/windows/windows-11
family: microsoft
aliases:
  - Windows
mainstream: true
jurisdiction: US
platforms:
  - windows
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://learn.microsoft.com/en-us/windows/privacy/configure-windows-diagnostic-data-in-your-organization
    note: Required diagnostic data is sent to Microsoft and can only be turned off on Enterprise, Education and Server editions. The website loads Adobe Experience Platform tags.
  no_ads:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: Windows has an advertising ID that apps and Microsoft use for personalized ads, and Microsoft uses product usage data for advertising.
  independent_audit:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/windows/security/security-foundations/certification/validations/cc-windows11
    note: Common Criteria evaluations by independent labs are published as certification and validation reports, but no full security audit report is public.
---
