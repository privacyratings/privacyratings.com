---
name: QuickTime Player
description: Apple's media player built into macOS. It can also record the screen, camera and audio and make basic edits such as trimming and splitting clips.
website: https://support.apple.com/guide/quicktime-player/welcome/mac
family: apple
mainstream: true
jurisdiction: US
platforms:
  - macos
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/device-analytics/
    note: No third-party trackers in the app, and sharing device analytics with Apple is opt-in. Apple web pages load Apple's own analytics by default.
  no_ads:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/en-ww/
    note: No ads in the app, which is included with macOS. Apple states it does not sell personal data.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_by_default:
    answer: yes
    evidence: https://support.apple.com/en-us/102618
    note: Screen recordings are saved as local files, on the desktop by default.
  no_account_needed:
    answer: yes
    evidence: https://support.apple.com/guide/quicktime-player/record-your-screen-qtp97b08e666/mac
    note: Screen recording works without an Apple Account.
---
