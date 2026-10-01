---
name: Healthchecks.io
description: Cron job and scheduled task monitoring service that alerts when expected pings stop arriving, with public status badges. The software is open source and can be self-hosted.
website: https://healthchecks.io
source: https://github.com/healthchecks/healthchecks
jurisdiction: LV
platforms:
  - web
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/healthchecks/healthchecks/blob/master/LICENSE
    note: BSD-3-Clause.
  self_hosted:
    answer: yes
    evidence: https://healthchecks.io/docs/self_hosted/
    note: The open-source Django app can run on your own server without a vendor account.
  no_trackers:
    answer: yes
    evidence: https://github.com/healthchecks/healthchecks
    note: No telemetry or analytics in the source code, and the privacy policy lists no third-party analytics.
  no_ads:
    answer: yes
    evidence: https://healthchecks.io/pricing/
    note: Funded by paid plans. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_visitor_tracking:
    answer: yes
    evidence: https://healthchecks.io/docs/badges/
    note: Public status badges are plain images with no third-party trackers.
  history:
    answer: partial
    evidence: https://healthchecks.io/docs/badges/
    note: Public badges show only current status; ping history is visible only inside the account.
---
