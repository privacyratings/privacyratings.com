---
name: Send
description: Self-hosted web app for sharing files with end-to-end encryption through expiring links. A community-maintained fork of Mozilla's discontinued Firefox Send.
website: https://gitlab.com/timvisee/send
source: https://gitlab.com/timvisee/send
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/timvisee/send/-/blob/master/LICENSE
    note: MPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://gitlab.com/timvisee/send/-/blob/master/server/config.js
    note: No analytics in the source code. Sentry error reporting only runs if the operator configures it.
  no_ads:
    answer: yes
    evidence: https://timvisee.com/donate/
    note: Free software funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
