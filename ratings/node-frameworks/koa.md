---
name: Koa
description: Minimal web framework for Node.js from the team behind Express, built around async middleware functions.
website: https://koajs.com
source: https://github.com/koajs/koa
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/koajs/koa/blob/master/LICENSE
    note: MIT-licensed.
  no_trackers:
    answer: no
    evidence: https://koajs.com/
    note: The koajs.com website loads Segment analytics.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/koajs
    note: Funded by donations through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
pick: 1
pick_reason: A small, modern core built on async middleware, from the team behind Express. MIT licensed, with no telemetry.
---
