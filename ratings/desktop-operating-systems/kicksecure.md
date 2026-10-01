---
name: Kicksecure
description: A security-hardened Linux distribution based on Debian, with hardened kernel and system settings, from the developers of Whonix.
website: https://www.kicksecure.com
source: https://github.com/Kicksecure/derivative-maker
jurisdiction: MH
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://raw.githubusercontent.com/Kicksecure/derivative-maker/master/COPYING
    note: AGPL-3.0 and GPL-2.0 or later.
  no_trackers:
    answer: partial
    evidence: https://www.kicksecure.com/wiki/Census
    note: No third-party analytics. The system fetches a warrant canary over Tor daily, which also counts users, and this can be turned off.
  no_ads:
    answer: yes
    evidence: https://www.kicksecure.com/wiki/Donate
    note: Funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
