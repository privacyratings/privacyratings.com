---
name: Kodi
description: Open source media center for playing and organizing local and network video, music and photos, with a TV-friendly interface and add-ons. Developed by the non-profit Kodi Foundation.
website: https://kodi.tv
source: https://github.com/xbmc/xbmc
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/xbmc/xbmc/blob/master/LICENSE.md
    note: GPL-2.0-or-later.
  no_trackers:
    answer: partial
    evidence: https://kodi.tv/about/privacy-policy
    note: The website uses GoatCounter, a cookieless analytics service. Exodus finds 0 trackers in the Android app.
  no_ads:
    answer: yes
    evidence: https://kodi.tv/donate
    note: Developed by a non-profit foundation funded by donations and sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
