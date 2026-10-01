---
name: Arch Linux
description: A minimal, rolling-release Linux distribution for x86-64 that users configure themselves, using the pacman package manager and the community Arch User Repository.
website: https://archlinux.org
source: https://gitlab.archlinux.org/archlinux
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.archlinux.org/pacman/pacman/-/blob/master/COPYING
    note: Built from open source packages; pacman is GPL-2.0 or later. The repositories also carry some proprietary drivers.
  no_trackers:
    answer: yes
    evidence: https://wiki.archlinux.org/title/Pkgstats
    note: No trackers on the website and no telemetry by default. Package statistics are only sent if the optional pkgstats package is installed.
  no_ads:
    answer: yes
    evidence: https://archlinux.org/donate/
    note: Funded by donations through Software in the Public Interest and sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
