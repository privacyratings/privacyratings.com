---
name: Spotify
description: Music, podcast and audiobook streaming service with an ad-supported free tier and paid Premium plans.
website: https://open.spotify.com
mainstream: true
domain: open.spotify.com
jurisdiction: SE
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.spotify.music/latest/
    note: The Android app includes Branch, ComScore, Crashlytics and Firebase Analytics.
  no_ads:
    answer: no
    evidence: https://www.spotify.com/us/legal/privacy-policy/
    note: The free tier is funded by ads, and the privacy policy describes using personal data to tailor advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
