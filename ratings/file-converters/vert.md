---
name: VERT
description: Web-based file converter for images, audio and documents that runs locally in the browser using WebAssembly. Video conversions are processed on the VERT server, and the app can be self-hosted.
website: https://vert.sh
source: https://github.com/VERT-sh/VERT
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/VERT-sh/VERT/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://vert.sh/privacy/
    note: No third-party trackers or cookies. Self-hosted Plausible analytics are cookieless and aggregate-only, and can be turned off in settings.
  no_ads:
    answer: yes
    evidence: https://vert.sh/about/
    note: Funded by donations, with no ads. The privacy policy states no data about users is collected or stored.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
