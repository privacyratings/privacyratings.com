---
name: Keeper
description: Closed source password manager from Keeper Security with apps for desktop, mobile and browsers. Records are encrypted on the device with per-record keys, and the company also sells secrets and privileged access management for businesses.
website: https://www.keepersecurity.com
jurisdiction: US
domain: keepersecurity.com
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.keepersecurity.com/legal/terms-of-use/?s=privacy
    note: The apps have no known trackers, but the website loads Google Analytics, Google Tag Manager, Facebook, Bing and LinkedIn tracking.
  no_ads:
    answer: yes
    evidence: https://www.keepersecurity.com/pricing/personal-and-family.html
    note: Funded by subscriptions, and the privacy policy says Keeper does not sell or share personal information.
  independent_audit:
    answer: no
    note: Third-party penetration tests are described, but no audit report is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee_vault:
    answer: yes
    evidence: https://docs.keeper.io/enterprise-guide/keeper-encryption-model
    note: Records are encrypted on the device with AES-256 keys that Keeper does not hold.
  self_host_or_local:
    answer: partial
    evidence: https://docs.keeper.io/user-guides/export-and-reports/vault-export
    note: Vaults are stored only in the Keeper cloud. Data can be exported.
  export:
    answer: yes
    evidence: https://docs.keeper.io/user-guides/export-and-reports/vault-export
    note: Exports to CSV, JSON, PDF and encrypted KeePass files.
---
