---
name: Audiobookshelf
description: Self-hosted audiobook and podcast server with a web player and mobile apps, supporting multiple users, progress sync across devices, podcast downloads and offline listening.
website: https://audiobookshelf.org
source: https://github.com/advplyr/audiobookshelf
platforms:
  - windows
  - linux
  - android
  - ios
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/advplyr/audiobookshelf/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://audiobookshelf.org/privacy-policy/
    note: The privacy policy states no personal data is collected, the Android app has no trackers per Exodus Privacy, and the website loads no analytics.
  no_ads:
    answer: yes
    evidence: https://audiobookshelf.org/privacy-policy/
    note: Free volunteer project with no ads or paid tiers, and no personal data collected.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
