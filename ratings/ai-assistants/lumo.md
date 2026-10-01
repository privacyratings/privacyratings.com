---
name: Lumo
description: AI assistant from Proton that runs open-weight models on Proton's servers, with no logs of chats and zero-access encrypted chat history.
website: https://proton.me/lumo
family: proton
domain: lumo.proton.me
jurisdiction: CH
platforms:
  - web
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/me.proton.android.lumo/latest/
    note: Website analytics are self-hosted, and the Android app includes Sentry crash reporting.
  no_ads:
    answer: yes
    evidence: https://proton.me/lumo/pricing
    note: Funded by paid plans, with no ads.
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
  no_training:
    answer: yes
    evidence: https://proton.me/support/lumo-privacy
    note: Chats are not used to train models, except anonymized feedback that users choose to share for one model.
  runs_locally:
    answer: no
    note: Hosted only.
  chat_retention:
    answer: yes
    evidence: https://proton.me/support/lumo-privacy
    note: Chats are erased from servers after each response. Saved history is zero-access encrypted and only readable by the user.
  no_account_needed:
    answer: partial
    evidence: https://proton.me/lumo
    note: Guest access works without an account, with usage limits.
---
