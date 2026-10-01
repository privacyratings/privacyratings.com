---
name: iCloud Drive
description: Apple's cloud storage for files across Apple devices, Windows and the web. Files are end-to-end encrypted only with the optional Advanced Data Protection setting, which is off by default.
website: https://www.icloud.com/iclouddrive
family: apple
aliases:
  - iCloud
mainstream: true
domain: www.icloud.com
jurisdiction: US
platforms:
  - web
  - windows
  - macos
  - ios
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
    note: Funded by iCloud+ subscriptions and device sales, with no ads in iCloud Drive. Apple states it does not sell personal data.
  independent_audit:
    answer: partial
    evidence: https://support.apple.com/guide/certifications/apple-internet-services-security-apc34d2c0468b/web
    note: Apple's internet services, including iCloud, have yearly ISO 27001 and 27018 certification audits, but only the certificates are public.
  transparency_report:
    answer: yes
    evidence: https://www.apple.com/legal/transparency/
    note: Publishes counts of government requests for customer data twice a year.
  user_notice:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/law-enforcement-guidelines-us.pdf
    note: Apple notifies customers when their account information is sought by legal process, unless prohibited or in emergencies.
---
