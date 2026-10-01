---
name: Plex
description: Proprietary media server and client apps for streaming a personal video, music and photo library to other devices. It requires a Plex account and also offers free ad-supported movies, TV and live channels.
website: https://www.plex.tv/your-media/
mainstream: true
jurisdiction: CH
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
    evidence: https://www.plex.tv/about/privacy-legal/
    note: The privacy policy lists analytics providers, advertising IDs and optional playback data sent by default, and the Android app contains FullStory and Sentry per Exodus Privacy.
  no_ads:
    answer: no
    evidence: https://www.plex.tv/about/privacy-legal/
    note: The free streaming service shows ads, and the privacy policy describes selling and sharing personal data for targeted advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

Plex accounts are required even for a personal server. Watch history and reviews can be shared publicly or with friends depending on account privacy settings. Plex reported an [unauthorized access to account data](https://forums.plex.tv/t/important-notice-of-security-incident/930523), including emails, usernames and hashed passwords, and asked users to reset their passwords.
