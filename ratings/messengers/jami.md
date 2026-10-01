---
name: Jami
description: Peer-to-peer encrypted messenger from the GNU project for text, audio and video calls, screen sharing and conferences, with apps for desktop and mobile.
website: https://jami.net
source: https://github.com/savoirfairelinux/jami-project
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/savoirfairelinux/jami-project/blob/master/COPYING
    note: GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://jami.net/privacy-policy/
    note: The apps have no telemetry and Exodus finds no trackers, but the website runs self-hosted Matomo analytics by default.
  no_ads:
    answer: yes
    evidence: https://jami.net/privacy-policy/
    note: Free software funded by Savoir-faire Linux and donations, with no ads and no personal data collected.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_default:
    answer: yes
    evidence: https://jami.net/privacy-policy/
    note: All connections are end-to-end encrypted with perfect forward secrecy.
  no_phone_number:
    answer: yes
    evidence: https://docs.jami.net/en_US/user/faq.html
    note: Accounts are key pairs created on the device; no email or phone number is required.
  metadata_protection:
    answer: partial
    evidence: https://docs.jami.net/en_US/user/faq.html
    note: No central server holds contact lists, but peers are located through a public DHT that exposes device announcements and IP addresses to other nodes.
  decentralized:
    answer: yes
    evidence: https://jami.net/privacy-policy/
    note: Peer to peer over a distributed hash table, with optional self-hosted account management servers.
jurisdiction: CA
---
