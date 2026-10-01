---
name: Clue
description: Period and cycle tracking app from Berlin-based BioWink, with predictions, symptom logging and health content, and a paid Clue Plus subscription.
website: https://helloclue.com
mainstream: true
jurisdiction: DE
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.clue.android/latest/
    note: The Exodus report finds Adjust and Google Firebase Analytics in the Android app.
  no_ads:
    answer: partial
    evidence: https://helloclue.com/privacy
    note: Funded by subscriptions, and health data is never shared with advertisers, but with consent device IDs and app events are shared through Adjust with ad networks such as Meta and TikTok.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_storage:
    answer: no
    evidence: https://helloclue.com/privacy
    note: Cycle data is stored on Clue's servers in the EU, encrypted at rest but not end-to-end encrypted.
  no_account_needed:
    answer: no
    evidence: https://helloclue.com/terms
    note: The terms state that Clue is now only an online service and requires an account.
---
