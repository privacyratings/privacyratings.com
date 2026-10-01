---
name: Open WebUI
description: Self-hosted web interface for large language models that works with Ollama and OpenAI-compatible APIs, with multi-user support.
website: https://openwebui.com
source: https://github.com/open-webui/open-webui
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/open-webui/open-webui/blob/main/LICENSE
    note: Source is public under the Open WebUI License, a BSD-3-Clause variant with a branding clause that is not OSI-approved.
  no_trackers:
    answer: no
    evidence: https://github.com/open-webui/open-webui/blob/main/Dockerfile
    note: The Docker image turns off library telemetry, but the openwebui.com website loads Google Analytics.
  no_ads:
    answer: yes
    evidence: https://docs.openwebui.com/enterprise/
    note: Free to self-host, funded by enterprise licenses, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_training:
    answer: yes
    evidence: https://docs.openwebui.com/
    note: Self-hosted, so chats stay on the user's server unless an external model API is connected.
  runs_locally:
    answer: yes
    evidence: https://docs.openwebui.com/
    note: Runs on the user's own server and works with local models through Ollama.
  chat_retention:
    answer: yes
    evidence: https://docs.openwebui.com/
    note: Chats are stored only on the user's own server.
  no_account_needed:
    answer: yes
    evidence: https://docs.openwebui.com/
    note: No account with the project is needed. Accounts exist only on the user's own instance.
---
