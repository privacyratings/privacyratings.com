---
name: Microsoft Teams
description: Microsoft's workplace chat and meeting app with channels, direct messages, video calls and file sharing, part of Microsoft 365, with a free tier for personal use.
website: https://www.microsoft.com/en-us/microsoft-teams/group-chat-software
family: microsoft
aliases:
  - Teams
mainstream: true
jurisdiction: US
platforms:
  - windows
  - macos
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: Microsoft websites use third-party cookies, including for ads, and Teams sends required diagnostic data by default.
  no_ads:
    answer: yes
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: Funded by Microsoft 365 subscriptions with no ads in Teams; the privacy statement says chats and video calls are not used to target ads.
  independent_audit:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/compliance/regulatory/offering-soc-2
    note: Teams is covered by independent SOC 2 Type 2 audits, but the reports are only available to signed-in Microsoft 365 customers.
---
