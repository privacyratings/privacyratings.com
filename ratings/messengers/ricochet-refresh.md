---
name: Ricochet Refresh
description: Desktop instant messenger that runs each user as a Tor onion service and connects contacts peer to peer, hiding identity, IP address and metadata. Maintained by Blueprint for Free Speech.
website: https://www.ricochetrefresh.net
source: https://github.com/blueprint-freespeech/ricochet-refresh
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/blueprint-freespeech/ricochet-refresh/blob/main/LICENSE
    note: LGPL-2.1 and BSD-3-Clause.
  no_trackers:
    answer: yes
    evidence: https://github.com/blueprint-freespeech/ricochet-refresh
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://www.ricochetrefresh.net/
    note: Non-profit project funded by grants such as the NGI Assure Fund, with no ads.
  independent_audit:
    answer: partial
    evidence: https://public.opentech.fund/documents/ricochet-ncc-audit-2016-01.pdf
    note: A full NCC Group audit of the original Ricochet, which this project forks, is public but is older than three years.
  e2ee_default:
    answer: yes
    evidence: https://www.ricochetrefresh.net/
    note: All chats run over end-to-end encrypted Tor onion service connections.
  no_phone_number:
    answer: yes
    evidence: https://www.ricochetrefresh.net/
    note: The identity is a Tor onion address generated on the device.
  metadata_protection:
    answer: yes
    evidence: https://www.ricochetrefresh.net/
    note: There are no servers, and connections go through Tor circuits so no node knows both sender and recipient.
  decentralized:
    answer: yes
    evidence: https://www.ricochetrefresh.net/
    note: Peer to peer over Tor with no servers.
imported_from: awesome-privacy
---
