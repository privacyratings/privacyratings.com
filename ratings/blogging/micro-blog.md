---
name: Micro.blog
description: Paid blog hosting service and social network for short and long posts, with custom domains and cross-posting to Mastodon, Bluesky and other networks over ActivityPub.
website: https://micro.blog
domain: micro.blog
jurisdiction: US
platforms:
  - web
  - macos
  - ios
  - android
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/microdotblog/microblog-mac/blob/master/LICENSE
    note: The macOS and iOS apps are MIT-licensed, but the Micro.blog service is closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/blog.micro.android/latest/
    note: The Android app contains Google Firebase Analytics. The website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://help.micro.blog/t/privacy-policy/114
    note: Funded by subscriptions with no ads, and the privacy policy states data is never sold.
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
