---
name: Immich
description: Self-hosted photo and video backup and management server, with automatic mobile upload, timeline view, albums, search and facial recognition.
website: https://immich.app
source: https://github.com/immich-app/immich
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/immich-app/immich/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://immich.app/privacy-policy
    note: No third-party trackers in the apps, but the version check and map tile services send request metadata to Immich by default and can be turned off.
  no_ads:
    answer: yes
    evidence: https://buy.immich.app/
    note: Developed by a full-time team at FUTO and funded by optional product key purchases, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
