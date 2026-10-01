---
name: Handy
description: Free, open-source desktop app for push-to-talk dictation. Speech is transcribed offline on the device with local Whisper or Parakeet models and typed into the active text field.
website: https://handy.computer
alternatives_page: true
source: https://github.com/cjpais/Handy
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/cjpais/Handy/blob/main/LICENSE
    note: MIT license.
  no_trackers:
    answer: yes
    evidence: https://handy.computer/privacy
    note: The app has no analytics or tracking telemetry, and the website has no analytics or tracking cookies.
  no_ads:
    answer: yes
    evidence: https://handy.computer/privacy
    note: Free and funded by donations; the policy states no advertising and no sale of personal information.
  independent_audit:
    answer: no
    note: No independent audit is published.
  runs_locally:
    answer: yes
    evidence: https://handy.computer/privacy
    note: Speech recognition models run on the device; audio is not sent to Handy servers.
  no_training:
    answer: yes
    evidence: https://handy.computer/privacy
    note: Transcription is local, so recordings are not sent to the maintainers for training.
---
