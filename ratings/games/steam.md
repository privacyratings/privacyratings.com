---
name: Steam
description: Valve's game store and launcher for buying, installing and updating PC games, with friends, chat, cloud saves, workshop mods and a mobile app for account security and trading.
website: https://store.steampowered.com
mainstream: true
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://store.steampowered.com/privacy_agreement/
    note: The client sends playtime, device and crash data to Valve as part of the service, and the website offers optional third-party analytics cookies. The Android app has no trackers per Exodus Privacy.
  no_ads:
    answer: yes
    evidence: https://store.steampowered.com/privacy_agreement/
    note: Funded by game sales, with no third-party ads. The privacy policy states Valve does not sell personal data.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
