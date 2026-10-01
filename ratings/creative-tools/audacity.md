---
name: Audacity
description: A multi-track audio editor and recorder for Windows, macOS and Linux.
website: https://www.audacityteam.org
source: https://github.com/audacity/audacity
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/audacity/audacity/blob/master/LICENSE.txt
    note: GPL-3.0 and GPL-2.0.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_trackers:
    answer: partial
    evidence: https://www.audacityteam.org/legal/privacy-notice/
    note: The update check is on by default and can be turned off. Error reports and usage analytics are opt-in, and the website uses Matomo analytics.
  no_ads:
    answer: yes
    evidence: https://www.audacityteam.org/legal/privacy-notice/
    note: Free app with no ads. The privacy notice describes no advertising or sale of user data.
imported_from: awesome-privacy
jurisdiction: CY
---
