---
name: Aseprite
description: An animated sprite editor and pixel art tool for Windows, macOS and Linux.
website: https://www.aseprite.org
source: https://github.com/aseprite/aseprite
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/aseprite/aseprite/blob/main/EULA.txt
    note: Source available under a EULA that limits redistribution. Not an OSI license.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_trackers:
    answer: no
    evidence: https://github.com/aseprite/aseprite/blob/main/src/app/check_update.cpp
    note: Official builds send a persistent ID and launch and exit counts to the vendor's update server, with no setting to turn this off. Crash reports are only sent with consent.
  no_ads:
    answer: yes
    evidence: https://www.aseprite.org/privacy/
    note: Paid software with no ads. The privacy policy states that user data is not sold or given to other companies.
imported_from: awesome-privacy
jurisdiction: AR
---
