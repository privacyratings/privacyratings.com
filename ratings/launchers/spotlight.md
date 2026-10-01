---
name: Spotlight
description: The search and launcher built into macOS and iOS for finding apps, files, settings and information, with online suggestions from Apple that can be turned off.
website: https://support.apple.com/guide/mac-help/find-what-you-need-with-spotlight-mchlp1008/mac
family: apple
aliases:
  - macOS Spotlight
mainstream: true
jurisdiction: US
platforms:
  - macos
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/siri-suggestions-search/
    note: No third-party trackers. Spotlight sends queries, location and related data to Apple for suggestions by default, linked to a rotating identifier, and this can be turned off.
  no_ads:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/en-ww/
    note: No ads in Spotlight. Apple states it does not sell personal data.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
