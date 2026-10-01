---
name: Anarlog
description: Open-source, local-first meeting notepad, formerly Hyprnote, that records device audio without a bot and creates transcripts and AI summaries. Transcription can run on the device on supported Macs or through a chosen cloud provider.
website: https://anarlog.so
source: https://github.com/fastrepl/anarlog
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
aliases:
  - Hyprnote
  - Char
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/fastrepl/anarlog/blob/main/LICENSE
    note: The app, including the optional hosted services, is MIT-licensed; separate enterprise components are commercially licensed.
  no_trackers:
    answer: no
    evidence: https://anarlog.so/privacy
    note: The policy lists PostHog, Google Analytics and Microsoft Clarity for analytics, including website session replay.
  no_ads:
    answer: yes
    evidence: https://anarlog.so/privacy
    note: Funded by paid plans; the policy states data is not sold or shared for behavioral advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  runs_locally:
    answer: partial
    evidence: https://docs.anarlog.so/models-and-providers
    note: On-device transcription is available only on supported Macs; other platforms use a cloud or custom transcription provider.
  no_training:
    answer: yes
    evidence: https://anarlog.so/privacy
    note: The policy states notes, transcripts and audio are never used to train AI models.
---
