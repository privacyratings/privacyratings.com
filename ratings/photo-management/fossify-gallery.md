---
name: Fossify Gallery
description: Offline photo and video gallery for Android with albums, a basic photo editor, EXIF metadata removal and hidden folders. It does not request internet access.
website: https://www.fossify.org/apps/gallery/
family: fossify
source: https://github.com/FossifyOrg/Gallery
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/FossifyOrg/Gallery/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://www.fossify.org/policy/gallery.html
    note: The app has no internet permission and no trackers, and the website loads no analytics or third-party scripts.
  no_ads:
    answer: yes
    evidence: https://www.fossify.org/donate/
    note: Funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
