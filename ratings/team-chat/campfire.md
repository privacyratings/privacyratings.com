---
name: Campfire
description: Self-hosted group chat web app from 37signals with rooms, direct messages, file attachments, search and bot integrations, distributed through ONCE.
website: https://once.com/campfire
source: https://github.com/basecamp/once-campfire
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/basecamp/once-campfire/blob/main/MIT-LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/basecamp/once-campfire/blob/main/config/initializers/sentry.rb
    note: No third-party trackers. The once.com website's Plausible analytics are cookieless and aggregate-only, and Sentry error reports are sent only when an administrator sets a DSN.
  no_ads:
    answer: yes
    evidence: https://once.com/campfire
    note: Free software from 37signals with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
