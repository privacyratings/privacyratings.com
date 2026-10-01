---
name: Fireflies.ai
description: Cloud AI meeting assistant that joins video calls as a bot or records through its apps, then transcribes, summarizes and searches the conversations. It also offers dictation.
website: https://fireflies.ai
mainstream: true
domain: app.fireflies.ai
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
    evidence: https://fireflies.ai/privacy-policy
    note: The website loads Google tags, and the policy describes third-party analytics and ad-targeting cookies and pixels.
  no_ads:
    answer: partial
    evidence: https://fireflies.ai/privacy-policy
    note: Funded by subscriptions, but personal data is shared with advertising partners to target Fireflies ads, which the policy says may count as a sale.
  independent_audit:
    answer: partial
    evidence: https://fireflies.ai/security
    note: SOC 2 Type II compliance is claimed, but the report is only available through the Trust Center.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  runs_locally:
    answer: no
    evidence: https://fireflies.ai/privacy-policy
    note: Recordings are transcribed on Fireflies servers and by its speech-to-text providers.
  no_training:
    answer: yes
    evidence: https://fireflies.ai/privacy-policy
    note: The policy states personal information is not used for AI model training and vendors are barred from training on it.
---
