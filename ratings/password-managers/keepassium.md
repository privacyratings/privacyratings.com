---
name: KeePassium
description: Open source KeePass-compatible password manager for iOS and macOS from KeePassium Labs. It opens KDBX databases stored locally or in any Files app provider, with AutoFill, TOTP and YubiKey support.
website: https://keepassium.com
source: https://github.com/keepassium/KeePassium
jurisdiction: LU
platforms:
  - ios
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/keepassium/KeePassium/blob/master/LICENSE.txt
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://keepassium.com/privacy/app/
    note: No third-party trackers, and the app sends no personal data. The website's Plausible analytics are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://keepassium.com/pricing/
    note: Funded by paid Premium and Pro licenses, with no ads.
  independent_audit:
    answer: yes
    evidence: https://keepassium.com/audit/2024-10-Cure53.pdf
    note: Cure53 audited the app with full source access, and the full report is public.
  e2ee_vault:
    answer: yes
    evidence: https://keepassium.com/privacy/app/
    note: "Local-only: databases are encrypted KeePass files, and the app sends no data to the developer."
  self_host_or_local:
    answer: yes
    evidence: https://keepassium.com/
    note: Databases are local files or files in the user's own cloud storage.
  export:
    answer: yes
    evidence: https://support.keepassium.com/kb/compatible-apps/
    note: The database is a KDBX file, an open format read by many apps.
---
