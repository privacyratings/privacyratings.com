---
name: Nine
description: Closed-source email and calendar app for Android and iOS built around Exchange ActiveSync, with email-only support for IMAP accounts.
website: https://www.9folders.com/en/
jurisdiction: KR
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.ninefolders.hd3/latest/
    note: Exodus finds Crashlytics, Firebase Analytics and OpenTelemetry in the Android app, and the website loads Google Analytics.
  no_ads:
    answer: yes
    evidence: https://www.9folders.com/privacy-policy/
    note: Funded by paid licenses. The privacy policy states user information is not sold, shared or rented.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: no
    note: PGP is not supported.
  no_cloud_relay:
    answer: yes
    evidence: https://www.9folders.com/privacy-policy/
    note: Connects directly to mail servers. Passwords and messages are stored only on the device.
  remote_content_blocked:
    answer: partial
    evidence: https://nextintelligence-ai.gitbook.io/9folders/nine/nine/documents/android-manual/settings/nine-settings
    note: Automatic loading of remote images can be turned off in settings.
  any_provider:
    answer: yes
    evidence: https://www.9folders.com/en/
    note: Works with Exchange ActiveSync servers and any IMAP provider, with IMAP limited to email.
---
