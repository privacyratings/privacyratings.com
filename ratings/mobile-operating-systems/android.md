---
name: Android
description: Google's mobile operating system, shipped on Pixel phones with Google Mobile Services such as Google Play, Play services and Google apps on top of the open source Android base.
website: https://www.android.com
aliases:
  - Stock Android
  - Google Android
mainstream: true
source: https://android.googlesource.com
jurisdiction: US
criteria:
  open_source:
    answer: partial
    evidence: https://android.googlesource.com/
    note: The Android Open Source Project is mostly Apache-2.0, but Google Play services, Google apps and parts of the Pixel software are closed source.
  no_trackers:
    answer: no
    evidence: https://support.google.com/accounts/answer/6078260
    note: Google Play services and Google apps send usage and device data to Google, and some data is sent even with usage and diagnostics turned off; the website loads Google Tag Manager.
  no_ads:
    answer: no
    evidence: https://policies.google.com/technologies/ads
    note: Google is funded by advertising and uses an advertising ID and account data for ad targeting.
  independent_audit:
    answer: partial
    evidence: https://services.google.com/fh/files/misc/2026_android_security_paper.pdf
    note: Android devices hold Common Criteria and FIPS 140 certifications from accredited labs, but no full audit report is published by Google.
---
