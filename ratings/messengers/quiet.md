---
name: Quiet
description: "Peer-to-peer team chat, similar to Slack, that runs without servers: community members' devices sync messages directly over Tor. The developers warn it is not yet audited."
website: https://tryquiet.org
source: https://github.com/TryQuiet/quiet
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/TryQuiet/quiet/blob/develop/LICENSE.md
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.quietmobile/latest/
    note: Exodus finds no trackers in the Android app.
  no_ads:
    answer: yes
    evidence: https://github.com/TryQuiet/quiet#donations
    note: Free software with no ads, supported by donations.
  independent_audit:
    answer: no
    evidence: https://github.com/TryQuiet/quiet
    note: No independent audit is published; the developers state Quiet is not audited.
  e2ee_default:
    answer: yes
    evidence: https://tryquiet.org/
    note: All data is encrypted end to end between community members' devices over Tor.
  no_phone_number:
    answer: yes
    evidence: https://tryquiet.org/
    note: No phone number or email is needed to create or join a community.
  metadata_protection:
    answer: yes
    evidence: https://tryquiet.org/
    note: There are no servers, and peers connect over Tor onion services, so no third party sees who talks to whom.
  decentralized:
    answer: yes
    evidence: https://tryquiet.org/
    note: Peer to peer; members' devices sync messages directly with no server.
---
