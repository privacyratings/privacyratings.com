---
name: Permission Slip
description: Mobile app, created by Consumer Reports and now run by DeleteMe, that sends opt-out and deletion requests to companies and data brokers on the user's behalf. Basic requests are free, and a paid tier adds automated data broker removals.
website: https://joindeleteme.com/permission-slip/
jurisdiction: US
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://play.google.com/store/apps/datasafety?id=org.consumerreports.permissionslip.production
    note: The Play data safety listing declares required collection of app interactions, crash logs and device IDs for analytics, and the website loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://privacy.joindeleteme.com/policies?name=terms-of-service
    note: Funded by subscriptions, with no ads in the app. DeleteMe's terms state it will never sell the personal information users submit.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
