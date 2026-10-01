---
name: The Unarchiver
description: Free archive extraction app for macOS by MacPaw that opens RAR, 7z, ZIP, StuffIt and many older formats. Command-line tools unar and lsar are also available for other systems.
website: https://theunarchiver.com
source: https://github.com/MacPaw/XADMaster
jurisdiction: CY
platforms:
  - macos
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/MacPaw/XADMaster/blob/master/LICENSE
    note: The XADMaster extraction engine and command-line tools are LGPL-2.1, but the macOS app itself is closed source.
  no_trackers:
    answer: no
    evidence: https://macpaw.com/legal/the-unarchiver-privacy-policy
    note: The privacy policy lists Google Analytics, Hotjar and Sentry, and the website loads Google Tag Manager.
  no_ads:
    answer: partial
    evidence: https://macpaw.com/legal/the-unarchiver-privacy-policy
    note: Free with no ads in the app, but the privacy policy lists social and advertising networks among service providers used for MacPaw marketing.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
