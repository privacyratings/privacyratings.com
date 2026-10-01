---
name: Cal.diy
description: Self-hosted, MIT-licensed community edition of Cal.com for booking pages and calendar scheduling, with enterprise features such as teams, workflows and SSO removed. There is no hosted version.
website: https://github.com/calcom/cal.diy
source: https://github.com/calcom/cal.diy
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/calcom/cal.diy/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: partial
    evidence: https://github.com/calcom/cal.diy/blob/main/packages/lib/telemetry.ts
    note: Self-hosted instances send anonymous usage telemetry to Cal.com by default, which can be turned off with CALCOM_TELEMETRY_DISABLED=1.
  no_ads:
    answer: yes
    evidence: https://github.com/calcom/cal.diy
    note: Free, community-maintained open source software with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
