---
name: LibrePhotos
description: Self-hosted photo and video management server with a web interface, timeline view, multiple users, face recognition, object and scene detection, semantic search and automatically generated event albums.
website: https://github.com/LibrePhotos/librephotos
source: https://github.com/LibrePhotos/librephotos
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/LibrePhotos/librephotos/blob/dev/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/LibrePhotos/librephotos
    note: No telemetry or analytics in the source code. Reverse geocoding uses an external map service that can be configured.
  no_ads:
    answer: yes
    evidence: https://github.com/LibrePhotos/librephotos#readme
    note: Volunteer project funded by donations through GitHub Sponsors and PayPal, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
