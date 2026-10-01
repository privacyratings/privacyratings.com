---
name: FreeScout
description: Self-hosted help desk and shared mailbox written in PHP, with ticketing, customer profiles and optional modules for chat, knowledge base, workflows and more.
website: https://freescout.net
source: https://github.com/freescout-help-desk/freescout
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/freescout-help-desk/freescout/blob/dist/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: no
    evidence: https://freescout.net/legal/privacy/
    note: The freescout.net privacy policy states that Google Analytics sets analytics cookies on the website.
  no_ads:
    answer: yes
    evidence: https://freescout.net/modules/
    note: Free software funded by sales of optional paid modules, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
