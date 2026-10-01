---
name: Granola
description: AI notepad for meetings that captures computer audio without a bot joining the call, transcribes it through cloud providers, and turns the user's notes and the transcript into meeting summaries.
website: https://www.granola.ai
domain: www.granola.ai
jurisdiction: US
platforms:
  - windows
  - macos
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://docs.granola.ai/help-center/policies/privacy-policy
    note: The policy allows authorized third parties to use cookies, pixels and tags for analytics and targeted advertising.
  no_ads:
    answer: partial
    evidence: https://docs.granola.ai/help-center/policies/privacy-policy
    note: Funded by subscriptions and does not sell personal data, but third-party cookies are used to target Granola's own advertising.
  independent_audit:
    answer: partial
    evidence: https://www.granola.ai/security
    note: A SOC 2 Type 2 audit is claimed, but the report is not public.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  runs_locally:
    answer: no
    evidence: https://www.granola.ai/security
    note: Audio is sent to cloud transcription providers such as Deepgram and AssemblyAI.
  no_training:
    answer: partial
    evidence: https://docs.granola.ai/help-center/policies/privacy-policy
    note: De-identified data is used for model training unless the user opts out in account settings; enterprise workspaces are opted out by default.
---
