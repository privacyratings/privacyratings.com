---
name: Gatus
description: >-
  Self-hosted health dashboard and status page configured with a single YAML file.
website: https://gatus.io
source: https://github.com/TwiN/gatus
license: Apache-2.0
platforms: [docker, linux]
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/TwiN/gatus/blob/master/LICENSE
    note: Apache-2.0.
  self_hosted:
    answer: yes
    evidence: https://github.com/TwiN/gatus#readme
  no_trackers:
    answer: yes
    evidence: https://github.com/TwiN/gatus
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/TwiN/gatus/blob/master/.github/FUNDING.yml
    note: Free software funded through GitHub Sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_visitor_tracking:
    answer: yes
    evidence: https://github.com/TwiN/gatus/blob/master/web/static/index.html
    note: The status page loads only its own scripts and styles.
  history:
    answer: yes
    evidence: https://status.twin.sh
    note: Status pages show uptime, response time charts and recent events.
---
