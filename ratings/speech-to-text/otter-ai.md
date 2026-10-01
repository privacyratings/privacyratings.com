---
name: Otter.ai
description: Cloud AI meeting assistant that records and transcribes meetings and conversations, joins video calls as a bot or captures audio from its apps, and generates summaries and action items.
website: https://otter.ai
mainstream: true
domain: otter.ai
jurisdiction: US
platforms:
  - web
  - windows
  - macos
  - ios
  - android
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://otter.ai/privacy-policy
    note: The policy lists Google Analytics, Amplitude and Facebook advertising cookies.
  no_ads:
    answer: partial
    evidence: https://otter.ai/privacy-policy
    note: Funded by subscriptions, but device and cookie data are shared with advertising partners to advertise Otter, which the policy says may count as a sale.
  independent_audit:
    answer: partial
    evidence: https://otter.ai/privacy-security
    note: A SOC 2 Type 2 report exists, but it is not public.
  transparency_report:
    answer: partial
    evidence: https://otter.ai/data-request-policy
    note: A data request policy is published, with no request counts.
  user_notice:
    answer: yes
    evidence: https://otter.ai/data-request-policy
    note: The policy promises to notify the customer before disclosure unless legally prohibited, and afterward when a gag order expires.
  runs_locally:
    answer: no
    evidence: https://otter.ai/privacy-policy
    note: Audio is processed on Otter's servers.
  no_training:
    answer: no
    evidence: https://otter.ai/privacy-security
    note: De-identified recordings and transcripts are used to train Otter's models automatically, with no opt-out described.
---
