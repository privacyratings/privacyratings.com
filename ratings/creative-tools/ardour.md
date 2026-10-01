---
name: Ardour
description: A digital audio workstation for recording, editing and mixing multi-track audio and MIDI on Windows, macOS and Linux.
website: https://ardour.org
source: https://github.com/Ardour/ardour
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Ardour/ardour/blob/master/COPYING
    note: GPL-2.0.
  no_trackers:
    answer: partial
    evidence: https://ardour.org/privacy.html
    note: Official builds contact ardour.org at startup to check for announcements, sending a hashed IP address, the operating system name and country. No third-party trackers.
  no_ads:
    answer: yes
    evidence: https://community.ardour.org/download
    note: Funded by payments and subscriptions for ready-to-run builds, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
