---
name: Apple Watch
description: Apple's smartwatch, paired with an iPhone, that tracks activity, workouts, heart rate, sleep and cycles and stores the data in the Health app.
website: https://www.apple.com/watch/
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
    note: Funded by hardware sales, with no ads in the Health and Activity apps. Apple states it does not sell personal data.
  independent_audit:
    answer: partial
    evidence: https://support.apple.com/guide/certifications/apple-internet-services-security-apc34d2c0468b/web
    note: iCloud, which syncs Health data, has yearly ISO 27001 and 27018 certification audits, but only the certificates are public.
---
