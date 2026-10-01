---
name: Briar
description: Peer-to-peer encrypted messenger for Android and desktop that syncs over Tor, Wi-Fi or Bluetooth. Messages, forums and blogs are stored only on users' devices.
website: https://briarproject.org
source: https://code.briarproject.org/briar/briar
criteria:
  open_source:
    answer: yes
    evidence: https://code.briarproject.org/briar/briar/-/blob/master/LICENSE.txt
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://briarproject.org/privacy-policy/
    note: The privacy policy states no information is collected about how Briar is used; feedback and crash reports are opt-in.
  no_ads:
    answer: yes
    evidence: https://briarproject.org/about-us/
    note: Funded by grants and donations, with no ads.
  independent_audit:
    answer: partial
    evidence: https://briarproject.org/raw/BRP-01-report.pdf
    note: A full Cure53 audit report is public but is older than three years.
  e2ee_default:
    answer: yes
    evidence: https://briarproject.org/how-it-works/
    note: All communication between devices is end-to-end encrypted.
  no_phone_number:
    answer: yes
    evidence: https://briarproject.org/how-it-works/
    note: Accounts are created on the device with a nickname and password, with no phone number or email.
  metadata_protection:
    answer: yes
    evidence: https://briarproject.org/how-it-works/
    note: Messages sync directly over Tor, Wi-Fi or Bluetooth, and contact lists are stored only on the device.
  decentralized:
    answer: yes
    evidence: https://briarproject.org/how-it-works/
    note: Peer to peer with no central server.
imported_from: awesome-privacy
---
