---
name: Google Password Manager
description: Password manager built into Chrome, Android and the Google account that saves and syncs passwords and passkeys. Passwords are readable by Google unless on-device encryption is turned on.
website: https://passwords.google
mainstream: true
jurisdiction: US
domain: passwords.google.com
platforms:
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source. Chrome's password code is in Chromium, but the Android service and sync servers are not open.
  no_trackers:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Google collects activity and device data for analytics and advertising across its services.
  no_ads:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Google is funded mainly by advertising, and its privacy policy covers using account activity for personalized ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://transparencyreport.google.com/user-data/overview
    note: Google publishes government request counts and outcomes twice a year.
  user_notice:
    answer: yes
    evidence: https://policies.google.com/terms/information-requests
    note: Google emails users before disclosing data to a government agency unless legally prohibited or in emergencies.
  e2ee_vault:
    answer: no
    evidence: https://support.google.com/accounts/answer/11350823?hl=en
    note: By default the encryption key is stored in the Google account and Google can decrypt passwords. Optional on-device encryption keeps the key with the user.
  self_host_or_local:
    answer: partial
    evidence: https://support.google.com/chrome/answer/95606?hl=en
    note: Passwords are stored only in the Google account. Data can be exported.
  export:
    answer: partial
    evidence: https://support.google.com/chrome/answer/95606?hl=en
    note: Passwords can be downloaded as a CSV file. No export is documented for passkeys.
---
