---
name: Venice
description: AI chat and image generation service that proxies prompts to open and third-party models, keeping conversation history only in the browser.
website: https://venice.ai
domain: venice.ai
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://venice.ai/legal/privacy-policy
    note: The privacy policy lists Google Analytics and third-party analytics and advertising partners.
  no_ads:
    answer: yes
    evidence: https://venice.ai/pricing
    note: Funded by Pro subscriptions and API sales, with no ads in the service.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_training:
    answer: yes
    evidence: https://venice.ai/privacy
    note: In the default Private mode, prompts are not stored by Venice or its inference providers. Anonymous mode sends prompts to third-party providers that may keep them.
  runs_locally:
    answer: no
    note: Hosted only.
  chat_retention:
    answer: yes
    evidence: https://venice.ai/privacy
    note: Conversation history is stored only on the device, and prompts are relayed without being stored.
  no_account_needed:
    answer: partial
    evidence: https://venice.ai/legal/privacy-policy
    note: Venice can be used without an account, with limits.
---
