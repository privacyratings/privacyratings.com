---
name: Apple Journal
description: Apple's built-in journaling app for iPhone, iPad and Mac, with multimedia entries, multiple journals and on-device writing suggestions. Journal data syncs through iCloud with end-to-end encryption.
website: https://support.apple.com/guide/journal/welcome/mac
family: apple
aliases:
  - Journal app
mainstream: true
jurisdiction: US
platforms:
  - ios
  - macos
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/device-analytics/
    note: No third-party trackers in the app, and sharing device analytics with Apple is opt-in. Apple web pages load Apple's own analytics (ac-analytics, sent to metrics.apple.com) by default.
  no_ads:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/en-ww/
    note: No ads in the app, which is included with Apple devices. Apple states it does not sell personal data.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
