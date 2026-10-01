---
name: Husarnet
description: Peer-to-peer VPN from a company in Poland, built for robotics and IoT, that gives each device an IPv6 address derived from its public key, with a hosted dashboard and relay servers.
website: https://husarnet.com
source: https://github.com/husarnet/husarnet
jurisdiction: PL
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/husarnet/husarnet/blob/master/LICENSE.txt
    note: The client is GPL-3.0 or MPL-2.0, but the dashboard and base servers are closed source.
  no_trackers:
    answer: no
    evidence: https://husarnet.com
    note: The website loads Google Analytics, Google Tag Manager and Hotjar.
  no_ads:
    answer: yes
    evidence: https://husarnet.com/pricing
    note: Funded by paid plans, with a free plan and no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  device_keys:
    answer: yes
    evidence: https://github.com/husarnet/husarnet#readme
    note: Each device's address is derived from its own public key, and packets never leave devices unencrypted. Base servers only relay when a direct connection fails.
  self_hosted_control:
    answer: partial
    evidence: https://husarnet.com/docs/selfhosted-about/
    note: The dashboard and base servers can be self-hosted, but only under a paid proprietary license.
---
