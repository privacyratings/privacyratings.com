---
name: Apple Music
description: Subscription music streaming service from Apple, with lossless and spatial audio, radio stations, lyrics and a classical music app.
website: https://www.apple.com/apple-music/
family: apple
mainstream: true
domain: music.apple.com
jurisdiction: US
platforms:
  - macos
  - ios
  - windows
  - android
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.apple.android.music/latest/
    note: The Android app includes Crashlytics and Firebase Analytics.
  no_ads:
    answer: yes
    evidence: https://www.apple.com/apple-music/
    note: Funded by subscriptions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://www.apple.com/legal/transparency/
    note: Apple publishes government request counts by country every six months.
  user_notice:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/law-enforcement-guidelines-us.pdf
    note: Apple notifies customers when their account information is sought, unless notice is prohibited.
---
