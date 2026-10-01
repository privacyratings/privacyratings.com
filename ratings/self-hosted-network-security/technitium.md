---
name: Technitium DNS Server
description: Self-hosted authoritative and recursive DNS server with a web console, network-wide ad and tracker blocking, and support for DNS-over-TLS, DNS-over-HTTPS and DNS-over-QUIC.
website: https://technitium.com/dns
source: https://github.com/TechnitiumSoftware/DnsServer
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/TechnitiumSoftware/DnsServer/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://technitium.com/dns/privacypolicy.html
    note: The privacy policy states the server only contacts Technitium for update checks and the app store and collects no user data, and the website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://technitium.com/dns/
    note: Free software funded by donations through Patreon, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_name: Technitium
---
