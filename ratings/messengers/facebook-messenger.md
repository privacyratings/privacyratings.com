---
name: Facebook Messenger
description: Meta's messaging app for Facebook accounts, with chats, groups, voice and video calls. Personal chats and calls are end-to-end encrypted by default.
website: https://www.messenger.com
family: meta
aliases:
  - Messenger
mainstream: true
jurisdiction: US
platforms:
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.facebook.orca/latest/
    note: Exodus finds Google Analytics, Mapbox and Facebook SDK components in the Android app.
  no_ads:
    answer: no
    note: Funded by advertising; Messenger shows ads and Meta uses account activity to personalize ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_default:
    answer: partial
    evidence: https://about.fb.com/news/2023/12/default-end-to-end-encryption-on-messenger/
    note: Personal chats and calls are end-to-end encrypted by default, but not every chat type is, such as chats with businesses and community chats.
  no_phone_number:
    answer: yes
    evidence: https://www.facebook.com/help/188157731232424
    note: Messenger requires a Facebook account, which can be created with an email address instead of a phone number.
  metadata_protection:
    answer: no
    note: Meta's servers see who talks to whom.
  decentralized:
    answer: no
    note: One central service run by Meta.
---
