---
name: Mistral Vibe
description: AI assistant from French company Mistral AI, formerly called Le Chat, for chat, research, documents and coding tasks. Available on the web and in mobile apps.
website: https://mistral.ai/products/vibe/
aliases:
  - Le Chat
  - Mistral
domain: chat.mistral.ai
jurisdiction: FR
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source. Some Mistral models are published with open weights, but the assistant is not open source.
  no_trackers:
    answer: no
    evidence: https://help.mistral.ai/en/articles/347616-do-you-use-cookies-at-mistral-and-why
    note: The website uses analytics cookies and partner marketing cookies, and the Android app includes Sentry.
  no_ads:
    answer: yes
    evidence: https://help.mistral.ai/en/articles/347633-do-you-use-my-conversations-with-vibe-to-show-me-ads
    note: Funded by subscriptions and business sales. Conversations are not used for advertising.
  independent_audit:
    answer: partial
    evidence: https://help.mistral.ai/en/articles/347638-do-you-have-soc-2-or-iso-27001-certification
    note: Mistral has SOC 2 Type II and ISO 27001 audits, but the reports are only available on request.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_training:
    answer: partial
    evidence: https://help.mistral.ai/en/articles/455207-can-i-opt-out-of-my-input-or-output-data-being-used-for-training
    note: Chats on Free and Pro plans are used for training by default, with an opt-out setting.
  runs_locally:
    answer: no
    note: Hosted only.
  chat_retention:
    answer: partial
    evidence: https://help.mistral.ai/en/articles/347613-can-i-delete-a-chat-conversation
    note: Chats are kept until deleted. Deleted data may be retained in backend systems for policy enforcement or legal reasons.
  no_account_needed:
    answer: no
    note: A Mistral account is required.
---
