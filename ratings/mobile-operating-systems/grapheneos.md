---
name: GrapheneOS
description: A privacy and security focused mobile operating system with Android app compatibility, developed as a non-profit open source project for Google Pixel devices.
website: https://grapheneos.org
source: https://github.com/GrapheneOS
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://grapheneos.org/faq#copyright-and-licensing
    note: Released under OSI-approved licenses, inherited from upstream projects or MIT for its own projects.
  no_trackers:
    answer: yes
    evidence: https://grapheneos.org/faq#default-connections
    note: No analytics or telemetry. Default connections are limited to GrapheneOS update and service servers.
  no_ads:
    answer: yes
    evidence: https://grapheneos.org/donate
    note: Funded by donations to the non-profit GrapheneOS Foundation.
  independent_audit:
    answer: no
    note: No independent audit report is published. The project relies on continuous public code review.
pick: 1
pick_reason: Hardened Android for Pixel phones with no Google services by default, sandboxed Google Play only if you choose it, and no analytics or telemetry. Open source and funded by donations.
---
