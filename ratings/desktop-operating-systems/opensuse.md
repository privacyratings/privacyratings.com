---
name: openSUSE
description: A community Linux distribution sponsored by SUSE, available as the rolling Tumbleweed and the fixed-release Leap, with the YaST and Zypper system tools.
website: https://www.opensuse.org
source: https://build.opensuse.org/project/show/openSUSE:Factory
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://build.opensuse.org/project/show/openSUSE:Factory
    note: Built from open source packages whose sources are public on the Open Build Service.
  no_trackers:
    answer: partial
    evidence: https://www.opensuse.org/
    note: No telemetry in the distribution. The website uses self-hosted Matomo analytics.
  no_ads:
    answer: yes
    evidence: https://en.opensuse.org/Sponsors
    note: Funded by SUSE and other sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
