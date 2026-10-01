---
name: Apple Health Cycle Tracking
description: Cycle Tracking feature in Apple's Health app on iPhone and Apple Watch for logging periods, symptoms and pregnancy, with period and fertile window predictions.
website: https://support.apple.com/en-us/120356
family: apple
mainstream: true
jurisdiction: US
platforms:
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/device-analytics/
    note: Device and health analytics are only shared with Apple with consent, but the Apple website sets first-party performance cookies for analytics by default.
  no_ads:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/en-ww/
    note: No ads in the Health app, which is included with Apple devices. Apple states it does not sell personal data.
  independent_audit:
    answer: partial
    evidence: https://support.apple.com/guide/certifications/apple-internet-services-security-apc34d2c0468b/web
    note: iCloud, which syncs Health data, has yearly ISO 27001 and 27018 certification audits, but only the certificates are public.
  local_storage:
    answer: partial
    evidence: https://support.apple.com/en-us/102651
    note: Data is stored on the device and, when iCloud is on, synced by default with end-to-end encryption that Apple cannot read, which requires two-factor authentication.
  no_account_needed:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/health-app/
    note: An Apple Account is optional and only needed for iCloud sync.
---
