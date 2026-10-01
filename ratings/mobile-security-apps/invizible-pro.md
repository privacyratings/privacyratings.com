---
name: InviZible Pro
description: Open source Android app that routes device traffic through Tor, encrypts DNS with DNSCrypt, and gives access to the I2P network, with a per-app firewall. Works with or without root.
website: https://invizible.net/en/
source: https://github.com/Gedsh/InviZible
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Gedsh/InviZible/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://invizible.net/en/privacy/
    note: The privacy policy states the app collects and shares no personal data, and the Exodus report for the Google Play build finds no trackers.
  no_ads:
    answer: yes
    evidence: https://invizible.net/en/donate/
    note: Free app supported by donations, with no ads. The privacy policy states no user data is collected.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
