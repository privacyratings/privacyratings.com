---
name: Uptime Kuma
description: >-
  Self-hosted uptime monitor with status pages and dozens of notification options.
website: https://uptime.kuma.pet
source: https://github.com/louislam/uptime-kuma
license: MIT
platforms: [docker, linux, windows, macos]
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/louislam/uptime-kuma/blob/master/LICENSE
    note: MIT.
  self_hosted:
    answer: yes
    evidence: https://github.com/louislam/uptime-kuma#readme
  no_trackers:
    answer: yes
    evidence: https://github.com/louislam/uptime-kuma
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/louislam/uptime-kuma/blob/master/.github/FUNDING.yml
    note: Free software funded through GitHub Sponsors and Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_visitor_tracking:
    answer: yes
    evidence: https://github.com/louislam/uptime-kuma/blob/master/server/analytics/analytics.js
    note: Status pages load no analytics unless the owner configures Google Analytics, Umami, Plausible, Matomo or Rybbit.
  history:
    answer: yes
    evidence: https://github.com/louislam/uptime-kuma/blob/master/src/pages/StatusPage.vue
    note: Status pages show uptime bars and a past incidents section.
---
