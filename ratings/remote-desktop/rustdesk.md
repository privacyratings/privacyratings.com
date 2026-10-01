---
name: RustDesk
description: Open-source remote desktop software that works with RustDesk's public relay servers or a self-hosted server, with a paid Pro server edition for teams.
website: https://rustdesk.com
source: https://github.com/rustdesk/rustdesk
jurisdiction: SG
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/rustdesk/rustdesk/blob/master/LICENCE
    note: AGPL-3.0 for the client and the self-hosted server; only the optional Pro server is closed source.
  no_trackers:
    answer: no
    evidence: https://rustdesk.com/privacy/
    note: The website uses Google Analytics.
  no_ads:
    answer: yes
    evidence: https://rustdesk.com/pricing/
    note: Funded by paid Pro server licenses, and the privacy policy states personal data is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
