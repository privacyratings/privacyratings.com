---
name: Tasks.org
description: Open source to-do list app descended from Astrid, with subtasks, tags, reminders and location alerts. Syncs with CalDAV, EteSync, DAVx5, Microsoft Exchange, Google Tasks or its own Tasks.org sync service.
website: https://tasks.org
source: https://github.com/tasks/tasks
platforms:
  - android
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/tasks/tasks/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://github.com/tasks/tasks/blob/main/app/src/googleplay/java/org/tasks/analytics/Firebase.kt
    note: The Google Play build enables Firebase Crashlytics and PostHog analytics by default, with an opt-out. The website also loads PostHog. The F-Droid build has no trackers.
  no_ads:
    answer: yes
    evidence: https://tasks.org/docs/subscribe/
    note: Funded by optional subscriptions and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
