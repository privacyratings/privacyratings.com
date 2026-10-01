---
name: YouTube Music
description: Music streaming service from Google, drawing on YouTube's catalog of songs, videos and live performances, with an ad-supported free tier and a paid Premium plan.
website: https://music.youtube.com
mainstream: true
domain: music.youtube.com
jurisdiction: US
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.google.android.apps.youtube.music/latest/
    note: The Android app includes Firebase Analytics, and listening history is used for recommendations and ads unless turned off.
  no_ads:
    answer: no
    evidence: https://policies.google.com/privacy
    note: The free tier is funded by targeted advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://transparencyreport.google.com/user-data/overview
    note: Google publishes government request counts and outcomes every six months.
  user_notice:
    answer: yes
    evidence: https://policies.google.com/terms/information-requests
    note: Google emails users before disclosing their data to government agencies, unless legally prohibited or in emergencies.
---
