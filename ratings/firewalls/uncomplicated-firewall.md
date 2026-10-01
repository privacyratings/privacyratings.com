---
name: Uncomplicated Firewall
description: Command-line front end for managing Netfilter firewall rules on Linux, the default firewall tool on Ubuntu, with simple commands for allowing and denying traffic.
website: https://launchpad.net/ufw
source: https://git.launchpad.net/ufw
criteria:
  open_source:
    answer: yes
    evidence: https://git.launchpad.net/ufw/tree/COPYING
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://git.launchpad.net/ufw
    note: No telemetry or analytics in the source code, and the Launchpad project page loads no trackers.
  no_ads:
    answer: yes
    evidence: https://launchpad.net/ufw
    note: Free software maintained within Ubuntu, with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
also_in:
  - linux-hardening
---
