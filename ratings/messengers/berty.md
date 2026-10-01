---
name: Berty
description: Peer-to-peer, end-to-end encrypted messenger built on IPFS by the French non-profit Berty Technologies. It needs no phone number or email and can exchange messages offline over Bluetooth and local networks.
website: https://berty.tech
jurisdiction: FR
source: https://github.com/berty/berty
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/berty/berty/blob/master/LICENSE-APACHE
    note: Dual-licensed under Apache-2.0 and MIT.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/tech.berty.android/latest/
    note: Exodus finds no trackers in the Android app.
  no_ads:
    answer: yes
    evidence: https://berty.tech/about
    note: Developed by a non-profit organization that does not sell a product, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_default:
    answer: yes
    evidence: https://berty.tech/about
    note: All conversations, including groups, are end-to-end encrypted by default.
  no_phone_number:
    answer: yes
    evidence: https://berty.tech/faq
    note: No phone number or email is required; identity is based on public-key cryptography.
  metadata_protection:
    answer: yes
    evidence: https://berty.tech/faq
    note: There is no central server, rendezvous points rotate regularly, and users join each group with a group-specific identity.
  decentralized:
    answer: yes
    evidence: https://berty.tech/faq
    note: Peer to peer over IPFS, with optional offline transports such as Bluetooth; anyone can run a replication node.
---
