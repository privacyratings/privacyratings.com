---
name: Alpine Linux
description: Alpine is a security-oriented, lightweight distro based on musl libc and busybox. It compiles all user-space binaries as position-independent executables with stack-smashing protection.
website: https://www.alpinelinux.org
source: https://gitlab.alpinelinux.org/alpine/aports
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.alpinelinux.org/alpine/aports
    note: Built entirely from open source packages. Each package lists its license.
  no_trackers:
    answer: yes
    evidence: https://github.com/alpinelinux/aports
    note: No telemetry or analytics in the base system.
  no_ads:
    answer: yes
    evidence: https://www.alpinelinux.org/sponsors/
    note: Funded by sponsors and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
