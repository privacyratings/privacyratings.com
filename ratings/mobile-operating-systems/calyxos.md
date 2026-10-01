---
name: CalyxOS
description: An open source, de-Googled Android OS with optional microG, a built-in firewall and encrypted backups.
website: https://calyxos.org
source: https://gitlab.com/CalyxOS
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/CalyxOS
    note: Based on the Android Open Source Project, mostly Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://calyxos.org/docs/guide/security/network-activity/
    note: No analytics or telemetry. Default network connections are documented and limited to updates, connectivity checks and optional services.
  no_ads:
    answer: yes
    evidence: https://members.calyx.org/donate
    note: Developed by the non-profit Calyx Institute and funded by donations and memberships.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
jurisdiction: US
---
