---
name: Nura
description: Linux distribution for phones and other mobile devices, formerly named postmarketOS, based on Alpine Linux and aiming to keep devices usable long after vendor support ends, with a choice of mobile interfaces.
website: https://nura.eco
aliases:
  - postmarketOS
source: https://gitlab.postmarketos.org/postmarketOS
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.postmarketos.org/postmarketOS/pmaports/-/blob/main/LICENSE
    note: GPL-3.0 for the project's packaging and tools, on top of open source Alpine Linux packages; some devices need proprietary firmware.
  no_trackers:
    answer: yes
    evidence: https://nura.eco/privacy-policy/
    note: No telemetry in the system, and the privacy policy states the website processes no personal data and uses no cookies.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/postmarketOS
    note: Community project funded by donations through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
