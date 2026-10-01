---
name: GPT4All
description: Open-source desktop app from Nomic for running large language models locally, including chatting with local documents.
website: https://www.nomic.ai/gpt4all
source: https://github.com/nomic-ai/gpt4all
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/nomic-ai/gpt4all/blob/main/LICENSE.txt
    note: MIT.
  no_trackers:
    answer: no
    evidence: https://www.nomic.ai/gpt4all
    note: The website loads Google Analytics and HubSpot.
  no_ads:
    answer: yes
    evidence: https://github.com/nomic-ai/gpt4all
    note: Free and open source, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_training:
    answer: yes
    evidence: https://docs.gpt4all.io/gpt4all_desktop/settings.html
    note: Chats stay on the device. Sharing them with the GPT4All datalake is opt-in and off by default.
  runs_locally:
    answer: yes
    evidence: https://github.com/nomic-ai/gpt4all
    note: Runs models locally on the user's computer, with no internet connection needed.
  chat_retention:
    answer: yes
    evidence: https://docs.gpt4all.io/gpt4all_desktop/settings.html
    note: Chats are stored only on the device.
  no_account_needed:
    answer: yes
    evidence: https://github.com/nomic-ai/gpt4all
    note: No account is needed.
---
