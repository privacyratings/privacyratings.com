---
name: FileVault
description: Full-disk encryption built into macOS that encrypts the startup volume with XTS-AES-128. The recovery key can be kept locally or escrowed with an iCloud account or a device management server.
website: https://support.apple.com/guide/mac-help/protect-data-on-your-mac-with-filevault-mh11785/mac
family: apple
mainstream: true
jurisdiction: US
platforms:
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
    note: Included with macOS, which is paid for through hardware sales. No ads in the feature.
  independent_audit:
    answer: partial
    evidence: https://www.niap-ccevs.org/products/11448
    note: FileVault is Common Criteria certified against the Full Drive Encryption protection profiles, with certification and validation reports published, but no full security audit report is public.
---
