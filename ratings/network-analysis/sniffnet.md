---
name: Sniffnet
description: Desktop application for monitoring network traffic, showing connections, hosts, applications and data usage in real time, with filters, charts and notifications.
website: https://sniffnet.app
source: https://github.com/GyulyVGC/sniffnet
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/GyulyVGC/sniffnet/blob/main/LICENSE-MIT
    note: Dual-licensed under MIT or Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/GyulyVGC/sniffnet
    note: No telemetry or analytics in the source code, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/GyulyVGC/sniffnet/blob/main/.github/FUNDING.yml
    note: Funded through GitHub Sponsors, Patreon and PayPal donations, with no ads.
  independent_audit:
    answer: yes
    evidence: https://github.com/GyulyVGC/sniffnet/blob/main/resources/audits/security_1.pdf
    note: Full audit report by Radically Open Security, funded through the NGI programme.
---
