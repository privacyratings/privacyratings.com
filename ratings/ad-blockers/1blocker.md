---
name: 1Blocker
description: Safari content blocker for iPhone, iPad, Mac and Vision Pro with filters for ads, trackers, annoyances and adult content, plus custom rules and an in-app tracker filter.
website: https://1blocker.com
platforms:
  - macos
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://1blocker.com/privacy
    note: The app contains no analytics tracking code and does not track visited sites.
  no_ads:
    answer: yes
    evidence: https://1blocker.com/privacy
    note: Funded by Premium subscriptions and lifetime licenses. No data is collected or sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  blocks_by_default:
    answer: no
    evidence: https://support.1blocker.com/en/articles/9311963-free-version-vs-1blocker-premium
    note: The free version allows only one filter category at a time, so blocking ads and trackers together requires Premium.
  no_data_collection:
    answer: yes
    evidence: https://1blocker.com/privacy
    note: Filtering happens in Safari on the device, and the app does not collect browsing data.
  custom_filters:
    answer: yes
    evidence: https://support.1blocker.com/en/articles/9312016-custom-rules-overview
    note: Custom rules are available for free.
---
