---
name: NewsBlur
description: Hosted feed reader with web, Android and iOS apps that learns which stories a reader likes, with shared stories and paid premium tiers. The server code is open source and can be self-hosted.
website: https://newsblur.com
source: https://github.com/samuelclay/NewsBlur
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/samuelclay/NewsBlur/blob/main/LICENSE.md
    note: MIT, covering the server and apps.
  no_trackers:
    answer: yes
    evidence: https://newsblur.com/privacy
    note: No third-party trackers, and Exodus finds none in the Android app. The website's Plausible analytics are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://newsblur.com/about
    note: Funded by premium subscriptions with no ads, and the privacy policy states user information is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
