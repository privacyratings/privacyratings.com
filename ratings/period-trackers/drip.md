---
name: drip.
description: Open source menstrual cycle tracker for Android and iOS that supports the symptothermal method and keeps all data on the device.
website: https://dripapp.org
source: https://gitlab.com/bloodyhealth/drip
jurisdiction: DE
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/bloodyhealth/drip/-/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://dripapp.org/privacy-policy.html
    note: The privacy policy states there is no tracking and no usage data is collected, and the Exodus report finds no trackers in the Android app.
  no_ads:
    answer: yes
    evidence: https://dripapp.org/privacy-policy.html
    note: Free app with no ads, developed by the nonprofit Heart of Code and funded by grants such as the Prototype Fund.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_storage:
    answer: yes
    evidence: https://dripapp.org/privacy-policy.html
    note: All data is stored only on the device.
  no_account_needed:
    answer: yes
    evidence: https://dripapp.org/privacy-policy.html
    note: No account needed.
---
