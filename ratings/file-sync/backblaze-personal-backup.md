---
name: Backblaze Personal Backup
description: Automatic cloud backup service for Windows and Mac computers with unlimited storage, file versioning and restores by download or mailed drive. An optional private encryption key keeps data unreadable to Backblaze.
website: https://www.backblaze.com/cloud-backup/personal
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
    evidence: https://www.backblaze.com/company/policy/privacy
    note: The website uses Google Tag Manager, VWO and third-party tools that record visitor clicks and mouse movement.
  no_ads:
    answer: yes
    evidence: https://www.backblaze.com/cloud-backup/pricing
    note: Funded by paid subscriptions, with no ads. The privacy policy says contact details are not shared with other companies for marketing.
  independent_audit:
    answer: partial
    evidence: https://www.backblaze.com/cloud-backup/security
    note: States it is SSAE-18 SOC 2 compliant, but the report is not public.
---
