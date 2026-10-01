---
name: FaceTime
description: Apple's audio and video calling app built into iPhone, iPad, Mac and Apple Vision Pro, supporting group calls and call links that others can join from a web browser.
website: https://support.apple.com/facetime
family: apple
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
    evidence: https://www.apple.com/legal/privacy/data/en/device-analytics/
    note: No third-party trackers in the app, and sharing device analytics with Apple is opt-in. Apple web pages load Apple's own analytics (ac-analytics, sent to metrics.apple.com) by default.
  no_ads:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/en-ww/
    note: No ads in FaceTime. Apple states it does not sell personal data.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee:
    answer: yes
    evidence: https://support.apple.com/guide/security/facetime-security-seca331c55cd/web
    note: One-to-one and Group FaceTime calls are end-to-end encrypted.
  no_account_needed:
    answer: partial
    evidence: https://support.apple.com/en-us/109364
    note: People with a FaceTime link can join from a web browser without an Apple Account; the person creating the link needs an Apple device and account.
  self_hostable:
    answer: no
    note: Hosted only.
---
