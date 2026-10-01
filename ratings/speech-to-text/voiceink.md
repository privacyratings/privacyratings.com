---
name: VoiceInk
description: Dictation app for macOS and iOS that transcribes speech with local Whisper, Parakeet or Apple models and inserts the text into any app. Cloud transcription and AI text enhancement are optional.
website: https://tryvoiceink.com
source: https://github.com/Beingpax/VoiceInk
platforms:
  - macos
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Beingpax/VoiceInk/blob/main/LICENSE
    note: The macOS app is GPL-3.0; the iOS app source is not published.
  no_trackers:
    answer: no
    note: The website loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://tryvoiceink.com/pricing
    note: Funded by paid licenses, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  runs_locally:
    answer: yes
    evidence: https://tryvoiceink.com/privacy
    note: Transcription runs on the device with local models by default; cloud providers are opt-in.
  no_training:
    answer: yes
    evidence: https://tryvoiceink.com/privacy
    note: Local processing is the default and transcriptions are not stored on VoiceInk servers.
---
