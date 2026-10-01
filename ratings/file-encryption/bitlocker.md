---
name: BitLocker
description: Full-volume encryption built into Windows Pro, Enterprise and Education editions. Protects fixed and removable drives, typically using the device TPM to hold keys.
website: https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/
family: microsoft
mainstream: true
imported_from: awesome-privacy
jurisdiction: US
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://learn.microsoft.com/en-us/windows/privacy/configure-windows-diagnostic-data-in-your-organization
    note: Part of Windows, which sends required diagnostic data to Microsoft that can only be fully turned off on Enterprise and Education editions.
  no_ads:
    answer: yes
    evidence: https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/
    note: Included with paid Windows editions. The feature shows no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
