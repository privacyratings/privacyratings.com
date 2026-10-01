---
name: KeePassDX
description: Open source password and passkey manager for Android that stores data in encrypted KeePass (KDB and KDBX) database files. It supports autofill, TOTP and biometric unlock, with no built-in cloud service.
website: https://www.keepassdx.com
source: https://github.com/Kunzisoft/KeePassDX
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Kunzisoft/KeePassDX/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.kunzisoft.keepass.libre/latest/
    note: Exodus Privacy finds no trackers in the app.
  no_ads:
    answer: yes
    evidence: https://github.com/Kunzisoft/KeePassDX/blob/master/README.md
    note: Funded by donations and an optional Pro version with visual styles, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_vault:
    answer: yes
    evidence: https://github.com/Kunzisoft/KeePassDX/blob/master/README.md
    note: "Local-only: databases are encrypted files using AES, Twofish or ChaCha20 with Argon2 key derivation."
  self_host_or_local:
    answer: yes
    evidence: https://github.com/Kunzisoft/KeePassDX/blob/master/README.md
    note: The database is a local file.
  export:
    answer: yes
    evidence: https://github.com/Kunzisoft/KeePassDX/blob/master/README.md
    note: The database is a KDBX file, an open format read by many apps.
---
