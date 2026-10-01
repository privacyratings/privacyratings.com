---
name: FUTO Keyboard
description: Android keyboard with on-device word prediction, swipe typing and offline voice input, built without network access.
website: https://keyboard.futo.tech
source: https://gitlab.futo.org/keyboard/latinime
jurisdiction: US
platforms:
  - android
criteria:
  open_source:
    answer: partial
    evidence: https://gitlab.futo.org/keyboard/latinime/-/blob/master/LICENSE.md
    note: Source is public under the FUTO Source First License, which is not OSI-approved and limits commercial modification.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/org.futo.inputmethod.latin.playstore/latest/
    note: Exodus found no trackers, and the app has no network permission.
  no_ads:
    answer: yes
    evidence: https://keyboard.futo.tech/
    note: Funded by optional one-time license payments and by FUTO, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://keyboard.futo.tech/privacy
    note: The app does not request the network permission; dictionary and model downloads open in the browser.
---
