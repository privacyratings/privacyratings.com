---
name: Plane
description: Open source project management tool with issues, cycles, modules, pages and Kanban, list and Gantt views. Available as a hosted cloud service or a self-hosted Community Edition.
website: https://plane.so
source: https://github.com/makeplane/plane
jurisdiction: US
platforms:
  - web
  - windows
  - macos
  - android
  - ios
pick: 1
pick_reason: Open-source project management with issues, cycles, modules, pages and Kanban, list and Gantt views, as a replacement for Jira and Linear. The AGPL-3.0 Community Edition can be self-hosted, and its telemetry is opt-in.
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/makeplane/plane/blob/preview/LICENSE.txt
    note: The Community Edition is AGPL-3.0, but commercial editions add proprietary features that are not published.
  no_trackers:
    answer: no
    evidence: https://plane.so/legals/privacy-policy
    note: The website uses Google Tag Manager and analytics cookies. Telemetry in self-hosted instances is opt-in.
  no_ads:
    answer: yes
    evidence: https://plane.so/legals/privacy-policy
    note: Funded by paid plans. The privacy policy says personal information is not sold or shared for cross-context behavioral advertising.
  independent_audit:
    answer: partial
    evidence: https://plane.so/security
    note: States SOC 2 and ISO 27001 compliance, but the reports are only available on request.
---
