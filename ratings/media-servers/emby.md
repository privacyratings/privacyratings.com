---
name: Emby
description: Media server that organizes personal movies, TV, music and photos and streams them to Emby apps on phones, TVs and browsers. Core features are free and some, such as offline sync and DVR, need a paid Emby Premiere subscription.
website: https://emby.media
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
    note: Closed source. Only older versions of the server were open source.
  no_trackers:
    answer: partial
    evidence: https://emby.media/privacy.html
    note: The website and Android app load no third-party trackers, but the privacy policy allows cookies, web beacons and third-party scripts, and the server connects to Emby for Emby Connect and Premiere checks.
  no_ads:
    answer: yes
    evidence: https://emby.media/premiere.html
    note: Funded by Emby Premiere subscriptions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
