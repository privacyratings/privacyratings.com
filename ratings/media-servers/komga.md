---
name: Komga
description: Self-hosted media server for comics, manga, magazines and eBooks, with a web reader, OPDS and Kobo sync support, multiple users and a REST API used by third-party reader apps.
website: https://komga.org
source: https://github.com/gotson/komga
platforms:
  - windows
  - macos
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/gotson/komga/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://komga.org/
    note: No third-party trackers, and the server has no telemetry. The website's Cloudflare Web Analytics are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/komga
    note: Funded by donations through Open Collective and GitHub Sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
