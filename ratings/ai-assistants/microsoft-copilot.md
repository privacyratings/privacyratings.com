---
name: Microsoft Copilot
description: Consumer AI assistant from Microsoft for chat, search, writing and image generation, built into Windows and Edge and available on the web and in mobile apps.
website: https://copilot.microsoft.com
family: microsoft
aliases:
  - Copilot
mainstream: true
domain: copilot.microsoft.com
jurisdiction: US
platforms:
  - web
  - windows
  - macos
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.microsoft.copilot/latest/
    note: The Android app includes Adjust and Sentry, and Microsoft collects diagnostic data that cannot be fully turned off.
  no_ads:
    answer: no
    evidence: https://support.microsoft.com/en-us/microsoft-copilot/privacy-faq-for-microsoft-copilot
    note: Microsoft shows ads to Copilot users, and with personalization on, Copilot conversation history is used to personalize them.
  independent_audit:
    answer: no
    note: No independent audit of consumer Copilot is published.
  transparency_report:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Publishes counts of government requests for consumer data twice a year.
  user_notice:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Microsoft gives prior notice to consumers whose data is requested, except where prohibited by law or in emergencies.
  no_training:
    answer: partial
    evidence: https://support.microsoft.com/en-us/microsoft-copilot/privacy-faq-for-microsoft-copilot
    note: Conversations of signed-in users are used for model training by default, with an opt-out setting.
  runs_locally:
    answer: no
    note: Hosted only.
  chat_retention:
    answer: partial
    evidence: https://support.microsoft.com/en-us/microsoft-copilot/privacy-faq-for-microsoft-copilot
    note: Conversations are stored for 18 months by default and can be deleted at any time.
  no_account_needed:
    answer: partial
    evidence: https://support.microsoft.com/en-us/microsoft-copilot/privacy-faq-for-microsoft-copilot
    note: Copilot can be used without signing in, with fewer features.
---
