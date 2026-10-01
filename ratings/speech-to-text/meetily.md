---
name: Meetily
description: Desktop meeting assistant that records meeting audio without a bot, transcribes it on the device with Whisper or Parakeet models, and generates summaries with local or user-chosen AI models.
website: https://meetily.ai
source: https://github.com/Zackriya-Solutions/meeting-minutes
platforms:
  - windows
  - macos
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Zackriya-Solutions/meeting-minutes/blob/main/LICENSE.md
    note: The Community edition is MIT-licensed; features in the paid Pro edition are not in the public repository.
  no_trackers:
    answer: no
    evidence: https://meetily.ai/privacy
    note: The meetily.ai website uses PostHog analytics; app analytics are off by default.
  no_ads:
    answer: yes
    evidence: https://meetily.ai/pricing
    note: Funded by paid Pro and Enterprise licenses, with a free Community edition and no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  runs_locally:
    answer: yes
    evidence: https://meetily.ai/privacy
    note: Transcription runs on the device by default; audio does not leave the computer.
  no_training:
    answer: yes
    evidence: https://meetily.ai/privacy
    note: Audio stays on the device, and transcripts are sent only to a summary provider the user chooses.
---
