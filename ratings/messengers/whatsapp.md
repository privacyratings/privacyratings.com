---
name: WhatsApp
description: Messenger owned by Meta for text, voice and video calls, groups and channels, tied to a phone number. Personal chats and calls use the Signal Protocol for end-to-end encryption.
website: https://www.whatsapp.com
family: meta
mainstream: true
jurisdiction: US
platforms:
  - android
  - ios
  - windows
  - macos
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.whatsapp.com/legal/privacy-policy
    note: Exodus finds no third-party tracker libraries, but the app collects usage, diagnostic and performance data that cannot be turned off and shares information with other Meta companies.
  no_ads:
    answer: no
    evidence: https://www.whatsapp.com/legal/privacy-policy
    note: Ads are shown in Status and Channels, and information is shared with Meta companies, including for marketing.
  independent_audit:
    answer: partial
    evidence: https://www.nccgroup.com/media/phzpm0qv/_ncc_group_metaplatforms_e008327_report_2023-11-14_v10.pdf
    note: NCC Group published a full review of the key transparency library only; no audit of the app or service is published.
  e2ee_default:
    answer: yes
    evidence: https://www.whatsapp.com/privacy
    note: Personal messages, group chats and calls are end-to-end encrypted by default; public channels are not.
  no_phone_number:
    answer: no
    evidence: https://www.whatsapp.com/legal/privacy-policy
    note: A mobile phone number is required to create an account and is shown to contacts.
  metadata_protection:
    answer: no
    evidence: https://www.whatsapp.com/legal/privacy-policy
    note: The server sees who talks to whom, and the privacy policy lists activity, contacts and connection data that WhatsApp collects.
  decentralized:
    answer: no
    note: One central service run by Meta.
---
