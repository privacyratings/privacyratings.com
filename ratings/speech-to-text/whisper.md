---
name: Whisper
description: Open-source speech recognition model and Python command-line tool from OpenAI that transcribes and translates audio in many languages on the local computer.
website: https://github.com/openai/whisper
aliases:
  - OpenAI Whisper
source: https://github.com/openai/whisper
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/openai/whisper/blob/main/LICENSE
    note: Code and model weights are MIT-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/openai/whisper
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/openai/whisper
    note: Free open-source software with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  runs_locally:
    answer: yes
    evidence: https://github.com/openai/whisper
    note: The model runs on the local computer; audio is not sent to a server.
  no_training:
    answer: yes
    evidence: https://github.com/openai/whisper
    note: Processing is entirely local.
---
