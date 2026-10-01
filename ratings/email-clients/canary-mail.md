---
name: Canary Mail
description: Email app for macOS, iOS, Android and Windows with built-in PGP encryption, tracker blocking and AI features.
website: https://canarymail.io
jurisdiction: SG
platforms:
  - macos
  - ios
  - android
  - windows
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/io.canarymail.android/latest/
    note: Exodus finds Facebook Analytics, Firebase Analytics and Crashlytics in the Android app, and the website uses Google Tag Manager and HubSpot.
  no_ads:
    answer: yes
    evidence: https://canarymail.io/pricing
    note: Funded by paid plans. The app shows no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: yes
    evidence: https://canarymail.io/faq
    note: PGP is built into all apps, with key generation and management. Encryption requires the Pro+ plan.
  no_cloud_relay:
    answer: partial
    evidence: https://canarymail.io/privacy
    note: Mail and credentials stay on the device, but push notifications on mobile and Cloud Sync store credentials and message details on Canary servers.
  remote_content_blocked:
    answer: partial
    evidence: https://canarymail.io/features/security
    note: Tracking pixels are blocked by default, but other remote images still load.
  any_provider:
    answer: yes
    evidence: https://canarymail.io/help/whats-new
    note: Works with any IMAP and SMTP provider, plus Gmail, Outlook and Exchange accounts.
---
