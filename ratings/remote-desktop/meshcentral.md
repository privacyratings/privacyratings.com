---
name: MeshCentral
description: Self-hosted web server for remote device management, offering remote desktop, terminal and file access to Windows, Linux, macOS and FreeBSD machines through an installed agent.
website: https://meshcentral.com
source: https://github.com/Ylianst/MeshCentral
platforms:
  - windows
  - macos
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Ylianst/MeshCentral/blob/master/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/Ylianst/MeshCentral
    note: No telemetry or analytics in the source code, and the website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/Ylianst/MeshCentral
    note: Free community project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
