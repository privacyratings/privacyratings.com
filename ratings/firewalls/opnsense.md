---
name: OPNSense
description: Open-source firewall and routing platform based on FreeBSD, with a web interface, VPN, intrusion detection and plugin support.
website: https://opnsense.org
source: https://github.com/opnsense/core
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/opnsense/core/blob/master/LICENSE
    note: BSD-2-Clause.
  no_ads:
    answer: yes
    evidence: https://shop.opnsense.com/product/opnsense-business-edition/
    note: Funded by Deciso through the paid Business Edition, hardware and support, with no ads.
  independent_audit:
    answer: yes
    evidence: https://docs.opnsense.org/_downloads/1192d82f5a5746287dca94a67976345a/BE26.4-STIC_OPNSENSE_IAD-2604-ETR-v1.0.pdf
    note: Full STIC evaluation technical report by jtsec for the Business Edition, which shares the open-source code base.
imported_from: awesome-privacy
jurisdiction: NL
---
