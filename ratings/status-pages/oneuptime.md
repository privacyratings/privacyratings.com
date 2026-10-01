---
name: OneUptime
description: Open-source observability platform with uptime monitoring, status pages, incident management, on-call alerts, logs and traces, available as a hosted service or self-hosted.
website: https://oneuptime.com
source: https://github.com/OneUptime/oneuptime
jurisdiction: US
platforms:
  - web
  - linux
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/OneUptime/oneuptime/blob/master/LICENSE
    note: All code is public. Most is Apache-2.0, and the ee/ directory of enterprise features in the same repository uses a source-available proprietary license.
  self_hosted:
    answer: yes
    evidence: https://oneuptime.com/docs/en/installation/docker-compose
    note: Can be installed on your own server with Docker Compose or Helm, without a vendor account.
  no_trackers:
    answer: no
    note: The home page loads Google Tag Manager and PostHog.
  no_ads:
    answer: yes
    evidence: https://oneuptime.com/legal/privacy
    note: Funded by paid plans, and the privacy policy says personal information is not sold or shared for behavioral advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_visitor_tracking:
    answer: partial
    evidence: https://github.com/OneUptime/oneuptime/blob/master/config.example.env
    note: Hosted status pages on oneuptime.com load Google Tag Manager, while self-hosted installs never load it.
  history:
    answer: yes
    evidence: https://status.oneuptime.com
    note: Status pages show uptime history bars and past incidents.
---
