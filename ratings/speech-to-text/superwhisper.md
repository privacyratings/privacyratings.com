---
name: Superwhisper
description: Dictation app that turns speech into text in any app, with optional AI formatting. It offers local Whisper, Parakeet and Cohere models as well as cloud voice and language models.
website: https://superwhisper.com
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
    note: The website loads Google Tag Manager and PostHog.
  no_ads:
    answer: yes
    evidence: https://superwhisper.com/docs/billing/plans
    note: Funded by paid Pro subscriptions and licenses, with no ads.
  independent_audit:
    answer: partial
    evidence: https://superwhisper.com/docs/security/compliance
    note: SOC 2 and penetration test reports are available only on request through the Trust Center.
  runs_locally:
    answer: partial
    evidence: https://superwhisper.com/docs/get-started/choose-your-model
    note: Local voice models are available, but the default mode uses Superwhisper cloud models.
  no_training:
    answer: yes
    evidence: https://superwhisper.com/docs/security/sensitive-data
    note: Audio and text are not used to train models, and cloud providers operate under zero-data-retention terms.
---
