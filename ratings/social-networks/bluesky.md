---
name: Bluesky
description: Microblogging social network built on the open AT Protocol, run by Bluesky Social PBC, with custom feeds, composable moderation and account portability.
website: https://bsky.app
source: https://github.com/bluesky-social/social-app
jurisdiction: US
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/bluesky-social/social-app/blob/main/LICENSE
    note: The app is MIT licensed and the AT Protocol server software is dual MIT and Apache-2.0.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/xyz.blueskyweb.app/latest/
    note: The Android app includes Sentry, the privacy policy allows third-party analytics providers, and the bsky.social site loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://bsky.social/about/support/privacy-policy
    note: No ads, and the privacy policy states personal data is not sold or shared for targeted advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
