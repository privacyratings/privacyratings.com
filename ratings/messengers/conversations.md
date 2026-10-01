---
name: Conversations
description: XMPP (Jabber) client for Android that works with any standard XMPP server, with OMEMO end-to-end encryption on by default for one-to-one and private group chats.
website: https://conversations.im
source: https://codeberg.org/iNPUTmice/Conversations
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/iNPUTmice/Conversations/src/branch/master/LICENSE
    note: GPL-3.0, and it works with open-source XMPP servers such as Prosody and ejabberd.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/eu.siacs.conversations/latest/
    note: Exodus finds no trackers in the Android app.
  no_ads:
    answer: yes
    evidence: https://play.google.com/store/apps/details?id=eu.siacs.conversations
    note: Sold as a paid app on Google Play and free on F-Droid, with no ads.
  independent_audit:
    answer: partial
    evidence: https://conversations.im/omemo/audit.pdf
    note: A full cryptographic analysis of OMEMO, including its Conversations implementation, is public but older than three years.
  e2ee_default:
    answer: yes
    evidence: https://codeberg.org/iNPUTmice/Conversations/src/branch/master/README.md
    note: OMEMO end-to-end encryption is on by default for one-to-one and private group chats; public group chats are not encrypted.
  no_phone_number:
    answer: yes
    evidence: https://conversations.im
    note: Accounts are XMPP addresses on any server; no phone number is needed.
  metadata_protection:
    answer: no
    note: The user's XMPP server stores the contact list and sees who talks to whom.
  decentralized:
    answer: yes
    evidence: https://conversations.im/#xmpp
    note: XMPP is federated, so users on different servers can message each other and anyone can run a server.
---
