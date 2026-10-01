---
name: Grayjay
description: Video app from FUTO that aggregates YouTube, PeerTube, Twitch and other platforms through plugins into one feed, with local subscriptions and downloads. The source code is public under a non-commercial license.
website: https://grayjay.app
source: https://gitlab.futo.org/videostreaming/grayjay
jurisdiction: US
platforms:
  - android
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://gitlab.futo.org/videostreaming/grayjay/-/blob/master/LICENSE.md
    note: All code is public under the source-available FUTO Source First License, which is not OSI-approved.
  no_trackers:
    answer: no
    evidence: https://gitlab.futo.org/videostreaming/grayjay/-/blob/master/app/src/main/java/com/futo/platformplayer/states/StateTelemetry.kt
    note: Release builds send launch telemetry with a random ID, device model and enabled plugins to FUTO, with no setting to turn it off.
  no_ads:
    answer: yes
    evidence: https://grayjay.app/faq.html
    note: Funded by optional one-time license purchases, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
