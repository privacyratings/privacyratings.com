---
name: Hyper-V
description: Microsoft's type-1 hypervisor built into Windows Server and the Pro, Enterprise and Education editions of Windows. It runs guest operating systems in isolated virtual machines.
website: https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/overview
family: microsoft
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
    note: Hyper-V runs as part of Windows, which sends required diagnostic data to Microsoft that can only be turned off on Enterprise, Education and Server editions.
  no_ads:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: Included with Windows, which has an advertising ID for personalized ads, and Microsoft uses product usage data for advertising.
  independent_audit:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/windows/security/security-foundations/certification/validations/cc-windows-server-2022-2019-2016
    note: Hyper-V has Common Criteria certifications against the virtualization protection profiles, with validation reports published, but no full security audit report is public.
---
