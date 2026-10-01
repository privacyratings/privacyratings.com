---
name: Statping-ng
description: Self-hosted status page and monitoring server written in Go, a community fork of Statping that supports MySQL, Postgres and SQLite.
website: https://statping-ng.github.io
source: https://github.com/statping-ng/statping-ng
platforms:
  - linux
  - windows
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/statping-ng/statping-ng/blob/dev/LICENSE
    note: GPL-3.0.
  self_hosted:
    answer: yes
    evidence: https://github.com/statping-ng/statping-ng#readme
    note: Runs on your own server or in Docker with no vendor account.
  no_trackers:
    answer: partial
    evidence: https://github.com/statping-ng/statping-ng/blob/dev/utils/log.go
    note: Error reports are sent to the project's Sentry server when enabled, and the setup form turns them on by default.
  no_ads:
    answer: yes
    evidence: https://github.com/statping-ng/statping-ng/blob/dev/LICENSE
    note: Free software with no ads or paid tier.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_visitor_tracking:
    answer: partial
    evidence: https://github.com/statping-ng/statping-ng/blob/dev/frontend/src/API.js
    note: The status page loads Sentry error reporting in visitors' browsers when error reports are enabled; it can be turned off in settings.
  history:
    answer: yes
    evidence: https://github.com/statping-ng/statping-ng/blob/dev/frontend/src/components/Index/IncidentsBlock.vue
    note: Status pages show response-time charts, uptime and incident updates for each service.
---
