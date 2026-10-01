---
name: OpenVPN
description: Open-source VPN daemon that uses TLS for key exchange and runs over UDP or TCP, widely used for self-hosted site-to-site and remote-access VPNs.
website: https://openvpn.net/community/
source: https://github.com/OpenVPN/openvpn
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/OpenVPN/openvpn/blob/master/COPYING
    note: GPL-2.0.
  no_trackers:
    answer: no
    evidence: https://openvpn.net/privacy-policy/
    note: The website loads Google Analytics, Microsoft Clarity, HubSpot and LinkedIn trackers.
  no_ads:
    answer: yes
    evidence: https://openvpn.net/access-server/pricing/
    note: Free community software supported by OpenVPN Inc.'s paid business products, with no ads in the software.
  independent_audit:
    answer: partial
    evidence: https://ostif.org/wp-content/uploads/2017/05/OpenVPN1.2final.pdf
    note: Full Quarkslab report on OpenVPN 2.4.0, older than three years.
---
