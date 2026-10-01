---
name: QEMU
description: Open source machine emulator and virtualizer. It emulates many CPU architectures and, with KVM, Xen, Hypervisor.framework or WHPX, runs virtual machines at near-native speed.
website: https://www.qemu.org
source: https://gitlab.com/qemu-project/qemu
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/qemu-project/qemu/-/blob/master/LICENSE
    note: GPL-2.0, with some parts under compatible licenses.
  no_trackers:
    answer: yes
    evidence: https://gitlab.com/qemu-project/qemu
    note: No telemetry or analytics in the source code, and no third-party trackers were found on the website.
  no_ads:
    answer: yes
    evidence: https://www.qemu.org/conservancy/
    note: Software Freedom Conservancy member project funded by donations and contributors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
jurisdiction: US
---
