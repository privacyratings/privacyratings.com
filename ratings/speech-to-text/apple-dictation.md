---
name: Apple Dictation
description: Speech-to-text feature built into macOS, iOS and iPadOS that types dictated text in any app. Supported languages are processed on the device; others are sent to Apple servers.
website: https://support.apple.com/guide/mac-help/use-dictation-mh40584/mac
family: apple
aliases:
  - macOS Dictation
  - iPhone Dictation
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
    evidence: https://www.apple.com/legal/privacy/data/en/ask-siri-dictation/
    note: No third-party trackers, but Apple collects request data such as device configuration and performance statistics by default, under a rotating random identifier.
  no_ads:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/data/en/ask-siri-dictation/
    note: No ads in Dictation; Apple states dictation data is not used to build marketing profiles and is never sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  runs_locally:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/ask-siri-dictation/
    note: Supported languages and devices process dictation on the device; otherwise audio is sent to Apple servers.
  no_training:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/data/en/ask-siri-dictation/
    note: Dictated audio and text are stored and used to improve Apple models only if the user opts in to Improve Siri and Dictation.
---
