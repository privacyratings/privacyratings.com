---
name: LastPass
description: Closed source password manager from LastPass US LP with browser extensions, desktop and mobile apps. Vaults are encrypted on the device, and a past breach exposed copies of customer vault backups that also held unencrypted website URLs.
website: https://www.lastpass.com
mainstream: true
jurisdiction: US
domain: lastpass.com
platforms:
  - windows
  - macos
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.lastpass.lpandroid/latest/
    note: The Android app contains Google Firebase Analytics, Crashlytics, Pendo and Segment, and the website loads Google Tag Manager.
  no_ads:
    answer: partial
    evidence: https://www.lastpass.com/legal-center/privacy-notice
    note: Funded by subscriptions, but the privacy notice says third-party cookies for personalized advertising may count as a sale or sharing of personal data.
  independent_audit:
    answer: no
    note: No independent audit report is published.
  transparency_report:
    answer: partial
    evidence: https://www.lastpass.com/legal-center/law-enforcement-request-guidelines
    note: Publishes law enforcement request guidelines but no request counts.
  user_notice:
    answer: yes
    evidence: https://www.lastpass.com/legal-center/law-enforcement-request-guidelines
    note: Notifies customers before disclosing data unless legally prohibited or there is a risk of harm.
  e2ee_vault:
    answer: yes
    evidence: https://www.lastpass.com/security/zero-knowledge-security
    note: Vault data is encrypted on the device with a key derived from the master password. Stolen vault backups included unencrypted website URLs.
  self_host_or_local:
    answer: partial
    evidence: https://github.com/lastpass/lastpass-cli/blob/master/lpass.1.txt
    note: Vaults are stored only in the LastPass cloud. Data can be exported.
  export:
    answer: partial
    evidence: https://github.com/lastpass/lastpass-cli/blob/master/lpass.1.txt
    note: Exports vault items to unencrypted CSV, without attachments.
---
