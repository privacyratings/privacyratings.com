---
name: Enpass
description: Closed source password manager from Enpass Technologies that stores encrypted vaults on the device and syncs them through the user's own cloud storage, such as iCloud, Dropbox, Google Drive, OneDrive or WebDAV.
website: https://www.enpass.io
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.enpass.io/privacy-notice/
    note: The privacy notice says the apps collect device and feature usage data, and the website uses Google Analytics and Clearbit.
  no_ads:
    answer: yes
    evidence: https://www.enpass.io/pricing/
    note: Funded by paid plans, and the privacy notice says Enpass never sells personal data.
  independent_audit:
    answer: no
    note: Holds ISO 27001 and SOC 2 Type II attestations, but no audit report is published.
  e2ee_vault:
    answer: yes
    evidence: https://www.enpass.io/security/
    note: Vaults are encrypted on the device with AES-256, and synced cloud storage only holds encrypted copies.
  self_host_or_local:
    answer: yes
    evidence: https://www.enpass.io/security/
    note: Vaults are stored on the device and optionally synced through the user's own cloud storage or WebDAV server.
  export:
    answer: yes
    evidence: https://help.enpass.io/personal/latest/all/importing-from-enpass
    note: Exports vaults to JSON. Passkeys cannot be exported.
---
