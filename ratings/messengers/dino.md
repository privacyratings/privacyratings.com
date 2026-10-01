---
name: Dino
description: Desktop XMPP (Jabber) client for Linux built with GTK, with group chats, file transfers, and voice and video calls. OMEMO end-to-end encryption is on by default for one-to-one and private group chats.
website: https://dino.im
source: https://github.com/dino/dino
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/dino/dino/blob/master/LICENSE
    note: GPL-3.0, and it works with open-source XMPP servers.
  no_trackers:
    answer: yes
    evidence: https://github.com/dino/dino
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://dino.im/#donate
    note: Free software with no ads, supported by donations.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_default:
    answer: yes
    evidence: https://dino.im/
    note: OMEMO is the default encryption for one-to-one chats and private group chats, and calls are end-to-end encrypted; public group chats are not encrypted.
  no_phone_number:
    answer: yes
    evidence: https://dino.im/
    note: Accounts are XMPP addresses on any server; no phone number is needed.
  metadata_protection:
    answer: no
    note: The user's XMPP server stores the contact list and sees who talks to whom.
  decentralized:
    answer: yes
    evidence: https://dino.im/
    note: XMPP is federated, so users on different servers can message each other and anyone can run a server.
---
