---
name: Element Call
description: Open source group video calling app built on Matrix and LiveKit, usable standalone in the browser at call.element.io or inside Matrix apps such as Element X. It can be self-hosted.
website: https://call.element.io
source: https://github.com/element-hq/element-call
jurisdiction: GB
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/element-hq/element-call/blob/main/LICENSE-AGPL-3.0
    note: AGPL-3.0, with a commercial license option.
  no_trackers:
    answer: partial
    evidence: https://call.element.io/config.json
    note: call.element.io sends Sentry error reports to Element's own server by default; PostHog usage analytics are opt-in.
  no_ads:
    answer: yes
    evidence: https://element.io/pricing
    note: Funded by Element's paid hosting and enterprise plans, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee:
    answer: yes
    evidence: https://github.com/element-hq/element-call/blob/main/README.md
    note: Calls, including group calls, are end-to-end encrypted with MatrixRTC.
  no_account_needed:
    answer: yes
    evidence: https://github.com/element-hq/element-call/blob/main/docs/self_hosting.md
    note: Unregistered users can join a standalone call from a link by entering a name; a temporary account is created automatically.
  self_hostable:
    answer: yes
    evidence: https://github.com/element-hq/element-call/blob/main/docs/self_hosting.md
    note: Official self-hosting guide with a Matrix homeserver and LiveKit.
---
