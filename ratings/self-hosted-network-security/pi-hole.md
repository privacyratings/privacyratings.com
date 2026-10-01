---
name: Pi-hole
description: Self-hosted DNS sinkhole that blocks ads, trackers and malware domains for every device on a network, with a web interface for query logs and blocklist management.
website: https://pi-hole.net
source: https://github.com/pi-hole/pi-hole
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/pi-hole/pi-hole/blob/master/LICENSE
    note: AGPL-3.0 and EUPL-1.2.
  no_trackers:
    answer: yes
    evidence: https://pi-hole.net/privacy/
    note: The software has no telemetry, and the privacy policy states the website only collects information given voluntarily.
  no_ads:
    answer: yes
    evidence: https://pi-hole.net/donate/
    note: Funded by donations and sponsorships, with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_name: Pi-Hole
---
