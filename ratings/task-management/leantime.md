---
name: Leantime
description: Open source project management system aimed at non-project managers, with tasks, Kanban boards, timesheets, goals and idea boards. Can be self-hosted or used as a paid cloud service.
website: https://leantime.io
source: https://github.com/Leantime/leantime
jurisdiction: US
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Leantime/leantime/blob/master/LICENSE
    note: AGPL-3.0. Some plugins are sold separately.
  no_trackers:
    answer: no
    evidence: https://leantime.io/privacy/
    note: The website uses Google Analytics and Google Tag Manager, and the mobile app sends PostHog usage data unless turned off.
  no_ads:
    answer: yes
    evidence: https://leantime.io/privacy/
    note: Funded by cloud subscriptions and paid plugins. The privacy policy says data is not used for advertising or sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
