---
name: Apple Notes
description: Apple's built-in notes app for iPhone, iPad and Mac, with checklists, attachments, scanned documents, folders and tags. Notes sync through iCloud and are end-to-end encrypted only when Advanced Data Protection is turned on.
website: https://support.apple.com/guide/notes/welcome/mac
family: apple
mainstream: true
jurisdiction: US
platforms:
  - macos
  - ios
  - web
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
