---
name: secureblue
description: Hardened images of Fedora Atomic desktops and servers, with a hardened memory allocator and hardened kernel and system settings.
website: https://secureblue.dev
source: https://github.com/secureblue/secureblue
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/secureblue/secureblue/blob/live/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/secureblue/secureblue/blob/live/files/system/usr/lib/systemd/system-preset/40-secureblue.preset
    note: No trackers on the website, and Fedora's count-me reporting is disabled by default.
  no_ads:
    answer: yes
    evidence: https://secureblue.dev/donate
    note: Volunteer project funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
