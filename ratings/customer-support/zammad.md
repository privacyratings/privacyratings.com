---
name: Zammad
description: Open source help desk and ticketing system that brings email, chat, phone, forms and social media into one web interface. It can be self-hosted, and Zammad GmbH in Germany also offers hosted instances.
website: https://zammad.org
source: https://github.com/zammad/zammad
jurisdiction: DE
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/zammad/zammad/blob/develop/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://zammad.com/en/company/privacy
    note: The websites use self-hosted Matomo analytics without cookies; the software itself has no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://zammad.com/en/company/privacy
    note: Funded by hosting and support plans; the privacy policy says data is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
