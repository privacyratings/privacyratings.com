---
name: Proton Drive
description: End-to-end encrypted cloud storage from Swiss company Proton, with open-source apps for web, desktop and mobile.
website: https://proton.me/drive
family: proton
domain: drive.proton.me
jurisdiction: CH
platforms:
  - web
  - windows
  - macos
  - android
  - ios
source: https://github.com/ProtonMail/WebClients
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/ProtonMail/WebClients/blob/main/LICENSE
    note: Apps are open source under GPL-3.0. The server is not.
  no_trackers:
    answer: partial
    evidence: https://proton.me/legal/privacy
    note: Website analytics are self-hosted. The apps include crash reporting, such as Sentry in the Android app, which is on by default and can be turned off.
  no_ads:
    answer: yes
    evidence: https://proton.me/drive/pricing
    note: Funded by paid plans, with no ads on any plan.
  independent_audit:
    answer: partial
    evidence: https://proton.me/drive/security
    note: Securitum audited the Proton Drive apps and Proton links the report, but its date could not be confirmed. Proton's SOC 2 Type II report is not public.
  transparency_report:
    answer: yes
    evidence: https://proton.me/legal/transparency
    note: Publishes yearly counts of legal orders received, complied with and contested.
  user_notice:
    answer: yes
    evidence: https://proton.me/legal/law-enforcement
    note: Targeted users are notified of data requests, with delays only when Swiss law, a court order or a risk to life requires it.
---
