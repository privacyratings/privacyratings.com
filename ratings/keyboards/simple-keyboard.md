---
name: Simple Keyboard
description: Minimal open source keyboard for Android with a number row, adjustable height, custom colors and cursor movement by swiping the space bar, requesting only the vibrate permission.
website: https://github.com/rkkr/simple-keyboard
platforms:
  - android
source: https://github.com/rkkr/simple-keyboard
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/rkkr/simple-keyboard/blob/master/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/rkr.simplekeyboard.inputmethod/latest/
    note: Exodus found no trackers, and the app has no network permission.
  no_ads:
    answer: yes
    evidence: https://github.com/rkkr/simple-keyboard
    note: Free volunteer project that states it is ad-free.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://github.com/rkkr/simple-keyboard/blob/master/app/src/main/AndroidManifest.xml
    note: The app requests only the vibrate permission and has no internet access.
---
