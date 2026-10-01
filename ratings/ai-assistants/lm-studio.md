---
name: LM Studio
description: Desktop app for finding, downloading and running large language models locally, with a chat interface and a local API server.
website: https://lmstudio.ai
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: no
    note: Closed source. The lms command-line tool and SDKs are open source, but the app is not.
  no_trackers:
    answer: partial
    evidence: https://lmstudio.ai/app-privacy
    note: The app only contacts LM Studio servers for updates and model downloads, and the website uses cookieless Plausible analytics.
  no_ads:
    answer: yes
    evidence: https://lmstudio.ai/enterprise
    note: Free to use, funded by paid enterprise plans, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_training:
    answer: yes
    evidence: https://lmstudio.ai/app-privacy
    note: Prompts and responses stay on the device and are not retained by LM Studio.
  runs_locally:
    answer: yes
    evidence: https://lmstudio.ai/app-privacy
    note: Models run entirely on the user's own computer and can work offline.
  chat_retention:
    answer: yes
    evidence: https://lmstudio.ai/app-privacy
    note: Chats are stored only on the device.
  no_account_needed:
    answer: yes
    evidence: https://lmstudio.ai/app-privacy
    note: No account is needed.
---
