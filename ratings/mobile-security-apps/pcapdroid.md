---
name: PCAPdroid
description: Open source Android app that captures and inspects the network traffic of other apps without root, using a local VPN. It can export PCAP files and decrypt TLS, with optional paid firewall and malware detection features.
website: https://emanuele-f.github.io/PCAPdroid/
source: https://github.com/emanuele-f/PCAPdroid
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/emanuele-f/PCAPdroid/blob/master/COPYING
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://emanuele-f.github.io/PCAPdroid/privacy
    note: The privacy policy states the app collects no information and processes traffic only on the device, and the Exodus report finds no trackers.
  no_ads:
    answer: yes
    evidence: https://emanuele-f.github.io/PCAPdroid/paid_features
    note: Funded by optional paid features and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
