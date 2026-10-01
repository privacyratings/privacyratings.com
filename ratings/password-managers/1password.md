---
name: 1Password
description: Closed source password manager from AgileBits with end-to-end encrypted sync across desktop, mobile, browser and command-line apps.
website: https://1password.com
mainstream: true
jurisdiction: CA
domain: 1password.com
imported_from: awesome-privacy
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://1password.com/legal/privacy
    note: The privacy policy says 1Password and its marketing partners use cookies and tracking technologies on its websites and products for analytics and advertising.
  no_ads:
    answer: partial
    evidence: https://1password.com/legal/privacy
    note: Funded by subscriptions, but the privacy policy says data shared with marketing partners may count as a sale or sharing of personal information.
  independent_audit:
    answer: partial
    evidence: https://support.1password.com/security-assessments/
    note: Recent penetration test reports are only available through the 1Password Trust Center. The public full reports are older than three years.
  transparency_report:
    answer: partial
    evidence: https://1password.com/legal/law-enforcement
    note: Publishes government request guidelines but no request counts.
  user_notice:
    answer: yes
    evidence: https://1password.com/legal/law-enforcement
    note: Seeks to notify users before disclosing data unless prohibited by law or where there is risk of harm.
  e2ee_vault:
    answer: yes
    evidence: https://support.1password.com/1password-security/
    note: Vault data is end-to-end encrypted with keys derived from the account password and Secret Key.
  self_host_or_local:
    answer: partial
    evidence: https://support.1password.com/export/
    note: Vaults are stored only in the 1Password cloud. Data can be exported.
  export:
    answer: yes
    evidence: https://support.1password.com/export/
    note: Full export to the JSON-based 1PUX format, or CSV for logins and passwords.
---
