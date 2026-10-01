---
name: JShelter
description: Browser extension that limits what JavaScript on web pages can access, such as precise geolocation, timing and fingerprinting-prone APIs, and warns about sites that try to fingerprint the browser.
website: https://jshelter.org
source: https://pagure.io/JShelter/webextension
criteria:
  open_source:
    answer: yes
    evidence: https://jshelter.org/license/
    note: GPL-3.0-or-later.
  no_trackers:
    answer: yes
    evidence: https://jshelter.org/permissions/
    note: Configuration is stored in the browser and no data is uploaded to the project's servers.
  no_ads:
    answer: yes
    evidence: https://jshelter.org/
    note: Funded by NLnet NGI Zero grants from the European Commission, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
