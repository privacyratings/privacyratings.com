---
name: Portmaster
description: Application firewall for Windows and Linux that monitors and blocks network connections per app, with DNS filtering, tracker blocklists and an optional paid multi-hop network (SPN).
website: https://safing.io
source: https://github.com/safing/portmaster
jurisdiction: AT
platforms:
  - windows
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/safing/portmaster/blob/development/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://safing.io/privacy/
    note: No third-party trackers, and the app contacts Safing only for updates, support and SPN login. The website's self-hosted Plausible analytics are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://safing.io/pricing/
    note: Free core app funded by paid Plus and Pro plans, and the privacy policy states personal data is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
also_in:
  - windows-hardening
  - linux-hardening
---
