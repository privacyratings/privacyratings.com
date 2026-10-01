---
name: FreeBSD
description: A Unix-like operating system descended from BSD, developed as a complete system of kernel and userland, with ZFS, jails and the bhyve hypervisor.
website: https://www.freebsd.org
source: https://cgit.freebsd.org/src
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://www.freebsd.org/copyright/freebsd-license/
    note: BSD-2-Clause for the base system, with some components under other open source licenses.
  no_trackers:
    answer: partial
    evidence: https://www.freebsd.org/privacy/
    note: No telemetry in the operating system. The website uses Plausible analytics.
  no_ads:
    answer: yes
    evidence: https://freebsdfoundation.org/donate-to-freebsd-foundation/
    note: Funded by donations to the FreeBSD Foundation, with no ads.
  independent_audit:
    answer: yes
    evidence: https://freebsdfoundation.org/wp-content/uploads/2024/11/2024_Code_Audit_Capsicum_Bhyve_FreeBSD_Foundation.pdf
    note: Synacktiv audited the bhyve hypervisor and the Capsicum sandbox, and the full report is published.
---
