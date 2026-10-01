---
name: Claude
description: AI assistant from Anthropic for writing, analysis, coding and research, available on the web and as desktop and mobile apps, with free and paid plans.
website: https://claude.ai
aliases:
  - Anthropic
mainstream: true
domain: claude.ai
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
    evidence: https://privacy.claude.com/en/articles/10023541-what-cookies-does-anthropic-use
    note: The website and claude.ai use Google Analytics, LinkedIn and other third-party analytics and marketing cookies, and the Android app includes Segment and Sentry.
  no_ads:
    answer: yes
    evidence: https://www.anthropic.com/news/claude-is-a-space-to-think
    note: Funded by subscriptions and API sales. Anthropic states Claude will remain ad-free.
  independent_audit:
    answer: no
    note: Anthropic's SOC 2 and ISO certifications cover its commercial products, not consumer Claude plans, and the reports are not public.
  transparency_report:
    answer: yes
    evidence: https://www.anthropic.com/transparency/system-trust-reporting
    note: Publishes counts of government requests for user data every six months.
  user_notice:
    answer: yes
    evidence: https://privacy.claude.com/en/articles/10023650-what-is-anthropic-s-policy-for-handling-governmental-requests-for-user-information
    note: Anthropic notifies users when their data is requested unless legally prohibited or in rare exceptions such as emergencies.
  no_training:
    answer: partial
    evidence: https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training
    note: Chats are used for training when the model improvement setting is on, and chats flagged for safety review may be used to train safety systems.
  runs_locally:
    answer: no
    note: Hosted only.
  chat_retention:
    answer: yes
    evidence: https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data
    note: Deleted chats are removed from back-end storage within 30 days. Chats flagged for policy violations are kept for up to 2 years.
  no_account_needed:
    answer: no
    note: An account is required.
---
