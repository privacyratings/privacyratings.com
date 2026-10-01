---
name: Thunderbird for Android
description: Open-source email app for Android from the Thunderbird project, based on K-9 Mail, which remains available as a variant. Works with any IMAP, POP3 and SMTP provider.
website: https://www.thunderbird.net/en-US/mobile/
source: https://github.com/thunderbird/thunderbird-android
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/thunderbird/thunderbird-android/blob/main/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://support.mozilla.org/en-US/kb/thunderbird-android-telemetry
    note: Collects no telemetry, and any future telemetry is opt-in. Exodus finds 0 trackers.
  no_ads:
    answer: yes
    evidence: https://www.thunderbird.net/en-US/mobile/
    note: Free app funded by donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: partial
    evidence: https://docs.k9mail.app/en/6.400/security/pgp/
    note: PGP needs the separate OpenKeychain app.
  no_cloud_relay:
    answer: yes
    evidence: https://www.mozilla.org/en-US/privacy/thunderbird/
    note: Connects directly to mail servers. Mail, contacts and account details stay on the device.
  remote_content_blocked:
    answer: yes
    evidence: https://docs.k9mail.app/en/6.400/settings/account/#always-show-images
    note: Images load only after tapping Show pictures unless the user changes this setting.
  any_provider:
    answer: yes
    evidence: https://docs.k9mail.app/en/6.400/accounts/incoming_imap/
    note: Works with any IMAP, POP3 and SMTP provider.
jurisdiction: US
imported_name: K-9 Mail
---
