---
name: Tox & qTox client
description: Peer-to-peer encrypted messaging protocol with no central servers, and qTox, its desktop client for chat, voice, video and file transfer. qTox is now maintained by the TokTok project after the original repository was archived.
website: https://tox.chat
source: https://github.com/TokTok/qTox
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/TokTok/qTox/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/TokTok/qTox
    note: No telemetry or analytics in the source code, and there is no central service to report to.
  no_ads:
    answer: yes
    evidence: https://tox.chat/about.html
    note: Volunteer-run open source project with no company, ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_default:
    answer: yes
    evidence: https://tox.chat/faq.html
    note: End-to-end encryption with perfect forward secrecy is the default and only mode for all messages.
  no_phone_number:
    answer: yes
    evidence: https://tox.chat/faq.html
    note: Identity is a Tox ID public key generated on the device.
  metadata_protection:
    answer: partial
    evidence: https://tox.chat/faq.html
    note: There are no servers holding contact lists, but Tox does not hide IP addresses from contacts or the public DHT.
  decentralized:
    answer: yes
    evidence: https://tox.chat/faq.html
    note: Peer to peer over a distributed hash table, with no central servers.
imported_from: awesome-privacy
---
