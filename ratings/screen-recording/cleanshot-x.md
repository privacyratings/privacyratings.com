---
name: CleanShot X
description: Screenshot and screen recording app for macOS with annotation, scrolling capture, text recognition and optional upload to the CleanShot Cloud sharing service.
website: https://cleanshot.com
jurisdiction: PL
platforms:
  - macos
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://cleanshot.com/legal/cloud/subprocessors
    note: The website uses Simple Analytics, a cookieless analytics service, and the subprocessor list names no analytics or ad companies. No statement covers telemetry in the app.
  no_ads:
    answer: yes
    evidence: https://cleanshot.com/pricing
    note: Funded by paid licenses and subscriptions, with no ads.
  independent_audit:
    answer: partial
    evidence: https://cleanshot.com/security
    note: Only the ISO 27001 certificate is public. Third-party penetration tests are stated, but no report is published.
  local_by_default:
    answer: yes
    evidence: https://cleanshot.com/faq
    note: Captures are saved locally. CleanShot Cloud is only used when you choose to upload.
  no_account_needed:
    answer: yes
    evidence: https://cleanshot.com/faq
    note: A CleanShot Cloud account is only needed for uploading, not for using the app.
---
