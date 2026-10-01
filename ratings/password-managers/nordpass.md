---
name: NordPass
description: Closed source password manager from Nord Security, the company behind NordVPN, with desktop, mobile and browser apps. Vaults are encrypted on the device with XChaCha20 and synced through NordPass servers.
website: https://nordpass.com
domain: app.nordpass.com
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.nordpass.android.app.password.manager/latest/
    note: The Android app contains AppsFlyer, Google Firebase Analytics, Crashlytics and Sentry.
  no_ads:
    answer: yes
    evidence: https://business.nordsec.com/legal/privacy-policy
    note: Funded by subscriptions, and the privacy policy says Nord does not sell or share personal information.
  independent_audit:
    answer: partial
    evidence: https://nordpass.com/blog/nordpass-business-independent-security-audit/
    note: Cure53 audited the apps, but only a summary is public and it is older than three years.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee_vault:
    answer: yes
    evidence: https://nordpass.com/security/
    note: "Zero-knowledge design: vault data is encrypted on the device and NordPass cannot read it."
  self_host_or_local:
    answer: partial
    evidence: https://support.nordpass.com/hc/en-us/articles/360007646477-How-to-export-passwords-from-NordPass
    note: Vaults are stored only in the NordPass cloud. Data can be exported.
  export:
    answer: yes
    evidence: https://support.nordpass.com/hc/en-us/articles/360007646477-How-to-export-passwords-from-NordPass
    note: Exports vault items to a CSV file.
---
