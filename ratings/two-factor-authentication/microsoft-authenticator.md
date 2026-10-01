---
name: Microsoft Authenticator
description: Authenticator app from Microsoft that generates one-time codes for any account and supports push approval, passwordless and passkey sign-in for Microsoft and Entra ID accounts.
website: https://www.microsoft.com/en-us/security/mobile-authenticator-app
family: microsoft
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.azure.authenticator/latest/
    note: The Exodus report finds Google Analytics, Google Firebase Analytics and Microsoft App Center Analytics in the Android app.
  no_ads:
    answer: yes
    evidence: https://play.google.com/store/apps/datasafety?id=com.azure.authenticator
    note: Free app with no ads. The Play data safety listing declares data use only for app functionality and security, not advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
