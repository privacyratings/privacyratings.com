---
name: Apple Passwords
description: Apple's password manager, built into iOS, iPadOS and macOS as the Passwords app and synced through iCloud Keychain. It stores passwords, passkeys and verification codes, with an iCloud app for Windows.
website: https://support.apple.com/guide/passwords/welcome/mac
family: apple
aliases:
  - iCloud Keychain
mainstream: true
jurisdiction: US
domain: www.icloud.com
platforms:
  - ios
  - macos
  - windows
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/device-analytics/
    note: Device analytics are shared with Apple only with consent, but Apple's websites load first-party analytics by default.
  no_ads:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/en-ww/
    note: The Passwords app has no ads, and Apple states it does not sell or share personal data.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://www.apple.com/legal/transparency/
    note: Apple publishes government request counts and outcomes twice a year.
  user_notice:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/law-enforcement-guidelines-us.pdf
    note: Apple notifies customers when their account information is sought, unless notice is prohibited or in emergencies.
  e2ee_vault:
    answer: yes
    evidence: https://support.apple.com/en-us/102651
    note: Passwords and Keychain are always end-to-end encrypted, and Apple does not have the keys.
  self_host_or_local:
    answer: partial
    evidence: https://support.apple.com/guide/passwords/export-passwords-mchl35b12625/mac
    note: Passwords can stay on one device without iCloud sync, but there is no file or self-hosted option. Data can be exported.
  export:
    answer: partial
    evidence: https://support.apple.com/guide/passwords/export-passwords-mchl35b12625/mac
    note: Passwords can be exported to a CSV file on a Mac. No export is documented for passkeys.
---
