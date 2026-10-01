---
name: Proton Pass
description: End-to-end encrypted password manager from Proton with apps for desktop, mobile and browsers, built-in email aliases and a TOTP authenticator. The apps are open source.
website: https://proton.me/pass
family: proton
jurisdiction: CH
source: https://github.com/protonpass/android-pass
domain: proton.me
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/protonpass/android-pass/blob/main/LICENSE
    note: Apps are GPL-3.0. The server is not open source.
  no_trackers:
    answer: partial
    evidence: https://proton.me/support/share-usage-statistics
    note: No third-party analytics, but Proton apps share usage statistics and crash reports by default, and these can be turned off in settings.
  no_ads:
    answer: yes
    evidence: https://proton.me/pass/pricing
    note: Funded by paid plans.
  independent_audit:
    answer: yes
    evidence: https://drive.proton.me/urls/T9BGC6B11W#seHd3zMpGo5j
    note: Full report from Recurity Labs covering the browser extensions, mobile and desktop apps and CLI.
  transparency_report:
    answer: yes
    evidence: https://proton.me/legal/transparency
    note: Publishes yearly counts of legal orders received, contested and complied with.
  user_notice:
    answer: yes
    evidence: https://proton.me/legal/law-enforcement
    note: Users are notified of data requests unless Swiss law or a court order temporarily prohibits it.
  e2ee_vault:
    answer: yes
    evidence: https://proton.me/pass/security
    note: Vault data is end-to-end encrypted on the device before it is synced.
  self_host_or_local:
    answer: partial
    evidence: https://proton.me/support/pass-export
    note: Vaults are stored only in Proton's cloud. Data can be exported.
  export:
    answer: yes
    evidence: https://proton.me/support/pass-export
    note: Exports to JSON in a ZIP file, optionally PGP-encrypted, or to CSV.
imported_from: awesome-privacy
imported_name: ProtonPass
---
