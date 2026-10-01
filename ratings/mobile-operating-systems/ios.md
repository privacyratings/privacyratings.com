---
name: iOS
description: Apple's closed source operating system for the iPhone, with the App Store as the main app source and integration with iCloud and other Apple services.
website: https://www.apple.com/os/ios/
family: apple
aliases:
  - iPhone
mainstream: true
jurisdiction: US
criteria:
  open_source:
    answer: no
    evidence: https://opensource.apple.com/
    note: Closed source; Apple publishes only some components, such as the Darwin kernel and WebKit.
  no_trackers:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/device-analytics/
    note: No third-party trackers in the system; Apple collects first-party analytics, and device analytics sharing can be turned off.
  no_ads:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/apple-advertising/
    note: Apple shows its own ads in the App Store, News, Stocks, Maps and TV apps; personalized ads can be turned off and Apple states it does not sell personal data.
  independent_audit:
    answer: partial
    evidence: https://support.apple.com/guide/certifications/ios-security-certifications-apc3fa917cb49/web
    note: iOS holds Common Criteria and FIPS 140-3 certifications from accredited labs, but Apple publishes the certification list rather than a full audit report.
---
