---
name: Jan
description: Open-source desktop app for running large language models offline on a local computer, with optional connections to remote AI APIs.
website: https://www.jan.ai
source: https://github.com/janhq/jan
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/janhq/jan/blob/main/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/janhq/jan/blob/main/web-app/src/containers/analytics/AnalyticConsent.tsx
    note: Product analytics are off until the user agrees, and no third-party trackers were found on the website.
  no_ads:
    answer: yes
    evidence: https://www.jan.ai/privacy
    note: Free and open source, with no ads. Personal information is not shared with third parties.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_training:
    answer: yes
    evidence: https://www.jan.ai/privacy
    note: Conversations stay on the user's computer. Remote APIs, when chosen, follow their own policies.
  runs_locally:
    answer: yes
    evidence: https://www.jan.ai/privacy
    note: Runs fully offline on the user's own computer.
  chat_retention:
    answer: yes
    evidence: https://www.jan.ai/privacy
    note: Conversation history is stored locally and never leaves the computer.
  no_account_needed:
    answer: yes
    evidence: https://www.jan.ai/privacy
    note: No account is needed.
---
