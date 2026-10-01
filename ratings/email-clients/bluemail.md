---
name: BlueMail
description: Closed-source email client for Android, iOS, Windows, macOS and Linux that works with IMAP, POP3 and Exchange accounts, with a unified inbox, PGP and S/MIME encryption and optional AI features.
website: https://bluemail.me
jurisdiction: US
platforms:
  - android
  - ios
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/me.bluemail.mail/latest/
    note: Exodus finds Google AdMob, Crashlytics and Firebase Analytics in the Android app, and the privacy policy lists Google Analytics cookies.
  no_ads:
    answer: yes
    evidence: https://bluemail.me/privacy/
    note: Funded by paid plans. The privacy policy states that user data is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: yes
    evidence: https://bluemail.me/help/pgp-keys/
    note: PGP and S/MIME are built in on all platforms.
  no_cloud_relay:
    answer: partial
    evidence: https://bluemail.me/privacy/
    note: Desktop apps connect directly to mail servers, but instant push on mobile processes OAuth tokens or credentials and incoming mail through a Blix push proxy.
  remote_content_blocked:
    answer: partial
    evidence: https://bluemail.me/help/disable-images/
    note: Remote images can be blocked in settings.
  any_provider:
    answer: yes
    evidence: https://bluemail.me/help/imap-pop3-provider-support-bluemail/
    note: Works with any IMAP or POP3 provider, plus Exchange accounts.
---
