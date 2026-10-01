---
name: Loom
description: Video messaging service from Atlassian for recording the screen and camera and sharing the result as a link. Recordings are uploaded to and hosted on Loom's servers.
website: https://www.loom.com
mainstream: true
jurisdiction: US
platforms:
  - windows
  - macos
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.loom.android/latest/
    note: Exodus finds HMS Core analytics, OneSignal, Segment and Sentry in the Android app, and the website loads Google Tag Manager and connects to Google Analytics and Amplitude.
  no_ads:
    answer: partial
    evidence: https://www.atlassian.com/legal/privacy-policy
    note: Funded by subscriptions with no ads in the product, but the policy allows cookies and identifiers from advertising partners.
  independent_audit:
    answer: partial
    evidence: https://support.atlassian.com/loom/docs/download-the-loom-soc-2-report/
    note: Loom has SOC 2 audits, but the report is only available on request through the Atlassian Trust portal.
  local_by_default:
    answer: no
    evidence: https://support.atlassian.com/loom/docs/how-secure-are-my-videos/
    note: Videos are uploaded to Loom's servers while recording.
  no_account_needed:
    answer: no
    evidence: https://www.loom.com/pricing
    note: A Loom account is required to record and share videos.
---
