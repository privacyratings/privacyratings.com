---
name: Envoy
description: Companion mobile app for the Foundation Passport hardware wallet, used to set up the device, manage accounts and send transactions over QR codes, with encrypted cloud backups.
website: https://foundation.xyz/envoy/
source: https://github.com/Foundation-Devices/envoy
jurisdiction: US
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Foundation-Devices/envoy/blob/main/LICENSES/GPL-3.0-or-later.txt
    note: GPL-3.0-or-later.
  no_trackers:
    answer: no
    evidence: https://foundation.xyz/policies/privacy-policy
    note: Exodus finds no trackers in the Android app, but the foundation.xyz website uses Google Analytics, Meta Pixel, X advertising tools and Intercom.
  no_ads:
    answer: partial
    evidence: https://foundation.xyz/policies/privacy-policy
    note: Funded by hardware sales with no ads in the app, but the website shares data with Google, Meta and X to measure advertising.
  independent_audit:
    answer: no
    note: No independent audit of Envoy is published. The published audits cover Passport hardware and firmware.
---
