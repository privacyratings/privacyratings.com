---
name: llama.cpp
description: Open-source C/C++ library and command-line tools for running large language model inference locally on CPUs and GPUs, including a built-in web server and chat interface.
website: https://github.com/ggml-org/llama.cpp
source: https://github.com/ggml-org/llama.cpp
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ggml-org/llama.cpp/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/ggml-org/llama.cpp
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/ggml-org/llama.cpp
    note: Free and open source, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_training:
    answer: yes
    evidence: https://github.com/ggml-org/llama.cpp
    note: Runs entirely on the user's hardware, so prompts are never sent anywhere.
  runs_locally:
    answer: yes
    evidence: https://github.com/ggml-org/llama.cpp
    note: Runs models locally on the user's own hardware.
  chat_retention:
    answer: yes
    evidence: https://github.com/ggml-org/llama.cpp
    note: No server copy exists; everything stays on the user's machine.
  no_account_needed:
    answer: yes
    evidence: https://github.com/ggml-org/llama.cpp
    note: No account is needed.
---
