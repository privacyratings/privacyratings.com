---
name: ChatGPT
description: AI chatbot from OpenAI for writing, questions, coding, image generation and voice conversations. Available on the web and as desktop and mobile apps, with free and paid plans.
website: https://chatgpt.com
aliases:
  - OpenAI
mainstream: true
domain: chatgpt.com
jurisdiction: US
platforms:
  - web
  - windows
  - macos
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.openai.chatgpt/latest/
    note: The Android app includes Segment and Sentry, and the privacy policy describes cookies and web analytics services.
  no_ads:
    answer: no
    evidence: https://openai.com/policies/us-privacy-policy/
    note: Free and Go plans show ads that can be personalized using ad interests and activity, subject to settings.
  independent_audit:
    answer: partial
    evidence: https://openai.com/security-and-privacy/
    note: OpenAI holds ISO 42001 certification covering consumer products and SOC 2 for business services, but the full reports are not public.
  transparency_report:
    answer: yes
    evidence: https://openai.com/trust-and-transparency/
    note: Publishes counts of government requests for user data every six months.
  user_notice:
    answer: partial
    evidence: https://cdn.openai.com/trust-and-transparency/openai-law-enforcement-policy-v2024.07.pdf
    note: The law enforcement policy says OpenAI may give users prior notice unless prohibited by law, without a firm commitment.
  no_training:
    answer: partial
    evidence: https://help.openai.com/en/articles/7730893-data-controls-faq
    note: Chats are used for training by default. The Improve the model for everyone setting turns this off.
  runs_locally:
    answer: no
    note: Hosted only.
  chat_retention:
    answer: yes
    evidence: https://help.openai.com/en/articles/8809935-how-to-delete-and-archive-chats-in-chatgpt
    note: Chats are kept until deleted, then removed within 30 days unless needed for security or legal obligations.
  no_account_needed:
    answer: partial
    evidence: https://help.openai.com/en/articles/7730893-data-controls-faq
    note: ChatGPT can be used without signing in, with fewer features.
---
