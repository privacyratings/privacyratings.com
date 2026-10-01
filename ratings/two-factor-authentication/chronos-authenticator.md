---
name: Chronos Authenticator
description: Open source two-factor authentication app for iOS that supports TOTP and HOTP codes. Tokens are encrypted on the device, with optional encrypted iCloud sync and exports.
website: https://github.com/joeldavidw/Chronos
source: https://github.com/joeldavidw/Chronos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/joeldavidw/Chronos/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/joeldavidw/Chronos#features
    note: The project states the app has no telemetry and needs no account.
  no_ads:
    answer: yes
    evidence: https://github.com/joeldavidw/Chronos#readme
    note: Free open source app with no ads or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
