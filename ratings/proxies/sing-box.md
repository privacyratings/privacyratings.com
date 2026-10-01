---
name: sing-box
description: Universal proxy platform that supports Shadowsocks, VLESS, Trojan, Hysteria 2, WireGuard and other protocols with rule-based routing, available as a command-line core and official graphical clients.
website: https://sing-box.sagernet.org
source: https://github.com/SagerNet/sing-box
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/SagerNet/sing-box/blob/testing/LICENSE
    note: GPL-3.0-or-later, with an added restriction on use of the project name.
  no_trackers:
    answer: yes
    evidence: https://sing-box.sagernet.org/clients/privacy/
    note: The privacy policy states the software and official clients do not collect or share personal data, and Exodus finds no trackers in the Android app.
  no_ads:
    answer: yes
    evidence: https://sing-box.sagernet.org/sponsors/
    note: Free project supported by sponsors, with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
