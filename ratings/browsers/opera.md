---
name: Opera
description: Chromium-based browser from Opera with a built-in ad blocker, free VPN proxy, sidebar messengers and an AI assistant.
website: https://www.opera.com
mainstream: true
jurisdiction: NO
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.opera.com/legal/privacy
    note: The home page loads Google Tag Manager, Meta Pixel and Microsoft Clarity. The browsers send usage statistics by default and the mobile apps include Firebase Analytics and AppsFlyer.
  no_ads:
    answer: no
    evidence: https://www.opera.com/legal/privacy
    note: The privacy statement describes the apps as ad-supported, with sponsored content and data shared with advertising partners.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: no
    evidence: https://help.opera.com/en/latest/features/
    note: The built-in ad and tracker blocker must be turned on in settings.
  fingerprinting_protection:
    answer: no
    note: No fingerprinting protection is documented.
  no_google_services:
    answer: partial
    evidence: https://www.opera.com/legal/privacy
    note: Uses Google Safe Browsing and Google search suggestions by default. Both can be turned off in settings.
  security_updates:
    answer: no
    evidence: https://blogs.opera.com/desktop/2026/09/opera-136-0-6008-52-stable-update/
    note: Stable releases are built on an older Chromium branch and pick up upstream security patches one to two weeks after Chromium Extended Stable.
---
