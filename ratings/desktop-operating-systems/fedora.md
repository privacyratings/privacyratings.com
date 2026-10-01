---
name: Fedora
description: A Linux distribution developed by the Fedora Project and sponsored by Red Hat, offering recent software in Workstation, Server and Atomic desktop editions.
website: https://fedoraproject.org
family: fedora
source: https://src.fedoraproject.org/
jurisdiction: US
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://docs.fedoraproject.org/en-US/legal/license-approval/
    note: Only software under licenses approved by Fedora, which are free and open source licenses, is included.
  no_trackers:
    answer: partial
    evidence: https://fedoraproject.org/wiki/Changes/DNF_Better_Counting
    note: No third-party trackers. The package manager sends an anonymous weekly count-me flag to Fedora mirrors by default, which can be turned off.
  no_ads:
    answer: yes
    evidence: https://fedoraproject.org/sponsors/
    note: Sponsored by Red Hat and other organizations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
