---
name: listmonk
description: Self-hosted newsletter and mailing list manager distributed as a single binary with a PostgreSQL database, with a web dashboard, templates, subscriber lists and transactional email API.
website: https://listmonk.app
source: https://github.com/knadh/listmonk
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/knadh/listmonk/blob/master/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/knadh/listmonk/blob/master/schema.sql
    note: No telemetry or analytics in the source code, and individual subscriber tracking is off by default.
  no_ads:
    answer: yes
    evidence: https://listmonk.app/
    note: Free open source software with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---

listmonk has built-in support for [Forward Email](https://forwardemail.net) bounce webhooks ([source](https://github.com/knadh/listmonk/blob/master/cmd/bounce.go)), and Forward Email supports sending newsletters and mailing lists over SMTP, so the two work together for a self-hosted newsletter setup.
