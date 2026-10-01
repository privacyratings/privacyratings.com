---
name: Telegram
description: Cloud-based messenger with large groups, public channels and bots. Regular chats and groups are stored on Telegram's servers with client-server encryption; only optional one-to-one secret chats are end-to-end encrypted.
website: https://telegram.org
mainstream: true
jurisdiction: AE
source: https://github.com/DrKLO/Telegram
platforms:
  - android
  - ios
  - windows
  - macos
  - linux
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/DrKLO/Telegram/blob/master/LICENSE
    note: The apps are open source (the Android app is GPL-2.0); the server is closed source.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/org.telegram.messenger/latest/
    note: Exodus finds no trackers in the Android app, and the privacy policy states cookies are not used for profiling or advertising.
  no_ads:
    answer: partial
    evidence: https://telegram.org/privacy#5-6-no-ads-based-on-contents-of-chats-or-contact-lists
    note: Sponsored messages appear in large public channels, bots and search, and by default are based only on the channel topic or search terms rather than user data.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_default:
    answer: partial
    evidence: https://telegram.org/faq#q-so-how-do-you-encrypt-data
    note: Only secret chats, which must be started manually and do not support groups, are end-to-end encrypted; cloud chats and groups use client-server encryption.
  no_phone_number:
    answer: partial
    evidence: https://telegram.org/faq#q-who-can-see-my-phone-number
    note: A phone number is required to sign up, but it can be hidden from everyone and contacts can be reached by username.
  metadata_protection:
    answer: no
    note: The server stores cloud chats and sees who talks to whom.
  decentralized:
    answer: no
    note: One central service; the server code is not published.
---
