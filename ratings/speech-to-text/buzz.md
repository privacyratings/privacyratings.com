---
name: Buzz
description: Desktop app that transcribes and translates audio and video files or live microphone input offline using Whisper models. It can optionally use the OpenAI Whisper API instead.
website: https://buzzcaptions.com
source: https://github.com/chidiwilliams/buzz
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/chidiwilliams/buzz/blob/main/LICENSE
    note: MIT license.
  no_trackers:
    answer: yes
    evidence: https://github.com/chidiwilliams/buzz
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://buzzcaptions.com
    note: Free open-source app, with a paid Mac App Store edition and no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  runs_locally:
    answer: yes
    evidence: https://buzzcaptions.com
    note: Transcription runs offline with local Whisper models; the OpenAI Whisper API is an optional alternative.
  no_training:
    answer: yes
    evidence: https://buzzcaptions.com
    note: Transcription is local by default, so recordings are not sent to the developer.
---
