---
name: Strongbox
description: Open source password manager for iOS and macOS that works with KeePass (KDBX) and Password Safe databases stored locally, in iCloud or in other cloud storage. It supports AutoFill, TOTP, passkeys and YubiKey.
website: https://strongboxsafe.com
source: https://github.com/strongbox-password-safe/Strongbox
jurisdiction: GB
platforms:
  - ios
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/strongbox-password-safe/Strongbox/blob/master/LICENSE.md
    note: AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://strongboxsafe.com/privacy/
    note: The app uses no analytics providers, but the website uses Plausible analytics.
  no_ads:
    answer: yes
    evidence: https://strongboxsafe.com/pricing/
    note: Funded by paid Pro subscriptions and lifetime licenses, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_vault:
    answer: yes
    evidence: https://strongboxsafe.com/privacy/
    note: "Local-only: databases are encrypted KeePass or Password Safe files, and the developer has no sync service."
  self_host_or_local:
    answer: yes
    evidence: https://strongboxsafe.com/privacy/
    note: Databases are local files or files in the user's own cloud storage.
  export:
    answer: yes
    evidence: https://github.com/strongbox-password-safe/Strongbox/blob/master/README.md
    note: Databases are KDBX or Password Safe files, open formats read by many apps.
---
