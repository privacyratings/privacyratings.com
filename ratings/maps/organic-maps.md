---
name: Organic Maps
description: Offline maps and navigation app built on OpenStreetMap data, run by Organic Maps OÜ in Estonia. Governance disputes among contributors led to the CoMaps fork.
website: https://organicmaps.app
source: https://github.com/organicmaps/organicmaps
jurisdiction: EE
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/organicmaps/organicmaps/blob/master/LICENSES/Apache-2.0.txt
    note: Apache-2.0.
  no_trackers:
    answer: partial
    evidence: https://organicmaps.app/privacy/
    note: The app collects no data and the Exodus report finds no trackers, but the website loads Cloudflare Web Analytics, a cookieless analytics service.
  no_ads:
    answer: yes
    evidence: https://organicmaps.app/donate/
    note: Funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
