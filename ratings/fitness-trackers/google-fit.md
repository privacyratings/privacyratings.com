---
name: Google Fit
description: Google's activity tracking app for Android, iOS and Wear OS that records steps, workouts and Heart Points in a Google Account. Google has deprecated the Google Fit APIs in favor of Health Connect and closed them to new developers.
website: https://www.google.com/fit/
mainstream: true
jurisdiction: US
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://play.google.com/store/apps/datasafety?id=com.google.android.apps.fitness
    note: Exodus finds no third-party trackers, but the Play data safety listing declares required collection of crash logs, app interactions and device IDs for analytics.
  no_ads:
    answer: yes
    evidence: https://play.google.com/store/apps/datasafety?id=com.google.android.apps.fitness
    note: Free app with no ads. The Play data safety listing declares no sharing with third parties and no data use for advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
