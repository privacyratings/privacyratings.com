---
name: Apple Maps
description: Apple's built-in mapping and navigation app for Apple devices, with turn-by-turn directions, transit, place information and a web version.
website: https://www.apple.com/maps/
family: apple
mainstream: true
jurisdiction: US
platforms:
  - ios
  - macos
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/apple-maps/
    note: No third-party trackers, but Apple collects usage metrics by default with identifiers not tied to the Apple Account.
  no_ads:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/apple-maps/
    note: Maps shows Apple-delivered ads selected from contextual information such as search terms and map view, not tied to the Apple Account.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
