---
name: Apple App Store
description: Apple's app store for iPhone, iPad, Mac, Apple Watch, Apple TV and Vision Pro. It is the main way to install apps on Apple devices and requires an Apple Account.
website: https://www.apple.com/app-store/
family: apple
aliases:
  - App Store
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
    evidence: https://www.apple.com/legal/privacy/data/en/app-store/
    note: No third-party trackers are described, but Apple collects App Store usage, searches and downloads linked to the Apple Account by default, with personalization that can be turned off.
  no_ads:
    answer: no
    evidence: https://www.apple.com/legal/privacy/data/en/apple-advertising/
    note: The App Store shows ads from Apple's ad platform, which can use Apple Account, download and purchase data for targeting.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_account_needed:
    answer: no
    evidence: https://www.apple.com/legal/privacy/data/en/app-store/
    note: Downloads, including free apps, require signing in with an Apple Account and are logged with it.
  tracker_info:
    answer: partial
    evidence: https://developer.apple.com/app-store/app-privacy-details/
    note: Listings show privacy labels, but their contents are self-reported by developers.
---
