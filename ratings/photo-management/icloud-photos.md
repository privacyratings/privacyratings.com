---
name: iCloud Photos
description: Apple's photo and video library sync built into the Photos app on Apple devices, with iCloud for Windows and web access. Photos are end-to-end encrypted only with the optional Advanced Data Protection setting, which is off by default.
website: https://support.apple.com/en-us/108782
family: apple
mainstream: true
jurisdiction: US
platforms:
  - macos
  - ios
  - windows
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/data/en/device-analytics/
    note: Device and iCloud analytics are only shared with Apple if the user agrees, and no third-party trackers are included.
  no_ads:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/en-ww/
    note: Funded by iCloud+ subscriptions and device sales, with no ads in iCloud Photos. Apple states it does not sell personal data.
  independent_audit:
    answer: partial
    evidence: https://support.apple.com/guide/certifications/apple-internet-services-security-apc34d2c0468b/web
    note: Apple's internet services, including iCloud, have yearly ISO 27001 and 27018 certification audits, but only the certificates are public.
---
