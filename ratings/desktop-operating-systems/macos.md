---
name: macOS
description: Apple's proprietary desktop operating system for Mac computers, built on the open source Darwin core.
website: https://www.apple.com/os/macos/
family: apple
aliases:
  - Mac OS
mainstream: true
jurisdiction: US
platforms:
  - macos
criteria:
  open_source:
    answer: no
    evidence: https://opensource.apple.com/
    note: Closed source. Apple publishes the source of Darwin and some components, but most of macOS is proprietary.
  no_trackers:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/en-ww/
    note: No third-party trackers in the app, and sharing device analytics with Apple is opt-in. Apple web pages load Apple's own analytics (ac-analytics, sent to metrics.apple.com) by default.
  no_ads:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/apple-advertising/
    note: Funded by hardware sales. Apple's ad platform shows ads in the App Store, News and Stocks apps; personalized ads can be turned off and Apple does not sell personal data.
  independent_audit:
    answer: partial
    evidence: https://www.niap-ccevs.org/products/11648
    note: Common Criteria evaluations by independent labs are published as certification and validation reports, but no full security audit report is public.
---
