---
name: Syncthing
description: Open source, peer-to-peer continuous file synchronization between two or more devices. Data is encrypted in transit and never stored on a central server.
website: https://syncthing.net
source: https://github.com/syncthing/syncthing
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/syncthing/syncthing/blob/main/LICENSE
    note: MPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://docs.syncthing.net/users/security.html#usage-reporting
    note: Usage reporting is off by default and only sent if the user agrees when asked. No third-party trackers.
  no_ads:
    answer: yes
    evidence: https://syncthing.net/donations/
    note: Run by the non-profit Syncthing Foundation and funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
jurisdiction: SE
---
