---
name: Tuta Calendar
description: End-to-end encrypted calendar from Tuta, available as a standalone Android and iOS app and in Tuta's web and desktop clients. Events, invitations and shared calendars are encrypted.
website: https://tuta.com/calendar
source: https://github.com/tutao/tutanota
jurisdiction: DE
platforms:
  - android
  - ios
  - web
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/tutao/tutanota/blob/master/LICENSE.txt
    note: Apps are open source under GPL-3.0. The server is not.
  no_trackers:
    answer: yes
    evidence: https://tuta.com/privacy-policy
    note: No third-party analysis tools. Anonymized usage statistics are collected only with prior consent, and Exodus finds no trackers in the Android app.
  no_ads:
    answer: yes
    evidence: https://tuta.com/pricing
    note: Funded by paid plans. No ads on any plan, including the free plan.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
