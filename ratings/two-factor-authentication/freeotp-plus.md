---
name: FreeOTP+
description: Open source fork of FreeOTP for Android that adds backup export and import, search, categories, biometric lock and offline token icons. Generates HOTP and TOTP codes.
website: https://github.com/helloworld1/FreeOTPPlus
source: https://github.com/helloworld1/FreeOTPPlus
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/helloworld1/FreeOTPPlus/blob/master/COPYING
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/org.liberty.android.freeotpplus/latest/
    note: The Exodus report finds no trackers.
  no_ads:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/org.liberty.android.freeotpplus/latest/
    note: Free open source app with no ads; the Exodus report finds no advertising libraries.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
