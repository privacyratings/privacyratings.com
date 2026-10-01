---
name: Xen Project
description: Open source type-1 hypervisor that runs directly on hardware and hosts multiple isolated operating systems side by side. Used in servers, cloud platforms, embedded systems and Qubes OS.
website: https://xenproject.org
source: https://xenbits.xen.org/gitweb/?p=xen.git;a=summary
criteria:
  open_source:
    answer: yes
    evidence: https://xenbits.xen.org/gitweb/?p=xen.git;a=blob;f=COPYING
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://xenbits.xen.org/gitweb/?p=xen.git;a=summary
    note: No telemetry or analytics in the source code, and no third-party trackers were found on the website.
  no_ads:
    answer: yes
    evidence: https://xenproject.org/about/
    note: Linux Foundation project funded by member organizations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
jurisdiction: US
---
