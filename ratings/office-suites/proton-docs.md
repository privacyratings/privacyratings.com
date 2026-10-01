---
name: Proton Docs
description: End-to-end encrypted document editor built into Proton Drive, with real-time collaboration, comments and suggestions.
website: https://proton.me/drive/docs
family: proton
domain: docs.proton.me
source: https://github.com/ProtonMail/WebClients
jurisdiction: CH
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/ProtonMail/WebClients/blob/main/LICENSE
    note: The web apps, including Docs, are GPL-3.0. The server is not open source.
  no_trackers:
    answer: partial
    evidence: https://proton.me/legal/privacy
    note: Website analytics are self-hosted. The apps include crash reporting and usage statistics, which are on by default and can be turned off.
  no_ads:
    answer: yes
    evidence: https://proton.me/drive/pricing
    note: Funded by paid plans, with no ads on any plan.
  independent_audit:
    answer: partial
    evidence: https://proton.me/blog/soc-2
    note: Proton completed a SOC 2 Type II audit, but the report is not public.
  transparency_report:
    answer: yes
    evidence: https://proton.me/legal/transparency
    note: Publishes yearly counts of legal orders received, complied with and contested.
  user_notice:
    answer: yes
    evidence: https://proton.me/legal/law-enforcement
    note: Targeted users are notified of data requests, with delays only when Swiss law, a court order or a risk to life requires it.
---
