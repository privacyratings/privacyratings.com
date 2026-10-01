---
name: Habitica
description: Habit and task tracker that presents habits, dailies and to-dos as a role-playing game, with avatars, rewards and group challenges. Run by HabitRPG, Inc.
website: https://habitica.com
source: https://github.com/HabitRPG/habitica
jurisdiction: US
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/HabitRPG/habitica/blob/develop/LICENSE
    note: GPL-3.0 for the server, web app and mobile apps.
  no_trackers:
    answer: no
    evidence: https://habitica.com/static/privacy
    note: The privacy policy lists Google Analytics and Amplitude, and the Exodus report finds Google Crashlytics in the Android app.
  no_ads:
    answer: no
    evidence: https://habitica.com/static/privacy
    note: Funded by subscriptions and in-app purchases, but the privacy policy says personal information is used for targeted advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
