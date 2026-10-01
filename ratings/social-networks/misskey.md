---
name: Misskey
description: Federated, self-hostable microblogging platform built on ActivityPub, with emoji reactions, customizable web interface, drive storage and channels.
website: https://misskey-hub.net
source: https://github.com/misskey-dev/misskey
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/misskey-dev/misskey/blob/develop/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/misskey-dev/misskey
    note: No telemetry or analytics by default. Server admins can optionally enable Google Analytics or Sentry for their own server.
  no_ads:
    answer: yes
    evidence: https://misskey-hub.net/en/docs/donate/
    note: The project is funded by donations. Server admins can choose to show their own ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
