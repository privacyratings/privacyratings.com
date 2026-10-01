---
name: Threads
description: Text-based microblogging app from Meta, linked to Instagram accounts, with optional sharing to the fediverse over ActivityPub.
website: https://www.threads.com
family: meta
mainstream: true
jurisdiction: US
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.instagram.barcelona/latest/
    note: The Android app includes Google Analytics and Facebook SDKs, and activity tracking for ads cannot be turned off.
  no_ads:
    answer: no
    evidence: https://privacycenter.instagram.com/policy/
    note: Funded by targeted advertising under the Meta Privacy Policy.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
