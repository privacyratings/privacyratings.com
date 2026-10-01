---
name: KeePassXC
description: Open source, offline password manager for Windows, macOS and Linux that stores passwords in an encrypted KeePass (KDBX) database file. It includes browser integration, TOTP, SSH agent and YubiKey support, with no built-in cloud sync.
website: https://keepassxc.org
source: https://github.com/keepassxreboot/keepassxc
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/keepassxreboot/keepassxc/blob/develop/COPYING
    note: GPL-2.0 or GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://keepassxc.org/privacy/
    note: The app sends no data unless the user requests it, but the website uses self-hosted Matomo and Cloudflare Web Analytics.
  no_ads:
    answer: yes
    evidence: https://keepassxc.org/donate/
    note: Volunteer project funded by donations, with no ads.
  independent_audit:
    answer: yes
    evidence: https://keepassxc.org/assets/pdf/Synacktiv-ANSSI-CSPN-KeePassXC-RTE-v1.3.pdf
    note: Synacktiv evaluated KeePassXC for the French ANSSI CSPN certification, and the full technical report is public.
  e2ee_vault:
    answer: yes
    evidence: https://keepassxc.org/privacy/
    note: "Local-only: the database is an encrypted file on the device, and no data is sent to the developers."
  self_host_or_local:
    answer: yes
    evidence: https://keepassxc.org/docs/KeePassXC_UserGuide
    note: The database is a local file.
  export:
    answer: yes
    evidence: https://keepassxc.org/docs/KeePassXC_UserGuide
    note: The database is a KDBX file, an open format read by many apps. CSV, XML and HTML exports are also available.
---
