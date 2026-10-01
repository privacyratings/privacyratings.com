---
name: Pass
description: Command-line password manager that stores each password as a GPG-encrypted file in a folder, with optional git for history and syncing. Many third-party clients and extensions exist.
website: https://www.passwordstore.org
source: https://git.zx2c4.com/password-store
criteria:
  open_source:
    answer: yes
    evidence: https://git.zx2c4.com/password-store/tree/COPYING
    note: GPL-2.0.
  no_trackers:
    answer: no
    evidence: https://www.passwordstore.org/
    note: The pass tool has no telemetry, but the website loads Google Analytics and the Twitter widgets script.
  no_ads:
    answer: yes
    evidence: https://www.passwordstore.org/
    note: Free software with no ads, accounts or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_vault:
    answer: yes
    evidence: https://www.passwordstore.org/
    note: "Local-only: each password is a separate GPG-encrypted file, with no sync service."
  self_host_or_local:
    answer: yes
    evidence: https://www.passwordstore.org/
    note: Passwords are stored in a local folder that can be synced with any git server.
  export:
    answer: yes
    evidence: https://www.passwordstore.org/
    note: Passwords are ordinary GPG files in a folder that standard tools can read.
imported_from: awesome-privacy
---
