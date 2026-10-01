---
name: Apple Home
description: Apple's smart home platform built on HomeKit and Matter, controlled with the Home app and Siri on Apple devices. Automations run on a home hub such as an Apple TV or HomePod, and Home data syncs end-to-end encrypted through iCloud.
website: https://www.apple.com/home-app/
family: apple
aliases:
  - HomeKit
mainstream: true
jurisdiction: US
platforms:
  - ios
  - macos
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/device-analytics/
    note: No third-party trackers in the app, and sharing device analytics with Apple is opt-in. Apple web pages load Apple's own analytics (ac-analytics, sent to metrics.apple.com) by default.
  no_ads:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/en-ww/
    note: Funded by device sales, with no ads in the Home app. Apple states it does not sell personal data.
  independent_audit:
    answer: partial
    evidence: https://support.apple.com/guide/certifications/apple-internet-services-security-apc34d2c0468b/web
    note: iCloud, which stores Home data, has yearly ISO 27001 and 27018 certification audits, but only the certificates are public.
---
