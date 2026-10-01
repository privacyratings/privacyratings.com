---
name: whisper.cpp
description: C/C++ port of OpenAI's Whisper speech recognition model that runs transcription on the CPU or GPU of the local device. Used as a library and command-line tool, and as the engine inside many dictation apps.
website: https://github.com/ggml-org/whisper.cpp
source: https://github.com/ggml-org/whisper.cpp
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE
    note: MIT license.
  no_trackers:
    answer: yes
    evidence: https://github.com/ggml-org/whisper.cpp
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/ggml-org/whisper.cpp
    note: Free open-source software with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  runs_locally:
    answer: yes
    evidence: https://github.com/ggml-org/whisper.cpp
    note: Inference runs entirely on the local device.
  no_training:
    answer: yes
    evidence: https://github.com/ggml-org/whisper.cpp
    note: Processing is entirely local.
---
