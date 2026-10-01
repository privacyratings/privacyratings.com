---
name: Reddit
description: Discussion site organized into topic communities called subreddits, where posts and comments are ranked by user votes.
website: https://www.reddit.com
mainstream: true
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.reddit.frontpage/latest/
    note: The Android app includes AppsFlyer, Crashlytics and Firebase Analytics.
  no_ads:
    answer: no
    evidence: https://www.business.reddit.com/
    note: Funded by advertising, including ads targeted on user activity.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
