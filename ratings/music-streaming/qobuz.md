---
name: Qobuz
description: Subscription music streaming and download store based in France, focused on hi-res audio, with album notes and editorial content.
website: https://www.qobuz.com
domain: play.qobuz.com
jurisdiction: FR
platforms:
  - windows
  - macos
  - web
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.qobuz.music/latest/
    note: The Android app includes Crashlytics, Firebase Analytics and Facebook Login, and the website loads New Relic and Google tags.
  no_ads:
    answer: yes
    evidence: https://www.qobuz.com/us-en/discover/legals/privacy
    note: Funded by subscriptions and purchases, with no ads, and the privacy policy states data is used only by the company and its service providers.
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
