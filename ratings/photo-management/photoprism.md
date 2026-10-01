---
name: PhotoPrism
description: Self-hosted photo management app with a web interface that indexes a photo library and adds automatic tagging, face recognition, maps and search. A free Community Edition is available, with paid memberships adding extra features.
website: https://www.photoprism.app
source: https://github.com/photoprism/photoprism
jurisdiction: DE
platforms:
  - windows
  - macos
  - linux
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/photoprism/photoprism/blob/develop/LICENSE
    note: The Community Edition is AGPL-3.0, but features in the paid editions are unpublished and under a separate commercial license.
  no_trackers:
    answer: partial
    evidence: https://www.photoprism.app/privacy/
    note: No third-party trackers, but the website and backend services record requests with self-hosted Plausible Analytics.
  no_ads:
    answer: yes
    evidence: https://www.photoprism.app/editions/
    note: Funded by paid memberships, with no ads. The privacy policy states data is never sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
