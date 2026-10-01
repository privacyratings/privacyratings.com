---
name: Padloc
description: Open source, end-to-end encrypted password manager from MaKleSoft with desktop, mobile, browser and web apps, a hosted service and a self-hostable server. The code has had no updates in several years.
website: https://padloc.app
source: https://github.com/padloc/padloc
jurisdiction: DE
domain: web.padloc.app
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/padloc/padloc/blob/main/LICENSE
    note: AGPL-3.0 for the apps and server.
  no_trackers:
    answer: no
    evidence: https://padloc.app/privacy/
    note: The privacy policy says third-party analytics are used on the public website, and the service tracks anonymised app usage data.
  no_ads:
    answer: yes
    evidence: https://padloc.app/
    note: Funded by paid plans, and the privacy policy says personal data is not sold.
  independent_audit:
    answer: partial
    evidence: https://padloc.app/assets/audit_reports/radically-open-security_2022.pdf
    note: Radically Open Security audited Padloc 4, and the full report is public but older than three years.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee_vault:
    answer: yes
    evidence: https://docs.padloc.app/docs/security/
    note: Vault data is encrypted on the device with keys derived from the master password, and the server cannot decrypt it.
  self_host_or_local:
    answer: yes
    evidence: https://docs.padloc.app/guides/self-host/
    note: The server can be self-hosted.
  export:
    answer: yes
    evidence: https://docs.padloc.app/manual/settings/
    note: Exports vaults to CSV or an encrypted Padloc container.
---
