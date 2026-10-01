---
name: SwiftUI
description: Apple's declarative UI framework for building apps in Swift across iOS, iPadOS, macOS, watchOS, tvOS and visionOS.
website: https://developer.apple.com/swiftui/
family: apple
jurisdiction: US
criteria:
  open_source:
    answer: no
    note: Closed source. SwiftUI ships as a proprietary framework in Apple's SDKs.
  no_trackers:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/device-analytics/
    note: No third-party trackers, and sharing device analytics with Apple is opt-in. Apple web pages load Apple's own analytics by default.
  no_ads:
    answer: yes
    evidence: https://developer.apple.com/programs/
    note: Funded by Apple's hardware sales and paid developer program, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - macos
  - ios
---
