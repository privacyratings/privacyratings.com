---
name: Session
description: End-to-end encrypted messenger that uses a random Account ID instead of a phone number and sends messages through onion routing over a decentralized network of community-operated nodes. Stewarded by the Session Technology Foundation in Switzerland.
website: https://getsession.org
jurisdiction: CH
source: https://github.com/session-foundation
platforms:
  - android
  - ios
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/session-foundation/session-android/blob/dev/LICENSE
    note: The apps are GPL-3.0, and the storage server run by network nodes is MIT.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/network.loki.messenger/latest/
    note: Exodus finds no trackers in the Android app, and the privacy policy states Session stores no information that could be used to track users.
  no_ads:
    answer: yes
    evidence: https://getsession.org/donate
    note: Funded by donations to the Session Technology Foundation, with no ads.
  independent_audit:
    answer: partial
    evidence: https://blog.quarkslab.com/resources/2021-05-04_audit-of-session-secure-messaging-application/20-08-Oxen-REP-v1.4.pdf
    note: Quarkslab published a full audit report, but it is older than three years.
  e2ee_default:
    answer: yes
    evidence: https://getsession.org/faq
    note: One-to-one chats and groups are end-to-end encrypted by default; large public communities are only encrypted in transit to their server.
  no_phone_number:
    answer: yes
    evidence: https://getsession.org/faq
    note: No phone number or email is needed; accounts use a randomly generated Account ID.
  metadata_protection:
    answer: yes
    evidence: https://getsession.org/whitepaper
    note: Onion requests hide the sender's IP address and no single node knows both origin and destination of a message.
  decentralized:
    answer: yes
    evidence: https://getsession.org/faq
    note: Messages are stored and relayed by a network of more than a thousand community-operated Session Nodes rather than central servers.
---
