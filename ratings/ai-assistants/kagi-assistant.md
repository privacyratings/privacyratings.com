---
name: Kagi Assistant
description: AI assistant from Kagi that combines several third-party language models with Kagi Search results, available with a Kagi account.
website: https://assistant.kagi.com
domain: assistant.kagi.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://kagi.com/privacy
    note: The site loads no analytics or telemetry.
  no_ads:
    answer: yes
    evidence: https://kagi.com/pricing
    note: Funded by paid subscriptions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://kagi.com/privacy
    note: The privacy policy includes a warrant canary, but no request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_training:
    answer: yes
    evidence: https://kagi.com/privacy
    note: Kagi does not train on chats and uses third-party providers that do not save data or train on it whenever possible.
  runs_locally:
    answer: no
    note: Hosted only.
  chat_retention:
    answer: yes
    evidence: https://kagi.com/privacy
    note: Threads are deleted automatically after one day by default, and can be deleted immediately. Reported threads are kept longer.
  no_account_needed:
    answer: no
    evidence: https://kagi.com/pricing
    note: A Kagi account is required.
---
