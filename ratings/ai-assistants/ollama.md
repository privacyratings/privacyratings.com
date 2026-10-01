---
name: Ollama
description: Open-source tool for downloading and running large language models on a local computer through a command line, API and desktop app. Optional cloud-hosted models are also offered.
website: https://ollama.com
source: https://github.com/ollama/ollama
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ollama/ollama/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: partial
    evidence: https://ollama.com/privacy
    note: No third-party trackers, but Ollama collects limited device and usage metadata such as app version and request counts, without prompt content.
  no_ads:
    answer: yes
    evidence: https://ollama.com/pricing
    note: Free to run locally, with paid plans for cloud models. The privacy policy states data is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_training:
    answer: yes
    evidence: https://ollama.com/privacy
    note: Local prompts never reach Ollama, and prompts sent to cloud models are not used for training.
  runs_locally:
    answer: yes
    evidence: https://ollama.com/privacy
    note: Models run on the user's own computer by default.
  chat_retention:
    answer: yes
    evidence: https://ollama.com/privacy
    note: Local chats are not sent to Ollama's servers. Cloud model prompts are processed transiently.
  no_account_needed:
    answer: yes
    evidence: https://ollama.com/privacy
    note: No account is needed to run models locally. An account is only needed for cloud models.
---
