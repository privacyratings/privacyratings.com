---
name: Superhuman Mail
description: Closed-source email client for Gmail and Microsoft 365 accounts with keyboard-driven triage, read statuses and AI writing features, available for desktop, web and mobile.
website: https://superhuman.com/mail
aliases:
  - Superhuman
jurisdiction: US
platforms:
  - macos
  - windows
  - web
  - ios
  - android
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://superhuman.com/legal/privacy-policy
    note: The website loads Google Tag Manager, HubSpot, FullStory, LinkedIn and TikTok trackers, and the policy describes advertising cookies.
  no_ads:
    answer: partial
    evidence: https://superhuman.com/legal/privacy-policy
    note: Funded by paid plans and user content is not sold, but identifiers are shared with advertising partners to promote Superhuman products.
  independent_audit:
    answer: partial
    evidence: https://trust.superhuman.com/
    note: SOC 2 Type 2 and ISO 27001 audits are listed, but the reports are available only on request.
  openpgp:
    answer: no
    note: No PGP or S/MIME support is documented.
  no_cloud_relay:
    answer: no
    evidence: https://superhuman.com/legal/privacy-policy
    note: The privacy policy states that Superhuman receives the emails and drafts the product is given access to.
  remote_content_blocked:
    answer: no
    note: No documented option to block remote images or tracking pixels.
  any_provider:
    answer: partial
    evidence: https://help.superhuman.com/hc/en-us/articles/46005777934733-Managing-Accounts
    note: Works only with Gmail and Microsoft 365 accounts.
---
