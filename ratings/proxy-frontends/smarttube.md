---
name: SmartTube
description: Open source YouTube client for Android TV and TV boxes with SponsorBlock, ad-free playback and up to 8K video. It works without Google Play Services.
website: https://smarttubeapp.github.io
source: https://github.com/yuliskov/SmartTube
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/yuliskov/SmartTube/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: no
    evidence: https://github.com/yuliskov/SmartTube/blob/master/smarttubetv/build.gradle
    note: The stable and beta builds include Google Firebase Crashlytics. Only the F-Droid build has no tracking code.
  no_ads:
    answer: yes
    evidence: https://github.com/yuliskov/SmartTube/blob/master/PRIVACY.md
    note: Funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
