---
name: Muun
description: Self-custodial Bitcoin and Lightning wallet for Android and iOS that uses a 2-of-2 multisig setup with Muun's server and submarine swaps for Lightning payments.
website: https://muun.com
source: https://github.com/muun/apollo
jurisdiction: KY
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/muun/apollo/blob/master/LICENSE
    note: The Android and iOS apps are MIT, but the co-signing server is closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/io.muun.apollo/latest/
    note: Exodus finds Crashlytics, Firebase Analytics and OpenTelemetry in the Android app, and the website loads Google Analytics.
  no_ads:
    answer: yes
    evidence: https://muun.com/privacy_policy.html
    note: Free app with no ads. The privacy policy says service providers may not use personal information for other purposes.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
