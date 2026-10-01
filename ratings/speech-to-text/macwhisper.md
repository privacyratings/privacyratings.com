---
name: MacWhisper
description: macOS app that transcribes audio and video files, meeting audio and dictation with local Whisper-based models, including speaker labels and subtitle export.
website: https://www.macwhisper.com
platforms:
  - macos
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://www.macwhisper.com/legal/privacy-policy
    note: The app sends anonymous analytics events about license status; no other analytics are described.
  no_ads:
    answer: yes
    evidence: https://www.macwhisper.com
    note: Funded by paid Pro licenses, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  runs_locally:
    answer: yes
    evidence: https://www.macwhisper.com/legal/privacy-policy
    note: The policy states all processing happens on the device and no audio or text leaves it.
  no_training:
    answer: yes
    evidence: https://www.macwhisper.com/legal/privacy-policy
    note: Processing is entirely local.
---
