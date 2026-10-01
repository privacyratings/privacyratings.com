---
name: virt-manager
description: Desktop app for managing virtual machines through libvirt, mainly KVM guests, with Xen and LXC support. It includes creation wizards, performance statistics and a built-in VNC and SPICE console.
website: https://virt-manager.org
source: https://github.com/virt-manager/virt-manager
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/virt-manager/virt-manager/blob/main/COPYING
    note: GPL-2.0-or-later.
  no_trackers:
    answer: yes
    evidence: https://github.com/virt-manager/virt-manager
    note: No telemetry or analytics in the source code, and no third-party trackers were found on the website.
  no_ads:
    answer: yes
    evidence: https://virt-manager.org
    note: Free open source project distributed through operating system repositories, with no ads or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
