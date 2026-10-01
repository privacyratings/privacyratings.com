---
name: Google Play
description: Google's app store for Android, preinstalled on most Android devices. It distributes apps, games and in-app purchases and requires a Google account to install apps.
website: https://play.google.com
aliases:
  - Play Store
mainstream: true
jurisdiction: US
platforms:
  - android
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Google collects app activity and device data for analytics and advertising, and play.google.com loads Google Analytics.
  no_ads:
    answer: no
    evidence: https://support.google.com/google-ads/answer/6247380?hl=en
    note: Google Play shows paid app ads in search results and on the home page, and Google uses account activity for ad personalization.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_account_needed:
    answer: no
    evidence: https://support.google.com/googleplay/answer/2521798?hl=en
    note: A Google account must be added to the device to download apps.
  tracker_info:
    answer: partial
    evidence: https://support.google.com/googleplay/answer/11416267?hl=en
    note: Listings show a Data safety section, but its contents are self-reported by developers.
---
