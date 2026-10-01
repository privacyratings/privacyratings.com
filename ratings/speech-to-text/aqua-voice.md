---
name: Aqua Voice
description: Voice dictation app that sends speech to the cloud for transcription with its own Avalon model and inserts formatted text into any app, with optional screen context for accuracy.
website: https://aquavoice.com
domain: aquavoice.com
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
    evidence: https://aquavoice.com/info/privacy
    note: The website loads Google tags, HubSpot and Cookiebot, and the policy describes advertising attribution through Branch and ad platforms.
  no_ads:
    answer: partial
    evidence: https://aquavoice.com/info/privacy
    note: Funded by subscriptions and does not sell data, but hashed emails and conversion events are shared with ad platforms such as Google and Meta to measure its own ads.
  independent_audit:
    answer: partial
    evidence: https://aquavoice.com/info/privacy
    note: A SOC 2 Type II audit by Advantage Partners is claimed, but the report is only available through the Trust Center.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  runs_locally:
    answer: no
    evidence: https://aquavoice.com/llms.txt
    note: Audio is processed in the cloud.
  no_training:
    answer: partial
    evidence: https://aquavoice.com/info/privacy
    note: With Privacy Mode off, the default, transcripts may be stored to improve the product; Privacy Mode turns this off.
---
