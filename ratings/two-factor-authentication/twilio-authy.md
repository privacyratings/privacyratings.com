---
name: Twilio Authy
description: Two-factor authentication app from Twilio that generates one-time codes and supports push approvals, with encrypted cloud backups tied to a phone number. Available for Android and iOS.
website: https://www.authy.com
family: twilio
aliases:
  - Authy
mainstream: true
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.authy.authy/latest/
    note: The Exodus report finds Google Crashlytics and Google Firebase Analytics in the Android app, and the website loads Google Tag Manager, Segment and VWO.
  no_ads:
    answer: yes
    evidence: https://www.twilio.com/en-us/legal/privacy
    note: Free app with no ads, run by a paid communications platform. Twilio's privacy notice states it does not sell data to third parties.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
