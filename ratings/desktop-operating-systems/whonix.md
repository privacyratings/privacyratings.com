---
name: Whonix
description: A Debian-based operating system that runs in virtual machines and routes all traffic through Tor, separating the Tor gateway from the workstation to prevent IP address leaks.
website: https://www.whonix.org
source: https://github.com/Whonix/derivative-maker
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Whonix/derivative-maker/blob/master/COPYING
    note: AGPL-3.0 and GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://www.whonix.org/wiki/Census
    note: No third-party analytics. Whonix-Gateway fetches a warrant canary daily for a user count, which can be turned off.
  no_ads:
    answer: yes
    evidence: https://www.whonix.org/wiki/Donate
    note: Funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
jurisdiction: MH
---
