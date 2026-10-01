---
name: Wispr Flow
description: Voice dictation app that transcribes speech in the cloud and inserts AI-formatted text into any app. It also includes a meeting notetaker.
website: https://wisprflow.ai
mainstream: true
domain: wisprflow.ai
jurisdiction: US
platforms:
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
    evidence: https://wisprflow.ai/privacy-policy
    note: The website loads PostHog and Google Tag Manager, and the policy describes third-party analytics including Google Analytics.
  no_ads:
    answer: partial
    evidence: https://wisprflow.ai/privacy-policy
    note: Funded by subscriptions and does not sell data, but uses cookies and ad networks such as LinkedIn to advertise its own product.
  independent_audit:
    answer: partial
    evidence: https://docs.wisprflow.ai/articles/3467817258-security-and-compliance-faq
    note: SOC 2 Type II and ISO 27001 reports are available only through the Trust Center after approval and an NDA.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  runs_locally:
    answer: no
    evidence: https://wisprflow.ai/data-controls
    note: Transcription always occurs in the cloud.
  no_training:
    answer: partial
    evidence: https://docs.wisprflow.ai/articles/9609615338-private-cloud-sync-and-data-sharing-preferences-in-wispr-flow
    note: Audio, transcripts and edits are used to improve models by default on Free and Pro plans, with an opt-out; Enterprise is excluded.
---
