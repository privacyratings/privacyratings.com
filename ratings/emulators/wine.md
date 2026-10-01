---
name: Wine
description: Open source compatibility layer that runs Windows applications on Linux, macOS and other Unix-like systems.
website: https://www.winehq.org
source: https://gitlab.winehq.org/wine/wine
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.winehq.org/wine/wine/-/blob/master/LICENSE
    note: LGPL-2.1-or-later.
  no_trackers:
    answer: no
    evidence: https://gitlab.winehq.org/winehq/winehq/-/wikis/Privacy-Policy
    note: The WineHQ privacy policy states that the website uses Google Analytics.
  no_ads:
    answer: yes
    evidence: https://gitlab.winehq.org/winehq/winehq/-/wikis/Privacy-Policy
    note: Funded by donations and sponsors with no ads, and the privacy policy says user information is not given to third parties.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
