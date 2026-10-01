---
name: AppArmor
description: A Linux kernel security module that confines programs with per-application profiles restricting file access, network access and capabilities. It is enabled by default on Ubuntu and Debian.
website: https://apparmor.net
source: https://gitlab.com/apparmor/apparmor
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/apparmor/apparmor/-/blob/master/LICENSE
    note: GPL-2.0, with some libraries under other open source licenses.
  no_trackers:
    answer: yes
    evidence: https://gitlab.com/apparmor/apparmor
    note: No telemetry or analytics in the source code, and no trackers on the website.
  no_ads:
    answer: yes
    evidence: https://apparmor.net
    note: Open source project developed by Canonical and community contributors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
