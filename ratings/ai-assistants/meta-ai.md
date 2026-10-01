---
name: Meta AI
description: AI assistant from Meta built into Facebook, Instagram, WhatsApp and Messenger, and available on the web and as a standalone app.
website: https://www.meta.ai
family: meta
mainstream: true
domain: www.meta.ai
jurisdiction: US
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source. Meta publishes some Llama model weights, but the Meta AI service is not open source.
  no_trackers:
    answer: no
    evidence: https://www.facebook.com/privacy/policy/
    note: Meta collects activity and device data across its products, including Meta AI, and uses it for personalization and ads.
  no_ads:
    answer: no
    evidence: https://about.fb.com/news/2025/10/improving-your-recommendations-apps-ai-meta/
    note: Interactions with Meta AI are used to personalize ads across Meta's apps.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://transparency.meta.com/reports/government-data-requests/
    note: Publishes counts of government requests for user data twice a year.
  user_notice:
    answer: yes
    evidence: https://www.facebook.com/safety/groups/law/guidelines/
    note: Meta's policy is to notify people of requests for their information before disclosure, unless prohibited by law or in exceptional circumstances.
  no_training:
    answer: no
    evidence: https://www.facebook.com/privacy/genai/
    note: Interactions with AI features are used to train Meta's models, with no general opt-out setting.
  runs_locally:
    answer: no
    note: Hosted only.
  chat_retention:
    answer: partial
    evidence: https://www.facebook.com/privacy/policy/
    note: Chats are kept until deleted. The privacy policy sets retention case by case, with no fixed deletion period.
  no_account_needed:
    answer: partial
    evidence: https://www.meta.ai
    note: The web version offers limited chat before logging in; most features need a Meta account.
---
