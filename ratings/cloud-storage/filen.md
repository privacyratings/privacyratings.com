---
name: Filen
description: End-to-end encrypted cloud storage from Germany, with open source web, desktop, mobile and CLI clients. Offers a free tier and paid plans.
website: https://filen.io
source: https://github.com/FilenCloudDienste/filen-desktop
domain: filen.io
imported_from: awesome-privacy
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/FilenCloudDienste/filen-desktop/blob/main/LICENSE
    note: Apps are open source. The server is not.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/io.filen.app/latest/
    note: Exodus finds no trackers in the Android app, and the website uses self-hosted Plausible analytics.
  no_ads:
    answer: yes
    evidence: https://filen.io/pricing
    note: Funded by paid storage plans, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://filen.io/warrant-canary
    note: Publishes a signed warrant canary, but no request counts.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
jurisdiction: DE
imported_name: FileN
---
