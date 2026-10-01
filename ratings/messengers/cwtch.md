---
name: Cwtch
description: Decentralized, metadata-resistant messenger from the non-profit Open Privacy Research Society. Contacts talk peer to peer over Tor onion services, and optional group chats use untrusted servers that anyone can run.
website: https://docs.cwtch.im
jurisdiction: CA
source: https://git.openprivacy.ca/cwtch.im/cwtch-ui
platforms:
  - windows
  - macos
  - linux
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://git.openprivacy.ca/cwtch.im/cwtch-ui
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/im.cwtch.flwtch/latest/
    note: Exodus finds no trackers in the Android app.
  no_ads:
    answer: yes
    evidence: https://openprivacy.ca/donate/
    note: Funded by donations to the non-profit Open Privacy Research Society, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_default:
    answer: yes
    evidence: https://docs.cwtch.im/
    note: All communication, including groups, is end-to-end encrypted over Tor v3 onion services.
  no_phone_number:
    answer: yes
    evidence: https://docs.cwtch.im/
    note: No phone number or account registration is needed; profiles are identified by onion addresses.
  metadata_protection:
    answer: yes
    evidence: https://docs.cwtch.im/docs/groups/introduction/
    note: Contacts connect directly over Tor, and group servers are designed to learn as little as possible about contents or metadata.
  decentralized:
    answer: yes
    evidence: https://docs.cwtch.im/
    note: Peer to peer over Tor, with no central Cwtch service; anyone can host a group server.
---
