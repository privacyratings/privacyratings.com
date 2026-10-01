---
name: Authenticator CC
description: Open source browser extension for Chrome, Firefox and Edge that generates TOTP and HOTP codes. Accounts can be encrypted with a password and backed up to a file or the user's cloud storage.
website: https://authenticator.cc
source: https://github.com/Authenticator-Extension/Authenticator
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Authenticator-Extension/Authenticator/blob/dev/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/Authenticator-Extension/Authenticator/blob/dev/package.json
    note: No telemetry or analytics in the source code, and data stays in browser storage unless cloud backup is turned on.
  no_ads:
    answer: yes
    evidence: https://github.com/Authenticator-Extension/Authenticator
    note: Free open source project with no ads or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
